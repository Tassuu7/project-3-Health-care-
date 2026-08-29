/**
 * Notification Entity Model
 */

const BaseModel = require('./BaseModel');

class Notification extends BaseModel {
  constructor(data = {}) {
    super(data);
    this.recipientId = data.recipientId || null;
    this.title = data.title || '';
    this.message = data.message || '';
    this.category = data.category || 'CLINICAL_ALERT';
    this.isRead = data.isRead || false;
    this.linkUrl = data.linkUrl || '';
    this.timestamp = data.timestamp || new Date().toISOString();
  }
}

module.exports = Notification;
