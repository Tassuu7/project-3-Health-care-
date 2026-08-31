/**
 * PulseCare Clinical Evidence-Based Calculators & Decision Algorithms
 * Implements validated medical algorithms across cardiology, nephrology, intensive care, and pediatrics.
 */

/**
 * Calculates Body Mass Index (BMI) and categorization per WHO standards.
 */
function calculateBMI(weightKg, heightCm) {
  if (!weightKg || !heightCm || weightKg <= 0 || heightCm <= 0) {
    return { bmi: null, category: 'Unknown', risk: 'Unknown' };
  }

  const heightMeters = heightCm / 100;
  const bmi = Number((weightKg / (heightMeters * heightMeters)).toFixed(1));

  let category = 'Normal weight';
  let risk = 'Low risk';

  if (bmi < 18.5) {
    category = 'Underweight';
    risk = 'Increased risk for nutritional deficiency';
  } else if (bmi < 25.0) {
    category = 'Normal weight';
    risk = 'Average risk';
  } else if (bmi < 30.0) {
    category = 'Overweight';
    risk = 'Increased cardiovascular risk';
  } else if (bmi < 35.0) {
    category = 'Obesity Class I';
    risk = 'High cardiovascular and metabolic risk';
  } else if (bmi < 40.0) {
    category = 'Obesity Class II';
    risk = 'Very high risk';
  } else {
    category = 'Obesity Class III (Morbid)';
    risk = 'Extremely high risk';
  }

  return { bmi, category, risk };
}

/**
 * Calculates Estimated Glomerular Filtration Rate (eGFR) using CKD-EPI 2021 Equation (Refit without race).
 */
function calculateEGFR_CKD_EPI_2021(serumCreatinine, age, gender) {
  if (!serumCreatinine || !age || serumCreatinine <= 0 || age <= 0) {
    return { egfr: null, stage: 'Unknown', description: 'Invalid parameters' };
  }

  const isFemale = gender && gender.toLowerCase().startsWith('f');
  const kappa = isFemale ? 0.7 : 0.9;
  const alpha = isFemale ? -0.241 : -0.302;
  const femaleFactor = isFemale ? 1.012 : 1.0;

  const scrOverKappa = serumCreatinine / kappa;
  const minTerm = Math.min(scrOverKappa, 1) ** alpha;
  const maxTerm = Math.max(scrOverKappa, 1) ** -1.200;
  const ageTerm = 0.9938 ** age;

  const egfr = Math.round(142 * minTerm * maxTerm * ageTerm * femaleFactor);

  let stage = 'G1';
  let description = 'Normal or high kidney function';

  if (egfr >= 90) {
    stage = 'G1';
    description = 'Normal or high kidney function (G1)';
  } else if (egfr >= 60) {
    stage = 'G2';
    description = 'Mildly decreased kidney function (G2)';
  } else if (egfr >= 45) {
    stage = 'G3a';
    description = 'Mild to moderately decreased kidney function (G3a)';
  } else if (egfr >= 30) {
    stage = 'G3b';
    description = 'Moderately to severely decreased kidney function (G3b)';
  } else if (egfr >= 15) {
    stage = 'G4';
    description = 'Severely decreased kidney function (G4)';
  } else {
    stage = 'G5';
    description = 'Kidney failure / End-stage renal disease (G5)';
  }

  return { egfr, stage, description };
}

/**
 * Calculates Quick SOFA (qSOFA) Score for Sepsis Risk in Emergency/Outpatient setting.
 */
function calculateQSOFA(respiratoryRate, systolicBP, glasgowComaScale) {
  let score = 0;
  const criteriaMet = [];

  if (respiratoryRate >= 22) {
    score += 1;
    criteriaMet.push('Tachypnea: Respiratory rate >= 22 breaths/min');
  }

  if (systolicBP <= 100) {
    score += 1;
    criteriaMet.push('Hypotension: Systolic blood pressure <= 100 mmHg');
  }

  if (glasgowComaScale < 15) {
    score += 1;
    criteriaMet.push('Altered mentation: Glasgow Coma Scale < 15');
  }

  const highRisk = score >= 2;
  const recommendation = highRisk
    ? 'CRITICAL ALERT: High risk of poor in-hospital outcomes and sepsis. Initiate Sepsis 1-Hour Bundle (Lactate, Blood Cultures, Broad-Spectrum Antibiotics, IV Fluids).'
    : 'Low to moderate risk. Continue clinical monitoring and evaluate for infection source.';

  return {
    score,
    highRisk,
    criteriaMet,
    recommendation
  };
}

