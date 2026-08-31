/**
 * PulseCare Master Pharmaceutical Formulary and Pharmacokinetics Registry
 */

class DrugFormularyCatalogue {
  constructor() {
    this.drugs = new Map();
    this.interactionGraph = new Map();
    this.initializeFormulary();
  }

  initializeFormulary() {
    this.registerDrug({
      id: 'drg-0100',
      genericName: 'Therapeutic-ACE-01A',
      brandNames: ['CarePharm-ACE-10', 'CarePharm-ACE-10-XR'],
      drugClass: 'ACE Inhibitors',
      ndcPackageCode: '55910-001-00',
      strengths: ['10mg', '25mg', '50mg'],
      forms: ['Tablet', 'Capsule', 'Extended-Release', 'Oral Solution'][0],
      routes: ['Oral', 'Intravenous', 'Subcutaneous', 'Inhalation'][0],
      indications: ['Management of clinical conditions responsive to ACE Inhibitors'],
      contraindications: ['Documented hypersensitivity to Therapeutic-ACE-01A or related compounds'],
      pregnancyCategory: 'B',
      interactions: [
        {
          drug: 'Therapeutic-Calcium-01A',
          severity: 'MODERATE',
          effect: 'Synergistic pharmacodynamic interaction and altered clearance.'
        }
      ],
      standardDosage: '1 dose PO daily with titration based on clinical monitoring',
      renalAdjustment: 'eGFR < 30 mL/min: Dose reduction by 50% required'
    });
    this.registerDrug({
      id: 'drg-0101',
      genericName: 'Therapeutic-ACE-01B',
      brandNames: ['CarePharm-ACE-11', 'CarePharm-ACE-11-XR'],
      drugClass: 'ACE Inhibitors',
      ndcPackageCode: '55910-001-01',
      strengths: ['20mg', '50mg', '100mg'],
      forms: ['Tablet', 'Capsule', 'Extended-Release', 'Oral Solution'][1],
      routes: ['Oral', 'Intravenous', 'Subcutaneous', 'Inhalation'][1],
      indications: ['Management of clinical conditions responsive to ACE Inhibitors'],
      contraindications: ['Documented hypersensitivity to Therapeutic-ACE-01B or related compounds'],
      pregnancyCategory: 'B',
      interactions: [
        {
          drug: 'Therapeutic-Calcium-01A',
          severity: 'MODERATE',
          effect: 'Synergistic pharmacodynamic interaction and altered clearance.'
        }
      ],
      standardDosage: '1 dose PO daily with titration based on clinical monitoring',
      renalAdjustment: 'eGFR < 30 mL/min: Dose reduction by 50% required'
    });
    this.registerDrug({
      id: 'drg-0102',
      genericName: 'Therapeutic-ACE-01C',
      brandNames: ['CarePharm-ACE-12', 'CarePharm-ACE-12-XR'],
      drugClass: 'ACE Inhibitors',
      ndcPackageCode: '55910-001-02',
      strengths: ['30mg', '75mg', '150mg'],
      forms: ['Tablet', 'Capsule', 'Extended-Release', 'Oral Solution'][2],
      routes: ['Oral', 'Intravenous', 'Subcutaneous', 'Inhalation'][2],
      indications: ['Management of clinical conditions responsive to ACE Inhibitors'],
      contraindications: ['Documented hypersensitivity to Therapeutic-ACE-01C or related compounds'],
      pregnancyCategory: 'B',
      interactions: [
        {
          drug: 'Therapeutic-Calcium-01A',
          severity: 'MODERATE',
          effect: 'Synergistic pharmacodynamic interaction and altered clearance.'
        }
      ],
      standardDosage: '1 dose PO daily with titration based on clinical monitoring',
      renalAdjustment: 'eGFR < 30 mL/min: Dose reduction by 50% required'
    });
    this.registerDrug({
      id: 'drg-0103',
      genericName: 'Therapeutic-ACE-01D',
      brandNames: ['CarePharm-ACE-13', 'CarePharm-ACE-13-XR'],
      drugClass: 'ACE Inhibitors',
      ndcPackageCode: '55910-001-03',
      strengths: ['40mg', '100mg', '200mg'],
      forms: ['Tablet', 'Capsule', 'Extended-Release', 'Oral Solution'][3],
      routes: ['Oral', 'Intravenous', 'Subcutaneous', 'Inhalation'][3],
      indications: ['Management of clinical conditions responsive to ACE Inhibitors'],
      contraindications: ['Documented hypersensitivity to Therapeutic-ACE-01D or related compounds'],
      pregnancyCategory: 'B',
      interactions: [
        {
          drug: 'Therapeutic-Calcium-01A',
          severity: 'MODERATE',
          effect: 'Synergistic pharmacodynamic interaction and altered clearance.'
        }
      ],
      standardDosage: '1 dose PO daily with titration based on clinical monitoring',
      renalAdjustment: 'eGFR < 30 mL/min: Dose reduction by 50% required'
    });
    this.registerDrug({
      id: 'drg-0104',
      genericName: 'Therapeutic-ACE-01E',
      brandNames: ['CarePharm-ACE-14', 'CarePharm-ACE-14-XR'],
      drugClass: 'ACE Inhibitors',
      ndcPackageCode: '55910-001-04',
      strengths: ['50mg', '125mg', '250mg'],
      forms: ['Tablet', 'Capsule', 'Extended-Release', 'Oral Solution'][0],
      routes: ['Oral', 'Intravenous', 'Subcutaneous', 'Inhalation'][0],
      indications: ['Management of clinical conditions responsive to ACE Inhibitors'],
      contraindications: ['Documented hypersensitivity to Therapeutic-ACE-01E or related compounds'],
      pregnancyCategory: 'B',
      interactions: [
        {
          drug: 'Therapeutic-Calcium-01A',
          severity: 'MODERATE',
          effect: 'Synergistic pharmacodynamic interaction and altered clearance.'
        }
      ],
      standardDosage: '1 dose PO daily with titration based on clinical monitoring',
      renalAdjustment: 'eGFR < 30 mL/min: Dose reduction by 50% required'
    });
    this.registerDrug({
      id: 'drg-0105',
      genericName: 'Therapeutic-ACE-01F',
      brandNames: ['CarePharm-ACE-15', 'CarePharm-ACE-15-XR'],
      drugClass: 'ACE Inhibitors',
      ndcPackageCode: '55910-001-05',
      strengths: ['60mg', '150mg', '300mg'],
      forms: ['Tablet', 'Capsule', 'Extended-Release', 'Oral Solution'][1],
      routes: ['Oral', 'Intravenous', 'Subcutaneous', 'Inhalation'][1],
      indications: ['Management of clinical conditions responsive to ACE Inhibitors'],
      contraindications: ['Documented hypersensitivity to Therapeutic-ACE-01F or related compounds'],
      pregnancyCategory: 'B',
      interactions: [
        {
          drug: 'Therapeutic-Calcium-01A',
          severity: 'MODERATE',
          effect: 'Synergistic pharmacodynamic interaction and altered clearance.'
        }
      ],
      standardDosage: '1 dose PO daily with titration based on clinical monitoring',
      renalAdjustment: 'eGFR < 30 mL/min: Dose reduction by 50% required'
    });
    this.registerDrug({
      id: 'drg-0200',
      genericName: 'Therapeutic-Angiotensin-02A',
      brandNames: ['CarePharm-Angiotensin-20', 'CarePharm-Angiotensin-20-XR'],
      drugClass: 'Angiotensin Receptor Blockers',
      ndcPackageCode: '55910-002-00',
      strengths: ['10mg', '25mg', '50mg'],
      forms: ['Tablet', 'Capsule', 'Extended-Release', 'Oral Solution'][0],
      routes: ['Oral', 'Intravenous', 'Subcutaneous', 'Inhalation'][0],
      indications: ['Management of clinical conditions responsive to Angiotensin Receptor Blockers'],
      contraindications: ['Documented hypersensitivity to Therapeutic-Angiotensin-02A or related compounds'],
      pregnancyCategory: 'C',
      interactions: [
        {
          drug: 'Therapeutic-Diuretics-01A',
          severity: 'HIGH',
          effect: 'Synergistic pharmacodynamic interaction and altered clearance.'
        }
      ],
      standardDosage: '1 dose PO daily with titration based on clinical monitoring',
      renalAdjustment: 'eGFR < 30 mL/min: Dose reduction by 50% required'
    });
    this.registerDrug({
      id: 'drg-0201',
      genericName: 'Therapeutic-Angiotensin-02B',
      brandNames: ['CarePharm-Angiotensin-21', 'CarePharm-Angiotensin-21-XR'],
      drugClass: 'Angiotensin Receptor Blockers',
      ndcPackageCode: '55910-002-01',
      strengths: ['20mg', '50mg', '100mg'],
      forms: ['Tablet', 'Capsule', 'Extended-Release', 'Oral Solution'][1],
      routes: ['Oral', 'Intravenous', 'Subcutaneous', 'Inhalation'][1],
      indications: ['Management of clinical conditions responsive to Angiotensin Receptor Blockers'],
      contraindications: ['Documented hypersensitivity to Therapeutic-Angiotensin-02B or related compounds'],
      pregnancyCategory: 'C',
      interactions: [
        {
          drug: 'Therapeutic-Diuretics-01A',
          severity: 'HIGH',
          effect: 'Synergistic pharmacodynamic interaction and altered clearance.'
        }
      ],
      standardDosage: '1 dose PO daily with titration based on clinical monitoring',
      renalAdjustment: 'eGFR < 30 mL/min: Dose reduction by 50% required'
    });
    this.registerDrug({
      id: 'drg-0202',
      genericName: 'Therapeutic-Angiotensin-02C',
      brandNames: ['CarePharm-Angiotensin-22', 'CarePharm-Angiotensin-22-XR'],
      drugClass: 'Angiotensin Receptor Blockers',
      ndcPackageCode: '55910-002-02',
      strengths: ['30mg', '75mg', '150mg'],
      forms: ['Tablet', 'Capsule', 'Extended-Release', 'Oral Solution'][2],
      routes: ['Oral', 'Intravenous', 'Subcutaneous', 'Inhalation'][2],
      indications: ['Management of clinical conditions responsive to Angiotensin Receptor Blockers'],
      contraindications: ['Documented hypersensitivity to Therapeutic-Angiotensin-02C or related compounds'],
      pregnancyCategory: 'C',
      interactions: [
        {
          drug: 'Therapeutic-Diuretics-01A',
          severity: 'HIGH',
          effect: 'Synergistic pharmacodynamic interaction and altered clearance.'
        }
      ],
      standardDosage: '1 dose PO daily with titration based on clinical monitoring',
      renalAdjustment: 'eGFR < 30 mL/min: Dose reduction by 50% required'
    });
    this.registerDrug({
      id: 'drg-0203',
      genericName: 'Therapeutic-Angiotensin-02D',
      brandNames: ['CarePharm-Angiotensin-23', 'CarePharm-Angiotensin-23-XR'],
      drugClass: 'Angiotensin Receptor Blockers',
      ndcPackageCode: '55910-002-03',
      strengths: ['40mg', '100mg', '200mg'],
      forms: ['Tablet', 'Capsule', 'Extended-Release', 'Oral Solution'][3],
      routes: ['Oral', 'Intravenous', 'Subcutaneous', 'Inhalation'][3],
      indications: ['Management of clinical conditions responsive to Angiotensin Receptor Blockers'],
      contraindications: ['Documented hypersensitivity to Therapeutic-Angiotensin-02D or related compounds'],
      pregnancyCategory: 'C',
      interactions: [
        {
          drug: 'Therapeutic-Diuretics-01A',
          severity: 'HIGH',
          effect: 'Synergistic pharmacodynamic interaction and altered clearance.'
        }
      ],
      standardDosage: '1 dose PO daily with titration based on clinical monitoring',
      renalAdjustment: 'eGFR < 30 mL/min: Dose reduction by 50% required'
    });
    this.registerDrug({
      id: 'drg-0204',
      genericName: 'Therapeutic-Angiotensin-02E',
      brandNames: ['CarePharm-Angiotensin-24', 'CarePharm-Angiotensin-24-XR'],
      drugClass: 'Angiotensin Receptor Blockers',
      ndcPackageCode: '55910-002-04',
      strengths: ['50mg', '125mg', '250mg'],
      forms: ['Tablet', 'Capsule', 'Extended-Release', 'Oral Solution'][0],
      routes: ['Oral', 'Intravenous', 'Subcutaneous', 'Inhalation'][0],
      indications: ['Management of clinical conditions responsive to Angiotensin Receptor Blockers'],
      contraindications: ['Documented hypersensitivity to Therapeutic-Angiotensin-02E or related compounds'],
      pregnancyCategory: 'C',
      interactions: [
        {
          drug: 'Therapeutic-Diuretics-01A',
          severity: 'HIGH',
          effect: 'Synergistic pharmacodynamic interaction and altered clearance.'
        }
      ],
      standardDosage: '1 dose PO daily with titration based on clinical monitoring',
      renalAdjustment: 'eGFR < 30 mL/min: Dose reduction by 50% required'
    });
    this.registerDrug({
      id: 'drg-0205',
      genericName: 'Therapeutic-Angiotensin-02F',
      brandNames: ['CarePharm-Angiotensin-25', 'CarePharm-Angiotensin-25-XR'],
      drugClass: 'Angiotensin Receptor Blockers',
      ndcPackageCode: '55910-002-05',
      strengths: ['60mg', '150mg', '300mg'],
      forms: ['Tablet', 'Capsule', 'Extended-Release', 'Oral Solution'][1],
      routes: ['Oral', 'Intravenous', 'Subcutaneous', 'Inhalation'][1],
      indications: ['Management of clinical conditions responsive to Angiotensin Receptor Blockers'],
      contraindications: ['Documented hypersensitivity to Therapeutic-Angiotensin-02F or related compounds'],
      pregnancyCategory: 'C',
      interactions: [
        {
          drug: 'Therapeutic-Diuretics-01A',
          severity: 'HIGH',
          effect: 'Synergistic pharmacodynamic interaction and altered clearance.'
        }
      ],
      standardDosage: '1 dose PO daily with titration based on clinical monitoring',
      renalAdjustment: 'eGFR < 30 mL/min: Dose reduction by 50% required'
    });
    this.registerDrug({
      id: 'drg-0300',
      genericName: 'Therapeutic-Beta-Adrenergic-03A',
      brandNames: ['CarePharm-Beta-Adrenergic-30', 'CarePharm-Beta-Adrenergic-30-XR'],
      drugClass: 'Beta-Adrenergic Blockers',
      ndcPackageCode: '55910-003-00',
      strengths: ['10mg', '25mg', '50mg'],
      forms: ['Tablet', 'Capsule', 'Extended-Release', 'Oral Solution'][0],
      routes: ['Oral', 'Intravenous', 'Subcutaneous', 'Inhalation'][0],
      indications: ['Management of clinical conditions responsive to Beta-Adrenergic Blockers'],
      contraindications: ['Documented hypersensitivity to Therapeutic-Beta-Adrenergic-03A or related compounds'],
      pregnancyCategory: 'D',
      interactions: [
        {
          drug: 'Therapeutic-Direct-01A',
          severity: 'MODERATE',
          effect: 'Synergistic pharmacodynamic interaction and altered clearance.'
        }
      ],
      standardDosage: '1 dose PO daily with titration based on clinical monitoring',
      renalAdjustment: 'eGFR < 30 mL/min: Dose reduction by 50% required'
    });
    this.registerDrug({
      id: 'drg-0301',
      genericName: 'Therapeutic-Beta-Adrenergic-03B',
      brandNames: ['CarePharm-Beta-Adrenergic-31', 'CarePharm-Beta-Adrenergic-31-XR'],
      drugClass: 'Beta-Adrenergic Blockers',
      ndcPackageCode: '55910-003-01',
      strengths: ['20mg', '50mg', '100mg'],
      forms: ['Tablet', 'Capsule', 'Extended-Release', 'Oral Solution'][1],
      routes: ['Oral', 'Intravenous', 'Subcutaneous', 'Inhalation'][1],
      indications: ['Management of clinical conditions responsive to Beta-Adrenergic Blockers'],
      contraindications: ['Documented hypersensitivity to Therapeutic-Beta-Adrenergic-03B or related compounds'],
      pregnancyCategory: 'D',
      interactions: [
        {
          drug: 'Therapeutic-Direct-01A',
          severity: 'MODERATE',
          effect: 'Synergistic pharmacodynamic interaction and altered clearance.'
        }
      ],
      standardDosage: '1 dose PO daily with titration based on clinical monitoring',
      renalAdjustment: 'eGFR < 30 mL/min: Dose reduction by 50% required'
    });
    this.registerDrug({
      id: 'drg-0302',
      genericName: 'Therapeutic-Beta-Adrenergic-03C',
      brandNames: ['CarePharm-Beta-Adrenergic-32', 'CarePharm-Beta-Adrenergic-32-XR'],
      drugClass: 'Beta-Adrenergic Blockers',
      ndcPackageCode: '55910-003-02',
      strengths: ['30mg', '75mg', '150mg'],
      forms: ['Tablet', 'Capsule', 'Extended-Release', 'Oral Solution'][2],
      routes: ['Oral', 'Intravenous', 'Subcutaneous', 'Inhalation'][2],
      indications: ['Management of clinical conditions responsive to Beta-Adrenergic Blockers'],
      contraindications: ['Documented hypersensitivity to Therapeutic-Beta-Adrenergic-03C or related compounds'],
      pregnancyCategory: 'D',
      interactions: [
        {
          drug: 'Therapeutic-Direct-01A',
          severity: 'MODERATE',
          effect: 'Synergistic pharmacodynamic interaction and altered clearance.'
        }
      ],
      standardDosage: '1 dose PO daily with titration based on clinical monitoring',
      renalAdjustment: 'eGFR < 30 mL/min: Dose reduction by 50% required'
    });
    this.registerDrug({
      id: 'drg-0303',
      genericName: 'Therapeutic-Beta-Adrenergic-03D',
      brandNames: ['CarePharm-Beta-Adrenergic-33', 'CarePharm-Beta-Adrenergic-33-XR'],
      drugClass: 'Beta-Adrenergic Blockers',
      ndcPackageCode: '55910-003-03',
      strengths: ['40mg', '100mg', '200mg'],
      forms: ['Tablet', 'Capsule', 'Extended-Release', 'Oral Solution'][3],
      routes: ['Oral', 'Intravenous', 'Subcutaneous', 'Inhalation'][3],
      indications: ['Management of clinical conditions responsive to Beta-Adrenergic Blockers'],
      contraindications: ['Documented hypersensitivity to Therapeutic-Beta-Adrenergic-03D or related compounds'],
      pregnancyCategory: 'D',
      interactions: [
        {
          drug: 'Therapeutic-Direct-01A',
          severity: 'MODERATE',
          effect: 'Synergistic pharmacodynamic interaction and altered clearance.'
        }
      ],
      standardDosage: '1 dose PO daily with titration based on clinical monitoring',
      renalAdjustment: 'eGFR < 30 mL/min: Dose reduction by 50% required'
    });
    this.registerDrug({
      id: 'drg-0304',
      genericName: 'Therapeutic-Beta-Adrenergic-03E',
      brandNames: ['CarePharm-Beta-Adrenergic-34', 'CarePharm-Beta-Adrenergic-34-XR'],
      drugClass: 'Beta-Adrenergic Blockers',
      ndcPackageCode: '55910-003-04',
      strengths: ['50mg', '125mg', '250mg'],
      forms: ['Tablet', 'Capsule', 'Extended-Release', 'Oral Solution'][0],
      routes: ['Oral', 'Intravenous', 'Subcutaneous', 'Inhalation'][0],
      indications: ['Management of clinical conditions responsive to Beta-Adrenergic Blockers'],
      contraindications: ['Documented hypersensitivity to Therapeutic-Beta-Adrenergic-03E or related compounds'],
      pregnancyCategory: 'D',
      interactions: [
        {
          drug: 'Therapeutic-Direct-01A',
          severity: 'MODERATE',
          effect: 'Synergistic pharmacodynamic interaction and altered clearance.'
        }
      ],
      standardDosage: '1 dose PO daily with titration based on clinical monitoring',
      renalAdjustment: 'eGFR < 30 mL/min: Dose reduction by 50% required'
    });
    this.registerDrug({
      id: 'drg-0305',
      genericName: 'Therapeutic-Beta-Adrenergic-03F',
      brandNames: ['CarePharm-Beta-Adrenergic-35', 'CarePharm-Beta-Adrenergic-35-XR'],
      drugClass: 'Beta-Adrenergic Blockers',
      ndcPackageCode: '55910-003-05',
      strengths: ['60mg', '150mg', '300mg'],
      forms: ['Tablet', 'Capsule', 'Extended-Release', 'Oral Solution'][1],
      routes: ['Oral', 'Intravenous', 'Subcutaneous', 'Inhalation'][1],
      indications: ['Management of clinical conditions responsive to Beta-Adrenergic Blockers'],
      contraindications: ['Documented hypersensitivity to Therapeutic-Beta-Adrenergic-03F or related compounds'],
      pregnancyCategory: 'D',
      interactions: [
        {
          drug: 'Therapeutic-Direct-01A',
          severity: 'MODERATE',
          effect: 'Synergistic pharmacodynamic interaction and altered clearance.'
        }
      ],
      standardDosage: '1 dose PO daily with titration based on clinical monitoring',
      renalAdjustment: 'eGFR < 30 mL/min: Dose reduction by 50% required'
    });
    this.registerDrug({
      id: 'drg-0400',
      genericName: 'Therapeutic-Calcium-04A',
      brandNames: ['CarePharm-Calcium-40', 'CarePharm-Calcium-40-XR'],
      drugClass: 'Calcium Channel Blockers',
      ndcPackageCode: '55910-004-00',
      strengths: ['10mg', '25mg', '50mg'],
      forms: ['Tablet', 'Capsule', 'Extended-Release', 'Oral Solution'][0],
      routes: ['Oral', 'Intravenous', 'Subcutaneous', 'Inhalation'][0],
      indications: ['Management of clinical conditions responsive to Calcium Channel Blockers'],
      contraindications: ['Documented hypersensitivity to Therapeutic-Calcium-04A or related compounds'],
      pregnancyCategory: 'X',
      interactions: [
        {
          drug: 'Therapeutic-Antiplatelet-01A',
          severity: 'HIGH',
          effect: 'Synergistic pharmacodynamic interaction and altered clearance.'
        }
      ],
      standardDosage: '1 dose PO daily with titration based on clinical monitoring',
      renalAdjustment: 'eGFR < 30 mL/min: Dose reduction by 50% required'
    });
    this.registerDrug({
      id: 'drg-0401',
      genericName: 'Therapeutic-Calcium-04B',
      brandNames: ['CarePharm-Calcium-41', 'CarePharm-Calcium-41-XR'],
      drugClass: 'Calcium Channel Blockers',
      ndcPackageCode: '55910-004-01',
      strengths: ['20mg', '50mg', '100mg'],
      forms: ['Tablet', 'Capsule', 'Extended-Release', 'Oral Solution'][1],
      routes: ['Oral', 'Intravenous', 'Subcutaneous', 'Inhalation'][1],
      indications: ['Management of clinical conditions responsive to Calcium Channel Blockers'],
      contraindications: ['Documented hypersensitivity to Therapeutic-Calcium-04B or related compounds'],
      pregnancyCategory: 'X',
      interactions: [
        {
          drug: 'Therapeutic-Antiplatelet-01A',
          severity: 'HIGH',
          effect: 'Synergistic pharmacodynamic interaction and altered clearance.'
        }
      ],
      standardDosage: '1 dose PO daily with titration based on clinical monitoring',
      renalAdjustment: 'eGFR < 30 mL/min: Dose reduction by 50% required'
    });
    this.registerDrug({
      id: 'drg-0402',
      genericName: 'Therapeutic-Calcium-04C',
      brandNames: ['CarePharm-Calcium-42', 'CarePharm-Calcium-42-XR'],
      drugClass: 'Calcium Channel Blockers',
      ndcPackageCode: '55910-004-02',
      strengths: ['30mg', '75mg', '150mg'],
      forms: ['Tablet', 'Capsule', 'Extended-Release', 'Oral Solution'][2],
      routes: ['Oral', 'Intravenous', 'Subcutaneous', 'Inhalation'][2],
      indications: ['Management of clinical conditions responsive to Calcium Channel Blockers'],
      contraindications: ['Documented hypersensitivity to Therapeutic-Calcium-04C or related compounds'],
      pregnancyCategory: 'X',
      interactions: [
        {
          drug: 'Therapeutic-Antiplatelet-01A',
          severity: 'HIGH',
          effect: 'Synergistic pharmacodynamic interaction and altered clearance.'
        }
      ],
      standardDosage: '1 dose PO daily with titration based on clinical monitoring',
      renalAdjustment: 'eGFR < 30 mL/min: Dose reduction by 50% required'
    });
    this.registerDrug({
      id: 'drg-0403',
      genericName: 'Therapeutic-Calcium-04D',
      brandNames: ['CarePharm-Calcium-43', 'CarePharm-Calcium-43-XR'],
      drugClass: 'Calcium Channel Blockers',
      ndcPackageCode: '55910-004-03',
      strengths: ['40mg', '100mg', '200mg'],
      forms: ['Tablet', 'Capsule', 'Extended-Release', 'Oral Solution'][3],
      routes: ['Oral', 'Intravenous', 'Subcutaneous', 'Inhalation'][3],
      indications: ['Management of clinical conditions responsive to Calcium Channel Blockers'],
      contraindications: ['Documented hypersensitivity to Therapeutic-Calcium-04D or related compounds'],
      pregnancyCategory: 'X',
      interactions: [
        {
          drug: 'Therapeutic-Antiplatelet-01A',
          severity: 'HIGH',
          effect: 'Synergistic pharmacodynamic interaction and altered clearance.'
        }
      ],
      standardDosage: '1 dose PO daily with titration based on clinical monitoring',
      renalAdjustment: 'eGFR < 30 mL/min: Dose reduction by 50% required'
    });
    this.registerDrug({
      id: 'drg-0404',
      genericName: 'Therapeutic-Calcium-04E',
      brandNames: ['CarePharm-Calcium-44', 'CarePharm-Calcium-44-XR'],
      drugClass: 'Calcium Channel Blockers',
      ndcPackageCode: '55910-004-04',
      strengths: ['50mg', '125mg', '250mg'],
      forms: ['Tablet', 'Capsule', 'Extended-Release', 'Oral Solution'][0],
      routes: ['Oral', 'Intravenous', 'Subcutaneous', 'Inhalation'][0],
      indications: ['Management of clinical conditions responsive to Calcium Channel Blockers'],
      contraindications: ['Documented hypersensitivity to Therapeutic-Calcium-04E or related compounds'],
      pregnancyCategory: 'X',
      interactions: [
        {
          drug: 'Therapeutic-Antiplatelet-01A',
          severity: 'HIGH',
          effect: 'Synergistic pharmacodynamic interaction and altered clearance.'
        }
      ],
      standardDosage: '1 dose PO daily with titration based on clinical monitoring',
      renalAdjustment: 'eGFR < 30 mL/min: Dose reduction by 50% required'
    });
    this.registerDrug({
      id: 'drg-0405',
      genericName: 'Therapeutic-Calcium-04F',
      brandNames: ['CarePharm-Calcium-45', 'CarePharm-Calcium-45-XR'],
      drugClass: 'Calcium Channel Blockers',
      ndcPackageCode: '55910-004-05',
      strengths: ['60mg', '150mg', '300mg'],
      forms: ['Tablet', 'Capsule', 'Extended-Release', 'Oral Solution'][1],
      routes: ['Oral', 'Intravenous', 'Subcutaneous', 'Inhalation'][1],
      indications: ['Management of clinical conditions responsive to Calcium Channel Blockers'],
      contraindications: ['Documented hypersensitivity to Therapeutic-Calcium-04F or related compounds'],
      pregnancyCategory: 'X',
      interactions: [
        {
          drug: 'Therapeutic-Antiplatelet-01A',
          severity: 'HIGH',
          effect: 'Synergistic pharmacodynamic interaction and altered clearance.'
        }
      ],
      standardDosage: '1 dose PO daily with titration based on clinical monitoring',
      renalAdjustment: 'eGFR < 30 mL/min: Dose reduction by 50% required'
    });
    this.registerDrug({
      id: 'drg-0500',
      genericName: 'Therapeutic-Diuretics-05A',
      brandNames: ['CarePharm-Diuretics-50', 'CarePharm-Diuretics-50-XR'],
      drugClass: 'Diuretics (Loop and Thiazide)',
      ndcPackageCode: '55910-005-00',
      strengths: ['10mg', '25mg', '50mg'],
      forms: ['Tablet', 'Capsule', 'Extended-Release', 'Oral Solution'][0],
      routes: ['Oral', 'Intravenous', 'Subcutaneous', 'Inhalation'][0],
      indications: ['Management of clinical conditions responsive to Diuretics (Loop and Thiazide)'],
      contraindications: ['Documented hypersensitivity to Therapeutic-Diuretics-05A or related compounds'],
      pregnancyCategory: 'A',
      interactions: [
        {
          drug: 'Therapeutic-HMG-CoA-01A',
          severity: 'MODERATE',
          effect: 'Synergistic pharmacodynamic interaction and altered clearance.'
        }
      ],
      standardDosage: '1 dose PO daily with titration based on clinical monitoring',
      renalAdjustment: 'eGFR < 30 mL/min: Dose reduction by 50% required'
    });
    this.registerDrug({
      id: 'drg-0501',
      genericName: 'Therapeutic-Diuretics-05B',
      brandNames: ['CarePharm-Diuretics-51', 'CarePharm-Diuretics-51-XR'],
      drugClass: 'Diuretics (Loop and Thiazide)',
      ndcPackageCode: '55910-005-01',
      strengths: ['20mg', '50mg', '100mg'],
      forms: ['Tablet', 'Capsule', 'Extended-Release', 'Oral Solution'][1],
      routes: ['Oral', 'Intravenous', 'Subcutaneous', 'Inhalation'][1],
      indications: ['Management of clinical conditions responsive to Diuretics (Loop and Thiazide)'],
      contraindications: ['Documented hypersensitivity to Therapeutic-Diuretics-05B or related compounds'],
      pregnancyCategory: 'A',
      interactions: [
        {
          drug: 'Therapeutic-HMG-CoA-01A',
          severity: 'MODERATE',
          effect: 'Synergistic pharmacodynamic interaction and altered clearance.'
        }
      ],
      standardDosage: '1 dose PO daily with titration based on clinical monitoring',
      renalAdjustment: 'eGFR < 30 mL/min: Dose reduction by 50% required'
    });
    this.registerDrug({
      id: 'drg-0502',
      genericName: 'Therapeutic-Diuretics-05C',
      brandNames: ['CarePharm-Diuretics-52', 'CarePharm-Diuretics-52-XR'],
      drugClass: 'Diuretics (Loop and Thiazide)',
      ndcPackageCode: '55910-005-02',
      strengths: ['30mg', '75mg', '150mg'],
      forms: ['Tablet', 'Capsule', 'Extended-Release', 'Oral Solution'][2],
      routes: ['Oral', 'Intravenous', 'Subcutaneous', 'Inhalation'][2],
      indications: ['Management of clinical conditions responsive to Diuretics (Loop and Thiazide)'],
      contraindications: ['Documented hypersensitivity to Therapeutic-Diuretics-05C or related compounds'],
      pregnancyCategory: 'A',
      interactions: [
        {
          drug: 'Therapeutic-HMG-CoA-01A',
          severity: 'MODERATE',
          effect: 'Synergistic pharmacodynamic interaction and altered clearance.'
        }
      ],
      standardDosage: '1 dose PO daily with titration based on clinical monitoring',
      renalAdjustment: 'eGFR < 30 mL/min: Dose reduction by 50% required'
    });
    this.registerDrug({
      id: 'drg-0503',
      genericName: 'Therapeutic-Diuretics-05D',
      brandNames: ['CarePharm-Diuretics-53', 'CarePharm-Diuretics-53-XR'],
      drugClass: 'Diuretics (Loop and Thiazide)',
      ndcPackageCode: '55910-005-03',
      strengths: ['40mg', '100mg', '200mg'],
      forms: ['Tablet', 'Capsule', 'Extended-Release', 'Oral Solution'][3],
      routes: ['Oral', 'Intravenous', 'Subcutaneous', 'Inhalation'][3],
      indications: ['Management of clinical conditions responsive to Diuretics (Loop and Thiazide)'],
      contraindications: ['Documented hypersensitivity to Therapeutic-Diuretics-05D or related compounds'],
      pregnancyCategory: 'A',
      interactions: [
        {
          drug: 'Therapeutic-HMG-CoA-01A',
          severity: 'MODERATE',
          effect: 'Synergistic pharmacodynamic interaction and altered clearance.'
        }
      ],
      standardDosage: '1 dose PO daily with titration based on clinical monitoring',
      renalAdjustment: 'eGFR < 30 mL/min: Dose reduction by 50% required'
    });
    this.registerDrug({
      id: 'drg-0504',
      genericName: 'Therapeutic-Diuretics-05E',
      brandNames: ['CarePharm-Diuretics-54', 'CarePharm-Diuretics-54-XR'],
      drugClass: 'Diuretics (Loop and Thiazide)',
      ndcPackageCode: '55910-005-04',
      strengths: ['50mg', '125mg', '250mg'],
      forms: ['Tablet', 'Capsule', 'Extended-Release', 'Oral Solution'][0],
      routes: ['Oral', 'Intravenous', 'Subcutaneous', 'Inhalation'][0],
      indications: ['Management of clinical conditions responsive to Diuretics (Loop and Thiazide)'],
      contraindications: ['Documented hypersensitivity to Therapeutic-Diuretics-05E or related compounds'],
      pregnancyCategory: 'A',
      interactions: [
        {
          drug: 'Therapeutic-HMG-CoA-01A',
          severity: 'MODERATE',
          effect: 'Synergistic pharmacodynamic interaction and altered clearance.'
        }
      ],
      standardDosage: '1 dose PO daily with titration based on clinical monitoring',
      renalAdjustment: 'eGFR < 30 mL/min: Dose reduction by 50% required'
    });
    this.registerDrug({
      id: 'drg-0505',
      genericName: 'Therapeutic-Diuretics-05F',
      brandNames: ['CarePharm-Diuretics-55', 'CarePharm-Diuretics-55-XR'],
      drugClass: 'Diuretics (Loop and Thiazide)',
      ndcPackageCode: '55910-005-05',
      strengths: ['60mg', '150mg', '300mg'],
      forms: ['Tablet', 'Capsule', 'Extended-Release', 'Oral Solution'][1],
      routes: ['Oral', 'Intravenous', 'Subcutaneous', 'Inhalation'][1],
      indications: ['Management of clinical conditions responsive to Diuretics (Loop and Thiazide)'],
      contraindications: ['Documented hypersensitivity to Therapeutic-Diuretics-05F or related compounds'],
      pregnancyCategory: 'A',
      interactions: [
        {
          drug: 'Therapeutic-HMG-CoA-01A',
          severity: 'MODERATE',
          effect: 'Synergistic pharmacodynamic interaction and altered clearance.'
        }
      ],
      standardDosage: '1 dose PO daily with titration based on clinical monitoring',
      renalAdjustment: 'eGFR < 30 mL/min: Dose reduction by 50% required'
    });
    this.registerDrug({
      id: 'drg-0600',
      genericName: 'Therapeutic-Direct-06A',
      brandNames: ['CarePharm-Direct-60', 'CarePharm-Direct-60-XR'],
      drugClass: 'Direct Oral Anticoagulants (DOACs)',
      ndcPackageCode: '55910-006-00',
      strengths: ['10mg', '25mg', '50mg'],
      forms: ['Tablet', 'Capsule', 'Extended-Release', 'Oral Solution'][0],
      routes: ['Oral', 'Intravenous', 'Subcutaneous', 'Inhalation'][0],
      indications: ['Management of clinical conditions responsive to Direct Oral Anticoagulants (DOACs)'],
      contraindications: ['Documented hypersensitivity to Therapeutic-Direct-06A or related compounds'],
      pregnancyCategory: 'B',
      interactions: [
        {
          drug: 'Therapeutic-GLP-1-01A',
          severity: 'HIGH',
          effect: 'Synergistic pharmacodynamic interaction and altered clearance.'
        }
      ],
      standardDosage: '1 dose PO daily with titration based on clinical monitoring',
      renalAdjustment: 'eGFR < 30 mL/min: Dose reduction by 50% required'
    });
    this.registerDrug({
      id: 'drg-0601',
      genericName: 'Therapeutic-Direct-06B',
      brandNames: ['CarePharm-Direct-61', 'CarePharm-Direct-61-XR'],
      drugClass: 'Direct Oral Anticoagulants (DOACs)',
      ndcPackageCode: '55910-006-01',
      strengths: ['20mg', '50mg', '100mg'],
      forms: ['Tablet', 'Capsule', 'Extended-Release', 'Oral Solution'][1],
      routes: ['Oral', 'Intravenous', 'Subcutaneous', 'Inhalation'][1],
      indications: ['Management of clinical conditions responsive to Direct Oral Anticoagulants (DOACs)'],
      contraindications: ['Documented hypersensitivity to Therapeutic-Direct-06B or related compounds'],
      pregnancyCategory: 'B',
      interactions: [
        {
          drug: 'Therapeutic-GLP-1-01A',
          severity: 'HIGH',
          effect: 'Synergistic pharmacodynamic interaction and altered clearance.'
        }
      ],
      standardDosage: '1 dose PO daily with titration based on clinical monitoring',
      renalAdjustment: 'eGFR < 30 mL/min: Dose reduction by 50% required'
    });
    this.registerDrug({
      id: 'drg-0602',
      genericName: 'Therapeutic-Direct-06C',
      brandNames: ['CarePharm-Direct-62', 'CarePharm-Direct-62-XR'],
      drugClass: 'Direct Oral Anticoagulants (DOACs)',
      ndcPackageCode: '55910-006-02',
      strengths: ['30mg', '75mg', '150mg'],
      forms: ['Tablet', 'Capsule', 'Extended-Release', 'Oral Solution'][2],
      routes: ['Oral', 'Intravenous', 'Subcutaneous', 'Inhalation'][2],
      indications: ['Management of clinical conditions responsive to Direct Oral Anticoagulants (DOACs)'],
      contraindications: ['Documented hypersensitivity to Therapeutic-Direct-06C or related compounds'],
      pregnancyCategory: 'B',
      interactions: [
        {
          drug: 'Therapeutic-GLP-1-01A',
          severity: 'HIGH',
          effect: 'Synergistic pharmacodynamic interaction and altered clearance.'
        }
      ],
      standardDosage: '1 dose PO daily with titration based on clinical monitoring',
      renalAdjustment: 'eGFR < 30 mL/min: Dose reduction by 50% required'
    });
    this.registerDrug({
      id: 'drg-0603',
      genericName: 'Therapeutic-Direct-06D',
      brandNames: ['CarePharm-Direct-63', 'CarePharm-Direct-63-XR'],
      drugClass: 'Direct Oral Anticoagulants (DOACs)',
      ndcPackageCode: '55910-006-03',
      strengths: ['40mg', '100mg', '200mg'],
      forms: ['Tablet', 'Capsule', 'Extended-Release', 'Oral Solution'][3],
      routes: ['Oral', 'Intravenous', 'Subcutaneous', 'Inhalation'][3],
      indications: ['Management of clinical conditions responsive to Direct Oral Anticoagulants (DOACs)'],
      contraindications: ['Documented hypersensitivity to Therapeutic-Direct-06D or related compounds'],
      pregnancyCategory: 'B',
      interactions: [
        {
          drug: 'Therapeutic-GLP-1-01A',
          severity: 'HIGH',
          effect: 'Synergistic pharmacodynamic interaction and altered clearance.'
        }
      ],
      standardDosage: '1 dose PO daily with titration based on clinical monitoring',
      renalAdjustment: 'eGFR < 30 mL/min: Dose reduction by 50% required'
    });
    this.registerDrug({
      id: 'drg-0604',
      genericName: 'Therapeutic-Direct-06E',
      brandNames: ['CarePharm-Direct-64', 'CarePharm-Direct-64-XR'],
      drugClass: 'Direct Oral Anticoagulants (DOACs)',
      ndcPackageCode: '55910-006-04',
      strengths: ['50mg', '125mg', '250mg'],
      forms: ['Tablet', 'Capsule', 'Extended-Release', 'Oral Solution'][0],
      routes: ['Oral', 'Intravenous', 'Subcutaneous', 'Inhalation'][0],
      indications: ['Management of clinical conditions responsive to Direct Oral Anticoagulants (DOACs)'],
      contraindications: ['Documented hypersensitivity to Therapeutic-Direct-06E or related compounds'],
      pregnancyCategory: 'B',
      interactions: [
        {
          drug: 'Therapeutic-GLP-1-01A',
          severity: 'HIGH',
          effect: 'Synergistic pharmacodynamic interaction and altered clearance.'
        }
      ],
      standardDosage: '1 dose PO daily with titration based on clinical monitoring',
      renalAdjustment: 'eGFR < 30 mL/min: Dose reduction by 50% required'
    });
    this.registerDrug({
      id: 'drg-0605',
      genericName: 'Therapeutic-Direct-06F',
      brandNames: ['CarePharm-Direct-65', 'CarePharm-Direct-65-XR'],
      drugClass: 'Direct Oral Anticoagulants (DOACs)',
      ndcPackageCode: '55910-006-05',
      strengths: ['60mg', '150mg', '300mg'],
      forms: ['Tablet', 'Capsule', 'Extended-Release', 'Oral Solution'][1],
      routes: ['Oral', 'Intravenous', 'Subcutaneous', 'Inhalation'][1],
      indications: ['Management of clinical conditions responsive to Direct Oral Anticoagulants (DOACs)'],
      contraindications: ['Documented hypersensitivity to Therapeutic-Direct-06F or related compounds'],
      pregnancyCategory: 'B',
      interactions: [
        {
          drug: 'Therapeutic-GLP-1-01A',
          severity: 'HIGH',
          effect: 'Synergistic pharmacodynamic interaction and altered clearance.'
        }
      ],
      standardDosage: '1 dose PO daily with titration based on clinical monitoring',
      renalAdjustment: 'eGFR < 30 mL/min: Dose reduction by 50% required'
    });
    this.registerDrug({
      id: 'drg-0700',
      genericName: 'Therapeutic-Antiplatelet-07A',
      brandNames: ['CarePharm-Antiplatelet-70', 'CarePharm-Antiplatelet-70-XR'],
      drugClass: 'Antiplatelet Agents',
      ndcPackageCode: '55910-007-00',
      strengths: ['10mg', '25mg', '50mg'],
      forms: ['Tablet', 'Capsule', 'Extended-Release', 'Oral Solution'][0],
      routes: ['Oral', 'Intravenous', 'Subcutaneous', 'Inhalation'][0],
      indications: ['Management of clinical conditions responsive to Antiplatelet Agents'],
      contraindications: ['Documented hypersensitivity to Therapeutic-Antiplatelet-07A or related compounds'],
      pregnancyCategory: 'C',
      interactions: [
        {
          drug: 'Therapeutic-SGLT2-01A',
          severity: 'MODERATE',
          effect: 'Synergistic pharmacodynamic interaction and altered clearance.'
        }
      ],
      standardDosage: '1 dose PO daily with titration based on clinical monitoring',
      renalAdjustment: 'eGFR < 30 mL/min: Dose reduction by 50% required'
    });
    this.registerDrug({
      id: 'drg-0701',
      genericName: 'Therapeutic-Antiplatelet-07B',
      brandNames: ['CarePharm-Antiplatelet-71', 'CarePharm-Antiplatelet-71-XR'],
      drugClass: 'Antiplatelet Agents',
      ndcPackageCode: '55910-007-01',
      strengths: ['20mg', '50mg', '100mg'],
      forms: ['Tablet', 'Capsule', 'Extended-Release', 'Oral Solution'][1],
      routes: ['Oral', 'Intravenous', 'Subcutaneous', 'Inhalation'][1],
      indications: ['Management of clinical conditions responsive to Antiplatelet Agents'],
      contraindications: ['Documented hypersensitivity to Therapeutic-Antiplatelet-07B or related compounds'],
      pregnancyCategory: 'C',
      interactions: [
        {
          drug: 'Therapeutic-SGLT2-01A',
          severity: 'MODERATE',
          effect: 'Synergistic pharmacodynamic interaction and altered clearance.'
        }
      ],
      standardDosage: '1 dose PO daily with titration based on clinical monitoring',
      renalAdjustment: 'eGFR < 30 mL/min: Dose reduction by 50% required'
    });
    this.registerDrug({
      id: 'drg-0702',
      genericName: 'Therapeutic-Antiplatelet-07C',
      brandNames: ['CarePharm-Antiplatelet-72', 'CarePharm-Antiplatelet-72-XR'],
      drugClass: 'Antiplatelet Agents',
      ndcPackageCode: '55910-007-02',
      strengths: ['30mg', '75mg', '150mg'],
      forms: ['Tablet', 'Capsule', 'Extended-Release', 'Oral Solution'][2],
      routes: ['Oral', 'Intravenous', 'Subcutaneous', 'Inhalation'][2],
      indications: ['Management of clinical conditions responsive to Antiplatelet Agents'],
      contraindications: ['Documented hypersensitivity to Therapeutic-Antiplatelet-07C or related compounds'],
      pregnancyCategory: 'C',
      interactions: [
        {
          drug: 'Therapeutic-SGLT2-01A',
          severity: 'MODERATE',
          effect: 'Synergistic pharmacodynamic interaction and altered clearance.'
        }
      ],
      standardDosage: '1 dose PO daily with titration based on clinical monitoring',
      renalAdjustment: 'eGFR < 30 mL/min: Dose reduction by 50% required'
    });
    this.registerDrug({
      id: 'drg-0703',
      genericName: 'Therapeutic-Antiplatelet-07D',
      brandNames: ['CarePharm-Antiplatelet-73', 'CarePharm-Antiplatelet-73-XR'],
      drugClass: 'Antiplatelet Agents',
      ndcPackageCode: '55910-007-03',
      strengths: ['40mg', '100mg', '200mg'],
      forms: ['Tablet', 'Capsule', 'Extended-Release', 'Oral Solution'][3],
      routes: ['Oral', 'Intravenous', 'Subcutaneous', 'Inhalation'][3],
      indications: ['Management of clinical conditions responsive to Antiplatelet Agents'],
      contraindications: ['Documented hypersensitivity to Therapeutic-Antiplatelet-07D or related compounds'],
      pregnancyCategory: 'C',
      interactions: [
        {
          drug: 'Therapeutic-SGLT2-01A',
          severity: 'MODERATE',
          effect: 'Synergistic pharmacodynamic interaction and altered clearance.'
        }
      ],
      standardDosage: '1 dose PO daily with titration based on clinical monitoring',
      renalAdjustment: 'eGFR < 30 mL/min: Dose reduction by 50% required'
    });
    this.registerDrug({
      id: 'drg-0704',
      genericName: 'Therapeutic-Antiplatelet-07E',
      brandNames: ['CarePharm-Antiplatelet-74', 'CarePharm-Antiplatelet-74-XR'],
      drugClass: 'Antiplatelet Agents',
      ndcPackageCode: '55910-007-04',
      strengths: ['50mg', '125mg', '250mg'],
      forms: ['Tablet', 'Capsule', 'Extended-Release', 'Oral Solution'][0],
      routes: ['Oral', 'Intravenous', 'Subcutaneous', 'Inhalation'][0],
      indications: ['Management of clinical conditions responsive to Antiplatelet Agents'],
      contraindications: ['Documented hypersensitivity to Therapeutic-Antiplatelet-07E or related compounds'],
      pregnancyCategory: 'C',
      interactions: [
        {
          drug: 'Therapeutic-SGLT2-01A',
          severity: 'MODERATE',
          effect: 'Synergistic pharmacodynamic interaction and altered clearance.'
        }
      ],
      standardDosage: '1 dose PO daily with titration based on clinical monitoring',
      renalAdjustment: 'eGFR < 30 mL/min: Dose reduction by 50% required'
    });
    this.registerDrug({
      id: 'drg-0705',
      genericName: 'Therapeutic-Antiplatelet-07F',
      brandNames: ['CarePharm-Antiplatelet-75', 'CarePharm-Antiplatelet-75-XR'],
      drugClass: 'Antiplatelet Agents',
      ndcPackageCode: '55910-007-05',
      strengths: ['60mg', '150mg', '300mg'],
      forms: ['Tablet', 'Capsule', 'Extended-Release', 'Oral Solution'][1],
      routes: ['Oral', 'Intravenous', 'Subcutaneous', 'Inhalation'][1],
      indications: ['Management of clinical conditions responsive to Antiplatelet Agents'],
      contraindications: ['Documented hypersensitivity to Therapeutic-Antiplatelet-07F or related compounds'],
      pregnancyCategory: 'C',
      interactions: [
        {
          drug: 'Therapeutic-SGLT2-01A',
          severity: 'MODERATE',
          effect: 'Synergistic pharmacodynamic interaction and altered clearance.'
        }
      ],
      standardDosage: '1 dose PO daily with titration based on clinical monitoring',
      renalAdjustment: 'eGFR < 30 mL/min: Dose reduction by 50% required'
    });
    this.registerDrug({
      id: 'drg-0800',
      genericName: 'Therapeutic-HMG-CoA-08A',
      brandNames: ['CarePharm-HMG-CoA-80', 'CarePharm-HMG-CoA-80-XR'],
      drugClass: 'HMG-CoA Reductase Inhibitors (Statins)',
      ndcPackageCode: '55910-008-00',
      strengths: ['10mg', '25mg', '50mg'],
      forms: ['Tablet', 'Capsule', 'Extended-Release', 'Oral Solution'][0],
      routes: ['Oral', 'Intravenous', 'Subcutaneous', 'Inhalation'][0],
      indications: ['Management of clinical conditions responsive to HMG-CoA Reductase Inhibitors (Statins)'],
      contraindications: ['Documented hypersensitivity to Therapeutic-HMG-CoA-08A or related compounds'],
      pregnancyCategory: 'D',
      interactions: [
        {
          drug: 'Therapeutic-DPP-4-01A',
          severity: 'HIGH',
          effect: 'Synergistic pharmacodynamic interaction and altered clearance.'
        }
      ],
      standardDosage: '1 dose PO daily with titration based on clinical monitoring',
      renalAdjustment: 'eGFR < 30 mL/min: Dose reduction by 50% required'
    });
    this.registerDrug({
      id: 'drg-0801',
      genericName: 'Therapeutic-HMG-CoA-08B',
      brandNames: ['CarePharm-HMG-CoA-81', 'CarePharm-HMG-CoA-81-XR'],
      drugClass: 'HMG-CoA Reductase Inhibitors (Statins)',
      ndcPackageCode: '55910-008-01',
      strengths: ['20mg', '50mg', '100mg'],
      forms: ['Tablet', 'Capsule', 'Extended-Release', 'Oral Solution'][1],
      routes: ['Oral', 'Intravenous', 'Subcutaneous', 'Inhalation'][1],
      indications: ['Management of clinical conditions responsive to HMG-CoA Reductase Inhibitors (Statins)'],
      contraindications: ['Documented hypersensitivity to Therapeutic-HMG-CoA-08B or related compounds'],
      pregnancyCategory: 'D',
      interactions: [
        {
          drug: 'Therapeutic-DPP-4-01A',
          severity: 'HIGH',
          effect: 'Synergistic pharmacodynamic interaction and altered clearance.'
        }
      ],
      standardDosage: '1 dose PO daily with titration based on clinical monitoring',
      renalAdjustment: 'eGFR < 30 mL/min: Dose reduction by 50% required'
    });
    this.registerDrug({
      id: 'drg-0802',
      genericName: 'Therapeutic-HMG-CoA-08C',
      brandNames: ['CarePharm-HMG-CoA-82', 'CarePharm-HMG-CoA-82-XR'],
      drugClass: 'HMG-CoA Reductase Inhibitors (Statins)',
      ndcPackageCode: '55910-008-02',
      strengths: ['30mg', '75mg', '150mg'],
      forms: ['Tablet', 'Capsule', 'Extended-Release', 'Oral Solution'][2],
      routes: ['Oral', 'Intravenous', 'Subcutaneous', 'Inhalation'][2],
      indications: ['Management of clinical conditions responsive to HMG-CoA Reductase Inhibitors (Statins)'],
      contraindications: ['Documented hypersensitivity to Therapeutic-HMG-CoA-08C or related compounds'],
      pregnancyCategory: 'D',
      interactions: [
        {
          drug: 'Therapeutic-DPP-4-01A',
          severity: 'HIGH',
          effect: 'Synergistic pharmacodynamic interaction and altered clearance.'
        }
      ],
      standardDosage: '1 dose PO daily with titration based on clinical monitoring',
      renalAdjustment: 'eGFR < 30 mL/min: Dose reduction by 50% required'
    });
    this.registerDrug({
      id: 'drg-0803',
      genericName: 'Therapeutic-HMG-CoA-08D',
      brandNames: ['CarePharm-HMG-CoA-83', 'CarePharm-HMG-CoA-83-XR'],
      drugClass: 'HMG-CoA Reductase Inhibitors (Statins)',
      ndcPackageCode: '55910-008-03',
      strengths: ['40mg', '100mg', '200mg'],
      forms: ['Tablet', 'Capsule', 'Extended-Release', 'Oral Solution'][3],
      routes: ['Oral', 'Intravenous', 'Subcutaneous', 'Inhalation'][3],
      indications: ['Management of clinical conditions responsive to HMG-CoA Reductase Inhibitors (Statins)'],
      contraindications: ['Documented hypersensitivity to Therapeutic-HMG-CoA-08D or related compounds'],
      pregnancyCategory: 'D',
      interactions: [
        {
          drug: 'Therapeutic-DPP-4-01A',
          severity: 'HIGH',
          effect: 'Synergistic pharmacodynamic interaction and altered clearance.'
        }
      ],
      standardDosage: '1 dose PO daily with titration based on clinical monitoring',
      renalAdjustment: 'eGFR < 30 mL/min: Dose reduction by 50% required'
    });
    this.registerDrug({
      id: 'drg-0804',
      genericName: 'Therapeutic-HMG-CoA-08E',
      brandNames: ['CarePharm-HMG-CoA-84', 'CarePharm-HMG-CoA-84-XR'],
      drugClass: 'HMG-CoA Reductase Inhibitors (Statins)',
      ndcPackageCode: '55910-008-04',
      strengths: ['50mg', '125mg', '250mg'],
      forms: ['Tablet', 'Capsule', 'Extended-Release', 'Oral Solution'][0],
      routes: ['Oral', 'Intravenous', 'Subcutaneous', 'Inhalation'][0],
      indications: ['Management of clinical conditions responsive to HMG-CoA Reductase Inhibitors (Statins)'],
      contraindications: ['Documented hypersensitivity to Therapeutic-HMG-CoA-08E or related compounds'],
      pregnancyCategory: 'D',
      interactions: [
        {
          drug: 'Therapeutic-DPP-4-01A',
          severity: 'HIGH',
          effect: 'Synergistic pharmacodynamic interaction and altered clearance.'
        }
      ],
      standardDosage: '1 dose PO daily with titration based on clinical monitoring',
      renalAdjustment: 'eGFR < 30 mL/min: Dose reduction by 50% required'
    });
    this.registerDrug({
      id: 'drg-0805',
      genericName: 'Therapeutic-HMG-CoA-08F',
      brandNames: ['CarePharm-HMG-CoA-85', 'CarePharm-HMG-CoA-85-XR'],
      drugClass: 'HMG-CoA Reductase Inhibitors (Statins)',
      ndcPackageCode: '55910-008-05',
      strengths: ['60mg', '150mg', '300mg'],
      forms: ['Tablet', 'Capsule', 'Extended-Release', 'Oral Solution'][1],
      routes: ['Oral', 'Intravenous', 'Subcutaneous', 'Inhalation'][1],
      indications: ['Management of clinical conditions responsive to HMG-CoA Reductase Inhibitors (Statins)'],
      contraindications: ['Documented hypersensitivity to Therapeutic-HMG-CoA-08F or related compounds'],
      pregnancyCategory: 'D',
      interactions: [
        {
          drug: 'Therapeutic-DPP-4-01A',
          severity: 'HIGH',
          effect: 'Synergistic pharmacodynamic interaction and altered clearance.'
        }
      ],
      standardDosage: '1 dose PO daily with titration based on clinical monitoring',
      renalAdjustment: 'eGFR < 30 mL/min: Dose reduction by 50% required'
    });
    this.registerDrug({
      id: 'drg-0900',
      genericName: 'Therapeutic-GLP-1-09A',
      brandNames: ['CarePharm-GLP-1-90', 'CarePharm-GLP-1-90-XR'],
      drugClass: 'GLP-1 Receptor Agonists',
      ndcPackageCode: '55910-009-00',
      strengths: ['10mg', '25mg', '50mg'],
      forms: ['Tablet', 'Capsule', 'Extended-Release', 'Oral Solution'][0],
      routes: ['Oral', 'Intravenous', 'Subcutaneous', 'Inhalation'][0],
      indications: ['Management of clinical conditions responsive to GLP-1 Receptor Agonists'],
      contraindications: ['Documented hypersensitivity to Therapeutic-GLP-1-09A or related compounds'],
      pregnancyCategory: 'X',
      interactions: [
        {
          drug: 'Therapeutic-Basal-01A',
          severity: 'MODERATE',
          effect: 'Synergistic pharmacodynamic interaction and altered clearance.'
        }
      ],
      standardDosage: '1 dose PO daily with titration based on clinical monitoring',
      renalAdjustment: 'eGFR < 30 mL/min: Dose reduction by 50% required'
    });
    this.registerDrug({
      id: 'drg-0901',
      genericName: 'Therapeutic-GLP-1-09B',
      brandNames: ['CarePharm-GLP-1-91', 'CarePharm-GLP-1-91-XR'],
      drugClass: 'GLP-1 Receptor Agonists',
      ndcPackageCode: '55910-009-01',
      strengths: ['20mg', '50mg', '100mg'],
      forms: ['Tablet', 'Capsule', 'Extended-Release', 'Oral Solution'][1],
      routes: ['Oral', 'Intravenous', 'Subcutaneous', 'Inhalation'][1],
      indications: ['Management of clinical conditions responsive to GLP-1 Receptor Agonists'],
      contraindications: ['Documented hypersensitivity to Therapeutic-GLP-1-09B or related compounds'],
      pregnancyCategory: 'X',
      interactions: [
        {
          drug: 'Therapeutic-Basal-01A',
          severity: 'MODERATE',
          effect: 'Synergistic pharmacodynamic interaction and altered clearance.'
        }
      ],
      standardDosage: '1 dose PO daily with titration based on clinical monitoring',
      renalAdjustment: 'eGFR < 30 mL/min: Dose reduction by 50% required'
    });
    this.registerDrug({
      id: 'drg-0902',
      genericName: 'Therapeutic-GLP-1-09C',
      brandNames: ['CarePharm-GLP-1-92', 'CarePharm-GLP-1-92-XR'],
      drugClass: 'GLP-1 Receptor Agonists',
      ndcPackageCode: '55910-009-02',
      strengths: ['30mg', '75mg', '150mg'],
      forms: ['Tablet', 'Capsule', 'Extended-Release', 'Oral Solution'][2],
      routes: ['Oral', 'Intravenous', 'Subcutaneous', 'Inhalation'][2],
      indications: ['Management of clinical conditions responsive to GLP-1 Receptor Agonists'],
      contraindications: ['Documented hypersensitivity to Therapeutic-GLP-1-09C or related compounds'],
      pregnancyCategory: 'X',
      interactions: [
        {
          drug: 'Therapeutic-Basal-01A',
          severity: 'MODERATE',
          effect: 'Synergistic pharmacodynamic interaction and altered clearance.'
        }
      ],
      standardDosage: '1 dose PO daily with titration based on clinical monitoring',
      renalAdjustment: 'eGFR < 30 mL/min: Dose reduction by 50% required'
    });
    this.registerDrug({
      id: 'drg-0903',
      genericName: 'Therapeutic-GLP-1-09D',
      brandNames: ['CarePharm-GLP-1-93', 'CarePharm-GLP-1-93-XR'],
      drugClass: 'GLP-1 Receptor Agonists',
      ndcPackageCode: '55910-009-03',
      strengths: ['40mg', '100mg', '200mg'],
      forms: ['Tablet', 'Capsule', 'Extended-Release', 'Oral Solution'][3],
      routes: ['Oral', 'Intravenous', 'Subcutaneous', 'Inhalation'][3],
      indications: ['Management of clinical conditions responsive to GLP-1 Receptor Agonists'],
      contraindications: ['Documented hypersensitivity to Therapeutic-GLP-1-09D or related compounds'],
      pregnancyCategory: 'X',
      interactions: [
        {
          drug: 'Therapeutic-Basal-01A',
          severity: 'MODERATE',
          effect: 'Synergistic pharmacodynamic interaction and altered clearance.'
        }
      ],
      standardDosage: '1 dose PO daily with titration based on clinical monitoring',
      renalAdjustment: 'eGFR < 30 mL/min: Dose reduction by 50% required'
    });
    this.registerDrug({
      id: 'drg-0904',
      genericName: 'Therapeutic-GLP-1-09E',
      brandNames: ['CarePharm-GLP-1-94', 'CarePharm-GLP-1-94-XR'],
      drugClass: 'GLP-1 Receptor Agonists',
      ndcPackageCode: '55910-009-04',
      strengths: ['50mg', '125mg', '250mg'],
      forms: ['Tablet', 'Capsule', 'Extended-Release', 'Oral Solution'][0],
      routes: ['Oral', 'Intravenous', 'Subcutaneous', 'Inhalation'][0],
      indications: ['Management of clinical conditions responsive to GLP-1 Receptor Agonists'],
      contraindications: ['Documented hypersensitivity to Therapeutic-GLP-1-09E or related compounds'],
      pregnancyCategory: 'X',
      interactions: [
        {
          drug: 'Therapeutic-Basal-01A',
          severity: 'MODERATE',
          effect: 'Synergistic pharmacodynamic interaction and altered clearance.'
        }
      ],
      standardDosage: '1 dose PO daily with titration based on clinical monitoring',
      renalAdjustment: 'eGFR < 30 mL/min: Dose reduction by 50% required'
    });
    this.registerDrug({
      id: 'drg-0905',
      genericName: 'Therapeutic-GLP-1-09F',
      brandNames: ['CarePharm-GLP-1-95', 'CarePharm-GLP-1-95-XR'],
      drugClass: 'GLP-1 Receptor Agonists',
      ndcPackageCode: '55910-009-05',
      strengths: ['60mg', '150mg', '300mg'],
      forms: ['Tablet', 'Capsule', 'Extended-Release', 'Oral Solution'][1],
      routes: ['Oral', 'Intravenous', 'Subcutaneous', 'Inhalation'][1],
      indications: ['Management of clinical conditions responsive to GLP-1 Receptor Agonists'],
      contraindications: ['Documented hypersensitivity to Therapeutic-GLP-1-09F or related compounds'],
      pregnancyCategory: 'X',
      interactions: [
        {
          drug: 'Therapeutic-Basal-01A',
          severity: 'MODERATE',
          effect: 'Synergistic pharmacodynamic interaction and altered clearance.'
        }
      ],
      standardDosage: '1 dose PO daily with titration based on clinical monitoring',
      renalAdjustment: 'eGFR < 30 mL/min: Dose reduction by 50% required'
    });
    this.registerDrug({
      id: 'drg-1000',
      genericName: 'Therapeutic-SGLT2-10A',
      brandNames: ['CarePharm-SGLT2-100', 'CarePharm-SGLT2-100-XR'],
      drugClass: 'SGLT2 Inhibitors',
      ndcPackageCode: '55910-010-00',
      strengths: ['10mg', '25mg', '50mg'],
      forms: ['Tablet', 'Capsule', 'Extended-Release', 'Oral Solution'][0],
      routes: ['Oral', 'Intravenous', 'Subcutaneous', 'Inhalation'][0],
      indications: ['Management of clinical conditions responsive to SGLT2 Inhibitors'],
      contraindications: ['Documented hypersensitivity to Therapeutic-SGLT2-10A or related compounds'],
      pregnancyCategory: 'A',
      interactions: [
        {
          drug: 'Therapeutic-Inhaled-01A',
          severity: 'HIGH',
          effect: 'Synergistic pharmacodynamic interaction and altered clearance.'
        }
      ],
      standardDosage: '1 dose PO daily with titration based on clinical monitoring',
      renalAdjustment: 'eGFR < 30 mL/min: Dose reduction by 50% required'
    });
    this.registerDrug({
      id: 'drg-1001',
      genericName: 'Therapeutic-SGLT2-10B',
      brandNames: ['CarePharm-SGLT2-101', 'CarePharm-SGLT2-101-XR'],
      drugClass: 'SGLT2 Inhibitors',
      ndcPackageCode: '55910-010-01',
      strengths: ['20mg', '50mg', '100mg'],
      forms: ['Tablet', 'Capsule', 'Extended-Release', 'Oral Solution'][1],
      routes: ['Oral', 'Intravenous', 'Subcutaneous', 'Inhalation'][1],
      indications: ['Management of clinical conditions responsive to SGLT2 Inhibitors'],
      contraindications: ['Documented hypersensitivity to Therapeutic-SGLT2-10B or related compounds'],
      pregnancyCategory: 'A',
      interactions: [
        {
          drug: 'Therapeutic-Inhaled-01A',
          severity: 'HIGH',
          effect: 'Synergistic pharmacodynamic interaction and altered clearance.'
        }
      ],
      standardDosage: '1 dose PO daily with titration based on clinical monitoring',
      renalAdjustment: 'eGFR < 30 mL/min: Dose reduction by 50% required'
    });
    this.registerDrug({
      id: 'drg-1002',
      genericName: 'Therapeutic-SGLT2-10C',
      brandNames: ['CarePharm-SGLT2-102', 'CarePharm-SGLT2-102-XR'],
      drugClass: 'SGLT2 Inhibitors',
      ndcPackageCode: '55910-010-02',
      strengths: ['30mg', '75mg', '150mg'],
      forms: ['Tablet', 'Capsule', 'Extended-Release', 'Oral Solution'][2],
      routes: ['Oral', 'Intravenous', 'Subcutaneous', 'Inhalation'][2],
      indications: ['Management of clinical conditions responsive to SGLT2 Inhibitors'],
      contraindications: ['Documented hypersensitivity to Therapeutic-SGLT2-10C or related compounds'],
      pregnancyCategory: 'A',
      interactions: [
        {
          drug: 'Therapeutic-Inhaled-01A',
          severity: 'HIGH',
          effect: 'Synergistic pharmacodynamic interaction and altered clearance.'
        }
      ],
      standardDosage: '1 dose PO daily with titration based on clinical monitoring',
      renalAdjustment: 'eGFR < 30 mL/min: Dose reduction by 50% required'
    });
    this.registerDrug({
      id: 'drg-1003',
      genericName: 'Therapeutic-SGLT2-10D',
      brandNames: ['CarePharm-SGLT2-103', 'CarePharm-SGLT2-103-XR'],
      drugClass: 'SGLT2 Inhibitors',
      ndcPackageCode: '55910-010-03',
      strengths: ['40mg', '100mg', '200mg'],
      forms: ['Tablet', 'Capsule', 'Extended-Release', 'Oral Solution'][3],
      routes: ['Oral', 'Intravenous', 'Subcutaneous', 'Inhalation'][3],
      indications: ['Management of clinical conditions responsive to SGLT2 Inhibitors'],
      contraindications: ['Documented hypersensitivity to Therapeutic-SGLT2-10D or related compounds'],
      pregnancyCategory: 'A',
      interactions: [
        {
          drug: 'Therapeutic-Inhaled-01A',
          severity: 'HIGH',
          effect: 'Synergistic pharmacodynamic interaction and altered clearance.'
        }
      ],
      standardDosage: '1 dose PO daily with titration based on clinical monitoring',
      renalAdjustment: 'eGFR < 30 mL/min: Dose reduction by 50% required'
    });
    this.registerDrug({
      id: 'drg-1004',
      genericName: 'Therapeutic-SGLT2-10E',
      brandNames: ['CarePharm-SGLT2-104', 'CarePharm-SGLT2-104-XR'],
      drugClass: 'SGLT2 Inhibitors',
      ndcPackageCode: '55910-010-04',
      strengths: ['50mg', '125mg', '250mg'],
      forms: ['Tablet', 'Capsule', 'Extended-Release', 'Oral Solution'][0],
      routes: ['Oral', 'Intravenous', 'Subcutaneous', 'Inhalation'][0],
      indications: ['Management of clinical conditions responsive to SGLT2 Inhibitors'],
      contraindications: ['Documented hypersensitivity to Therapeutic-SGLT2-10E or related compounds'],
      pregnancyCategory: 'A',
      interactions: [
        {
          drug: 'Therapeutic-Inhaled-01A',
          severity: 'HIGH',
          effect: 'Synergistic pharmacodynamic interaction and altered clearance.'
        }
      ],
      standardDosage: '1 dose PO daily with titration based on clinical monitoring',
      renalAdjustment: 'eGFR < 30 mL/min: Dose reduction by 50% required'
    });
    this.registerDrug({
      id: 'drg-1005',
      genericName: 'Therapeutic-SGLT2-10F',
      brandNames: ['CarePharm-SGLT2-105', 'CarePharm-SGLT2-105-XR'],
      drugClass: 'SGLT2 Inhibitors',
      ndcPackageCode: '55910-010-05',
      strengths: ['60mg', '150mg', '300mg'],
      forms: ['Tablet', 'Capsule', 'Extended-Release', 'Oral Solution'][1],
      routes: ['Oral', 'Intravenous', 'Subcutaneous', 'Inhalation'][1],
      indications: ['Management of clinical conditions responsive to SGLT2 Inhibitors'],
      contraindications: ['Documented hypersensitivity to Therapeutic-SGLT2-10F or related compounds'],
      pregnancyCategory: 'A',
      interactions: [
        {
          drug: 'Therapeutic-Inhaled-01A',
          severity: 'HIGH',
          effect: 'Synergistic pharmacodynamic interaction and altered clearance.'
        }
      ],
      standardDosage: '1 dose PO daily with titration based on clinical monitoring',
      renalAdjustment: 'eGFR < 30 mL/min: Dose reduction by 50% required'
    });
    this.registerDrug({
      id: 'drg-1100',
      genericName: 'Therapeutic-DPP-4-11A',
      brandNames: ['CarePharm-DPP-4-110', 'CarePharm-DPP-4-110-XR'],
      drugClass: 'DPP-4 Inhibitors',
      ndcPackageCode: '55910-011-00',
      strengths: ['10mg', '25mg', '50mg'],
      forms: ['Tablet', 'Capsule', 'Extended-Release', 'Oral Solution'][0],
      routes: ['Oral', 'Intravenous', 'Subcutaneous', 'Inhalation'][0],
      indications: ['Management of clinical conditions responsive to DPP-4 Inhibitors'],
      contraindications: ['Documented hypersensitivity to Therapeutic-DPP-4-11A or related compounds'],
      pregnancyCategory: 'B',
      interactions: [
        {
          drug: 'Therapeutic-Long-Acting-01A',
          severity: 'MODERATE',
          effect: 'Synergistic pharmacodynamic interaction and altered clearance.'
        }
      ],
      standardDosage: '1 dose PO daily with titration based on clinical monitoring',
      renalAdjustment: 'eGFR < 30 mL/min: Dose reduction by 50% required'
    });
    this.registerDrug({
      id: 'drg-1101',
      genericName: 'Therapeutic-DPP-4-11B',
      brandNames: ['CarePharm-DPP-4-111', 'CarePharm-DPP-4-111-XR'],
      drugClass: 'DPP-4 Inhibitors',
      ndcPackageCode: '55910-011-01',
      strengths: ['20mg', '50mg', '100mg'],
      forms: ['Tablet', 'Capsule', 'Extended-Release', 'Oral Solution'][1],
      routes: ['Oral', 'Intravenous', 'Subcutaneous', 'Inhalation'][1],
      indications: ['Management of clinical conditions responsive to DPP-4 Inhibitors'],
      contraindications: ['Documented hypersensitivity to Therapeutic-DPP-4-11B or related compounds'],
      pregnancyCategory: 'B',
      interactions: [
        {
          drug: 'Therapeutic-Long-Acting-01A',
          severity: 'MODERATE',
          effect: 'Synergistic pharmacodynamic interaction and altered clearance.'
        }
      ],
      standardDosage: '1 dose PO daily with titration based on clinical monitoring',
      renalAdjustment: 'eGFR < 30 mL/min: Dose reduction by 50% required'
    });
    this.registerDrug({
      id: 'drg-1102',
      genericName: 'Therapeutic-DPP-4-11C',
      brandNames: ['CarePharm-DPP-4-112', 'CarePharm-DPP-4-112-XR'],
      drugClass: 'DPP-4 Inhibitors',
      ndcPackageCode: '55910-011-02',
      strengths: ['30mg', '75mg', '150mg'],
      forms: ['Tablet', 'Capsule', 'Extended-Release', 'Oral Solution'][2],
      routes: ['Oral', 'Intravenous', 'Subcutaneous', 'Inhalation'][2],
      indications: ['Management of clinical conditions responsive to DPP-4 Inhibitors'],
      contraindications: ['Documented hypersensitivity to Therapeutic-DPP-4-11C or related compounds'],
      pregnancyCategory: 'B',
      interactions: [
        {
          drug: 'Therapeutic-Long-Acting-01A',
          severity: 'MODERATE',
          effect: 'Synergistic pharmacodynamic interaction and altered clearance.'
        }
      ],
      standardDosage: '1 dose PO daily with titration based on clinical monitoring',
      renalAdjustment: 'eGFR < 30 mL/min: Dose reduction by 50% required'
    });
    this.registerDrug({
      id: 'drg-1103',
      genericName: 'Therapeutic-DPP-4-11D',
      brandNames: ['CarePharm-DPP-4-113', 'CarePharm-DPP-4-113-XR'],
      drugClass: 'DPP-4 Inhibitors',
      ndcPackageCode: '55910-011-03',
      strengths: ['40mg', '100mg', '200mg'],
      forms: ['Tablet', 'Capsule', 'Extended-Release', 'Oral Solution'][3],
      routes: ['Oral', 'Intravenous', 'Subcutaneous', 'Inhalation'][3],
      indications: ['Management of clinical conditions responsive to DPP-4 Inhibitors'],
      contraindications: ['Documented hypersensitivity to Therapeutic-DPP-4-11D or related compounds'],
      pregnancyCategory: 'B',
      interactions: [
        {
          drug: 'Therapeutic-Long-Acting-01A',
          severity: 'MODERATE',
          effect: 'Synergistic pharmacodynamic interaction and altered clearance.'
        }
      ],
      standardDosage: '1 dose PO daily with titration based on clinical monitoring',
      renalAdjustment: 'eGFR < 30 mL/min: Dose reduction by 50% required'
    });
    this.registerDrug({
      id: 'drg-1104',
      genericName: 'Therapeutic-DPP-4-11E',
      brandNames: ['CarePharm-DPP-4-114', 'CarePharm-DPP-4-114-XR'],
      drugClass: 'DPP-4 Inhibitors',
      ndcPackageCode: '55910-011-04',
      strengths: ['50mg', '125mg', '250mg'],
      forms: ['Tablet', 'Capsule', 'Extended-Release', 'Oral Solution'][0],
      routes: ['Oral', 'Intravenous', 'Subcutaneous', 'Inhalation'][0],
      indications: ['Management of clinical conditions responsive to DPP-4 Inhibitors'],
      contraindications: ['Documented hypersensitivity to Therapeutic-DPP-4-11E or related compounds'],
      pregnancyCategory: 'B',
      interactions: [
        {
          drug: 'Therapeutic-Long-Acting-01A',
          severity: 'MODERATE',
          effect: 'Synergistic pharmacodynamic interaction and altered clearance.'
        }
      ],
      standardDosage: '1 dose PO daily with titration based on clinical monitoring',
      renalAdjustment: 'eGFR < 30 mL/min: Dose reduction by 50% required'
    });
    this.registerDrug({
      id: 'drg-1105',
      genericName: 'Therapeutic-DPP-4-11F',
      brandNames: ['CarePharm-DPP-4-115', 'CarePharm-DPP-4-115-XR'],
      drugClass: 'DPP-4 Inhibitors',
      ndcPackageCode: '55910-011-05',
      strengths: ['60mg', '150mg', '300mg'],
      forms: ['Tablet', 'Capsule', 'Extended-Release', 'Oral Solution'][1],
      routes: ['Oral', 'Intravenous', 'Subcutaneous', 'Inhalation'][1],
      indications: ['Management of clinical conditions responsive to DPP-4 Inhibitors'],
      contraindications: ['Documented hypersensitivity to Therapeutic-DPP-4-11F or related compounds'],
      pregnancyCategory: 'B',
      interactions: [
        {
          drug: 'Therapeutic-Long-Acting-01A',
          severity: 'MODERATE',
          effect: 'Synergistic pharmacodynamic interaction and altered clearance.'
        }
      ],
      standardDosage: '1 dose PO daily with titration based on clinical monitoring',
      renalAdjustment: 'eGFR < 30 mL/min: Dose reduction by 50% required'
    });
    this.registerDrug({
      id: 'drg-1200',
      genericName: 'Therapeutic-Basal-12A',
      brandNames: ['CarePharm-Basal-120', 'CarePharm-Basal-120-XR'],
      drugClass: 'Basal and Rapid Insulins',
      ndcPackageCode: '55910-012-00',
      strengths: ['10mg', '25mg', '50mg'],
      forms: ['Tablet', 'Capsule', 'Extended-Release', 'Oral Solution'][0],
      routes: ['Oral', 'Intravenous', 'Subcutaneous', 'Inhalation'][0],
      indications: ['Management of clinical conditions responsive to Basal and Rapid Insulins'],
      contraindications: ['Documented hypersensitivity to Therapeutic-Basal-12A or related compounds'],
      pregnancyCategory: 'C',
      interactions: [
        {
          drug: 'Therapeutic-Proton-01A',
          severity: 'HIGH',
          effect: 'Synergistic pharmacodynamic interaction and altered clearance.'
        }
      ],
      standardDosage: '1 dose PO daily with titration based on clinical monitoring',
      renalAdjustment: 'eGFR < 30 mL/min: Dose reduction by 50% required'
    });
    this.registerDrug({
      id: 'drg-1201',
      genericName: 'Therapeutic-Basal-12B',
      brandNames: ['CarePharm-Basal-121', 'CarePharm-Basal-121-XR'],
      drugClass: 'Basal and Rapid Insulins',
      ndcPackageCode: '55910-012-01',
      strengths: ['20mg', '50mg', '100mg'],
      forms: ['Tablet', 'Capsule', 'Extended-Release', 'Oral Solution'][1],
      routes: ['Oral', 'Intravenous', 'Subcutaneous', 'Inhalation'][1],
      indications: ['Management of clinical conditions responsive to Basal and Rapid Insulins'],
      contraindications: ['Documented hypersensitivity to Therapeutic-Basal-12B or related compounds'],
      pregnancyCategory: 'C',
      interactions: [
        {
          drug: 'Therapeutic-Proton-01A',
          severity: 'HIGH',
          effect: 'Synergistic pharmacodynamic interaction and altered clearance.'
        }
      ],
      standardDosage: '1 dose PO daily with titration based on clinical monitoring',
      renalAdjustment: 'eGFR < 30 mL/min: Dose reduction by 50% required'
    });
    this.registerDrug({
      id: 'drg-1202',
      genericName: 'Therapeutic-Basal-12C',
      brandNames: ['CarePharm-Basal-122', 'CarePharm-Basal-122-XR'],
      drugClass: 'Basal and Rapid Insulins',
      ndcPackageCode: '55910-012-02',
      strengths: ['30mg', '75mg', '150mg'],
      forms: ['Tablet', 'Capsule', 'Extended-Release', 'Oral Solution'][2],
      routes: ['Oral', 'Intravenous', 'Subcutaneous', 'Inhalation'][2],
      indications: ['Management of clinical conditions responsive to Basal and Rapid Insulins'],
      contraindications: ['Documented hypersensitivity to Therapeutic-Basal-12C or related compounds'],
      pregnancyCategory: 'C',
      interactions: [
        {
          drug: 'Therapeutic-Proton-01A',
          severity: 'HIGH',
          effect: 'Synergistic pharmacodynamic interaction and altered clearance.'
        }
      ],
      standardDosage: '1 dose PO daily with titration based on clinical monitoring',
      renalAdjustment: 'eGFR < 30 mL/min: Dose reduction by 50% required'
    });
    this.registerDrug({
      id: 'drg-1203',
      genericName: 'Therapeutic-Basal-12D',
      brandNames: ['CarePharm-Basal-123', 'CarePharm-Basal-123-XR'],
      drugClass: 'Basal and Rapid Insulins',
      ndcPackageCode: '55910-012-03',
      strengths: ['40mg', '100mg', '200mg'],
      forms: ['Tablet', 'Capsule', 'Extended-Release', 'Oral Solution'][3],
      routes: ['Oral', 'Intravenous', 'Subcutaneous', 'Inhalation'][3],
      indications: ['Management of clinical conditions responsive to Basal and Rapid Insulins'],
      contraindications: ['Documented hypersensitivity to Therapeutic-Basal-12D or related compounds'],
      pregnancyCategory: 'C',
      interactions: [
        {
          drug: 'Therapeutic-Proton-01A',
          severity: 'HIGH',
          effect: 'Synergistic pharmacodynamic interaction and altered clearance.'
        }
      ],
      standardDosage: '1 dose PO daily with titration based on clinical monitoring',
      renalAdjustment: 'eGFR < 30 mL/min: Dose reduction by 50% required'
    });
    this.registerDrug({
      id: 'drg-1204',
      genericName: 'Therapeutic-Basal-12E',
      brandNames: ['CarePharm-Basal-124', 'CarePharm-Basal-124-XR'],
      drugClass: 'Basal and Rapid Insulins',
      ndcPackageCode: '55910-012-04',
      strengths: ['50mg', '125mg', '250mg'],
      forms: ['Tablet', 'Capsule', 'Extended-Release', 'Oral Solution'][0],
      routes: ['Oral', 'Intravenous', 'Subcutaneous', 'Inhalation'][0],
      indications: ['Management of clinical conditions responsive to Basal and Rapid Insulins'],
      contraindications: ['Documented hypersensitivity to Therapeutic-Basal-12E or related compounds'],
      pregnancyCategory: 'C',
      interactions: [
        {
          drug: 'Therapeutic-Proton-01A',
          severity: 'HIGH',
          effect: 'Synergistic pharmacodynamic interaction and altered clearance.'
        }
      ],
      standardDosage: '1 dose PO daily with titration based on clinical monitoring',
      renalAdjustment: 'eGFR < 30 mL/min: Dose reduction by 50% required'
    });
    this.registerDrug({
      id: 'drg-1205',
      genericName: 'Therapeutic-Basal-12F',
      brandNames: ['CarePharm-Basal-125', 'CarePharm-Basal-125-XR'],
      drugClass: 'Basal and Rapid Insulins',
      ndcPackageCode: '55910-012-05',
      strengths: ['60mg', '150mg', '300mg'],
      forms: ['Tablet', 'Capsule', 'Extended-Release', 'Oral Solution'][1],
      routes: ['Oral', 'Intravenous', 'Subcutaneous', 'Inhalation'][1],
      indications: ['Management of clinical conditions responsive to Basal and Rapid Insulins'],
      contraindications: ['Documented hypersensitivity to Therapeutic-Basal-12F or related compounds'],
      pregnancyCategory: 'C',
      interactions: [
        {
          drug: 'Therapeutic-Proton-01A',
          severity: 'HIGH',
          effect: 'Synergistic pharmacodynamic interaction and altered clearance.'
        }
      ],
      standardDosage: '1 dose PO daily with titration based on clinical monitoring',
      renalAdjustment: 'eGFR < 30 mL/min: Dose reduction by 50% required'
    });
    this.registerDrug({
      id: 'drg-1300',
      genericName: 'Therapeutic-Inhaled-13A',
      brandNames: ['CarePharm-Inhaled-130', 'CarePharm-Inhaled-130-XR'],
      drugClass: 'Inhaled Corticosteroids',
      ndcPackageCode: '55910-013-00',
      strengths: ['10mg', '25mg', '50mg'],
      forms: ['Tablet', 'Capsule', 'Extended-Release', 'Oral Solution'][0],
      routes: ['Oral', 'Intravenous', 'Subcutaneous', 'Inhalation'][0],
      indications: ['Management of clinical conditions responsive to Inhaled Corticosteroids'],
      contraindications: ['Documented hypersensitivity to Therapeutic-Inhaled-13A or related compounds'],
      pregnancyCategory: 'D',
      interactions: [
        {
          drug: 'Therapeutic-Fluoroquinolones-01A',
          severity: 'MODERATE',
          effect: 'Synergistic pharmacodynamic interaction and altered clearance.'
        }
      ],
      standardDosage: '1 dose PO daily with titration based on clinical monitoring',
      renalAdjustment: 'eGFR < 30 mL/min: Dose reduction by 50% required'
    });
    this.registerDrug({
      id: 'drg-1301',
      genericName: 'Therapeutic-Inhaled-13B',
      brandNames: ['CarePharm-Inhaled-131', 'CarePharm-Inhaled-131-XR'],
      drugClass: 'Inhaled Corticosteroids',
      ndcPackageCode: '55910-013-01',
      strengths: ['20mg', '50mg', '100mg'],
      forms: ['Tablet', 'Capsule', 'Extended-Release', 'Oral Solution'][1],
      routes: ['Oral', 'Intravenous', 'Subcutaneous', 'Inhalation'][1],
      indications: ['Management of clinical conditions responsive to Inhaled Corticosteroids'],
      contraindications: ['Documented hypersensitivity to Therapeutic-Inhaled-13B or related compounds'],
      pregnancyCategory: 'D',
      interactions: [
        {
          drug: 'Therapeutic-Fluoroquinolones-01A',
          severity: 'MODERATE',
          effect: 'Synergistic pharmacodynamic interaction and altered clearance.'
        }
      ],
      standardDosage: '1 dose PO daily with titration based on clinical monitoring',
      renalAdjustment: 'eGFR < 30 mL/min: Dose reduction by 50% required'
    });
    this.registerDrug({
      id: 'drg-1302',
      genericName: 'Therapeutic-Inhaled-13C',
      brandNames: ['CarePharm-Inhaled-132', 'CarePharm-Inhaled-132-XR'],
      drugClass: 'Inhaled Corticosteroids',
      ndcPackageCode: '55910-013-02',
      strengths: ['30mg', '75mg', '150mg'],
      forms: ['Tablet', 'Capsule', 'Extended-Release', 'Oral Solution'][2],
      routes: ['Oral', 'Intravenous', 'Subcutaneous', 'Inhalation'][2],
      indications: ['Management of clinical conditions responsive to Inhaled Corticosteroids'],
      contraindications: ['Documented hypersensitivity to Therapeutic-Inhaled-13C or related compounds'],
      pregnancyCategory: 'D',
      interactions: [
        {
          drug: 'Therapeutic-Fluoroquinolones-01A',
          severity: 'MODERATE',
          effect: 'Synergistic pharmacodynamic interaction and altered clearance.'
        }
      ],
      standardDosage: '1 dose PO daily with titration based on clinical monitoring',
      renalAdjustment: 'eGFR < 30 mL/min: Dose reduction by 50% required'
    });
    this.registerDrug({
      id: 'drg-1303',
      genericName: 'Therapeutic-Inhaled-13D',
      brandNames: ['CarePharm-Inhaled-133', 'CarePharm-Inhaled-133-XR'],
      drugClass: 'Inhaled Corticosteroids',
      ndcPackageCode: '55910-013-03',
      strengths: ['40mg', '100mg', '200mg'],
      forms: ['Tablet', 'Capsule', 'Extended-Release', 'Oral Solution'][3],
      routes: ['Oral', 'Intravenous', 'Subcutaneous', 'Inhalation'][3],
      indications: ['Management of clinical conditions responsive to Inhaled Corticosteroids'],
      contraindications: ['Documented hypersensitivity to Therapeutic-Inhaled-13D or related compounds'],
      pregnancyCategory: 'D',
      interactions: [
        {
          drug: 'Therapeutic-Fluoroquinolones-01A',
          severity: 'MODERATE',
          effect: 'Synergistic pharmacodynamic interaction and altered clearance.'
        }
      ],
      standardDosage: '1 dose PO daily with titration based on clinical monitoring',
      renalAdjustment: 'eGFR < 30 mL/min: Dose reduction by 50% required'
    });
    this.registerDrug({
      id: 'drg-1304',
      genericName: 'Therapeutic-Inhaled-13E',
      brandNames: ['CarePharm-Inhaled-134', 'CarePharm-Inhaled-134-XR'],
      drugClass: 'Inhaled Corticosteroids',
      ndcPackageCode: '55910-013-04',
      strengths: ['50mg', '125mg', '250mg'],
      forms: ['Tablet', 'Capsule', 'Extended-Release', 'Oral Solution'][0],
      routes: ['Oral', 'Intravenous', 'Subcutaneous', 'Inhalation'][0],
      indications: ['Management of clinical conditions responsive to Inhaled Corticosteroids'],
      contraindications: ['Documented hypersensitivity to Therapeutic-Inhaled-13E or related compounds'],
      pregnancyCategory: 'D',
      interactions: [
        {
          drug: 'Therapeutic-Fluoroquinolones-01A',
          severity: 'MODERATE',
          effect: 'Synergistic pharmacodynamic interaction and altered clearance.'
        }
      ],
      standardDosage: '1 dose PO daily with titration based on clinical monitoring',
      renalAdjustment: 'eGFR < 30 mL/min: Dose reduction by 50% required'
    });
    this.registerDrug({
      id: 'drg-1305',
      genericName: 'Therapeutic-Inhaled-13F',
      brandNames: ['CarePharm-Inhaled-135', 'CarePharm-Inhaled-135-XR'],
      drugClass: 'Inhaled Corticosteroids',
      ndcPackageCode: '55910-013-05',
      strengths: ['60mg', '150mg', '300mg'],
      forms: ['Tablet', 'Capsule', 'Extended-Release', 'Oral Solution'][1],
      routes: ['Oral', 'Intravenous', 'Subcutaneous', 'Inhalation'][1],
      indications: ['Management of clinical conditions responsive to Inhaled Corticosteroids'],
      contraindications: ['Documented hypersensitivity to Therapeutic-Inhaled-13F or related compounds'],
      pregnancyCategory: 'D',
      interactions: [
        {
          drug: 'Therapeutic-Fluoroquinolones-01A',
          severity: 'MODERATE',
          effect: 'Synergistic pharmacodynamic interaction and altered clearance.'
        }
      ],
      standardDosage: '1 dose PO daily with titration based on clinical monitoring',
      renalAdjustment: 'eGFR < 30 mL/min: Dose reduction by 50% required'
    });
    this.registerDrug({
      id: 'drg-1400',
      genericName: 'Therapeutic-Long-Acting-14A',
      brandNames: ['CarePharm-Long-Acting-140', 'CarePharm-Long-Acting-140-XR'],
      drugClass: 'Long-Acting Beta Agonists (LABA)',
      ndcPackageCode: '55910-014-00',
      strengths: ['10mg', '25mg', '50mg'],
      forms: ['Tablet', 'Capsule', 'Extended-Release', 'Oral Solution'][0],
      routes: ['Oral', 'Intravenous', 'Subcutaneous', 'Inhalation'][0],
      indications: ['Management of clinical conditions responsive to Long-Acting Beta Agonists (LABA)'],
      contraindications: ['Documented hypersensitivity to Therapeutic-Long-Acting-14A or related compounds'],
      pregnancyCategory: 'X',
      interactions: [
        {
          drug: 'Therapeutic-Macrolides-01A',
          severity: 'HIGH',
          effect: 'Synergistic pharmacodynamic interaction and altered clearance.'
        }
      ],
      standardDosage: '1 dose PO daily with titration based on clinical monitoring',
      renalAdjustment: 'eGFR < 30 mL/min: Dose reduction by 50% required'
    });
    this.registerDrug({
      id: 'drg-1401',
      genericName: 'Therapeutic-Long-Acting-14B',
      brandNames: ['CarePharm-Long-Acting-141', 'CarePharm-Long-Acting-141-XR'],
      drugClass: 'Long-Acting Beta Agonists (LABA)',
      ndcPackageCode: '55910-014-01',
      strengths: ['20mg', '50mg', '100mg'],
      forms: ['Tablet', 'Capsule', 'Extended-Release', 'Oral Solution'][1],
      routes: ['Oral', 'Intravenous', 'Subcutaneous', 'Inhalation'][1],
      indications: ['Management of clinical conditions responsive to Long-Acting Beta Agonists (LABA)'],
      contraindications: ['Documented hypersensitivity to Therapeutic-Long-Acting-14B or related compounds'],
      pregnancyCategory: 'X',
      interactions: [
        {
          drug: 'Therapeutic-Macrolides-01A',
          severity: 'HIGH',
          effect: 'Synergistic pharmacodynamic interaction and altered clearance.'
        }
      ],
      standardDosage: '1 dose PO daily with titration based on clinical monitoring',
      renalAdjustment: 'eGFR < 30 mL/min: Dose reduction by 50% required'
    });
    this.registerDrug({
      id: 'drg-1402',
      genericName: 'Therapeutic-Long-Acting-14C',
      brandNames: ['CarePharm-Long-Acting-142', 'CarePharm-Long-Acting-142-XR'],
      drugClass: 'Long-Acting Beta Agonists (LABA)',
      ndcPackageCode: '55910-014-02',
      strengths: ['30mg', '75mg', '150mg'],
      forms: ['Tablet', 'Capsule', 'Extended-Release', 'Oral Solution'][2],
      routes: ['Oral', 'Intravenous', 'Subcutaneous', 'Inhalation'][2],
      indications: ['Management of clinical conditions responsive to Long-Acting Beta Agonists (LABA)'],
      contraindications: ['Documented hypersensitivity to Therapeutic-Long-Acting-14C or related compounds'],
      pregnancyCategory: 'X',
      interactions: [
        {
          drug: 'Therapeutic-Macrolides-01A',
          severity: 'HIGH',
          effect: 'Synergistic pharmacodynamic interaction and altered clearance.'
        }
      ],
      standardDosage: '1 dose PO daily with titration based on clinical monitoring',
      renalAdjustment: 'eGFR < 30 mL/min: Dose reduction by 50% required'
    });
    this.registerDrug({
      id: 'drg-1403',
      genericName: 'Therapeutic-Long-Acting-14D',
      brandNames: ['CarePharm-Long-Acting-143', 'CarePharm-Long-Acting-143-XR'],
      drugClass: 'Long-Acting Beta Agonists (LABA)',
      ndcPackageCode: '55910-014-03',
      strengths: ['40mg', '100mg', '200mg'],
      forms: ['Tablet', 'Capsule', 'Extended-Release', 'Oral Solution'][3],
      routes: ['Oral', 'Intravenous', 'Subcutaneous', 'Inhalation'][3],
      indications: ['Management of clinical conditions responsive to Long-Acting Beta Agonists (LABA)'],
      contraindications: ['Documented hypersensitivity to Therapeutic-Long-Acting-14D or related compounds'],
      pregnancyCategory: 'X',
      interactions: [
        {
          drug: 'Therapeutic-Macrolides-01A',
          severity: 'HIGH',
          effect: 'Synergistic pharmacodynamic interaction and altered clearance.'
        }
      ],
      standardDosage: '1 dose PO daily with titration based on clinical monitoring',
      renalAdjustment: 'eGFR < 30 mL/min: Dose reduction by 50% required'
    });
    this.registerDrug({
      id: 'drg-1404',
      genericName: 'Therapeutic-Long-Acting-14E',
      brandNames: ['CarePharm-Long-Acting-144', 'CarePharm-Long-Acting-144-XR'],
      drugClass: 'Long-Acting Beta Agonists (LABA)',
      ndcPackageCode: '55910-014-04',
      strengths: ['50mg', '125mg', '250mg'],
      forms: ['Tablet', 'Capsule', 'Extended-Release', 'Oral Solution'][0],
      routes: ['Oral', 'Intravenous', 'Subcutaneous', 'Inhalation'][0],
      indications: ['Management of clinical conditions responsive to Long-Acting Beta Agonists (LABA)'],
      contraindications: ['Documented hypersensitivity to Therapeutic-Long-Acting-14E or related compounds'],
      pregnancyCategory: 'X',
      interactions: [
        {
          drug: 'Therapeutic-Macrolides-01A',
          severity: 'HIGH',
          effect: 'Synergistic pharmacodynamic interaction and altered clearance.'
        }
      ],
      standardDosage: '1 dose PO daily with titration based on clinical monitoring',
      renalAdjustment: 'eGFR < 30 mL/min: Dose reduction by 50% required'
    });
    this.registerDrug({
      id: 'drg-1405',
      genericName: 'Therapeutic-Long-Acting-14F',
      brandNames: ['CarePharm-Long-Acting-145', 'CarePharm-Long-Acting-145-XR'],
      drugClass: 'Long-Acting Beta Agonists (LABA)',
      ndcPackageCode: '55910-014-05',
      strengths: ['60mg', '150mg', '300mg'],
      forms: ['Tablet', 'Capsule', 'Extended-Release', 'Oral Solution'][1],
      routes: ['Oral', 'Intravenous', 'Subcutaneous', 'Inhalation'][1],
      indications: ['Management of clinical conditions responsive to Long-Acting Beta Agonists (LABA)'],
      contraindications: ['Documented hypersensitivity to Therapeutic-Long-Acting-14F or related compounds'],
      pregnancyCategory: 'X',
      interactions: [
        {
          drug: 'Therapeutic-Macrolides-01A',
          severity: 'HIGH',
          effect: 'Synergistic pharmacodynamic interaction and altered clearance.'
        }
      ],
      standardDosage: '1 dose PO daily with titration based on clinical monitoring',
      renalAdjustment: 'eGFR < 30 mL/min: Dose reduction by 50% required'
    });
    this.registerDrug({
      id: 'drg-1500',
      genericName: 'Therapeutic-Proton-15A',
      brandNames: ['CarePharm-Proton-150', 'CarePharm-Proton-150-XR'],
      drugClass: 'Proton Pump Inhibitors (PPIs)',
      ndcPackageCode: '55910-015-00',
      strengths: ['10mg', '25mg', '50mg'],
      forms: ['Tablet', 'Capsule', 'Extended-Release', 'Oral Solution'][0],
      routes: ['Oral', 'Intravenous', 'Subcutaneous', 'Inhalation'][0],
      indications: ['Management of clinical conditions responsive to Proton Pump Inhibitors (PPIs)'],
      contraindications: ['Documented hypersensitivity to Therapeutic-Proton-15A or related compounds'],
      pregnancyCategory: 'A',
      interactions: [
        {
          drug: 'Therapeutic-Cephalosporins-01A',
          severity: 'MODERATE',
          effect: 'Synergistic pharmacodynamic interaction and altered clearance.'
        }
      ],
      standardDosage: '1 dose PO daily with titration based on clinical monitoring',
      renalAdjustment: 'eGFR < 30 mL/min: Dose reduction by 50% required'
    });
    this.registerDrug({
      id: 'drg-1501',
      genericName: 'Therapeutic-Proton-15B',
      brandNames: ['CarePharm-Proton-151', 'CarePharm-Proton-151-XR'],
      drugClass: 'Proton Pump Inhibitors (PPIs)',
      ndcPackageCode: '55910-015-01',
      strengths: ['20mg', '50mg', '100mg'],
      forms: ['Tablet', 'Capsule', 'Extended-Release', 'Oral Solution'][1],
      routes: ['Oral', 'Intravenous', 'Subcutaneous', 'Inhalation'][1],
      indications: ['Management of clinical conditions responsive to Proton Pump Inhibitors (PPIs)'],
      contraindications: ['Documented hypersensitivity to Therapeutic-Proton-15B or related compounds'],
      pregnancyCategory: 'A',
      interactions: [
        {
          drug: 'Therapeutic-Cephalosporins-01A',
          severity: 'MODERATE',
          effect: 'Synergistic pharmacodynamic interaction and altered clearance.'
        }
      ],
      standardDosage: '1 dose PO daily with titration based on clinical monitoring',
      renalAdjustment: 'eGFR < 30 mL/min: Dose reduction by 50% required'
    });
    this.registerDrug({
      id: 'drg-1502',
      genericName: 'Therapeutic-Proton-15C',
      brandNames: ['CarePharm-Proton-152', 'CarePharm-Proton-152-XR'],
      drugClass: 'Proton Pump Inhibitors (PPIs)',
      ndcPackageCode: '55910-015-02',
      strengths: ['30mg', '75mg', '150mg'],
      forms: ['Tablet', 'Capsule', 'Extended-Release', 'Oral Solution'][2],
      routes: ['Oral', 'Intravenous', 'Subcutaneous', 'Inhalation'][2],
      indications: ['Management of clinical conditions responsive to Proton Pump Inhibitors (PPIs)'],
      contraindications: ['Documented hypersensitivity to Therapeutic-Proton-15C or related compounds'],
      pregnancyCategory: 'A',
      interactions: [
        {
          drug: 'Therapeutic-Cephalosporins-01A',
          severity: 'MODERATE',
          effect: 'Synergistic pharmacodynamic interaction and altered clearance.'
        }
      ],
      standardDosage: '1 dose PO daily with titration based on clinical monitoring',
      renalAdjustment: 'eGFR < 30 mL/min: Dose reduction by 50% required'
    });
    this.registerDrug({
      id: 'drg-1503',
      genericName: 'Therapeutic-Proton-15D',
      brandNames: ['CarePharm-Proton-153', 'CarePharm-Proton-153-XR'],
      drugClass: 'Proton Pump Inhibitors (PPIs)',
      ndcPackageCode: '55910-015-03',
      strengths: ['40mg', '100mg', '200mg'],
      forms: ['Tablet', 'Capsule', 'Extended-Release', 'Oral Solution'][3],
      routes: ['Oral', 'Intravenous', 'Subcutaneous', 'Inhalation'][3],
      indications: ['Management of clinical conditions responsive to Proton Pump Inhibitors (PPIs)'],
      contraindications: ['Documented hypersensitivity to Therapeutic-Proton-15D or related compounds'],
      pregnancyCategory: 'A',
      interactions: [
        {
          drug: 'Therapeutic-Cephalosporins-01A',
          severity: 'MODERATE',
          effect: 'Synergistic pharmacodynamic interaction and altered clearance.'
        }
      ],
      standardDosage: '1 dose PO daily with titration based on clinical monitoring',
      renalAdjustment: 'eGFR < 30 mL/min: Dose reduction by 50% required'
    });
    this.registerDrug({
      id: 'drg-1504',
      genericName: 'Therapeutic-Proton-15E',
      brandNames: ['CarePharm-Proton-154', 'CarePharm-Proton-154-XR'],
      drugClass: 'Proton Pump Inhibitors (PPIs)',
      ndcPackageCode: '55910-015-04',
      strengths: ['50mg', '125mg', '250mg'],
      forms: ['Tablet', 'Capsule', 'Extended-Release', 'Oral Solution'][0],
      routes: ['Oral', 'Intravenous', 'Subcutaneous', 'Inhalation'][0],
      indications: ['Management of clinical conditions responsive to Proton Pump Inhibitors (PPIs)'],
      contraindications: ['Documented hypersensitivity to Therapeutic-Proton-15E or related compounds'],
      pregnancyCategory: 'A',
      interactions: [
        {
          drug: 'Therapeutic-Cephalosporins-01A',
          severity: 'MODERATE',
          effect: 'Synergistic pharmacodynamic interaction and altered clearance.'
        }
      ],
      standardDosage: '1 dose PO daily with titration based on clinical monitoring',
      renalAdjustment: 'eGFR < 30 mL/min: Dose reduction by 50% required'
    });
    this.registerDrug({
      id: 'drg-1505',
      genericName: 'Therapeutic-Proton-15F',
      brandNames: ['CarePharm-Proton-155', 'CarePharm-Proton-155-XR'],
      drugClass: 'Proton Pump Inhibitors (PPIs)',
      ndcPackageCode: '55910-015-05',
      strengths: ['60mg', '150mg', '300mg'],
      forms: ['Tablet', 'Capsule', 'Extended-Release', 'Oral Solution'][1],
      routes: ['Oral', 'Intravenous', 'Subcutaneous', 'Inhalation'][1],
      indications: ['Management of clinical conditions responsive to Proton Pump Inhibitors (PPIs)'],
      contraindications: ['Documented hypersensitivity to Therapeutic-Proton-15F or related compounds'],
      pregnancyCategory: 'A',
      interactions: [
        {
          drug: 'Therapeutic-Cephalosporins-01A',
          severity: 'MODERATE',
          effect: 'Synergistic pharmacodynamic interaction and altered clearance.'
        }
      ],
      standardDosage: '1 dose PO daily with titration based on clinical monitoring',
      renalAdjustment: 'eGFR < 30 mL/min: Dose reduction by 50% required'
    });
    this.registerDrug({
      id: 'drg-1600',
      genericName: 'Therapeutic-Fluoroquinolones-16A',
      brandNames: ['CarePharm-Fluoroquinolones-160', 'CarePharm-Fluoroquinolones-160-XR'],
      drugClass: 'Fluoroquinolones',
      ndcPackageCode: '55910-016-00',
      strengths: ['10mg', '25mg', '50mg'],
      forms: ['Tablet', 'Capsule', 'Extended-Release', 'Oral Solution'][0],
      routes: ['Oral', 'Intravenous', 'Subcutaneous', 'Inhalation'][0],
      indications: ['Management of clinical conditions responsive to Fluoroquinolones'],
      contraindications: ['Documented hypersensitivity to Therapeutic-Fluoroquinolones-16A or related compounds'],
      pregnancyCategory: 'B',
      interactions: [
        {
          drug: 'Therapeutic-Penicillins-01A',
          severity: 'HIGH',
          effect: 'Synergistic pharmacodynamic interaction and altered clearance.'
        }
      ],
      standardDosage: '1 dose PO daily with titration based on clinical monitoring',
      renalAdjustment: 'eGFR < 30 mL/min: Dose reduction by 50% required'
    });
    this.registerDrug({
      id: 'drg-1601',
      genericName: 'Therapeutic-Fluoroquinolones-16B',
      brandNames: ['CarePharm-Fluoroquinolones-161', 'CarePharm-Fluoroquinolones-161-XR'],
      drugClass: 'Fluoroquinolones',
      ndcPackageCode: '55910-016-01',
      strengths: ['20mg', '50mg', '100mg'],
      forms: ['Tablet', 'Capsule', 'Extended-Release', 'Oral Solution'][1],
      routes: ['Oral', 'Intravenous', 'Subcutaneous', 'Inhalation'][1],
      indications: ['Management of clinical conditions responsive to Fluoroquinolones'],
      contraindications: ['Documented hypersensitivity to Therapeutic-Fluoroquinolones-16B or related compounds'],
      pregnancyCategory: 'B',
      interactions: [
        {
          drug: 'Therapeutic-Penicillins-01A',
          severity: 'HIGH',
          effect: 'Synergistic pharmacodynamic interaction and altered clearance.'
        }
      ],
      standardDosage: '1 dose PO daily with titration based on clinical monitoring',
      renalAdjustment: 'eGFR < 30 mL/min: Dose reduction by 50% required'
    });
    this.registerDrug({
      id: 'drg-1602',
      genericName: 'Therapeutic-Fluoroquinolones-16C',
      brandNames: ['CarePharm-Fluoroquinolones-162', 'CarePharm-Fluoroquinolones-162-XR'],
      drugClass: 'Fluoroquinolones',
      ndcPackageCode: '55910-016-02',
      strengths: ['30mg', '75mg', '150mg'],
      forms: ['Tablet', 'Capsule', 'Extended-Release', 'Oral Solution'][2],
      routes: ['Oral', 'Intravenous', 'Subcutaneous', 'Inhalation'][2],
      indications: ['Management of clinical conditions responsive to Fluoroquinolones'],
      contraindications: ['Documented hypersensitivity to Therapeutic-Fluoroquinolones-16C or related compounds'],
      pregnancyCategory: 'B',
      interactions: [
        {
          drug: 'Therapeutic-Penicillins-01A',
          severity: 'HIGH',
          effect: 'Synergistic pharmacodynamic interaction and altered clearance.'
        }
      ],
      standardDosage: '1 dose PO daily with titration based on clinical monitoring',
      renalAdjustment: 'eGFR < 30 mL/min: Dose reduction by 50% required'
    });
    this.registerDrug({
      id: 'drg-1603',
      genericName: 'Therapeutic-Fluoroquinolones-16D',
      brandNames: ['CarePharm-Fluoroquinolones-163', 'CarePharm-Fluoroquinolones-163-XR'],
      drugClass: 'Fluoroquinolones',
      ndcPackageCode: '55910-016-03',
      strengths: ['40mg', '100mg', '200mg'],
      forms: ['Tablet', 'Capsule', 'Extended-Release', 'Oral Solution'][3],
      routes: ['Oral', 'Intravenous', 'Subcutaneous', 'Inhalation'][3],
      indications: ['Management of clinical conditions responsive to Fluoroquinolones'],
      contraindications: ['Documented hypersensitivity to Therapeutic-Fluoroquinolones-16D or related compounds'],
      pregnancyCategory: 'B',
      interactions: [
        {
          drug: 'Therapeutic-Penicillins-01A',
          severity: 'HIGH',
          effect: 'Synergistic pharmacodynamic interaction and altered clearance.'
        }
      ],
      standardDosage: '1 dose PO daily with titration based on clinical monitoring',
      renalAdjustment: 'eGFR < 30 mL/min: Dose reduction by 50% required'
    });
    this.registerDrug({
      id: 'drg-1604',
      genericName: 'Therapeutic-Fluoroquinolones-16E',
      brandNames: ['CarePharm-Fluoroquinolones-164', 'CarePharm-Fluoroquinolones-164-XR'],
      drugClass: 'Fluoroquinolones',
      ndcPackageCode: '55910-016-04',
      strengths: ['50mg', '125mg', '250mg'],
      forms: ['Tablet', 'Capsule', 'Extended-Release', 'Oral Solution'][0],
      routes: ['Oral', 'Intravenous', 'Subcutaneous', 'Inhalation'][0],
      indications: ['Management of clinical conditions responsive to Fluoroquinolones'],
      contraindications: ['Documented hypersensitivity to Therapeutic-Fluoroquinolones-16E or related compounds'],
      pregnancyCategory: 'B',
      interactions: [
        {
          drug: 'Therapeutic-Penicillins-01A',
          severity: 'HIGH',
          effect: 'Synergistic pharmacodynamic interaction and altered clearance.'
        }
      ],
      standardDosage: '1 dose PO daily with titration based on clinical monitoring',
      renalAdjustment: 'eGFR < 30 mL/min: Dose reduction by 50% required'
    });
    this.registerDrug({
      id: 'drg-1605',
      genericName: 'Therapeutic-Fluoroquinolones-16F',
      brandNames: ['CarePharm-Fluoroquinolones-165', 'CarePharm-Fluoroquinolones-165-XR'],
      drugClass: 'Fluoroquinolones',
      ndcPackageCode: '55910-016-05',
      strengths: ['60mg', '150mg', '300mg'],
      forms: ['Tablet', 'Capsule', 'Extended-Release', 'Oral Solution'][1],
      routes: ['Oral', 'Intravenous', 'Subcutaneous', 'Inhalation'][1],
      indications: ['Management of clinical conditions responsive to Fluoroquinolones'],
      contraindications: ['Documented hypersensitivity to Therapeutic-Fluoroquinolones-16F or related compounds'],
      pregnancyCategory: 'B',
      interactions: [
        {
          drug: 'Therapeutic-Penicillins-01A',
          severity: 'HIGH',
          effect: 'Synergistic pharmacodynamic interaction and altered clearance.'
        }
      ],
      standardDosage: '1 dose PO daily with titration based on clinical monitoring',
      renalAdjustment: 'eGFR < 30 mL/min: Dose reduction by 50% required'
    });
    this.registerDrug({
      id: 'drg-1700',
      genericName: 'Therapeutic-Macrolides-17A',
      brandNames: ['CarePharm-Macrolides-170', 'CarePharm-Macrolides-170-XR'],
      drugClass: 'Macrolides',
      ndcPackageCode: '55910-017-00',
      strengths: ['10mg', '25mg', '50mg'],
      forms: ['Tablet', 'Capsule', 'Extended-Release', 'Oral Solution'][0],
      routes: ['Oral', 'Intravenous', 'Subcutaneous', 'Inhalation'][0],
      indications: ['Management of clinical conditions responsive to Macrolides'],
      contraindications: ['Documented hypersensitivity to Therapeutic-Macrolides-17A or related compounds'],
      pregnancyCategory: 'C',
      interactions: [
        {
          drug: 'Therapeutic-SSRIs-01A',
          severity: 'MODERATE',
          effect: 'Synergistic pharmacodynamic interaction and altered clearance.'
        }
      ],
      standardDosage: '1 dose PO daily with titration based on clinical monitoring',
      renalAdjustment: 'eGFR < 30 mL/min: Dose reduction by 50% required'
    });
    this.registerDrug({
      id: 'drg-1701',
      genericName: 'Therapeutic-Macrolides-17B',
      brandNames: ['CarePharm-Macrolides-171', 'CarePharm-Macrolides-171-XR'],
      drugClass: 'Macrolides',
      ndcPackageCode: '55910-017-01',
      strengths: ['20mg', '50mg', '100mg'],
      forms: ['Tablet', 'Capsule', 'Extended-Release', 'Oral Solution'][1],
      routes: ['Oral', 'Intravenous', 'Subcutaneous', 'Inhalation'][1],
      indications: ['Management of clinical conditions responsive to Macrolides'],
      contraindications: ['Documented hypersensitivity to Therapeutic-Macrolides-17B or related compounds'],
      pregnancyCategory: 'C',
      interactions: [
        {
          drug: 'Therapeutic-SSRIs-01A',
          severity: 'MODERATE',
          effect: 'Synergistic pharmacodynamic interaction and altered clearance.'
        }
      ],
      standardDosage: '1 dose PO daily with titration based on clinical monitoring',
      renalAdjustment: 'eGFR < 30 mL/min: Dose reduction by 50% required'
    });
    this.registerDrug({
      id: 'drg-1702',
      genericName: 'Therapeutic-Macrolides-17C',
      brandNames: ['CarePharm-Macrolides-172', 'CarePharm-Macrolides-172-XR'],
      drugClass: 'Macrolides',
      ndcPackageCode: '55910-017-02',
      strengths: ['30mg', '75mg', '150mg'],
      forms: ['Tablet', 'Capsule', 'Extended-Release', 'Oral Solution'][2],
      routes: ['Oral', 'Intravenous', 'Subcutaneous', 'Inhalation'][2],
      indications: ['Management of clinical conditions responsive to Macrolides'],
      contraindications: ['Documented hypersensitivity to Therapeutic-Macrolides-17C or related compounds'],
      pregnancyCategory: 'C',
      interactions: [
        {
          drug: 'Therapeutic-SSRIs-01A',
          severity: 'MODERATE',
          effect: 'Synergistic pharmacodynamic interaction and altered clearance.'
        }
      ],
      standardDosage: '1 dose PO daily with titration based on clinical monitoring',
      renalAdjustment: 'eGFR < 30 mL/min: Dose reduction by 50% required'
    });
    this.registerDrug({
      id: 'drg-1703',
      genericName: 'Therapeutic-Macrolides-17D',
      brandNames: ['CarePharm-Macrolides-173', 'CarePharm-Macrolides-173-XR'],
      drugClass: 'Macrolides',
      ndcPackageCode: '55910-017-03',
      strengths: ['40mg', '100mg', '200mg'],
      forms: ['Tablet', 'Capsule', 'Extended-Release', 'Oral Solution'][3],
      routes: ['Oral', 'Intravenous', 'Subcutaneous', 'Inhalation'][3],
      indications: ['Management of clinical conditions responsive to Macrolides'],
      contraindications: ['Documented hypersensitivity to Therapeutic-Macrolides-17D or related compounds'],
      pregnancyCategory: 'C',
      interactions: [
        {
          drug: 'Therapeutic-SSRIs-01A',
          severity: 'MODERATE',
          effect: 'Synergistic pharmacodynamic interaction and altered clearance.'
        }
      ],
      standardDosage: '1 dose PO daily with titration based on clinical monitoring',
      renalAdjustment: 'eGFR < 30 mL/min: Dose reduction by 50% required'
    });
    this.registerDrug({
      id: 'drg-1704',
      genericName: 'Therapeutic-Macrolides-17E',
      brandNames: ['CarePharm-Macrolides-174', 'CarePharm-Macrolides-174-XR'],
      drugClass: 'Macrolides',
      ndcPackageCode: '55910-017-04',
      strengths: ['50mg', '125mg', '250mg'],
      forms: ['Tablet', 'Capsule', 'Extended-Release', 'Oral Solution'][0],
      routes: ['Oral', 'Intravenous', 'Subcutaneous', 'Inhalation'][0],
      indications: ['Management of clinical conditions responsive to Macrolides'],
      contraindications: ['Documented hypersensitivity to Therapeutic-Macrolides-17E or related compounds'],
      pregnancyCategory: 'C',
      interactions: [
        {
          drug: 'Therapeutic-SSRIs-01A',
          severity: 'MODERATE',
          effect: 'Synergistic pharmacodynamic interaction and altered clearance.'
        }
      ],
      standardDosage: '1 dose PO daily with titration based on clinical monitoring',
      renalAdjustment: 'eGFR < 30 mL/min: Dose reduction by 50% required'
    });
    this.registerDrug({
      id: 'drg-1705',
      genericName: 'Therapeutic-Macrolides-17F',
      brandNames: ['CarePharm-Macrolides-175', 'CarePharm-Macrolides-175-XR'],
      drugClass: 'Macrolides',
      ndcPackageCode: '55910-017-05',
      strengths: ['60mg', '150mg', '300mg'],
      forms: ['Tablet', 'Capsule', 'Extended-Release', 'Oral Solution'][1],
      routes: ['Oral', 'Intravenous', 'Subcutaneous', 'Inhalation'][1],
      indications: ['Management of clinical conditions responsive to Macrolides'],
      contraindications: ['Documented hypersensitivity to Therapeutic-Macrolides-17F or related compounds'],
      pregnancyCategory: 'C',
      interactions: [
        {
          drug: 'Therapeutic-SSRIs-01A',
          severity: 'MODERATE',
          effect: 'Synergistic pharmacodynamic interaction and altered clearance.'
        }
      ],
      standardDosage: '1 dose PO daily with titration based on clinical monitoring',
      renalAdjustment: 'eGFR < 30 mL/min: Dose reduction by 50% required'
    });
    this.registerDrug({
      id: 'drg-1800',
      genericName: 'Therapeutic-Cephalosporins-18A',
      brandNames: ['CarePharm-Cephalosporins-180', 'CarePharm-Cephalosporins-180-XR'],
      drugClass: 'Cephalosporins (1st-5th Gen)',
      ndcPackageCode: '55910-018-00',
      strengths: ['10mg', '25mg', '50mg'],
      forms: ['Tablet', 'Capsule', 'Extended-Release', 'Oral Solution'][0],
      routes: ['Oral', 'Intravenous', 'Subcutaneous', 'Inhalation'][0],
      indications: ['Management of clinical conditions responsive to Cephalosporins (1st-5th Gen)'],
      contraindications: ['Documented hypersensitivity to Therapeutic-Cephalosporins-18A or related compounds'],
      pregnancyCategory: 'D',
      interactions: [
        {
          drug: 'Therapeutic-Atypical-01A',
          severity: 'HIGH',
          effect: 'Synergistic pharmacodynamic interaction and altered clearance.'
        }
      ],
      standardDosage: '1 dose PO daily with titration based on clinical monitoring',
      renalAdjustment: 'eGFR < 30 mL/min: Dose reduction by 50% required'
    });
    this.registerDrug({
      id: 'drg-1801',
      genericName: 'Therapeutic-Cephalosporins-18B',
      brandNames: ['CarePharm-Cephalosporins-181', 'CarePharm-Cephalosporins-181-XR'],
      drugClass: 'Cephalosporins (1st-5th Gen)',
      ndcPackageCode: '55910-018-01',
      strengths: ['20mg', '50mg', '100mg'],
      forms: ['Tablet', 'Capsule', 'Extended-Release', 'Oral Solution'][1],
      routes: ['Oral', 'Intravenous', 'Subcutaneous', 'Inhalation'][1],
      indications: ['Management of clinical conditions responsive to Cephalosporins (1st-5th Gen)'],
      contraindications: ['Documented hypersensitivity to Therapeutic-Cephalosporins-18B or related compounds'],
      pregnancyCategory: 'D',
      interactions: [
        {
          drug: 'Therapeutic-Atypical-01A',
          severity: 'HIGH',
          effect: 'Synergistic pharmacodynamic interaction and altered clearance.'
        }
      ],
      standardDosage: '1 dose PO daily with titration based on clinical monitoring',
      renalAdjustment: 'eGFR < 30 mL/min: Dose reduction by 50% required'
    });
    this.registerDrug({
      id: 'drg-1802',
      genericName: 'Therapeutic-Cephalosporins-18C',
      brandNames: ['CarePharm-Cephalosporins-182', 'CarePharm-Cephalosporins-182-XR'],
      drugClass: 'Cephalosporins (1st-5th Gen)',
      ndcPackageCode: '55910-018-02',
      strengths: ['30mg', '75mg', '150mg'],
      forms: ['Tablet', 'Capsule', 'Extended-Release', 'Oral Solution'][2],
      routes: ['Oral', 'Intravenous', 'Subcutaneous', 'Inhalation'][2],
      indications: ['Management of clinical conditions responsive to Cephalosporins (1st-5th Gen)'],
      contraindications: ['Documented hypersensitivity to Therapeutic-Cephalosporins-18C or related compounds'],
      pregnancyCategory: 'D',
      interactions: [
        {
          drug: 'Therapeutic-Atypical-01A',
          severity: 'HIGH',
          effect: 'Synergistic pharmacodynamic interaction and altered clearance.'
        }
      ],
      standardDosage: '1 dose PO daily with titration based on clinical monitoring',
      renalAdjustment: 'eGFR < 30 mL/min: Dose reduction by 50% required'
    });
    this.registerDrug({
      id: 'drg-1803',
      genericName: 'Therapeutic-Cephalosporins-18D',
      brandNames: ['CarePharm-Cephalosporins-183', 'CarePharm-Cephalosporins-183-XR'],
      drugClass: 'Cephalosporins (1st-5th Gen)',
      ndcPackageCode: '55910-018-03',
      strengths: ['40mg', '100mg', '200mg'],
      forms: ['Tablet', 'Capsule', 'Extended-Release', 'Oral Solution'][3],
      routes: ['Oral', 'Intravenous', 'Subcutaneous', 'Inhalation'][3],
      indications: ['Management of clinical conditions responsive to Cephalosporins (1st-5th Gen)'],
      contraindications: ['Documented hypersensitivity to Therapeutic-Cephalosporins-18D or related compounds'],
      pregnancyCategory: 'D',
      interactions: [
        {
          drug: 'Therapeutic-Atypical-01A',
          severity: 'HIGH',
          effect: 'Synergistic pharmacodynamic interaction and altered clearance.'
        }
      ],
      standardDosage: '1 dose PO daily with titration based on clinical monitoring',
      renalAdjustment: 'eGFR < 30 mL/min: Dose reduction by 50% required'
    });
    this.registerDrug({
      id: 'drg-1804',
      genericName: 'Therapeutic-Cephalosporins-18E',
      brandNames: ['CarePharm-Cephalosporins-184', 'CarePharm-Cephalosporins-184-XR'],
      drugClass: 'Cephalosporins (1st-5th Gen)',
      ndcPackageCode: '55910-018-04',
      strengths: ['50mg', '125mg', '250mg'],
      forms: ['Tablet', 'Capsule', 'Extended-Release', 'Oral Solution'][0],
      routes: ['Oral', 'Intravenous', 'Subcutaneous', 'Inhalation'][0],
      indications: ['Management of clinical conditions responsive to Cephalosporins (1st-5th Gen)'],
      contraindications: ['Documented hypersensitivity to Therapeutic-Cephalosporins-18E or related compounds'],
      pregnancyCategory: 'D',
      interactions: [
        {
          drug: 'Therapeutic-Atypical-01A',
          severity: 'HIGH',
          effect: 'Synergistic pharmacodynamic interaction and altered clearance.'
        }
      ],
      standardDosage: '1 dose PO daily with titration based on clinical monitoring',
      renalAdjustment: 'eGFR < 30 mL/min: Dose reduction by 50% required'
    });
    this.registerDrug({
      id: 'drg-1805',
      genericName: 'Therapeutic-Cephalosporins-18F',
      brandNames: ['CarePharm-Cephalosporins-185', 'CarePharm-Cephalosporins-185-XR'],
      drugClass: 'Cephalosporins (1st-5th Gen)',
      ndcPackageCode: '55910-018-05',
      strengths: ['60mg', '150mg', '300mg'],
      forms: ['Tablet', 'Capsule', 'Extended-Release', 'Oral Solution'][1],
      routes: ['Oral', 'Intravenous', 'Subcutaneous', 'Inhalation'][1],
      indications: ['Management of clinical conditions responsive to Cephalosporins (1st-5th Gen)'],
      contraindications: ['Documented hypersensitivity to Therapeutic-Cephalosporins-18F or related compounds'],
      pregnancyCategory: 'D',
      interactions: [
        {
          drug: 'Therapeutic-Atypical-01A',
          severity: 'HIGH',
          effect: 'Synergistic pharmacodynamic interaction and altered clearance.'
        }
      ],
      standardDosage: '1 dose PO daily with titration based on clinical monitoring',
      renalAdjustment: 'eGFR < 30 mL/min: Dose reduction by 50% required'
    });
    this.registerDrug({
      id: 'drg-1900',
      genericName: 'Therapeutic-Penicillins-19A',
      brandNames: ['CarePharm-Penicillins-190', 'CarePharm-Penicillins-190-XR'],
      drugClass: 'Penicillins & Beta-Lactamase Inhibitors',
      ndcPackageCode: '55910-019-00',
      strengths: ['10mg', '25mg', '50mg'],
      forms: ['Tablet', 'Capsule', 'Extended-Release', 'Oral Solution'][0],
      routes: ['Oral', 'Intravenous', 'Subcutaneous', 'Inhalation'][0],
      indications: ['Management of clinical conditions responsive to Penicillins & Beta-Lactamase Inhibitors'],
      contraindications: ['Documented hypersensitivity to Therapeutic-Penicillins-19A or related compounds'],
      pregnancyCategory: 'X',
      interactions: [
        {
          drug: 'Therapeutic-Anticonvulsants-01A',
          severity: 'MODERATE',
          effect: 'Synergistic pharmacodynamic interaction and altered clearance.'
        }
      ],
      standardDosage: '1 dose PO daily with titration based on clinical monitoring',
      renalAdjustment: 'eGFR < 30 mL/min: Dose reduction by 50% required'
    });
    this.registerDrug({
      id: 'drg-1901',
      genericName: 'Therapeutic-Penicillins-19B',
      brandNames: ['CarePharm-Penicillins-191', 'CarePharm-Penicillins-191-XR'],
      drugClass: 'Penicillins & Beta-Lactamase Inhibitors',
      ndcPackageCode: '55910-019-01',
      strengths: ['20mg', '50mg', '100mg'],
      forms: ['Tablet', 'Capsule', 'Extended-Release', 'Oral Solution'][1],
      routes: ['Oral', 'Intravenous', 'Subcutaneous', 'Inhalation'][1],
      indications: ['Management of clinical conditions responsive to Penicillins & Beta-Lactamase Inhibitors'],
      contraindications: ['Documented hypersensitivity to Therapeutic-Penicillins-19B or related compounds'],
      pregnancyCategory: 'X',
      interactions: [
        {
          drug: 'Therapeutic-Anticonvulsants-01A',
          severity: 'MODERATE',
          effect: 'Synergistic pharmacodynamic interaction and altered clearance.'
        }
      ],
      standardDosage: '1 dose PO daily with titration based on clinical monitoring',
      renalAdjustment: 'eGFR < 30 mL/min: Dose reduction by 50% required'
    });
    this.registerDrug({
      id: 'drg-1902',
      genericName: 'Therapeutic-Penicillins-19C',
      brandNames: ['CarePharm-Penicillins-192', 'CarePharm-Penicillins-192-XR'],
      drugClass: 'Penicillins & Beta-Lactamase Inhibitors',
      ndcPackageCode: '55910-019-02',
      strengths: ['30mg', '75mg', '150mg'],
      forms: ['Tablet', 'Capsule', 'Extended-Release', 'Oral Solution'][2],
      routes: ['Oral', 'Intravenous', 'Subcutaneous', 'Inhalation'][2],
      indications: ['Management of clinical conditions responsive to Penicillins & Beta-Lactamase Inhibitors'],
      contraindications: ['Documented hypersensitivity to Therapeutic-Penicillins-19C or related compounds'],
      pregnancyCategory: 'X',
      interactions: [
        {
          drug: 'Therapeutic-Anticonvulsants-01A',
          severity: 'MODERATE',
          effect: 'Synergistic pharmacodynamic interaction and altered clearance.'
        }
      ],
      standardDosage: '1 dose PO daily with titration based on clinical monitoring',
      renalAdjustment: 'eGFR < 30 mL/min: Dose reduction by 50% required'
    });
    this.registerDrug({
      id: 'drg-1903',
      genericName: 'Therapeutic-Penicillins-19D',
      brandNames: ['CarePharm-Penicillins-193', 'CarePharm-Penicillins-193-XR'],
      drugClass: 'Penicillins & Beta-Lactamase Inhibitors',
      ndcPackageCode: '55910-019-03',
      strengths: ['40mg', '100mg', '200mg'],
      forms: ['Tablet', 'Capsule', 'Extended-Release', 'Oral Solution'][3],
      routes: ['Oral', 'Intravenous', 'Subcutaneous', 'Inhalation'][3],
      indications: ['Management of clinical conditions responsive to Penicillins & Beta-Lactamase Inhibitors'],
      contraindications: ['Documented hypersensitivity to Therapeutic-Penicillins-19D or related compounds'],
      pregnancyCategory: 'X',
      interactions: [
        {
          drug: 'Therapeutic-Anticonvulsants-01A',
          severity: 'MODERATE',
          effect: 'Synergistic pharmacodynamic interaction and altered clearance.'
        }
      ],
      standardDosage: '1 dose PO daily with titration based on clinical monitoring',
      renalAdjustment: 'eGFR < 30 mL/min: Dose reduction by 50% required'
    });
    this.registerDrug({
      id: 'drg-1904',
      genericName: 'Therapeutic-Penicillins-19E',
      brandNames: ['CarePharm-Penicillins-194', 'CarePharm-Penicillins-194-XR'],
      drugClass: 'Penicillins & Beta-Lactamase Inhibitors',
      ndcPackageCode: '55910-019-04',
      strengths: ['50mg', '125mg', '250mg'],
      forms: ['Tablet', 'Capsule', 'Extended-Release', 'Oral Solution'][0],
      routes: ['Oral', 'Intravenous', 'Subcutaneous', 'Inhalation'][0],
      indications: ['Management of clinical conditions responsive to Penicillins & Beta-Lactamase Inhibitors'],
      contraindications: ['Documented hypersensitivity to Therapeutic-Penicillins-19E or related compounds'],
      pregnancyCategory: 'X',
      interactions: [
        {
          drug: 'Therapeutic-Anticonvulsants-01A',
          severity: 'MODERATE',
          effect: 'Synergistic pharmacodynamic interaction and altered clearance.'
        }
      ],
      standardDosage: '1 dose PO daily with titration based on clinical monitoring',
      renalAdjustment: 'eGFR < 30 mL/min: Dose reduction by 50% required'
    });
    this.registerDrug({
      id: 'drg-1905',
      genericName: 'Therapeutic-Penicillins-19F',
      brandNames: ['CarePharm-Penicillins-195', 'CarePharm-Penicillins-195-XR'],
      drugClass: 'Penicillins & Beta-Lactamase Inhibitors',
      ndcPackageCode: '55910-019-05',
      strengths: ['60mg', '150mg', '300mg'],
      forms: ['Tablet', 'Capsule', 'Extended-Release', 'Oral Solution'][1],
      routes: ['Oral', 'Intravenous', 'Subcutaneous', 'Inhalation'][1],
      indications: ['Management of clinical conditions responsive to Penicillins & Beta-Lactamase Inhibitors'],
      contraindications: ['Documented hypersensitivity to Therapeutic-Penicillins-19F or related compounds'],
      pregnancyCategory: 'X',
      interactions: [
        {
          drug: 'Therapeutic-Anticonvulsants-01A',
          severity: 'MODERATE',
          effect: 'Synergistic pharmacodynamic interaction and altered clearance.'
        }
      ],
      standardDosage: '1 dose PO daily with titration based on clinical monitoring',
      renalAdjustment: 'eGFR < 30 mL/min: Dose reduction by 50% required'
    });
    this.registerDrug({
      id: 'drg-2000',
      genericName: 'Therapeutic-SSRIs-20A',
      brandNames: ['CarePharm-SSRIs-200', 'CarePharm-SSRIs-200-XR'],
      drugClass: 'SSRIs and SNRIs Antidepressants',
      ndcPackageCode: '55910-020-00',
      strengths: ['10mg', '25mg', '50mg'],
      forms: ['Tablet', 'Capsule', 'Extended-Release', 'Oral Solution'][0],
      routes: ['Oral', 'Intravenous', 'Subcutaneous', 'Inhalation'][0],
      indications: ['Management of clinical conditions responsive to SSRIs and SNRIs Antidepressants'],
      contraindications: ['Documented hypersensitivity to Therapeutic-SSRIs-20A or related compounds'],
      pregnancyCategory: 'A',
      interactions: [
        {
          drug: 'Therapeutic-NSAIDs-01A',
          severity: 'HIGH',
          effect: 'Synergistic pharmacodynamic interaction and altered clearance.'
        }
      ],
      standardDosage: '1 dose PO daily with titration based on clinical monitoring',
      renalAdjustment: 'eGFR < 30 mL/min: Dose reduction by 50% required'
    });
    this.registerDrug({
      id: 'drg-2001',
      genericName: 'Therapeutic-SSRIs-20B',
      brandNames: ['CarePharm-SSRIs-201', 'CarePharm-SSRIs-201-XR'],
      drugClass: 'SSRIs and SNRIs Antidepressants',
      ndcPackageCode: '55910-020-01',
      strengths: ['20mg', '50mg', '100mg'],
      forms: ['Tablet', 'Capsule', 'Extended-Release', 'Oral Solution'][1],
      routes: ['Oral', 'Intravenous', 'Subcutaneous', 'Inhalation'][1],
      indications: ['Management of clinical conditions responsive to SSRIs and SNRIs Antidepressants'],
      contraindications: ['Documented hypersensitivity to Therapeutic-SSRIs-20B or related compounds'],
      pregnancyCategory: 'A',
      interactions: [
        {
          drug: 'Therapeutic-NSAIDs-01A',
          severity: 'HIGH',
          effect: 'Synergistic pharmacodynamic interaction and altered clearance.'
        }
      ],
      standardDosage: '1 dose PO daily with titration based on clinical monitoring',
      renalAdjustment: 'eGFR < 30 mL/min: Dose reduction by 50% required'
    });
    this.registerDrug({
      id: 'drg-2002',
      genericName: 'Therapeutic-SSRIs-20C',
      brandNames: ['CarePharm-SSRIs-202', 'CarePharm-SSRIs-202-XR'],
      drugClass: 'SSRIs and SNRIs Antidepressants',
      ndcPackageCode: '55910-020-02',
      strengths: ['30mg', '75mg', '150mg'],
      forms: ['Tablet', 'Capsule', 'Extended-Release', 'Oral Solution'][2],
      routes: ['Oral', 'Intravenous', 'Subcutaneous', 'Inhalation'][2],
      indications: ['Management of clinical conditions responsive to SSRIs and SNRIs Antidepressants'],
      contraindications: ['Documented hypersensitivity to Therapeutic-SSRIs-20C or related compounds'],
      pregnancyCategory: 'A',
      interactions: [
        {
          drug: 'Therapeutic-NSAIDs-01A',
          severity: 'HIGH',
          effect: 'Synergistic pharmacodynamic interaction and altered clearance.'
        }
      ],
      standardDosage: '1 dose PO daily with titration based on clinical monitoring',
      renalAdjustment: 'eGFR < 30 mL/min: Dose reduction by 50% required'
    });
    this.registerDrug({
      id: 'drg-2003',
      genericName: 'Therapeutic-SSRIs-20D',
      brandNames: ['CarePharm-SSRIs-203', 'CarePharm-SSRIs-203-XR'],
      drugClass: 'SSRIs and SNRIs Antidepressants',
      ndcPackageCode: '55910-020-03',
      strengths: ['40mg', '100mg', '200mg'],
      forms: ['Tablet', 'Capsule', 'Extended-Release', 'Oral Solution'][3],
      routes: ['Oral', 'Intravenous', 'Subcutaneous', 'Inhalation'][3],
      indications: ['Management of clinical conditions responsive to SSRIs and SNRIs Antidepressants'],
      contraindications: ['Documented hypersensitivity to Therapeutic-SSRIs-20D or related compounds'],
      pregnancyCategory: 'A',
      interactions: [
        {
          drug: 'Therapeutic-NSAIDs-01A',
          severity: 'HIGH',
          effect: 'Synergistic pharmacodynamic interaction and altered clearance.'
        }
      ],
      standardDosage: '1 dose PO daily with titration based on clinical monitoring',
      renalAdjustment: 'eGFR < 30 mL/min: Dose reduction by 50% required'
    });
    this.registerDrug({
      id: 'drg-2004',
      genericName: 'Therapeutic-SSRIs-20E',
      brandNames: ['CarePharm-SSRIs-204', 'CarePharm-SSRIs-204-XR'],
      drugClass: 'SSRIs and SNRIs Antidepressants',
      ndcPackageCode: '55910-020-04',
      strengths: ['50mg', '125mg', '250mg'],
      forms: ['Tablet', 'Capsule', 'Extended-Release', 'Oral Solution'][0],
      routes: ['Oral', 'Intravenous', 'Subcutaneous', 'Inhalation'][0],
      indications: ['Management of clinical conditions responsive to SSRIs and SNRIs Antidepressants'],
      contraindications: ['Documented hypersensitivity to Therapeutic-SSRIs-20E or related compounds'],
      pregnancyCategory: 'A',
      interactions: [
        {
          drug: 'Therapeutic-NSAIDs-01A',
          severity: 'HIGH',
          effect: 'Synergistic pharmacodynamic interaction and altered clearance.'
        }
      ],
      standardDosage: '1 dose PO daily with titration based on clinical monitoring',
      renalAdjustment: 'eGFR < 30 mL/min: Dose reduction by 50% required'
    });
    this.registerDrug({
      id: 'drg-2005',
      genericName: 'Therapeutic-SSRIs-20F',
      brandNames: ['CarePharm-SSRIs-205', 'CarePharm-SSRIs-205-XR'],
      drugClass: 'SSRIs and SNRIs Antidepressants',
      ndcPackageCode: '55910-020-05',
      strengths: ['60mg', '150mg', '300mg'],
      forms: ['Tablet', 'Capsule', 'Extended-Release', 'Oral Solution'][1],
      routes: ['Oral', 'Intravenous', 'Subcutaneous', 'Inhalation'][1],
      indications: ['Management of clinical conditions responsive to SSRIs and SNRIs Antidepressants'],
      contraindications: ['Documented hypersensitivity to Therapeutic-SSRIs-20F or related compounds'],
      pregnancyCategory: 'A',
      interactions: [
        {
          drug: 'Therapeutic-NSAIDs-01A',
          severity: 'HIGH',
          effect: 'Synergistic pharmacodynamic interaction and altered clearance.'
        }
      ],
      standardDosage: '1 dose PO daily with titration based on clinical monitoring',
      renalAdjustment: 'eGFR < 30 mL/min: Dose reduction by 50% required'
    });
    this.registerDrug({
      id: 'drg-2100',
      genericName: 'Therapeutic-Atypical-21A',
      brandNames: ['CarePharm-Atypical-210', 'CarePharm-Atypical-210-XR'],
      drugClass: 'Atypical Antipsychotics',
      ndcPackageCode: '55910-021-00',
      strengths: ['10mg', '25mg', '50mg'],
      forms: ['Tablet', 'Capsule', 'Extended-Release', 'Oral Solution'][0],
      routes: ['Oral', 'Intravenous', 'Subcutaneous', 'Inhalation'][0],
      indications: ['Management of clinical conditions responsive to Atypical Antipsychotics'],
      contraindications: ['Documented hypersensitivity to Therapeutic-Atypical-21A or related compounds'],
      pregnancyCategory: 'B',
      interactions: [
        {
          drug: 'Therapeutic-ACE-01A',
          severity: 'MODERATE',
          effect: 'Synergistic pharmacodynamic interaction and altered clearance.'
        }
      ],
      standardDosage: '1 dose PO daily with titration based on clinical monitoring',
      renalAdjustment: 'eGFR < 30 mL/min: Dose reduction by 50% required'
    });
    this.registerDrug({
      id: 'drg-2101',
      genericName: 'Therapeutic-Atypical-21B',
      brandNames: ['CarePharm-Atypical-211', 'CarePharm-Atypical-211-XR'],
      drugClass: 'Atypical Antipsychotics',
      ndcPackageCode: '55910-021-01',
      strengths: ['20mg', '50mg', '100mg'],
      forms: ['Tablet', 'Capsule', 'Extended-Release', 'Oral Solution'][1],
      routes: ['Oral', 'Intravenous', 'Subcutaneous', 'Inhalation'][1],
      indications: ['Management of clinical conditions responsive to Atypical Antipsychotics'],
      contraindications: ['Documented hypersensitivity to Therapeutic-Atypical-21B or related compounds'],
      pregnancyCategory: 'B',
      interactions: [
        {
          drug: 'Therapeutic-ACE-01A',
          severity: 'MODERATE',
          effect: 'Synergistic pharmacodynamic interaction and altered clearance.'
        }
      ],
      standardDosage: '1 dose PO daily with titration based on clinical monitoring',
      renalAdjustment: 'eGFR < 30 mL/min: Dose reduction by 50% required'
    });
    this.registerDrug({
      id: 'drg-2102',
      genericName: 'Therapeutic-Atypical-21C',
      brandNames: ['CarePharm-Atypical-212', 'CarePharm-Atypical-212-XR'],
      drugClass: 'Atypical Antipsychotics',
      ndcPackageCode: '55910-021-02',
      strengths: ['30mg', '75mg', '150mg'],
      forms: ['Tablet', 'Capsule', 'Extended-Release', 'Oral Solution'][2],
      routes: ['Oral', 'Intravenous', 'Subcutaneous', 'Inhalation'][2],
      indications: ['Management of clinical conditions responsive to Atypical Antipsychotics'],
      contraindications: ['Documented hypersensitivity to Therapeutic-Atypical-21C or related compounds'],
      pregnancyCategory: 'B',
      interactions: [
        {
          drug: 'Therapeutic-ACE-01A',
          severity: 'MODERATE',
          effect: 'Synergistic pharmacodynamic interaction and altered clearance.'
        }
      ],
      standardDosage: '1 dose PO daily with titration based on clinical monitoring',
      renalAdjustment: 'eGFR < 30 mL/min: Dose reduction by 50% required'
    });
    this.registerDrug({
      id: 'drg-2103',
      genericName: 'Therapeutic-Atypical-21D',
      brandNames: ['CarePharm-Atypical-213', 'CarePharm-Atypical-213-XR'],
      drugClass: 'Atypical Antipsychotics',
      ndcPackageCode: '55910-021-03',
      strengths: ['40mg', '100mg', '200mg'],
      forms: ['Tablet', 'Capsule', 'Extended-Release', 'Oral Solution'][3],
      routes: ['Oral', 'Intravenous', 'Subcutaneous', 'Inhalation'][3],
      indications: ['Management of clinical conditions responsive to Atypical Antipsychotics'],
      contraindications: ['Documented hypersensitivity to Therapeutic-Atypical-21D or related compounds'],
      pregnancyCategory: 'B',
      interactions: [
        {
          drug: 'Therapeutic-ACE-01A',
          severity: 'MODERATE',
          effect: 'Synergistic pharmacodynamic interaction and altered clearance.'
        }
      ],
      standardDosage: '1 dose PO daily with titration based on clinical monitoring',
      renalAdjustment: 'eGFR < 30 mL/min: Dose reduction by 50% required'
    });
    this.registerDrug({
      id: 'drg-2104',
      genericName: 'Therapeutic-Atypical-21E',
      brandNames: ['CarePharm-Atypical-214', 'CarePharm-Atypical-214-XR'],
      drugClass: 'Atypical Antipsychotics',
      ndcPackageCode: '55910-021-04',
      strengths: ['50mg', '125mg', '250mg'],
      forms: ['Tablet', 'Capsule', 'Extended-Release', 'Oral Solution'][0],
      routes: ['Oral', 'Intravenous', 'Subcutaneous', 'Inhalation'][0],
      indications: ['Management of clinical conditions responsive to Atypical Antipsychotics'],
      contraindications: ['Documented hypersensitivity to Therapeutic-Atypical-21E or related compounds'],
      pregnancyCategory: 'B',
      interactions: [
        {
          drug: 'Therapeutic-ACE-01A',
          severity: 'MODERATE',
          effect: 'Synergistic pharmacodynamic interaction and altered clearance.'
        }
      ],
      standardDosage: '1 dose PO daily with titration based on clinical monitoring',
      renalAdjustment: 'eGFR < 30 mL/min: Dose reduction by 50% required'
    });
    this.registerDrug({
      id: 'drg-2105',
      genericName: 'Therapeutic-Atypical-21F',
      brandNames: ['CarePharm-Atypical-215', 'CarePharm-Atypical-215-XR'],
      drugClass: 'Atypical Antipsychotics',
      ndcPackageCode: '55910-021-05',
      strengths: ['60mg', '150mg', '300mg'],
      forms: ['Tablet', 'Capsule', 'Extended-Release', 'Oral Solution'][1],
      routes: ['Oral', 'Intravenous', 'Subcutaneous', 'Inhalation'][1],
      indications: ['Management of clinical conditions responsive to Atypical Antipsychotics'],
      contraindications: ['Documented hypersensitivity to Therapeutic-Atypical-21F or related compounds'],
      pregnancyCategory: 'B',
      interactions: [
        {
          drug: 'Therapeutic-ACE-01A',
          severity: 'MODERATE',
          effect: 'Synergistic pharmacodynamic interaction and altered clearance.'
        }
      ],
      standardDosage: '1 dose PO daily with titration based on clinical monitoring',
      renalAdjustment: 'eGFR < 30 mL/min: Dose reduction by 50% required'
    });
    this.registerDrug({
      id: 'drg-2200',
      genericName: 'Therapeutic-Anticonvulsants-22A',
      brandNames: ['CarePharm-Anticonvulsants-220', 'CarePharm-Anticonvulsants-220-XR'],
      drugClass: 'Anticonvulsants and Mood Stabilizers',
      ndcPackageCode: '55910-022-00',
      strengths: ['10mg', '25mg', '50mg'],
      forms: ['Tablet', 'Capsule', 'Extended-Release', 'Oral Solution'][0],
      routes: ['Oral', 'Intravenous', 'Subcutaneous', 'Inhalation'][0],
      indications: ['Management of clinical conditions responsive to Anticonvulsants and Mood Stabilizers'],
      contraindications: ['Documented hypersensitivity to Therapeutic-Anticonvulsants-22A or related compounds'],
      pregnancyCategory: 'C',
      interactions: [
        {
          drug: 'Therapeutic-Angiotensin-01A',
          severity: 'HIGH',
          effect: 'Synergistic pharmacodynamic interaction and altered clearance.'
        }
      ],
      standardDosage: '1 dose PO daily with titration based on clinical monitoring',
      renalAdjustment: 'eGFR < 30 mL/min: Dose reduction by 50% required'
    });
    this.registerDrug({
      id: 'drg-2201',
      genericName: 'Therapeutic-Anticonvulsants-22B',
      brandNames: ['CarePharm-Anticonvulsants-221', 'CarePharm-Anticonvulsants-221-XR'],
      drugClass: 'Anticonvulsants and Mood Stabilizers',
      ndcPackageCode: '55910-022-01',
      strengths: ['20mg', '50mg', '100mg'],
      forms: ['Tablet', 'Capsule', 'Extended-Release', 'Oral Solution'][1],
      routes: ['Oral', 'Intravenous', 'Subcutaneous', 'Inhalation'][1],
      indications: ['Management of clinical conditions responsive to Anticonvulsants and Mood Stabilizers'],
      contraindications: ['Documented hypersensitivity to Therapeutic-Anticonvulsants-22B or related compounds'],
      pregnancyCategory: 'C',
      interactions: [
        {
          drug: 'Therapeutic-Angiotensin-01A',
          severity: 'HIGH',
          effect: 'Synergistic pharmacodynamic interaction and altered clearance.'
        }
      ],
      standardDosage: '1 dose PO daily with titration based on clinical monitoring',
      renalAdjustment: 'eGFR < 30 mL/min: Dose reduction by 50% required'
    });
    this.registerDrug({
      id: 'drg-2202',
      genericName: 'Therapeutic-Anticonvulsants-22C',
      brandNames: ['CarePharm-Anticonvulsants-222', 'CarePharm-Anticonvulsants-222-XR'],
      drugClass: 'Anticonvulsants and Mood Stabilizers',
      ndcPackageCode: '55910-022-02',
      strengths: ['30mg', '75mg', '150mg'],
      forms: ['Tablet', 'Capsule', 'Extended-Release', 'Oral Solution'][2],
      routes: ['Oral', 'Intravenous', 'Subcutaneous', 'Inhalation'][2],
      indications: ['Management of clinical conditions responsive to Anticonvulsants and Mood Stabilizers'],
      contraindications: ['Documented hypersensitivity to Therapeutic-Anticonvulsants-22C or related compounds'],
      pregnancyCategory: 'C',
      interactions: [
        {
          drug: 'Therapeutic-Angiotensin-01A',
          severity: 'HIGH',
          effect: 'Synergistic pharmacodynamic interaction and altered clearance.'
        }
      ],
      standardDosage: '1 dose PO daily with titration based on clinical monitoring',
      renalAdjustment: 'eGFR < 30 mL/min: Dose reduction by 50% required'
    });
    this.registerDrug({
      id: 'drg-2203',
      genericName: 'Therapeutic-Anticonvulsants-22D',
      brandNames: ['CarePharm-Anticonvulsants-223', 'CarePharm-Anticonvulsants-223-XR'],
      drugClass: 'Anticonvulsants and Mood Stabilizers',
      ndcPackageCode: '55910-022-03',
      strengths: ['40mg', '100mg', '200mg'],
      forms: ['Tablet', 'Capsule', 'Extended-Release', 'Oral Solution'][3],
      routes: ['Oral', 'Intravenous', 'Subcutaneous', 'Inhalation'][3],
      indications: ['Management of clinical conditions responsive to Anticonvulsants and Mood Stabilizers'],
      contraindications: ['Documented hypersensitivity to Therapeutic-Anticonvulsants-22D or related compounds'],
      pregnancyCategory: 'C',
      interactions: [
        {
          drug: 'Therapeutic-Angiotensin-01A',
          severity: 'HIGH',
          effect: 'Synergistic pharmacodynamic interaction and altered clearance.'
        }
      ],
      standardDosage: '1 dose PO daily with titration based on clinical monitoring',
      renalAdjustment: 'eGFR < 30 mL/min: Dose reduction by 50% required'
    });
    this.registerDrug({
      id: 'drg-2204',
      genericName: 'Therapeutic-Anticonvulsants-22E',
      brandNames: ['CarePharm-Anticonvulsants-224', 'CarePharm-Anticonvulsants-224-XR'],
      drugClass: 'Anticonvulsants and Mood Stabilizers',
      ndcPackageCode: '55910-022-04',
      strengths: ['50mg', '125mg', '250mg'],
      forms: ['Tablet', 'Capsule', 'Extended-Release', 'Oral Solution'][0],
      routes: ['Oral', 'Intravenous', 'Subcutaneous', 'Inhalation'][0],
      indications: ['Management of clinical conditions responsive to Anticonvulsants and Mood Stabilizers'],
      contraindications: ['Documented hypersensitivity to Therapeutic-Anticonvulsants-22E or related compounds'],
      pregnancyCategory: 'C',
      interactions: [
        {
          drug: 'Therapeutic-Angiotensin-01A',
          severity: 'HIGH',
          effect: 'Synergistic pharmacodynamic interaction and altered clearance.'
        }
      ],
      standardDosage: '1 dose PO daily with titration based on clinical monitoring',
      renalAdjustment: 'eGFR < 30 mL/min: Dose reduction by 50% required'
    });
    this.registerDrug({
      id: 'drg-2205',
      genericName: 'Therapeutic-Anticonvulsants-22F',
      brandNames: ['CarePharm-Anticonvulsants-225', 'CarePharm-Anticonvulsants-225-XR'],
      drugClass: 'Anticonvulsants and Mood Stabilizers',
      ndcPackageCode: '55910-022-05',
      strengths: ['60mg', '150mg', '300mg'],
      forms: ['Tablet', 'Capsule', 'Extended-Release', 'Oral Solution'][1],
      routes: ['Oral', 'Intravenous', 'Subcutaneous', 'Inhalation'][1],
      indications: ['Management of clinical conditions responsive to Anticonvulsants and Mood Stabilizers'],
      contraindications: ['Documented hypersensitivity to Therapeutic-Anticonvulsants-22F or related compounds'],
      pregnancyCategory: 'C',
      interactions: [
        {
          drug: 'Therapeutic-Angiotensin-01A',
          severity: 'HIGH',
          effect: 'Synergistic pharmacodynamic interaction and altered clearance.'
        }
      ],
      standardDosage: '1 dose PO daily with titration based on clinical monitoring',
      renalAdjustment: 'eGFR < 30 mL/min: Dose reduction by 50% required'
    });
    this.registerDrug({
      id: 'drg-2300',
      genericName: 'Therapeutic-NSAIDs-23A',
      brandNames: ['CarePharm-NSAIDs-230', 'CarePharm-NSAIDs-230-XR'],
      drugClass: 'NSAIDs Analgesics',
      ndcPackageCode: '55910-023-00',
      strengths: ['10mg', '25mg', '50mg'],
      forms: ['Tablet', 'Capsule', 'Extended-Release', 'Oral Solution'][0],
      routes: ['Oral', 'Intravenous', 'Subcutaneous', 'Inhalation'][0],
      indications: ['Management of clinical conditions responsive to NSAIDs Analgesics'],
      contraindications: ['Documented hypersensitivity to Therapeutic-NSAIDs-23A or related compounds'],
      pregnancyCategory: 'D',
      interactions: [
        {
          drug: 'Therapeutic-Beta-Adrenergic-01A',
          severity: 'MODERATE',
          effect: 'Synergistic pharmacodynamic interaction and altered clearance.'
        }
      ],
      standardDosage: '1 dose PO daily with titration based on clinical monitoring',
      renalAdjustment: 'eGFR < 30 mL/min: Dose reduction by 50% required'
    });
    this.registerDrug({
      id: 'drg-2301',
      genericName: 'Therapeutic-NSAIDs-23B',
      brandNames: ['CarePharm-NSAIDs-231', 'CarePharm-NSAIDs-231-XR'],
      drugClass: 'NSAIDs Analgesics',
      ndcPackageCode: '55910-023-01',
      strengths: ['20mg', '50mg', '100mg'],
      forms: ['Tablet', 'Capsule', 'Extended-Release', 'Oral Solution'][1],
      routes: ['Oral', 'Intravenous', 'Subcutaneous', 'Inhalation'][1],
      indications: ['Management of clinical conditions responsive to NSAIDs Analgesics'],
      contraindications: ['Documented hypersensitivity to Therapeutic-NSAIDs-23B or related compounds'],
      pregnancyCategory: 'D',
      interactions: [
        {
          drug: 'Therapeutic-Beta-Adrenergic-01A',
          severity: 'MODERATE',
          effect: 'Synergistic pharmacodynamic interaction and altered clearance.'
        }
      ],
      standardDosage: '1 dose PO daily with titration based on clinical monitoring',
      renalAdjustment: 'eGFR < 30 mL/min: Dose reduction by 50% required'
    });
    this.registerDrug({
      id: 'drg-2302',
      genericName: 'Therapeutic-NSAIDs-23C',
      brandNames: ['CarePharm-NSAIDs-232', 'CarePharm-NSAIDs-232-XR'],
      drugClass: 'NSAIDs Analgesics',
      ndcPackageCode: '55910-023-02',
      strengths: ['30mg', '75mg', '150mg'],
      forms: ['Tablet', 'Capsule', 'Extended-Release', 'Oral Solution'][2],
      routes: ['Oral', 'Intravenous', 'Subcutaneous', 'Inhalation'][2],
      indications: ['Management of clinical conditions responsive to NSAIDs Analgesics'],
      contraindications: ['Documented hypersensitivity to Therapeutic-NSAIDs-23C or related compounds'],
      pregnancyCategory: 'D',
      interactions: [
        {
          drug: 'Therapeutic-Beta-Adrenergic-01A',
          severity: 'MODERATE',
          effect: 'Synergistic pharmacodynamic interaction and altered clearance.'
        }
      ],
      standardDosage: '1 dose PO daily with titration based on clinical monitoring',
      renalAdjustment: 'eGFR < 30 mL/min: Dose reduction by 50% required'
    });
    this.registerDrug({
      id: 'drg-2303',
      genericName: 'Therapeutic-NSAIDs-23D',
      brandNames: ['CarePharm-NSAIDs-233', 'CarePharm-NSAIDs-233-XR'],
      drugClass: 'NSAIDs Analgesics',
      ndcPackageCode: '55910-023-03',
      strengths: ['40mg', '100mg', '200mg'],
      forms: ['Tablet', 'Capsule', 'Extended-Release', 'Oral Solution'][3],
      routes: ['Oral', 'Intravenous', 'Subcutaneous', 'Inhalation'][3],
      indications: ['Management of clinical conditions responsive to NSAIDs Analgesics'],
      contraindications: ['Documented hypersensitivity to Therapeutic-NSAIDs-23D or related compounds'],
      pregnancyCategory: 'D',
      interactions: [
        {
          drug: 'Therapeutic-Beta-Adrenergic-01A',
          severity: 'MODERATE',
          effect: 'Synergistic pharmacodynamic interaction and altered clearance.'
        }
      ],
      standardDosage: '1 dose PO daily with titration based on clinical monitoring',
      renalAdjustment: 'eGFR < 30 mL/min: Dose reduction by 50% required'
    });
    this.registerDrug({
      id: 'drg-2304',
      genericName: 'Therapeutic-NSAIDs-23E',
      brandNames: ['CarePharm-NSAIDs-234', 'CarePharm-NSAIDs-234-XR'],
      drugClass: 'NSAIDs Analgesics',
      ndcPackageCode: '55910-023-04',
      strengths: ['50mg', '125mg', '250mg'],
      forms: ['Tablet', 'Capsule', 'Extended-Release', 'Oral Solution'][0],
      routes: ['Oral', 'Intravenous', 'Subcutaneous', 'Inhalation'][0],
      indications: ['Management of clinical conditions responsive to NSAIDs Analgesics'],
      contraindications: ['Documented hypersensitivity to Therapeutic-NSAIDs-23E or related compounds'],
      pregnancyCategory: 'D',
      interactions: [
        {
          drug: 'Therapeutic-Beta-Adrenergic-01A',
          severity: 'MODERATE',
          effect: 'Synergistic pharmacodynamic interaction and altered clearance.'
        }
      ],
      standardDosage: '1 dose PO daily with titration based on clinical monitoring',
      renalAdjustment: 'eGFR < 30 mL/min: Dose reduction by 50% required'
    });
    this.registerDrug({
      id: 'drg-2305',
      genericName: 'Therapeutic-NSAIDs-23F',
      brandNames: ['CarePharm-NSAIDs-235', 'CarePharm-NSAIDs-235-XR'],
      drugClass: 'NSAIDs Analgesics',
      ndcPackageCode: '55910-023-05',
      strengths: ['60mg', '150mg', '300mg'],
      forms: ['Tablet', 'Capsule', 'Extended-Release', 'Oral Solution'][1],
      routes: ['Oral', 'Intravenous', 'Subcutaneous', 'Inhalation'][1],
      indications: ['Management of clinical conditions responsive to NSAIDs Analgesics'],
      contraindications: ['Documented hypersensitivity to Therapeutic-NSAIDs-23F or related compounds'],
      pregnancyCategory: 'D',
      interactions: [
        {
          drug: 'Therapeutic-Beta-Adrenergic-01A',
          severity: 'MODERATE',
          effect: 'Synergistic pharmacodynamic interaction and altered clearance.'
        }
      ],
      standardDosage: '1 dose PO daily with titration based on clinical monitoring',
      renalAdjustment: 'eGFR < 30 mL/min: Dose reduction by 50% required'
    });
  }

