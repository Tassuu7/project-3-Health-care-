/**
 * Laboratory Orders and Results Controller
 */

const LabService = require('../services/LabService');

class LabController {
  static async list(req, res) {
    try {
      const labs = LabService.getLabOrders(req.query);
      res.json({ success: true, count: labs.length, data: labs });
    } catch (err) {
      res.error(err.message, 500);
    }
  }

  static async create(req, res) {
    try {
      const created = LabService.createLabOrder(req.body, req.user);
      res.json({ success: true, data: created }, 201);
    } catch (err) {
      res.error(err.message, 400);
    }
  }

  static async enterResults(req, res, id) {
    try {
      const { results, pathologistNotes } = req.body;
      const updated = LabService.enterResults(id, results, pathologistNotes, req.user);
      res.json({ success: true, data: updated });
    } catch (err) {
      res.error(err.message, 400);
    }
  }
}

module.exports = LabController;
