/**
 * Prescription Controller
 */

const PrescriptionService = require('../services/PrescriptionService');

class PrescriptionController {
  static async list(req, res) {
    try {
      const rxs = PrescriptionService.getPrescriptions(req.query);
      res.json({ success: true, count: rxs.length, data: rxs });
    } catch (err) {
      res.error(err.message, 500);
    }
  }

  static async create(req, res) {
    try {
      const created = PrescriptionService.createPrescription(req.body, req.user);
      res.json({ success: true, data: created }, 201);
    } catch (err) {
      res.error(err.message, 400);
    }
  }

  static async dispense(req, res, id) {
    try {
      const dispensed = PrescriptionService.dispense(id, req.user);
      res.json({ success: true, data: dispensed });
    } catch (err) {
      res.error(err.message, 400);
    }
  }
}

module.exports = PrescriptionController;
