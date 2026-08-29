/**
 * Clinical Decision Support Controller
 */

const { ClinicalDecisionSupportService } = require('../services/ClinicalDecisionSupportService');

class CDSController {
  static async evaluate(req, res, patientId) {
    try {
      const result = ClinicalDecisionSupportService.evaluatePatient(patientId);
      res.json({ success: true, data: result });
    } catch (err) {
      res.error(err.message, 500);
    }
  }
}

module.exports = CDSController;
