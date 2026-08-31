/**
 * Drug Interaction & Allergy Contraindication Detection Engine
 */

const fs = require('fs');
const path = require('path');

let formularyCache = null;

function loadFormulary() {
  if (!formularyCache) {
    const p = path.join(__dirname, '..', 'dictionaries', 'drug_formulary.json');
    if (fs.existsSync(p)) {
      formularyCache = JSON.parse(fs.readFileSync(p, 'utf-8'));
    } else {
      formularyCache = [];
    }
  }
  return formularyCache;
}

function checkDrugInteractions(drugNames) {
  const formulary = loadFormulary();
  const alerts = [];
  if (!drugNames || drugNames.length < 2) return alerts;

  for (let i = 0; i < drugNames.length; i++) {
    const d1 = drugNames[i].toLowerCase();
    const match1 = formulary.find(f => f.genericName.toLowerCase().includes(d1) || (f.brandNames || []).some(b => b.toLowerCase().includes(d1)));

    if (!match1 || !match1.interactions) continue;

    for (let j = i + 1; j < drugNames.length; j++) {
      const d2 = drugNames[j].toLowerCase();
      const inter = match1.interactions.find(it => it.drug.toLowerCase().includes(d2) || d2.includes(it.drug.toLowerCase()));

      if (inter) {
        alerts.push({
          type: 'DRUG_DRUG_INTERACTION',
          severity: inter.severity || 'HIGH',
          title: `Drug Interaction: ${match1.genericName} + ${inter.drug}`,
          message: inter.effect,
          interactingDrugs: [match1.genericName, inter.drug]
        });
      }
    }
  }

  return alerts;
}

function checkAllergyContraindications(drugName, allergies = []) {
  if (!drugName || !allergies || allergies.length === 0) return null;
  const d = drugName.toLowerCase();

  for (const a of allergies) {
    const allergen = (a.allergen || '').toLowerCase();
    if (d.includes(allergen) || allergen.includes(d)) {
      return {
        type: 'DRUG_ALLERGY_CONTRAINDICATION',
        severity: 'CRITICAL_CONTRAINDICATION',
        title: `CRITICAL ALLERGY ALERT: ${drugName}`,
        message: `Patient has a documented allergy to ${a.allergen} (Reaction: ${a.reaction || 'Severe anaphylaxis'}). Administration contraindicated!`,
        allergen: a.allergen
      };
    }

    // Cross-reactivity rules
    if (allergen.includes('penicillin') && (d.includes('amoxicillin') || d.includes('ampicillin') || d.includes('augmentin'))) {
      return {
        type: 'DRUG_ALLERGY_CONTRAINDICATION',
        severity: 'CRITICAL_CONTRAINDICATION',
        title: `CRITICAL PENICILLIN CROSS-REACTIVITY: ${drugName}`,
        message: `Patient allergic to Penicillin. ${drugName} is a beta-lactam derivative with high cross-reactivity risk.`,
        allergen: a.allergen
      };
    }
  }

  return null;
}

module.exports = {
  checkDrugInteractions,
  checkAllergyContraindications
};
