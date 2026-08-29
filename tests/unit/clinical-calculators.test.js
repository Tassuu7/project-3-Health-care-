const assert = require('assert');
const {
  calculateBMI,
  calculateEGFR_CKD_EPI_2021,
  calculateQSOFA,
  calculateCHA2DS2_VASc,
  calculateMAP,
  calculatePediatricDose,
  calculateCorrectedCalcium
} = require('../../server/utils/clinicalCalculators');

describe('Clinical Evidence-Based Calculators', () => {
  test('calculateBMI calculates correct BMI and classification', () => {
    const res = calculateBMI(70, 175);
    assert.strictEqual(res.bmi, 22.9);
    assert.strictEqual(res.category, 'Normal weight');

    const obese = calculateBMI(110, 170);
    assert.strictEqual(obese.bmi, 38.1);
    assert.strictEqual(obese.category, 'Obesity Class II');
  });

  test('calculateEGFR_CKD_EPI_2021 correctly computes eGFR stage', () => {
    const normal = calculateEGFR_CKD_EPI_2021(0.9, 45, 'male');
    assert.ok(normal.egfr >= 90);
    assert.strictEqual(normal.stage, 'G1');

    const impaired = calculateEGFR_CKD_EPI_2021(2.5, 70, 'female');
    assert.ok(impaired.egfr < 30);
    assert.strictEqual(impaired.stage, 'G4');
  });

  test('calculateQSOFA triggers alert when score >= 2', () => {
    const highRisk = calculateQSOFA(24, 90, 14);
    assert.strictEqual(highRisk.score, 3);
    assert.strictEqual(highRisk.highRisk, true);

    const normal = calculateQSOFA(16, 120, 15);
    assert.strictEqual(normal.score, 0);
    assert.strictEqual(normal.highRisk, false);
  });

  test('calculateCHA2DS2_VASc calculates anticoagulation recommendation', () => {
    const res = calculateCHA2DS2_VASc({
      congestiveHeartFailure: true,
      hypertension: true,
      age: 76,
      diabetes: true
    });
    // CHF(+1) + HTN(+1) + Age>=75(+2) + Diabetes(+1) = 5
    assert.strictEqual(res.score, 5);
    assert.ok(res.recommendation.includes('Oral anticoagulation'));
  });

  test('calculateMAP calculates Mean Arterial Pressure', () => {
    const map = calculateMAP(120, 80);
    assert.strictEqual(map, 93.3);
  });

  test('calculatePediatricDose computes dosage and respects adult caps', () => {
    const dose = calculatePediatricDose(20, 15, 500);
    assert.strictEqual(dose, 300);

    const capped = calculatePediatricDose(50, 15, 500);
    assert.strictEqual(capped, 500);
  });

  test('calculateCorrectedCalcium handles hypoalbuminemia', () => {
    const corr = calculateCorrectedCalcium(7.8, 2.5);
    // 7.8 + 0.8*(4.0 - 2.5) = 7.8 + 1.2 = 9.0
    assert.strictEqual(corr, 9.0);
  });
});
