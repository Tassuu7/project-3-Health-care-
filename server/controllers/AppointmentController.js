/**
 * Appointments Controller
 */

const AppointmentService = require('../services/AppointmentService');

class AppointmentController {
  static async list(req, res) {
    try {
      const apts = AppointmentService.getAppointments(req.query);
      res.json({ success: true, count: apts.length, data: apts });
    } catch (err) {
      res.error(err.message, 500);
    }
  }

  static async create(req, res) {
    try {
      const created = AppointmentService.schedule(req.body, req.user);
      res.json({ success: true, data: created }, 201);
    } catch (err) {
      res.error(err.message, 400);
    }
  }

  static async updateStatus(req, res, id) {
    try {
      const { status } = req.body;
      const updated = AppointmentService.updateStatus(id, status, req.user);
      res.json({ success: true, data: updated });
    } catch (err) {
      res.error(err.message, 400);
    }
  }
}

module.exports = AppointmentController;
