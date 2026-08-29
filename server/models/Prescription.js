/**
 * Electronic Prescription (e-Rx) Entity Model
 */

const BaseModel = require('./BaseModel');

class Prescription extends BaseModel {
  constructor(data = {}) {
    super(data);
    this.patientId = data.patientId || null;
    this.patientName = data.patientName || '';
    this.providerId = data.providerId || null;
    this.providerName = data.providerName || '';
    this.drugId = data.drugId || null;
    this.drugName = data.drugName || '';
    this.strength = data.strength || '';
    this.form = data.form || 'Tablet';
    this.sig = data.sig || '';
    this.quantity = data.quantity || 30;
    this.refillsRemaining = data.refillsRemaining !== undefined ? data.refillsRemaining : 0;
    this.prescribedDate = data.prescribedDate || new Date().toISOString().split('T')[0];
    this.status = data.status || 'ACTIVE';
    this.pharmacyNote = data.pharmacyNote || '';
    this.dispensedAt = data.dispensedAt || null;
    this.dispensedBy = data.dispensedBy || null;
  }

  dispense(pharmacist) {
    if (this.status !== 'ACTIVE' && this.status !== 'PARTIALLY_DISPENSED') {
      throw new Error(`Cannot dispense prescription in ${this.status} status.`);
    }
    if (this.refillsRemaining <= 0) {
      this.status = 'DISPENSED';
    } else {
      this.refillsRemaining--;
      this.status = this.refillsRemaining === 0 ? 'DISPENSED' : 'PARTIALLY_DISPENSED';
    }
    this.dispensedAt = new Date().toISOString();
    this.dispensedBy = pharmacist.fullName || pharmacist.username;
  }

  validate() {
    const errors = [];
    if (!this.patientId) errors.push('Patient ID is required.');
    if (!this.drugName) errors.push('Drug name is required.');
    if (!this.sig) errors.push('Clinical Sig/Dosage instructions are required.');
    if (!this.quantity || this.quantity <= 0) errors.push('Valid dispense quantity is required.');
    return {
      valid: errors.length === 0,
      errors
    };
  }
}

module.exports = Prescription;
