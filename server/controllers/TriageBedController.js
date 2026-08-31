/**
 * Emergency Triage and Hospital Bed Allocation Controller
 */

const TriageBedService = require('../services/TriageBedService');

class TriageBedController {
  static async getQueue(req, res) {
    try {
      const queue = TriageBedService.getTriageQueue();
      res.json({ success: true, count: queue.length, data: queue });
    } catch (err) {
      res.error(err.message, 500);
    }
  }

  static async getBeds(req, res) {
    try {
      const beds = TriageBedService.getBeds();
      res.json({ success: true, count: beds.length, data: beds });
    } catch (err) {
      res.error(err.message, 500);
    }
  }

  static async createTriage(req, res) {
    try {
      const assessment = TriageBedService.createTriageAssessment(req.body, req.user);
      res.json({ success: true, data: assessment }, 201);
    } catch (err) {
      res.error(err.message, 400);
    }
  }

  static async allocateBed(req, res, bedId) {
    try {
      const { patientId, physicianName } = req.body;
      const updated = TriageBedService.allocateBed(bedId, patientId, physicianName);
      res.json({ success: true, data: updated });
    } catch (err) {
      res.error(err.message, 400);
    }
  }
}

module.exports = TriageBedController;
