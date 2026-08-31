/**
 * Global Configuration Settings for PulseCare Platform
 */

module.exports = {
  env: process.env.NODE_ENV || 'development',
  port: parseInt(process.env.PORT, 10) || 3050,
  host: process.env.HOST || '0.0.0.0',
  jwtSecret: process.env.JWT_SECRET || 'pulsecare_dev_secret_key_8f3a9e1b2c4d5e6f7a8b9c0d1e2f3a4b',
  tokenExpiryHours: 24,
  appName: 'PulseCare Enterprise Health & Clinical Intelligence System',
  version: '2.4.0',
  dbPath: path => require('path').join(__dirname, '..', '..', 'data', path),
  hipaaAuditEnabled: true,
  cdsSeverityThreshold: 'MODERATE',
  telehealthSignalIntervalMs: 2500,
  maxLoginAttempts: 5,
  lockoutTimeMs: 15 * 60 * 1000
};
