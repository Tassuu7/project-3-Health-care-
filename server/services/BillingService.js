/**
 * Medical Billing, ICD-10/CPT Claims Processing and Revenue Cycle Service
 */

const { getStorage } = require('../database/storage');
const Claim = require('../models/Claim');
const { logAudit } = require('./AuditService');

class BillingService {
  static getClaims(query = {}) {
    const store = getStorage();
    const { patientId, status } = query;

    return store.query('claims', c => {
      if (patientId && c.patientId !== patientId) return false;
      if (status && c.status !== status) return false;
      return true;
    }, { sortBy: 'serviceDate', sortOrder: 'desc' });
  }

  static createClaim(claimData, user) {
    const store = getStorage();
    const patient = store.get('patients', claimData.patientId);
    if (!patient) throw new Error('Patient not found');

    const claim = new Claim({
      ...claimData,
      patientName: `${patient.firstName} ${patient.lastName}`,
      payerName: claimData.payerName || patient.insurance.payerName,
      policyNumber: claimData.policyNumber || patient.insurance.policyNumber,
      patientCopay: claimData.patientCopay || patient.insurance.copay || 0
    });

    claim.calculateTotal();
    const validation = claim.validate();
    if (!validation.valid) throw new Error(`Claim validation failed: ${validation.errors.join(', ')}`);

    const created = store.insert('claims', claim.toJSON());
    logAudit({
      action: 'CLAIM_CREATED',
      userId: user.id,
      resource: `/claims/${created.id}`,
      details: `Created billing claim #${created.id} for $${created.totalBilled}`
    });

    return created;
  }

  static adjudicateClaim(claimId, reimbursementAmount, status = 'PAID_IN_FULL') {
    const store = getStorage();
    const claim = store.get('claims', claimId);
    if (!claim) throw new Error('Claim not found');

    const updated = store.update('claims', claimId, {
      status,
      adjudicationDate: new Date().toISOString().split('T')[0],
      reimbursementAmount: Number(reimbursementAmount) || claim.insuranceExpected
    });

    return updated;
  }
}

module.exports = BillingService;
