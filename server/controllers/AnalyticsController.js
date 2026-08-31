/**
 * Analytics and Hospital KPI Controller
 */

const AnalyticsService = require('../services/AnalyticsService');

class AnalyticsController {
  static async getDashboard(req, res) {
    try {
      const data = AnalyticsService.getDashboardMetrics();
      res.json({ success: true, data });
    } catch (err) {
      res.error(err.message, 500);
    }
  }
}

module.exports = AnalyticsController;
