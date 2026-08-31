/**
 * Clinical Encounter Controller
 */

const EncounterService = require('../services/EncounterService');

class EncounterController {
  static async list(req, res) {
    try {
      const encounters = EncounterService.getEncounters(req.query);
      res.json({ success: true, count: encounters.length, data: encounters });
    } catch (err) {
      res.error(err.message, 500);
    }
  }

  static async getById(req, res, id) {
    try {
      const encounter = EncounterService.getEncounterById(id);
      if (!encounter) return res.error('Encounter not found', 404);
      res.json({ success: true, data: encounter });
    } catch (err) {
      res.error(err.message, 500);
    }
  }

  static async create(req, res) {
    try {
      const created = EncounterService.createEncounter(req.body, req.user);
      res.json({ success: true, data: created }, 201);
    } catch (err) {
      res.error(err.message, 400);
    }
  }

  static async updateSOAP(req, res, id) {
    try {
      const updated = EncounterService.updateSOAPNote(id, req.body, req.user);
      res.json({ success: true, data: updated });
    } catch (err) {
      res.error(err.message, 400);
    }
  }

  static async sign(req, res, id) {
    try {
      const finalized = EncounterService.signAndFinalize(id, req.user);
      res.json({ success: true, data: finalized });
    } catch (err) {
      res.error(err.message, 400);
    }
  }
}

module.exports = EncounterController;
