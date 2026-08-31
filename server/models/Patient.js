/**
 * Patient Entity Model
 * Represents complete patient demographic, clinical history, vitals, and allergies.
 */

const BaseModel = require('./BaseModel');

class Patient extends BaseModel {
  constructor(data = {}) {
    super(data);
    this.mrn = data.mrn || `MRN-${Math.floor(100000 + Math.random() * 900000)}`;
    this.firstName = data.firstName || '';
    this.lastName = data.lastName || '';
    this.dob = data.dob || '';
    this.gender = data.gender || 'Unknown';
    this.bloodGroup = data.bloodGroup || 'Unknown';
    this.ssnMasked = data.ssnMasked || '***-**-0000';
    this.phone = data.phone || '';
    this.email = data.email || '';
    this.address = data.address || { street: '', city: '', state: '', postalCode: '' };
    this.emergencyContact = data.emergencyContact || { name: '', phone: '', relation: '' };
    this.insurance = data.insurance || { payerName: '', policyNumber: '', groupNumber: '', copay: 0 };
    this.allergies = data.allergies || [];
    this.chronicConditions = data.chronicConditions || [];
    this.currentMedications = data.currentMedications || [];
    this.vitalsHistory = data.vitalsHistory || [];
    this.careTeam = data.careTeam || {};
    this.status = data.status || 'ACTIVE';
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`.trim();
  }

  getAge() {
    if (!this.dob) return null;
    const birth = new Date(this.dob);
    const now = new Date();
    let age = now.getFullYear() - birth.getFullYear();
    const monthDiff = now.getMonth() - birth.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && now.getDate() < birth.getDate())) {
      age--;
    }
    return age;
  }

  getLatestVitals() {
    if (!this.vitalsHistory || this.vitalsHistory.length === 0) return null;
    return this.vitalsHistory[this.vitalsHistory.length - 1];
  }

  hasAllergy(allergenName) {
    if (!allergenName || !this.allergies) return false;
    const search = allergenName.toLowerCase();
    return this.allergies.some(a => a.allergen.toLowerCase().includes(search));
  }

  validate() {
    const errors = [];
    if (!this.firstName || this.firstName.trim().length < 2) errors.push('First name is required (min 2 chars).');
    if (!this.lastName || this.lastName.trim().length < 2) errors.push('Last name is required (min 2 chars).');
    if (!this.dob) errors.push('Date of birth is required.');
    if (!this.phone && !this.email) errors.push('At least one contact method (phone or email) is required.');
    return {
      valid: errors.length === 0,
      errors
    };
  }
}

module.exports = Patient;
