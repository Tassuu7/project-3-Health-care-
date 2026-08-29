/**
 * Pharmacy Controller
 */

const PharmacyService = require('../services/PharmacyService');

class PharmacyController {
  static async list(req, res) {
    try {
      const items = PharmacyService.getInventory(req.query);
      res.json({ success: true, count: items.length, data: items });
    } catch (err) {
      res.error(err.message, 500);
    }
  }

  static async updateStock(req, res, id) {
    try {
      const { delta } = req.body;
      const updated = PharmacyService.updateStock(id, delta);
      res.json({ success: true, data: updated });
    } catch (err) {
      res.error(err.message, 400);
    }
  }
}

module.exports = PharmacyController;
