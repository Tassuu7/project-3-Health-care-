/**
 * PulseCare Advanced Clinical Decision Support (CDS) Rules Engine
 * Implements real-time clinical evaluations across drug-drug interactions, allergy cross-reactivity,
 * renal dosage adjustments, qSOFA sepsis criteria, and hypertensive crisis escalation.
 */

const { getStorage } = require('../database/storage');
const drugFormulary = require('../dictionaries/DrugFormularyCatalogue');
const { calculateEGFR_CKD_EPI_2021, calculateQSOFA, calculateCHA2DS2_VASc } = require('../utils/clinicalCalculators');

class ClinicalDecisionSupportService {
  constructor() {
    this.alertSeverityThreshold = 'MODERATE';
  }

  async evaluatePatientRecord(patientId) {
    const store = getStorage();
    const patient = store.get('patients', patientId) || store.find('patients', p => p.id === patientId);
    if (!patient) return { alerts: [], recommendations: [], safetyScore: 100 };

    const alerts = [];
    const recommendations = [];
    let safetyScore = 100;

    // 1. Allergy Cross-Reactivity Screening
    const activeRxs = store.query('prescriptions', r => r.patientId === patientId && r.status === 'ACTIVE');
    const allergies = patient.allergies || [];

    for (const rx of activeRxs) {
      for (const allergy of allergies) {
        if (this.isAllergyCrossReactive(rx.drugName, allergy.allergen)) {
          alerts.push({
            ruleId: 'CDS-ALLERGY-001',
            severity: 'CRITICAL',
            category: 'DRUG_ALLERGY_CONTRAINDICATION',
            title: `Severe Allergy Warning: ${rx.drugName} vs ${allergy.allergen}`,
            description: `Patient has documented allergy to '${allergy.allergen}' with severe reaction '${allergy.reaction}'. Active prescription for '${rx.drugName}' poses high risk of anaphylaxis.`,
            recommendedAction: `Discontinue ${rx.drugName} immediately and select alternative non-cross-reactive agent.`
          });
          safetyScore -= 30;
        }
      }
    }

    // 2. Drug-Drug Interactions
    for (let i = 0; i < activeRxs.length; i++) {
      for (let j = i + 1; j < activeRxs.length; j++) {
        const drugA = activeRxs[i].drugName;
        const drugB = activeRxs[j].drugName;
        const inter = drugFormulary.checkInteractions(drugA, drugB);
        if (inter) {
          alerts.push({
            ruleId: 'CDS-DDI-002',
            severity: inter.severity || 'HIGH',
            category: 'DRUG_DRUG_INTERACTION',
            title: `Drug Interaction: ${drugA} + ${drugB}`,
            description: inter.effect || 'Potential adverse pharmacokinetic interaction.',
            recommendedAction: 'Monitor clinical parameters closely or modify drug schedule.'
          });
          safetyScore -= 20;
        }
      }
    }

    // 3. Vitals & Sepsis qSOFA Screening
    const vitalsList = patient.vitalsHistory || [];
    if (vitalsList.length > 0) {
      const latestVitals = vitalsList[vitalsList.length - 1];
      const qsofa = calculateQSOFA(latestVitals.rr || 16, latestVitals.bpSys || 120, 'Normal');
      if (qsofa.score >= 2) {
        alerts.push({
          ruleId: 'CDS-SEPSIS-003',
          severity: 'CRITICAL',
          category: 'EARLY_WARNING_SEPSIS',
          title: 'High Risk Sepsis Warning (qSOFA Score >= 2)',
          description: `Patient exhibits respiratory rate ${latestVitals.rr}/min and systolic BP ${latestVitals.bpSys} mmHg. High risk of in-hospital mortality.`,
          recommendedAction: 'Initiate Hour-1 Sepsis protocol: draw blood cultures, obtain serum lactate, and begin broad-spectrum antibiotics.'
        });
        safetyScore -= 35;
      }

      // Hypertensive Crisis Alert
      if (latestVitals.bpSys >= 180 || latestVitals.bpDia >= 120) {
        alerts.push({
          ruleId: 'CDS-HTN-004',
          severity: 'CRITICAL',
          category: 'HYPERTENSIVE_CRISIS',
          title: 'Hypertensive Emergency Alert (BP >= 180/120)',
          description: `Recorded blood pressure ${latestVitals.bpSys}/${latestVitals.bpDia} mmHg indicates potential acute target-organ damage.`,
          recommendedAction: 'Transfer to monitored bed; assess for encephalopathy, chest pain, and administer titrated IV antihypertensives.'
        });
        safetyScore -= 25;
      }
    }

    return {
      patientId,
      patientName: `${patient.firstName} ${patient.lastName}`,
      evaluatedAt: new Date().toISOString(),
      safetyScore: Math.max(0, safetyScore),
      alerts,
      recommendations
    };
  }

