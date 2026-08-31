/**
 * Clinical Encounter Entity Model
 * Supports outpatient visits, emergency triage, hospital admissions, and telehealth.
 */

const BaseModel = require('./BaseModel');

class Encounter extends BaseModel {
  constructor(data = {}) {
    super(data);
    this.patientId = data.patientId || null;
    this.patientName = data.patientName || '';
    this.mrn = data.mrn || '';
    this.providerId = data.providerId || null;
    this.providerName = data.providerName || '';
    this.encounterType = data.encounterType || 'OUTPATIENT_VISIT';
    this.status = data.status || 'IN_PROGRESS';
    this.date = data.date || new Date().toISOString();
    this.department = data.department || 'General Medicine';
    this.chiefComplaint = data.chiefComplaint || '';
    this.soapNote = data.soapNote || {
      subjective: '',
      objective: '',
      assessment: '',
      plan: ''
    };
    this.diagnoses = data.diagnoses || [];
    this.billingCodes = data.billingCodes || [];
    this.signedAt = data.signedAt || null;
    this.signedBy = data.signedBy || null;
  }

  signEncounter(provider) {
    this.status = 'COMPLETED';
    this.signedAt = new Date().toISOString();
    this.signedBy = {
      id: provider.id,
      name: provider.fullName || provider.name,
      license: provider.licenseNumber
    };
  }

  validate() {
    const errors = [];
    if (!this.patientId) errors.push('Patient ID is required.');
    if (!this.providerId) errors.push('Provider ID is required.');
    if (!this.chiefComplaint) errors.push('Chief complaint is required.');
    return {
      valid: errors.length === 0,
      errors
    };
  }
}

module.exports = Encounter;
