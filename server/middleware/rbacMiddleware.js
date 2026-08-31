/**
 * Role-Based Access Control Middleware
 * Enforces permission requirements per endpoint.
 */

const { hasPermission } = require('../config/roles');
const { logAudit } = require('../services/AuditService');

function requirePermission(requiredPermission) {
  return function(req, res) {
    const user = req.user;
    if (!user) {
      res.error('Unauthorized: User identity not established', 401);
      return false;
    }

    const allowed = hasPermission(user.role, requiredPermission);
    if (!allowed) {
      logAudit({
        action: 'RBAC_ACCESS_DENIED',
        userId: user.id,
        userRole: user.role,
        resource: req.pathname,
        permission: requiredPermission,
        severity: 'WARNING'
      });

      res.error(`Forbidden: Insufficient privileges. Requires '${requiredPermission}'`, 403, {
        userRole: user.role,
        requiredPermission
      });
      return false;
    }

    return true;
  };
}

module.exports = { requirePermission };
