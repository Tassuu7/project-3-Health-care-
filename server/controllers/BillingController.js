/**
 * Billing and Insurance Claims Controller
 */

const BillingService = require('../services/BillingService');

class BillingController {
  static async list(req, res) {
    try {
      const claims = BillingService.getClaims(req.query);
      res.json({ success: true, count: claims.length, data: claims });
    } catch (err) {
      res.error(err.message, 500);
    }
  }

  static async create(req, res) {
    try {
      const created = BillingService.createClaim(req.body, req.user);
      res.json({ success: true, data: created }, 201);
    } catch (err) {
      res.error(err.message, 400);
    }
  }

  static async adjudicate(req, res, id) {
    try {
      const { reimbursementAmount, status } = req.body;
      const updated = BillingService.adjudicateClaim(id, reimbursementAmount, status);
      res.json({ success: true, data: updated });
    } catch (err) {
      res.error(err.message, 400);
    }
  }
}

module.exports = BillingController;
