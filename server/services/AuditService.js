/**
 * HIPAA Audit Log Recording Service
 */

const { getStorage } = require('../database/storage');
const AuditLog = require('../models/AuditLog');

function logAudit(entry) {
  try {
    const store = getStorage();
    const log = new AuditLog(entry);
    store.insert('auditLogs', log.toJSON());
  } catch (err) {
    console.error('[AuditService Error]', err.message);
  }
}

class AuditService {
  static getLogs(query = {}) {
    const store = getStorage();
    const { action, userId, severity, limit = 100 } = query;

    return store.query('auditLogs', l => {
      if (action && !l.action.includes(action)) return false;
      if (userId && l.userId !== userId) return false;
      if (severity && l.severity !== severity) return false;
      return true;
    }, { sortBy: 'timestamp', sortOrder: 'desc', limit: parseInt(limit, 10) });
  }
}

module.exports = { AuditService, logAudit };
