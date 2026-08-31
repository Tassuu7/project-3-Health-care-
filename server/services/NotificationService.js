/**
 * System In-App and Clinical Alert Notification Service
 */

const { getStorage } = require('../database/storage');
const Notification = require('../models/Notification');

class NotificationService {
  static getNotifications(recipientId) {
    const store = getStorage();
    return store.query('notifications', n => !recipientId || n.recipientId === recipientId, {
      sortBy: 'timestamp',
      sortOrder: 'desc'
    });
  }

  static createNotification(data) {
    const store = getStorage();
    const notification = new Notification(data);
    return store.insert('notifications', notification.toJSON());
  }
}

module.exports = NotificationService;
