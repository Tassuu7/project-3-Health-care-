/**
 * Telehealth Consultation Signaling and Virtual Exam Room Service
 */

const { getStorage } = require('../database/storage');
const TelehealthSession = require('../models/TelehealthSession');
const { logAudit } = require('./AuditService');

class TelehealthService {
  static getActiveSessions() {
    const store = getStorage();
    return store.query('telehealthSessions', s => s.status !== 'ENDED');
  }

  static createRoom(data, user) {
    const store = getStorage();
    const session = new TelehealthSession({
      ...data,
      providerId: user.id,
      providerName: user.fullName || user.username,
      startedAt: new Date().toISOString(),
      status: 'WAITING'
    });

    const created = store.insert('telehealthSessions', session.toJSON());
    logAudit({
      action: 'TELEHEALTH_ROOM_CREATED',
      userId: user.id,
      resource: `/telehealth/${created.id}`,
      details: `Created virtual consultation room code ${created.roomCode}`
    });

    return created;
  }

  static joinRoom(roomCode, participant) {
    const store = getStorage();
    const session = store.find('telehealthSessions', s => s.roomCode === roomCode);
    if (!session) throw new Error('Telehealth room not found');

    const updated = store.update('telehealthSessions', session.id, {
      status: 'CONNECTED'
    });

    return updated;
  }

  static sendChatMessage(roomCode, senderName, text) {
    const store = getStorage();
    const session = store.find('telehealthSessions', s => s.roomCode === roomCode);
    if (!session) throw new Error('Session not found');

    const log = session.chatLog || [];
    const msg = {
      sender: senderName,
      text,
      timestamp: new Date().toISOString()
    };
    log.push(msg);

    store.update('telehealthSessions', session.id, { chatLog: log });
    return msg;
  }

  static endSession(roomCode, clinicalNotes) {
    const store = getStorage();
    const session = store.find('telehealthSessions', s => s.roomCode === roomCode);
    if (!session) throw new Error('Session not found');

    const started = new Date(session.startedAt || Date.now());
    const ended = new Date();
    const durationMinutes = Math.round((ended - started) / 60000);

    return store.update('telehealthSessions', session.id, {
      status: 'ENDED',
      endedAt: ended.toISOString(),
      durationMinutes,
      clinicalNotes: clinicalNotes || session.clinicalNotes
    });
  }
}

module.exports = TelehealthService;
