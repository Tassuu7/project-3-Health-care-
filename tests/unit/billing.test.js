const assert = require('assert');
const BillingService = require('../../server/services/BillingService');

describe('Medical Billing & Claims Service', () => {
  test('creates and calculates total for new claim', () => {
    const claim = BillingService.createClaim({
      patientId: 'pat-001',
      lineItems: [
        { cpt: '99214', amount: 170.00 },
        { cpt: '80053', amount: 48.00 }
      ],
      patientCopay: 25.00
    }, { id: 'usr-007' });

    assert.strictEqual(claim.totalBilled, 218.00);
    assert.strictEqual(claim.insuranceExpected, 193.00);
  });

  test('adjudicates claim and marks as paid', () => {
    const adj = BillingService.adjudicateClaim('clm-001', 193.00, 'PAID_IN_FULL');
    assert.strictEqual(adj.status, 'PAID_IN_FULL');
  });
});
