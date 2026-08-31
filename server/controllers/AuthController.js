/**
 * Authentication Controller
 */

const AuthService = require('../services/AuthService');

class AuthController {
  static async login(req, res) {
    const { username, password } = req.body;
    if (!username || !password) {
      return res.error('Username and password are required', 400);
    }
    const result = AuthService.login(username, password);
    if (!result.success) {
      return res.error(result.message, 401);
    }
    res.json(result);
  }

  static async getMe(req, res) {
    if (!req.user) {
      return res.error('Unauthorized', 401);
    }
    const user = AuthService.getCurrentUser(req.user.id);
    res.json({ success: true, user });
  }
}

module.exports = AuthController;