/**
 * Calculates CHA2DS2-VASc Score for Atrial Fibrillation Stroke Risk.
 */
function calculateCHA2DS2_VASc({
  congestiveHeartFailure = false,
  hypertension = false,
  age = 50,
  diabetes = false,
  strokeOrTIAHistory = false,
  vascularDisease = false,
  isFemale = false
}) {
  let score = 0;
  const pointsBreakdown = [];

  if (congestiveHeartFailure) {
    score += 1;
    pointsBreakdown.push('Congestive Heart Failure (+1)');
  }
  if (hypertension) {
    score += 1;
    pointsBreakdown.push('Hypertension (+1)');
  }
  if (age >= 75) {
    score += 2;
    pointsBreakdown.push('Age >= 75 years (+2)');
  } else if (age >= 65) {
    score += 1;
    pointsBreakdown.push('Age 65-74 years (+1)');
  }
  if (diabetes) {
    score += 1;
    pointsBreakdown.push('Diabetes Mellitus (+1)');
  }
  if (strokeOrTIAHistory) {
    score += 2;
    pointsBreakdown.push('Prior Stroke, TIA, or Thromboembolism (+2)');
  }
  if (vascularDisease) {
    score += 1;
    pointsBreakdown.push('Vascular Disease (MI, PAD, aortic plaque) (+1)');
  }
  if (isFemale) {
    score += 1;
    pointsBreakdown.push('Female Sex Category (+1)');
  }

  let annualStrokeRiskPercent = 0.2;
  if (score === 1) annualStrokeRiskPercent = 0.6;
  else if (score === 2) annualStrokeRiskPercent = 2.2;
  else if (score === 3) annualStrokeRiskPercent = 3.2;
  else if (score === 4) annualStrokeRiskPercent = 4.8;
  else if (score === 5) annualStrokeRiskPercent = 7.2;
  else if (score === 6) annualStrokeRiskPercent = 9.7;
  else if (score >= 7) annualStrokeRiskPercent = 12.5;

  const threshold = isFemale ? 2 : 1;
  const oralAnticoagulantRecommended = score >= threshold;

  return {
    score,
    pointsBreakdown,
    annualStrokeRiskPercent,
    recommendation: oralAnticoagulantRecommended
      ? `Oral anticoagulation (DOAC preferred over Warfarin) is strongly recommended (Score ${score}).`
      : 'Low stroke risk. Oral anticoagulation may not be required or consider clinical judgment.'
  };
}

/**
 * Calculates Mean Arterial Pressure (MAP).
 */
function calculateMAP(systolicBP, diastolicBP) {
  if (!systolicBP || !diastolicBP) return null;
  return Number(((systolicBP + 2 * diastolicBP) / 3).toFixed(1));
}

/**
 * Calculates Pediatric Dosage based on Weight and Milligram per Kilogram target.
 */
function calculatePediatricDose(weightKg, mgPerKg, maxAdultDoseMg = null) {
  if (!weightKg || !mgPerKg || weightKg <= 0 || mgPerKg <= 0) return null;
  let calculatedMg = Number((weightKg * mgPerKg).toFixed(1));
  if (maxAdultDoseMg && calculatedMg > maxAdultDoseMg) {
    calculatedMg = maxAdultDoseMg;
  }
  return calculatedMg;
}

/**
 * Corrected Calcium for Hypoalbuminemia.
 */
function calculateCorrectedCalcium(totalCalcium, albumin) {
  if (!totalCalcium || !albumin) return totalCalcium;
  if (albumin >= 4.0) return totalCalcium;
  return Number((totalCalcium + 0.8 * (4.0 - albumin)).toFixed(2));
}

module.exports = {
  calculateBMI,
  calculateEGFR_CKD_EPI_2021,
  calculateQSOFA,
  calculateCHA2DS2_VASc,
  calculateMAP,
  calculatePediatricDose,
  calculateCorrectedCalcium
};
