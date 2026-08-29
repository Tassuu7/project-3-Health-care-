/**
 * HIPAA Compliance & Security Audit Logger Middleware
 */

const { logAudit } = require('../services/AuditService');

function auditRequest(req, res) {
  const user = req.user || { id: 'anonymous', role: 'PUBLIC' };
  const startTime = Date.now();

  const originalEnd = res.end;
  res.end = function(...args) {
    const durationMs = Date.now() - startTime;
    const statusCode = res.statusCode;

    // Log state-mutating requests and clinical data access
    if (req.method !== 'GET' || req.pathname.includes('/patients/') || req.pathname.includes('/prescriptions')) {
      logAudit({
        action: `${req.method}_${req.pathname}`,
        method: req.method,
        path: req.pathname,
        statusCode,
        durationMs,
        userId: user.id,
        userRole: user.role,
        ipAddress: req.socket.remoteAddress,
        timestamp: new Date().toISOString()
      });
    }

    return originalEnd.apply(this, args);
  };
}

module.exports = { auditRequest };