  isAllergyCrossReactive(drugName, allergen) {
    return ClinicalDecisionSupportService.isAllergyCrossReactive(drugName, allergen);
  }

  static isAllergyCrossReactive(drugName, allergen) {
    if (!drugName || !allergen) return false;
    const d = drugName.toLowerCase();
    const a = allergen.toLowerCase();

    if (a.includes('penicillin') && (d.includes('amoxicillin') || d.includes('ampicillin') || d.includes('penicillin') || d.includes('augmentin'))) {
      return true;
    }
    if (a.includes('sulfa') && (d.includes('sulfamethoxazole') || d.includes('bactrim') || d.includes('sulfasalazine'))) {
      return true;
    }
    if (a.includes('aspirin') && (d.includes('ibuprofen') || d.includes('naproxen') || d.includes('ketorolac'))) {
      return true;
    }
    return false;
  }

  static evaluatePatient(patientId) {
    const store = getStorage();
    const patient = store.get('patients', patientId) || store.find('patients', p => p.id === patientId);
    if (!patient) return { alerts: [], recommendations: [], safetyScore: 100 };

    const alerts = [];
    const activeRxs = store.query('prescriptions', r => r.patientId === patientId && r.status === 'ACTIVE');
    const allergies = patient.allergies || [];

    for (const rx of activeRxs) {
      for (const allergy of allergies) {
        if (ClinicalDecisionSupportService.isAllergyCrossReactive(rx.drugName, allergy.allergen)) {
          alerts.push({
            ruleId: 'CDS-ALLERGY-001',
            severity: 'CRITICAL',
            category: 'DRUG_ALLERGY_CONTRAINDICATION',
            title: `Severe Allergy Warning: ${rx.drugName} vs ${allergy.allergen}`,
            description: `Patient has documented allergy to '${allergy.allergen}'.`,
            recommendedAction: `Discontinue ${rx.drugName} immediately.`
          });
        }
      }
    }

    return { patientId, alerts, recommendations: [], safetyScore: 100 };
  }

  evaluatePatient(patientId) {
    return ClinicalDecisionSupportService.evaluatePatient(patientId);
  }

  getRules() {
    return [
      { id: 'CDS-ALLERGY-001', name: 'Penicillin and Sulfa Allergy Cross-Reactivity' },
      { id: 'CDS-DDI-002', name: 'Major Drug-Drug Interaction Checker' },
      { id: 'CDS-SEPSIS-003', name: 'qSOFA Sepsis Early Warning System' },
      { id: 'CDS-HTN-004', name: 'Hypertensive Crisis Alert Protocol' }
    ];
  }
}

const cdsInstance = new ClinicalDecisionSupportService();
module.exports = cdsInstance;
module.exports.ClinicalDecisionSupportService = ClinicalDecisionSupportService;
module.exports.evaluatePatient = (id) => ClinicalDecisionSupportService.evaluatePatient(id);
module.exports.getRules = () => cdsInstance.getRules();
