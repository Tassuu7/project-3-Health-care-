/**
 * User & Clinician Account Entity Model
 */

const BaseModel = require('./BaseModel');

class User extends BaseModel {
  constructor(data = {}) {
    super(data);
    this.username = data.username || '';
    this.passwordHash = data.passwordHash || '';
    this.fullName = data.fullName || '';
    this.email = data.email || '';
    this.role = data.role || 'PATIENT';
    this.specialty = data.specialty || '';
    this.department = data.department || '';
    this.licenseNumber = data.licenseNumber || '';
    this.npiNumber = data.npiNumber || '';
    this.phone = data.phone || '';
    this.status = data.status || 'ACTIVE';
    this.failedAttempts = data.failedAttempts || 0;
    this.lockedUntil = data.lockedUntil || null;
  }

  toSafeJSON() {
    const json = { ...this };
    delete json.passwordHash;
    return json;
  }
}

module.exports = User;
