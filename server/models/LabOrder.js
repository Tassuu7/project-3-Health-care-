/**
 * Diagnostic Pathology & Laboratory Order Entity Model
 */

const BaseModel = require('./BaseModel');

class LabOrder extends BaseModel {
  constructor(data = {}) {
    super(data);
    this.patientId = data.patientId || null;
    this.patientName = data.patientName || '';
    this.providerId = data.providerId || null;
    this.providerName = data.providerName || '';
    this.orderDate = data.orderDate || new Date().toISOString();
    this.panelName = data.panelName || '';
    this.panelCode = data.panelCode || '';
    this.status = data.status || 'ORDERED';
    this.priority = data.priority || 'ROUTINE';
    this.specimen = data.specimen || 'Venous Blood';
    this.results = data.results || [];
    this.pathologistNotes = data.pathologistNotes || '';
    this.verifiedBy = data.verifiedBy || null;
    this.verifiedAt = data.verifiedAt || null;
  }

  hasCriticalValues() {
    if (!this.results || !Array.isArray(this.results)) return false;
    return this.results.some(r => r.flag === 'CRITICAL_HIGH' || r.flag === 'CRITICAL_LOW');
  }

  validate() {
    const errors = [];
    if (!this.patientId) errors.push('Patient ID is required.');
    if (!this.panelName) errors.push('Laboratory panel name is required.');
    return {
      valid: errors.length === 0,
      errors
    };
  }
}

module.exports = LabOrder;
