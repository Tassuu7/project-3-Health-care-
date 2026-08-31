/**
 * PulseCare Enterprise Health & Clinical Intelligence System
 * Core HTTP Application Server & Middleware Dispatcher
 * 
 * Compliant with healthcare interoperability standards, role-based access control,
 * real-time clinical alerting, and audit logging.
 */

const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

// Load configurations
const config = require('./server/config');
const routes = require('./server/routes');
const { initializeDatabase } = require('./server/database/storage');
const { logAudit } = require('./server/services/AuditService');

// MIME types for static asset resolution
const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.mjs': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.pdf': 'application/pdf',
  '.csv': 'text/csv; charset=utf-8'
};

/**
 * Parses JSON and Form payload bodies asynchronously.
 */
function parseRequestBody(req) {
  return new Promise((resolve) => {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
      // Safeguard against very large payloads (10MB limit)
      if (body.length > 10 * 1024 * 1024) {
        req.destroy();
      }
    });

    req.on('end', () => {
      if (!body) {
        return resolve({});
      }
      try {
        const parsed = JSON.parse(body);
        resolve(parsed);
      } catch (err) {
        // Fallback for form-encoded or raw strings
        const params = new URLSearchParams(body);
        const result = {};
        for (const [key, value] of params.entries()) {
          result[key] = value;
        }
        resolve(result);
      }
    });
  });
}

/**
 * Handles static asset streaming from /public directory.
 */
function serveStaticFile(req, res, pathname) {
  let relativePath = pathname === '/' ? 'index.html' : pathname;
  if (relativePath.startsWith('/')) {
    relativePath = relativePath.substring(1);
  }

  // Prevent path traversal
  const safePath = path.normalize(relativePath).replace(/^(\.\.[\/\\])+/, '');
  const publicDir = path.join(__dirname, 'public');
  const filePath = path.join(publicDir, safePath);

  // Verify file stays within public directory
  if (!filePath.startsWith(publicDir)) {
    res.writeHead(403, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Access Denied: Path Traversal Prohibited' }));
    return;
  }

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      // Fallback for SPA routing: serve index.html for non-API web routes
      if (!pathname.startsWith('/api') && !pathname.includes('.')) {
        const indexPath = path.join(publicDir, 'index.html');
        fs.readFile(indexPath, (indexErr, indexData) => {
          if (indexErr) {
            res.writeHead(404, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: 'Resource Not Found' }));
            return;
          }
          res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
          res.end(indexData);
        });
        return;
      }

      res.writeHead(404, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: `Static resource not found: ${pathname}` }));
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    res.writeHead(200, {
      'Content-Type': contentType,
      'Content-Length': stats.size,
      'Cache-Control': 'no-cache, no-store, must-revalidate, max-age=0',
      'Pragma': 'no-cache',
      'Expires': '0',
      'X-Content-Type-Options': 'nosniff',
      'X-Frame-Options': 'DENY'
    });

    const stream = fs.createReadStream(filePath);
    stream.pipe(res);
  });
}

/**
 * Main HTTP request router and middleware dispatcher.
 */
async function handleRequest(req, res) {
  const parsedUrl = url.parse(req.url, true);
  const pathname = parsedUrl.pathname;
  const method = req.method.toUpperCase();

  // Attach standard CORS and Security Headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Requested-With, X-Session-Id');
  res.setHeader('X-Powered-By', 'PulseCare-Clinical-Engine');
  res.setHeader('Strict-Transport-Security', 'max-age=31536000; includeSubDomains');

  // Handle CORS preflight options check
  if (method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  // Parse request body for state-mutating requests
  if (['POST', 'PUT', 'PATCH', 'DELETE'].includes(method)) {
    req.body = await parseRequestBody(req);
  } else {
    req.body = {};
  }

  req.query = parsedUrl.query || {};
  req.pathname = pathname;

  // Add JSON helper response method
  res.json = (data, statusCode = 200) => {
    if (res.writableEnded) return;
    res.writeHead(statusCode, { 'Content-Type': 'application/json; charset=utf-8' });
    res.end(JSON.stringify(data, null, 2));
  };

  res.error = (message, statusCode = 500, details = null) => {
    if (res.writableEnded) return;
    res.writeHead(statusCode, { 'Content-Type': 'application/json; charset=utf-8' });
    res.end(JSON.stringify({
      success: false,
      error: message,
      code: statusCode,
      timestamp: new Date().toISOString(),
      details: details
    }, null, 2));
  };

  // API Route Handler
  if (pathname.startsWith('/api')) {
    try {
      await routes.dispatch(req, res);
      if (!res.writableEnded) {
        res.error(`Endpoint not found: [${method}] ${pathname}`, 404);
      }
    } catch (routeErr) {
      console.error(`[API Route Exception] ${method} ${pathname}:`, routeErr);
      logAudit({
        action: 'API_ERROR_500',
        userId: req.user ? req.user.id : 'anonymous',
        resource: pathname,
        details: routeErr.message
      });
      if (!res.writableEnded) {
        res.error('Internal Clinical Server Error', 500, routeErr.message);
      }
    }
    return;
  }

  // Static Assets & Web Portal UI
  serveStaticFile(req, res, pathname);
}

// Server Initialization
function startServer() {
  // Ensure database store and indexes are initialized
  initializeDatabase();

  const server = http.createServer(handleRequest);
  const PORT = config.port || 3000;
  const HOST = config.host || '0.0.0.0';

  server.listen(PORT, HOST, () => {
    console.log('================================================================');
    console.log(' PULSECARE ENTERPRISE CLINICAL HEALTH PLATFORM');
    console.log('================================================================');
    console.log(` Server active at: http://localhost:${PORT}`);
    console.log(` Environment    : ${config.env || 'development'}`);
    console.log(` Clinical EHR   : http://localhost:${PORT}/#ehr`);
    console.log(` Telehealth Room: http://localhost:${PORT}/#telehealth`);
    console.log(` Lab & Pathology: http://localhost:${PORT}/#labs`);
    console.log(` Medical Billing: http://localhost:${PORT}/#billing`);
    console.log(` Health Status  : http://localhost:${PORT}/api/health`);
    console.log('================================================================');
  });

  // Graceful shutdown handling
  const shutdown = () => {
    console.log('\n[PulseCare] Gracefully terminating clinical server processes...');
    server.close(() => {
      console.log('[PulseCare] Server closed successfully.');
      process.exit(0);
    });
  };

  process.on('SIGINT', shutdown);
  process.on('SIGTERM', shutdown);

  return server;
}

// If executed directly, boot server
if (require.main === module) {
  startServer();
}

module.exports = { startServer, handleRequest };
