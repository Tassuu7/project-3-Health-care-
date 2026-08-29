/**
 * Telehealth Virtual Room & Video Session Model
 */

const BaseModel = require('./BaseModel');

class TelehealthSession extends BaseModel {
  constructor(data = {}) {
    super(data);
    this.roomCode = data.roomCode || `ROOM-${Math.random().toString(36).substring(2, 8).toUpperCase()}`;
    this.appointmentId = data.appointmentId || null;
    this.patientId = data.patientId || null;
    this.patientName = data.patientName || '';
    this.providerId = data.providerId || null;
    this.providerName = data.providerName || '';
    this.status = data.status || 'WAITING'; // WAITING, CONNECTED, ENDED
    this.startedAt = data.startedAt || null;
    this.endedAt = data.endedAt || null;
    this.durationMinutes = data.durationMinutes || 0;
    this.clinicalNotes = data.clinicalNotes || '';
    this.chatLog = data.chatLog || [];
  }
}

module.exports = TelehealthSession;