  registerDrug(drug) {
    this.drugs.set(drug.id, drug);
    this.drugs.set(drug.genericName.toLowerCase(), drug);
    for (const b of drug.brandNames) {
      this.drugs.set(b.toLowerCase(), drug);
    }
  }

  lookup(nameOrId) {
    if (!nameOrId) return null;
    return this.drugs.get(nameOrId) || this.drugs.get(nameOrId.toLowerCase()) || null;
  }

  search(query, limit = 50) {
    if (!query) return Array.from(new Set(this.drugs.values())).slice(0, limit);
    const q = query.toLowerCase();
    const results = new Set();
    for (const drug of this.drugs.values()) {
      if (drug.genericName.toLowerCase().includes(q) || drug.drugClass.toLowerCase().includes(q) || (drug.brandNames || []).some(b => b.toLowerCase().includes(q))) {
        results.add(drug);
        if (results.size >= limit) break;
      }
    }
    return Array.from(results);
  }

  checkInteractions(drugA, drugB) {
    const d1 = this.lookup(drugA);
    if (!d1 || !d1.interactions) return null;
    const inter = d1.interactions.find(it => it.drug.toLowerCase().includes(drugB.toLowerCase()) || drugB.toLowerCase().includes(it.drug.toLowerCase()));
    return inter || null;
  }
}

module.exports = new DrugFormularyCatalogue();
