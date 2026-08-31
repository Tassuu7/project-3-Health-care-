const assert = require('assert');
const { checkDrugInteractions, checkAllergyContraindications } = require('../../server/services/DrugInteractionService');

describe('Drug Interaction and Allergy Safety Engine', () => {
  test('detects severe drug-drug interaction between Warfarin and Aspirin', () => {
    const alerts = checkDrugInteractions(['Warfarin', 'Aspirin']);
    assert.ok(alerts.length > 0);
    assert.strictEqual(alerts[0].severity, 'HIGH');
  });

  test('detects penicillin allergy cross-reactivity for Amoxicillin', () => {
    const allergies = [{ allergen: 'Penicillin', reaction: 'Anaphylaxis', severity: 'SEVERE' }];
    const alert = checkAllergyContraindications('Amoxicillin', allergies);
    assert.ok(alert);
    assert.strictEqual(alert.severity, 'CRITICAL_CONTRAINDICATION');
  });

  test('returns null when no allergy matches', () => {
    const allergies = [{ allergen: 'Sulfa Drugs', reaction: 'Rash' }];
    const alert = checkAllergyContraindications('Lisinopril', allergies);
    assert.strictEqual(alert, null);
  });
});
