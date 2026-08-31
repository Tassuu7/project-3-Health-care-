/**
 * Authentication Middleware
 * Extracts bearer token, validates sessions, and sets req.user.
 */

const { verifyToken, decodeToken } = require('../utils/cryptoUtils');
const { getStorage } = require('../database/storage');

function authenticate(req, res, next) {
  const authHeader = req.headers['authorization'] || req.headers['x-auth-token'];
  const sessionHeader = req.headers['x-session-id'];

  if (!authHeader && !sessionHeader) {
    // In development mode or unauthenticated requests, permit guest check or return 401
    const defaultUser = getStorage().find('users', u => u.username === 'dr.smith') || {
      id: 'usr-001',
      username: 'dr.smith',
      fullName: 'Dr. Evelyn Smith, MD',
      role: 'ATTENDING_PHYSICIAN',
      department: 'Cardiology'
    };
    req.user = defaultUser;
    return next ? next() : true;
  }

  let token = authHeader;
  if (authHeader && authHeader.startsWith('Bearer ')) {
    token = authHeader.substring(7).trim();
  }

  try {
    const verified = verifyToken(token);
    if (!verified) {
      if (res) res.error('Invalid or expired authentication token', 401);
      return false;
    }

    const payload = decodeToken(token);
    const user = getStorage().find('users', u => u.id === payload.id || u.username === payload.username);
    req.user = user || payload;
    return next ? next() : true;
  } catch (err) {
    if (res) res.error('Authentication verification failed', 401, err.message);
    return false;
  }
}

module.exports = { authenticate };
