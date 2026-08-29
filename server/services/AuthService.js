/**
 * Authentication and Session Management Service
 */

const { getStorage } = require('../database/storage');
const { verifyPassword, generateToken } = require('../utils/cryptoUtils');
const { logAudit } = require('./AuditService');

class AuthService {
  static login(username, password) {
    const store = getStorage();
    const user = store.find('users', u => u.username.toLowerCase() === (username || '').toLowerCase());

    if (!user) {
      logAudit({
        action: 'AUTH_FAILED_USER_NOT_FOUND',
        userId: 'anonymous',
        details: `Login failed: user '${username}' not found.`,
        severity: 'WARNING'
      });
      return { success: false, message: 'Invalid username or password.' };
    }

    if (user.lockedUntil && new Date(user.lockedUntil) > new Date()) {
      return { success: false, message: 'Account is temporarily locked due to multiple failed login attempts. Please try again later.' };
    }

    const isValid = verifyPassword(password, user.passwordHash);
    if (!isValid) {
      const attempts = (user.failedAttempts || 0) + 1;
      const updates = { failedAttempts: attempts };
      if (attempts >= 5) {
        updates.lockedUntil = new Date(Date.now() + 15 * 60 * 1000).toISOString();
      }
      store.update('users', user.id, updates);

      logAudit({
        action: 'AUTH_FAILED_INVALID_PASSWORD',
        userId: user.id,
        details: `Failed password attempt (${attempts}/5)`,
        severity: 'WARNING'
      });
      return { success: false, message: 'Invalid username or password.' };
    }

    // Reset failed attempts on successful login
    store.update('users', user.id, { failedAttempts: 0, lockedUntil: null, lastLogin: new Date().toISOString() });

    const payload = {
      id: user.id,
      username: user.username,
      fullName: user.fullName,
      role: user.role,
      department: user.department,
      specialty: user.specialty
    };

    const token = generateToken(payload, 24);

    logAudit({
      action: 'USER_LOGIN_SUCCESS',
      userId: user.id,
      userRole: user.role,
      details: `User ${user.username} logged in successfully.`
    });

    return {
      success: true,
      token,
      user: {
        id: user.id,
        username: user.username,
        fullName: user.fullName,
        role: user.role,
        department: user.department,
        specialty: user.specialty,
        licenseNumber: user.licenseNumber
      }
    };
  }

  static getCurrentUser(userId) {
    const store = getStorage();
    const user = store.get('users', userId);
    if (!user) return null;
    const safeUser = { ...user };
    delete safeUser.passwordHash;
    return safeUser;
  }
}

module.exports = AuthService;
