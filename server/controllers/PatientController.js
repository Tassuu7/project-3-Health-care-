/**
 * Patient Management Controller
 */

const PatientService = require('../services/PatientService');

class PatientController {
  static async list(req, res) {
    try {
      const patients = PatientService.getPatients(req.query);
      res.json({ success: true, count: patients.length, data: patients });
    } catch (err) {
      res.error(err.message, 500);
    }
  }

  static async getById(req, res, id) {
    try {
      const patient = PatientService.getPatientById(id);
      if (!patient) return res.error('Patient not found', 404);
      res.json({ success: true, data: patient });
    } catch (err) {
      res.error(err.message, 500);
    }
  }

  static async create(req, res) {
    try {
      const created = PatientService.createPatient(req.body, req.user);
      res.json({ success: true, data: created }, 201);
    } catch (err) {
      res.error(err.message, 400);
    }
  }

  static async update(req, res, id) {
    try {
      const updated = PatientService.updatePatient(id, req.body, req.user);
      res.json({ success: true, data: updated });
    } catch (err) {
      res.error(err.message, 400);
    }
  }

  static async addVitals(req, res, id) {
    try {
      const vitals = PatientService.addVitals(id, req.body, req.user);
      res.json({ success: true, data: vitals }, 201);
    } catch (err) {
      res.error(err.message, 400);
    }
  }
}

module.exports = PatientController;
