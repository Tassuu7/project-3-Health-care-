/**
 * Global Error Handler & Response Normalizer
 */

function handleError(err, req, res) {
  console.error(`[Error Handler] ${req.method} ${req.url}:`, err);
  const status = err.statusCode || err.status || 500;
  res.error(err.message || 'An unexpected clinical engine error occurred', status, {
    stack: process.env.NODE_ENV === 'development' ? err.stack : undefined,
    code: err.code || 'INTERNAL_ERROR'
  });
}

module.exports = { handleError };
