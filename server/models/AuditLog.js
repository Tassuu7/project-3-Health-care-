/**
 * HIPAA Compliance Audit Record Entity Model
 */

const BaseModel = require('./BaseModel');

class AuditLog extends BaseModel {
  constructor(data = {}) {
    super(data);
    this.action = data.action || 'UNKNOWN_ACTION';
    this.userId = data.userId || 'anonymous';
    this.userRole = data.userRole || 'PUBLIC';
    this.resource = data.resource || '';
    this.statusCode = data.statusCode || 200;
    this.ipAddress = data.ipAddress || '127.0.0.1';
    this.details = data.details || '';
    this.severity = data.severity || 'INFO';
    this.timestamp = data.timestamp || new Date().toISOString();
  }
}

module.exports = AuditLog;
