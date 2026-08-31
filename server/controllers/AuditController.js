/**
 * HIPAA Audit Log Controller
 */

const { AuditService } = require('../services/AuditService');

class AuditController {
  static async list(req, res) {
    try {
      const logs = AuditService.getLogs(req.query);
      res.json({ success: true, count: logs.length, data: logs });
    } catch (err) {
      res.error(err.message, 500);
    }
  }
}

module.exports = AuditController;
