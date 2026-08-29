/**
 * Telehealth Virtual Room Controller
 */

const TelehealthService = require('../services/TelehealthService');

class TelehealthController {
  static async list(req, res) {
    try {
      const sessions = TelehealthService.getActiveSessions();
      res.json({ success: true, data: sessions });
    } catch (err) {
      res.error(err.message, 500);
    }
  }

  static async create(req, res) {
    try {
      const session = TelehealthService.createRoom(req.body, req.user);
      res.json({ success: true, data: session }, 201);
    } catch (err) {
      res.error(err.message, 400);
    }
  }

  static async join(req, res, roomCode) {
    try {
      const session = TelehealthService.joinRoom(roomCode, req.user);
      res.json({ success: true, data: session });
    } catch (err) {
      res.error(err.message, 404);
    }
  }

  static async chat(req, res, roomCode) {
    try {
      const { text } = req.body;
      const sender = req.user ? (req.user.fullName || req.user.username) : 'Participant';
      const msg = TelehealthService.sendChatMessage(roomCode, sender, text);
      res.json({ success: true, data: msg });
    } catch (err) {
      res.error(err.message, 400);
    }
  }

  static async end(req, res, roomCode) {
    try {
      const { clinicalNotes } = req.body;
      const session = TelehealthService.endSession(roomCode, clinicalNotes);
      res.json({ success: true, data: session });
    } catch (err) {
      res.error(err.message, 400);
    }
  }
}

module.exports = TelehealthController;
