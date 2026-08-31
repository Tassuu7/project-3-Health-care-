/**
 * Cryptographic, Hashing, and Token Helpers for PulseCare Platform
 */

const crypto = require('crypto');

const SECRET = process.env.JWT_SECRET || 'pulsecare_dev_secret_key_8f3a9e1b2c4d5e6f7a8b9c0d1e2f3a4b';

function hashPassword(password, salt = 'pulsecare_clinical_salt_2026') {
  return crypto.pbkdf2Sync(password, salt, 10000, 64, 'sha512').toString('hex');
}

function verifyPassword(password, hash, salt = 'pulsecare_clinical_salt_2026') {
  const checkHash = hashPassword(password, salt);
  return crypto.timingSafeEqual(Buffer.from(checkHash), Buffer.from(hash));
}

function generateToken(payload, expiresInHours = 24) {
  const header = Buffer.from(JSON.stringify({ alg: 'HS256', typ: 'JWT' })).toString('base64url');
  const exp = Math.floor(Date.now() / 1000) + expiresInHours * 3600;
  const enrichedPayload = { ...payload, exp, iat: Math.floor(Date.now() / 1000) };
  const payloadEncoded = Buffer.from(JSON.stringify(enrichedPayload)).toString('base64url');

  const signature = crypto
    .createHmac('sha256', SECRET)
    .update(`${header}.${payloadEncoded}`)
    .digest('base64url');

  return `${header}.${payloadEncoded}.${signature}`;
}

function verifyToken(token) {
  if (!token || typeof token !== 'string') return false;
  const parts = token.split('.');
  if (parts.length !== 3) return false;

  const [header, payloadEncoded, signature] = parts;
  const expectedSig = crypto
    .createHmac('sha256', SECRET)
    .update(`${header}.${payloadEncoded}`)
    .digest('base64url');

  if (signature !== expectedSig) return false;

  try {
    const payload = JSON.parse(Buffer.from(payloadEncoded, 'base64url').toString('utf-8'));
    const now = Math.floor(Date.now() / 1000);
    if (payload.exp && payload.exp < now) {
      return false;
    }
    return true;
  } catch (e) {
    return false;
  }
}

function decodeToken(token) {
  if (!token || typeof token !== 'string') return null;
  const parts = token.split('.');
  if (parts.length !== 3) return null;
  try {
    return JSON.parse(Buffer.from(parts[1], 'base64url').toString('utf-8'));
  } catch (e) {
    return null;
  }
}

function generateId(prefix = 'obj') {
  return `${prefix}-${Date.now().toString(36)}-${crypto.randomBytes(4).toString('hex')}`;
}

module.exports = {
  hashPassword,
  verifyPassword,
  generateToken,
  verifyToken,
  decodeToken,
  generateId
};
