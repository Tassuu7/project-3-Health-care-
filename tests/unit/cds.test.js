const assert = require('assert');
const { ClinicalDecisionSupportService } = require('../../server/services/ClinicalDecisionSupportService');
const { getStorage } = require('../../server/database/storage');

describe('Clinical Decision Support (CDS) Rules Engine', () => {
  test('evaluates patient with documented penicillin allergy and active prescription', () => {
    const result = ClinicalDecisionSupportService.evaluatePatient('pat-001');
    assert.ok(result);
    assert.ok(Array.isArray(result.alerts));
  });

  test('evaluates non-existent patient safely returning empty alerts', () => {
    const res = ClinicalDecisionSupportService.evaluatePatient('pat-non-existent');
    assert.strictEqual(res.alerts.length, 0);
  });
});
