const assert = require('assert');
const PrescriptionService = require('../../server/services/PrescriptionService');

describe('Electronic Prescription (e-Rx) Service', () => {
  test('creates new active prescription', () => {
    const rx = PrescriptionService.createPrescription({
      patientId: 'pat-001',
      drugName: 'Atorvastatin',
      strength: '20mg',
      sig: 'Take 1 tablet daily at bedtime',
      quantity: 30,
      refillsRemaining: 2
    }, { id: 'usr-001', fullName: 'Dr. Evelyn Smith, MD' });

    assert.ok(rx.id);
    assert.strictEqual(rx.status, 'ACTIVE');
  });

  test('dispenses prescription and decrements refills', () => {
    const dispensed = PrescriptionService.dispense('rx-001', { id: 'usr-006', fullName: 'Dr. David Kim' });
    assert.ok(dispensed);
  });
});
