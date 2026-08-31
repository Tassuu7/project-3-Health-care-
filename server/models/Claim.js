/**
 * Medical Billing Claim Entity Model
 */

const BaseModel = require('./BaseModel');

class Claim extends BaseModel {
  constructor(data = {}) {
    super(data);
    this.patientId = data.patientId || null;
    this.patientName = data.patientName || '';
    this.payerName = data.payerName || '';
    this.policyNumber = data.policyNumber || '';
    this.encounterId = data.encounterId || null;
    this.serviceDate = data.serviceDate || new Date().toISOString().split('T')[0];
    this.totalBilled = Number(data.totalBilled) || 0;
    this.patientCopay = Number(data.patientCopay) || 0;
    this.insuranceExpected = Number(data.insuranceExpected) || 0;
    this.status = data.status || 'DRAFT';
    this.lineItems = data.lineItems || [];
    this.adjudicationDate = data.adjudicationDate || null;
    this.reimbursementAmount = data.reimbursementAmount || 0;
  }

  calculateTotal() {
    if (!this.lineItems || this.lineItems.length === 0) return this.totalBilled;
    const total = this.lineItems.reduce((sum, item) => sum + (Number(item.amount) || 0), 0);
    this.totalBilled = total;
    this.insuranceExpected = Math.max(0, total - this.patientCopay);
    return total;
  }

  validate() {
    const errors = [];
    if (!this.patientId) errors.push('Patient ID is required.');
    if (!this.payerName) errors.push('Payer/Insurance name is required.');
    if (this.totalBilled < 0) errors.push('Total billed amount cannot be negative.');
    return {
      valid: errors.length === 0,
      errors
    };
  }
}

module.exports = Claim;
