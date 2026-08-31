/**
 * PulseCare Master CPT-4 Clinical Procedure & RVU Fee Schedule Registry
 */

class CPTProcedureCatalogue {
  constructor() {
    this.procedures = new Map();
    this.categoryIndex = new Map();
    this.initializeProcedures();
  }

  initializeProcedures() {
    this.registerProcedure({
      code: '99200',
      description: 'PulseCare Medical Procedure: Evaluation and Management - Protocol Specification #001',
      category: 'Evaluation and Management',
      specialty: 'Primary Care & Specialist Consultation',
      baseFee: 85.0,
      rvu: 1.2,
      workRVU: 0.66,
      facilityRVU: 0.42,
      malpracticeRVU: 0.12,
      globalPeriodDays: 0,
      requiresPriorAuth: true
    });
    this.registerProcedure({
      code: '99210',
      description: 'PulseCare Medical Procedure: Evaluation and Management - Protocol Specification #002',
      category: 'Evaluation and Management',
      specialty: 'Primary Care & Specialist Consultation',
      baseFee: 92.5,
      rvu: 1.34,
      workRVU: 0.74,
      facilityRVU: 0.47,
      malpracticeRVU: 0.13,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '99220',
      description: 'PulseCare Medical Procedure: Evaluation and Management - Protocol Specification #003',
      category: 'Evaluation and Management',
      specialty: 'Primary Care & Specialist Consultation',
      baseFee: 100.0,
      rvu: 1.48,
      workRVU: 0.81,
      facilityRVU: 0.52,
      malpracticeRVU: 0.15,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '99230',
      description: 'PulseCare Medical Procedure: Evaluation and Management - Protocol Specification #004',
      category: 'Evaluation and Management',
      specialty: 'Primary Care & Specialist Consultation',
      baseFee: 107.5,
      rvu: 1.62,
      workRVU: 0.89,
      facilityRVU: 0.57,
      malpracticeRVU: 0.16,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '99240',
      description: 'PulseCare Medical Procedure: Evaluation and Management - Protocol Specification #005',
      category: 'Evaluation and Management',
      specialty: 'Primary Care & Specialist Consultation',
      baseFee: 115.0,
      rvu: 1.76,
      workRVU: 0.97,
      facilityRVU: 0.62,
      malpracticeRVU: 0.18,
      globalPeriodDays: 0,
      requiresPriorAuth: true
    });
    this.registerProcedure({
      code: '99250',
      description: 'PulseCare Medical Procedure: Evaluation and Management - Protocol Specification #006',
      category: 'Evaluation and Management',
      specialty: 'Primary Care & Specialist Consultation',
      baseFee: 122.5,
      rvu: 1.9,
      workRVU: 1.04,
      facilityRVU: 0.66,
      malpracticeRVU: 0.19,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '99260',
      description: 'PulseCare Medical Procedure: Evaluation and Management - Protocol Specification #007',
      category: 'Evaluation and Management',
      specialty: 'Primary Care & Specialist Consultation',
      baseFee: 130.0,
      rvu: 2.04,
      workRVU: 1.12,
      facilityRVU: 0.71,
      malpracticeRVU: 0.2,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '99270',
      description: 'PulseCare Medical Procedure: Evaluation and Management - Protocol Specification #008',
      category: 'Evaluation and Management',
      specialty: 'Primary Care & Specialist Consultation',
      baseFee: 137.5,
      rvu: 2.18,
      workRVU: 1.2,
      facilityRVU: 0.76,
      malpracticeRVU: 0.22,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '99280',
      description: 'PulseCare Medical Procedure: Evaluation and Management - Protocol Specification #009',
      category: 'Evaluation and Management',
      specialty: 'Primary Care & Specialist Consultation',
      baseFee: 145.0,
      rvu: 2.32,
      workRVU: 1.28,
      facilityRVU: 0.81,
      malpracticeRVU: 0.23,
      globalPeriodDays: 0,
      requiresPriorAuth: true
    });
    this.registerProcedure({
      code: '99290',
      description: 'PulseCare Medical Procedure: Evaluation and Management - Protocol Specification #010',
      category: 'Evaluation and Management',
      specialty: 'Primary Care & Specialist Consultation',
      baseFee: 152.5,
      rvu: 2.46,
      workRVU: 1.35,
      facilityRVU: 0.86,
      malpracticeRVU: 0.25,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '99300',
      description: 'PulseCare Medical Procedure: Evaluation and Management - Protocol Specification #011',
      category: 'Evaluation and Management',
      specialty: 'Primary Care & Specialist Consultation',
      baseFee: 160.0,
      rvu: 2.6,
      workRVU: 1.43,
      facilityRVU: 0.91,
      malpracticeRVU: 0.26,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '99310',
      description: 'PulseCare Medical Procedure: Evaluation and Management - Protocol Specification #012',
      category: 'Evaluation and Management',
      specialty: 'Primary Care & Specialist Consultation',
      baseFee: 167.5,
      rvu: 2.74,
      workRVU: 1.51,
      facilityRVU: 0.96,
      malpracticeRVU: 0.27,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '99320',
      description: 'PulseCare Medical Procedure: Evaluation and Management - Protocol Specification #013',
      category: 'Evaluation and Management',
      specialty: 'Primary Care & Specialist Consultation',
      baseFee: 175.0,
      rvu: 2.88,
      workRVU: 1.58,
      facilityRVU: 1.01,
      malpracticeRVU: 0.29,
      globalPeriodDays: 0,
      requiresPriorAuth: true
    });
    this.registerProcedure({
      code: '99330',
      description: 'PulseCare Medical Procedure: Evaluation and Management - Protocol Specification #014',
      category: 'Evaluation and Management',
      specialty: 'Primary Care & Specialist Consultation',
      baseFee: 182.5,
      rvu: 3.02,
      workRVU: 1.66,
      facilityRVU: 1.06,
      malpracticeRVU: 0.3,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '99340',
      description: 'PulseCare Medical Procedure: Evaluation and Management - Protocol Specification #015',
      category: 'Evaluation and Management',
      specialty: 'Primary Care & Specialist Consultation',
      baseFee: 190.0,
      rvu: 3.16,
      workRVU: 1.74,
      facilityRVU: 1.11,
      malpracticeRVU: 0.32,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '99350',
      description: 'PulseCare Medical Procedure: Evaluation and Management - Protocol Specification #016',
      category: 'Evaluation and Management',
      specialty: 'Primary Care & Specialist Consultation',
      baseFee: 197.5,
      rvu: 3.3,
      workRVU: 1.81,
      facilityRVU: 1.15,
      malpracticeRVU: 0.33,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '99360',
      description: 'PulseCare Medical Procedure: Evaluation and Management - Protocol Specification #017',
      category: 'Evaluation and Management',
      specialty: 'Primary Care & Specialist Consultation',
      baseFee: 205.0,
      rvu: 3.44,
      workRVU: 1.89,
      facilityRVU: 1.2,
      malpracticeRVU: 0.34,
      globalPeriodDays: 0,
      requiresPriorAuth: true
    });
    this.registerProcedure({
      code: '99370',
      description: 'PulseCare Medical Procedure: Evaluation and Management - Protocol Specification #018',
      category: 'Evaluation and Management',
      specialty: 'Primary Care & Specialist Consultation',
      baseFee: 212.5,
      rvu: 3.58,
      workRVU: 1.97,
      facilityRVU: 1.25,
      malpracticeRVU: 0.36,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '99380',
      description: 'PulseCare Medical Procedure: Evaluation and Management - Protocol Specification #019',
      category: 'Evaluation and Management',
      specialty: 'Primary Care & Specialist Consultation',
      baseFee: 220.0,
      rvu: 3.72,
      workRVU: 2.05,
      facilityRVU: 1.3,
      malpracticeRVU: 0.37,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '99390',
      description: 'PulseCare Medical Procedure: Evaluation and Management - Protocol Specification #020',
      category: 'Evaluation and Management',
      specialty: 'Primary Care & Specialist Consultation',
      baseFee: 227.5,
      rvu: 3.86,
      workRVU: 2.12,
      facilityRVU: 1.35,
      malpracticeRVU: 0.39,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '99400',
      description: 'PulseCare Medical Procedure: Evaluation and Management - Protocol Specification #021',
      category: 'Evaluation and Management',
      specialty: 'Primary Care & Specialist Consultation',
      baseFee: 235.0,
      rvu: 4.0,
      workRVU: 2.2,
      facilityRVU: 1.4,
      malpracticeRVU: 0.4,
      globalPeriodDays: 0,
      requiresPriorAuth: true
    });
    this.registerProcedure({
      code: '99410',
      description: 'PulseCare Medical Procedure: Evaluation and Management - Protocol Specification #022',
      category: 'Evaluation and Management',
      specialty: 'Primary Care & Specialist Consultation',
      baseFee: 242.5,
      rvu: 4.14,
      workRVU: 2.28,
      facilityRVU: 1.45,
      malpracticeRVU: 0.41,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '99420',
      description: 'PulseCare Medical Procedure: Evaluation and Management - Protocol Specification #023',
      category: 'Evaluation and Management',
      specialty: 'Primary Care & Specialist Consultation',
      baseFee: 250.0,
      rvu: 4.28,
      workRVU: 2.35,
      facilityRVU: 1.5,
      malpracticeRVU: 0.43,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '99430',
      description: 'PulseCare Medical Procedure: Evaluation and Management - Protocol Specification #024',
      category: 'Evaluation and Management',
      specialty: 'Primary Care & Specialist Consultation',
      baseFee: 257.5,
      rvu: 4.42,
      workRVU: 2.43,
      facilityRVU: 1.55,
      malpracticeRVU: 0.44,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '99440',
      description: 'PulseCare Medical Procedure: Evaluation and Management - Protocol Specification #025',
      category: 'Evaluation and Management',
      specialty: 'Primary Care & Specialist Consultation',
      baseFee: 265.0,
      rvu: 4.56,
      workRVU: 2.51,
      facilityRVU: 1.6,
      malpracticeRVU: 0.46,
      globalPeriodDays: 0,
      requiresPriorAuth: true
    });
    this.registerProcedure({
      code: '99450',
      description: 'PulseCare Medical Procedure: Evaluation and Management - Protocol Specification #026',
      category: 'Evaluation and Management',
      specialty: 'Primary Care & Specialist Consultation',
      baseFee: 272.5,
      rvu: 4.7,
      workRVU: 2.59,
      facilityRVU: 1.65,
      malpracticeRVU: 0.47,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '99460',
      description: 'PulseCare Medical Procedure: Evaluation and Management - Protocol Specification #027',
      category: 'Evaluation and Management',
      specialty: 'Primary Care & Specialist Consultation',
      baseFee: 280.0,
      rvu: 4.84,
      workRVU: 2.66,
      facilityRVU: 1.69,
      malpracticeRVU: 0.48,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '99470',
      description: 'PulseCare Medical Procedure: Evaluation and Management - Protocol Specification #028',
      category: 'Evaluation and Management',
      specialty: 'Primary Care & Specialist Consultation',
      baseFee: 287.5,
      rvu: 4.98,
      workRVU: 2.74,
      facilityRVU: 1.74,
      malpracticeRVU: 0.5,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '99480',
      description: 'PulseCare Medical Procedure: Evaluation and Management - Protocol Specification #029',
      category: 'Evaluation and Management',
      specialty: 'Primary Care & Specialist Consultation',
      baseFee: 295.0,
      rvu: 5.12,
      workRVU: 2.82,
      facilityRVU: 1.79,
      malpracticeRVU: 0.51,
      globalPeriodDays: 0,
      requiresPriorAuth: true
    });
    this.registerProcedure({
      code: '99490',
      description: 'PulseCare Medical Procedure: Evaluation and Management - Protocol Specification #030',
      category: 'Evaluation and Management',
      specialty: 'Primary Care & Specialist Consultation',
      baseFee: 302.5,
      rvu: 5.26,
      workRVU: 2.89,
      facilityRVU: 1.84,
      malpracticeRVU: 0.53,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '99500',
      description: 'PulseCare Medical Procedure: Evaluation and Management - Protocol Specification #031',
      category: 'Evaluation and Management',
      specialty: 'Primary Care & Specialist Consultation',
      baseFee: 310.0,
      rvu: 5.4,
      workRVU: 2.97,
      facilityRVU: 1.89,
      malpracticeRVU: 0.54,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '99510',
      description: 'PulseCare Medical Procedure: Evaluation and Management - Protocol Specification #032',
      category: 'Evaluation and Management',
      specialty: 'Primary Care & Specialist Consultation',
      baseFee: 317.5,
      rvu: 5.54,
      workRVU: 3.05,
      facilityRVU: 1.94,
      malpracticeRVU: 0.55,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '99520',
      description: 'PulseCare Medical Procedure: Evaluation and Management - Protocol Specification #033',
      category: 'Evaluation and Management',
      specialty: 'Primary Care & Specialist Consultation',
      baseFee: 325.0,
      rvu: 5.68,
      workRVU: 3.12,
      facilityRVU: 1.99,
      malpracticeRVU: 0.57,
      globalPeriodDays: 0,
      requiresPriorAuth: true
    });
    this.registerProcedure({
      code: '99530',
      description: 'PulseCare Medical Procedure: Evaluation and Management - Protocol Specification #034',
      category: 'Evaluation and Management',
      specialty: 'Primary Care & Specialist Consultation',
      baseFee: 332.5,
      rvu: 5.82,
      workRVU: 3.2,
      facilityRVU: 2.04,
      malpracticeRVU: 0.58,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '99540',
      description: 'PulseCare Medical Procedure: Evaluation and Management - Protocol Specification #035',
      category: 'Evaluation and Management',
      specialty: 'Primary Care & Specialist Consultation',
      baseFee: 340.0,
      rvu: 5.96,
      workRVU: 3.28,
      facilityRVU: 2.09,
      malpracticeRVU: 0.6,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '99550',
      description: 'PulseCare Medical Procedure: Evaluation and Management - Protocol Specification #036',
      category: 'Evaluation and Management',
      specialty: 'Primary Care & Specialist Consultation',
      baseFee: 347.5,
      rvu: 6.1,
      workRVU: 3.35,
      facilityRVU: 2.13,
      malpracticeRVU: 0.61,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '99560',
      description: 'PulseCare Medical Procedure: Evaluation and Management - Protocol Specification #037',
      category: 'Evaluation and Management',
      specialty: 'Primary Care & Specialist Consultation',
      baseFee: 355.0,
      rvu: 6.24,
      workRVU: 3.43,
      facilityRVU: 2.18,
      malpracticeRVU: 0.62,
      globalPeriodDays: 0,
      requiresPriorAuth: true
    });
    this.registerProcedure({
      code: '99570',
      description: 'PulseCare Medical Procedure: Evaluation and Management - Protocol Specification #038',
      category: 'Evaluation and Management',
      specialty: 'Primary Care & Specialist Consultation',
      baseFee: 362.5,
      rvu: 6.38,
      workRVU: 3.51,
      facilityRVU: 2.23,
      malpracticeRVU: 0.64,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '99580',
      description: 'PulseCare Medical Procedure: Evaluation and Management - Protocol Specification #039',
      category: 'Evaluation and Management',
      specialty: 'Primary Care & Specialist Consultation',
      baseFee: 370.0,
      rvu: 6.52,
      workRVU: 3.59,
      facilityRVU: 2.28,
      malpracticeRVU: 0.65,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '99590',
      description: 'PulseCare Medical Procedure: Evaluation and Management - Protocol Specification #040',
      category: 'Evaluation and Management',
      specialty: 'Primary Care & Specialist Consultation',
      baseFee: 377.5,
      rvu: 6.66,
      workRVU: 3.66,
      facilityRVU: 2.33,
      malpracticeRVU: 0.67,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '99600',
      description: 'PulseCare Medical Procedure: Evaluation and Management - Protocol Specification #041',
      category: 'Evaluation and Management',
      specialty: 'Primary Care & Specialist Consultation',
      baseFee: 385.0,
      rvu: 6.8,
      workRVU: 3.74,
      facilityRVU: 2.38,
      malpracticeRVU: 0.68,
      globalPeriodDays: 0,
      requiresPriorAuth: true
    });
    this.registerProcedure({
      code: '99610',
      description: 'PulseCare Medical Procedure: Evaluation and Management - Protocol Specification #042',
      category: 'Evaluation and Management',
      specialty: 'Primary Care & Specialist Consultation',
      baseFee: 392.5,
      rvu: 6.94,
      workRVU: 3.82,
      facilityRVU: 2.43,
      malpracticeRVU: 0.69,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '99620',
      description: 'PulseCare Medical Procedure: Evaluation and Management - Protocol Specification #043',
      category: 'Evaluation and Management',
      specialty: 'Primary Care & Specialist Consultation',
      baseFee: 400.0,
      rvu: 7.08,
      workRVU: 3.89,
      facilityRVU: 2.48,
      malpracticeRVU: 0.71,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '99630',
      description: 'PulseCare Medical Procedure: Evaluation and Management - Protocol Specification #044',
      category: 'Evaluation and Management',
      specialty: 'Primary Care & Specialist Consultation',
      baseFee: 407.5,
      rvu: 7.22,
      workRVU: 3.97,
      facilityRVU: 2.53,
      malpracticeRVU: 0.72,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '99640',
      description: 'PulseCare Medical Procedure: Evaluation and Management - Protocol Specification #045',
      category: 'Evaluation and Management',
      specialty: 'Primary Care & Specialist Consultation',
      baseFee: 415.0,
      rvu: 7.36,
      workRVU: 4.05,
      facilityRVU: 2.58,
      malpracticeRVU: 0.74,
      globalPeriodDays: 0,
      requiresPriorAuth: true
    });
    this.registerProcedure({
      code: '99650',
      description: 'PulseCare Medical Procedure: Evaluation and Management - Protocol Specification #046',
      category: 'Evaluation and Management',
      specialty: 'Primary Care & Specialist Consultation',
      baseFee: 422.5,
      rvu: 7.5,
      workRVU: 4.12,
      facilityRVU: 2.62,
      malpracticeRVU: 0.75,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '99660',
      description: 'PulseCare Medical Procedure: Evaluation and Management - Protocol Specification #047',
      category: 'Evaluation and Management',
      specialty: 'Primary Care & Specialist Consultation',
      baseFee: 430.0,
      rvu: 7.64,
      workRVU: 4.2,
      facilityRVU: 2.67,
      malpracticeRVU: 0.76,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '99670',
      description: 'PulseCare Medical Procedure: Evaluation and Management - Protocol Specification #048',
      category: 'Evaluation and Management',
      specialty: 'Primary Care & Specialist Consultation',
      baseFee: 437.5,
      rvu: 7.78,
      workRVU: 4.28,
      facilityRVU: 2.72,
      malpracticeRVU: 0.78,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '99680',
      description: 'PulseCare Medical Procedure: Evaluation and Management - Protocol Specification #049',
      category: 'Evaluation and Management',
      specialty: 'Primary Care & Specialist Consultation',
      baseFee: 445.0,
      rvu: 7.92,
      workRVU: 4.36,
      facilityRVU: 2.77,
      malpracticeRVU: 0.79,
      globalPeriodDays: 0,
      requiresPriorAuth: true
    });
    this.registerProcedure({
      code: '99690',
      description: 'PulseCare Medical Procedure: Evaluation and Management - Protocol Specification #050',
      category: 'Evaluation and Management',
      specialty: 'Primary Care & Specialist Consultation',
      baseFee: 452.5,
      rvu: 8.06,
      workRVU: 4.43,
      facilityRVU: 2.82,
      malpracticeRVU: 0.81,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '99700',
      description: 'PulseCare Medical Procedure: Evaluation and Management - Protocol Specification #051',
      category: 'Evaluation and Management',
      specialty: 'Primary Care & Specialist Consultation',
      baseFee: 460.0,
      rvu: 8.2,
      workRVU: 4.51,
      facilityRVU: 2.87,
      malpracticeRVU: 0.82,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '99710',
      description: 'PulseCare Medical Procedure: Evaluation and Management - Protocol Specification #052',
      category: 'Evaluation and Management',
      specialty: 'Primary Care & Specialist Consultation',
      baseFee: 467.5,
      rvu: 8.34,
      workRVU: 4.59,
      facilityRVU: 2.92,
      malpracticeRVU: 0.83,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '99720',
      description: 'PulseCare Medical Procedure: Evaluation and Management - Protocol Specification #053',
      category: 'Evaluation and Management',
      specialty: 'Primary Care & Specialist Consultation',
      baseFee: 475.0,
      rvu: 8.48,
      workRVU: 4.66,
      facilityRVU: 2.97,
      malpracticeRVU: 0.85,
      globalPeriodDays: 0,
      requiresPriorAuth: true
    });
    this.registerProcedure({
      code: '99730',
      description: 'PulseCare Medical Procedure: Evaluation and Management - Protocol Specification #054',
      category: 'Evaluation and Management',
      specialty: 'Primary Care & Specialist Consultation',
      baseFee: 482.5,
      rvu: 8.62,
      workRVU: 4.74,
      facilityRVU: 3.02,
      malpracticeRVU: 0.86,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '99740',
      description: 'PulseCare Medical Procedure: Evaluation and Management - Protocol Specification #055',
      category: 'Evaluation and Management',
      specialty: 'Primary Care & Specialist Consultation',
      baseFee: 490.0,
      rvu: 8.76,
      workRVU: 4.82,
      facilityRVU: 3.07,
      malpracticeRVU: 0.88,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '99750',
      description: 'PulseCare Medical Procedure: Evaluation and Management - Protocol Specification #056',
      category: 'Evaluation and Management',
      specialty: 'Primary Care & Specialist Consultation',
      baseFee: 497.5,
      rvu: 8.9,
      workRVU: 4.9,
      facilityRVU: 3.11,
      malpracticeRVU: 0.89,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '99760',
      description: 'PulseCare Medical Procedure: Evaluation and Management - Protocol Specification #057',
      category: 'Evaluation and Management',
      specialty: 'Primary Care & Specialist Consultation',
      baseFee: 505.0,
      rvu: 9.04,
      workRVU: 4.97,
      facilityRVU: 3.16,
      malpracticeRVU: 0.9,
      globalPeriodDays: 0,
      requiresPriorAuth: true
    });
    this.registerProcedure({
      code: '99770',
      description: 'PulseCare Medical Procedure: Evaluation and Management - Protocol Specification #058',
      category: 'Evaluation and Management',
      specialty: 'Primary Care & Specialist Consultation',
      baseFee: 512.5,
      rvu: 9.18,
      workRVU: 5.05,
      facilityRVU: 3.21,
      malpracticeRVU: 0.92,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '99780',
      description: 'PulseCare Medical Procedure: Evaluation and Management - Protocol Specification #059',
      category: 'Evaluation and Management',
      specialty: 'Primary Care & Specialist Consultation',
      baseFee: 520.0,
      rvu: 9.32,
      workRVU: 5.13,
      facilityRVU: 3.26,
      malpracticeRVU: 0.93,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '99790',
      description: 'PulseCare Medical Procedure: Evaluation and Management - Protocol Specification #060',
      category: 'Evaluation and Management',
      specialty: 'Primary Care & Specialist Consultation',
      baseFee: 527.5,
      rvu: 9.46,
      workRVU: 5.2,
      facilityRVU: 3.31,
      malpracticeRVU: 0.95,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '99800',
      description: 'PulseCare Medical Procedure: Evaluation and Management - Protocol Specification #061',
      category: 'Evaluation and Management',
      specialty: 'Primary Care & Specialist Consultation',
      baseFee: 535.0,
      rvu: 9.6,
      workRVU: 5.28,
      facilityRVU: 3.36,
      malpracticeRVU: 0.96,
      globalPeriodDays: 0,
      requiresPriorAuth: true
    });
    this.registerProcedure({
      code: '99810',
      description: 'PulseCare Medical Procedure: Evaluation and Management - Protocol Specification #062',
      category: 'Evaluation and Management',
      specialty: 'Primary Care & Specialist Consultation',
      baseFee: 542.5,
      rvu: 9.74,
      workRVU: 5.36,
      facilityRVU: 3.41,
      malpracticeRVU: 0.97,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '99820',
      description: 'PulseCare Medical Procedure: Evaluation and Management - Protocol Specification #063',
      category: 'Evaluation and Management',
      specialty: 'Primary Care & Specialist Consultation',
      baseFee: 550.0,
      rvu: 9.88,
      workRVU: 5.43,
      facilityRVU: 3.46,
      malpracticeRVU: 0.99,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '99830',
      description: 'PulseCare Medical Procedure: Evaluation and Management - Protocol Specification #064',
      category: 'Evaluation and Management',
      specialty: 'Primary Care & Specialist Consultation',
      baseFee: 557.5,
      rvu: 10.02,
      workRVU: 5.51,
      facilityRVU: 3.51,
      malpracticeRVU: 1.0,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '99840',
      description: 'PulseCare Medical Procedure: Evaluation and Management - Protocol Specification #065',
      category: 'Evaluation and Management',
      specialty: 'Primary Care & Specialist Consultation',
      baseFee: 565.0,
      rvu: 10.16,
      workRVU: 5.59,
      facilityRVU: 3.56,
      malpracticeRVU: 1.02,
      globalPeriodDays: 0,
      requiresPriorAuth: true
    });
    this.registerProcedure({
      code: '99850',
      description: 'PulseCare Medical Procedure: Evaluation and Management - Protocol Specification #066',
      category: 'Evaluation and Management',
      specialty: 'Primary Care & Specialist Consultation',
      baseFee: 572.5,
      rvu: 10.3,
      workRVU: 5.67,
      facilityRVU: 3.6,
      malpracticeRVU: 1.03,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '99860',
      description: 'PulseCare Medical Procedure: Evaluation and Management - Protocol Specification #067',
      category: 'Evaluation and Management',
      specialty: 'Primary Care & Specialist Consultation',
      baseFee: 580.0,
      rvu: 10.44,
      workRVU: 5.74,
      facilityRVU: 3.65,
      malpracticeRVU: 1.04,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '99870',
      description: 'PulseCare Medical Procedure: Evaluation and Management - Protocol Specification #068',
      category: 'Evaluation and Management',
      specialty: 'Primary Care & Specialist Consultation',
      baseFee: 587.5,
      rvu: 10.58,
      workRVU: 5.82,
      facilityRVU: 3.7,
      malpracticeRVU: 1.06,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '99880',
      description: 'PulseCare Medical Procedure: Evaluation and Management - Protocol Specification #069',
      category: 'Evaluation and Management',
      specialty: 'Primary Care & Specialist Consultation',
      baseFee: 595.0,
      rvu: 10.72,
      workRVU: 5.9,
      facilityRVU: 3.75,
      malpracticeRVU: 1.07,
      globalPeriodDays: 0,
      requiresPriorAuth: true
    });
    this.registerProcedure({
      code: '99890',
      description: 'PulseCare Medical Procedure: Evaluation and Management - Protocol Specification #070',
      category: 'Evaluation and Management',
      specialty: 'Primary Care & Specialist Consultation',
      baseFee: 602.5,
      rvu: 10.86,
      workRVU: 5.97,
      facilityRVU: 3.8,
      malpracticeRVU: 1.09,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '99900',
      description: 'PulseCare Medical Procedure: Evaluation and Management - Protocol Specification #071',
      category: 'Evaluation and Management',
      specialty: 'Primary Care & Specialist Consultation',
      baseFee: 610.0,
      rvu: 11.0,
      workRVU: 6.05,
      facilityRVU: 3.85,
      malpracticeRVU: 1.1,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '99910',
      description: 'PulseCare Medical Procedure: Evaluation and Management - Protocol Specification #072',
      category: 'Evaluation and Management',
      specialty: 'Primary Care & Specialist Consultation',
      baseFee: 617.5,
      rvu: 11.14,
      workRVU: 6.13,
      facilityRVU: 3.9,
      malpracticeRVU: 1.11,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '99920',
      description: 'PulseCare Medical Procedure: Evaluation and Management - Protocol Specification #073',
      category: 'Evaluation and Management',
      specialty: 'Primary Care & Specialist Consultation',
      baseFee: 625.0,
      rvu: 11.28,
      workRVU: 6.2,
      facilityRVU: 3.95,
      malpracticeRVU: 1.13,
      globalPeriodDays: 0,
      requiresPriorAuth: true
    });
    this.registerProcedure({
      code: '99930',
      description: 'PulseCare Medical Procedure: Evaluation and Management - Protocol Specification #074',
      category: 'Evaluation and Management',
      specialty: 'Primary Care & Specialist Consultation',
      baseFee: 632.5,
      rvu: 11.42,
      workRVU: 6.28,
      facilityRVU: 4.0,
      malpracticeRVU: 1.14,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '99940',
      description: 'PulseCare Medical Procedure: Evaluation and Management - Protocol Specification #075',
      category: 'Evaluation and Management',
      specialty: 'Primary Care & Specialist Consultation',
      baseFee: 640.0,
      rvu: 11.56,
      workRVU: 6.36,
      facilityRVU: 4.05,
      malpracticeRVU: 1.16,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '99950',
      description: 'PulseCare Medical Procedure: Evaluation and Management - Protocol Specification #076',
      category: 'Evaluation and Management',
      specialty: 'Primary Care & Specialist Consultation',
      baseFee: 647.5,
      rvu: 11.7,
      workRVU: 6.44,
      facilityRVU: 4.09,
      malpracticeRVU: 1.17,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '99960',
      description: 'PulseCare Medical Procedure: Evaluation and Management - Protocol Specification #077',
      category: 'Evaluation and Management',
      specialty: 'Primary Care & Specialist Consultation',
      baseFee: 655.0,
      rvu: 11.84,
      workRVU: 6.51,
      facilityRVU: 4.14,
      malpracticeRVU: 1.18,
      globalPeriodDays: 0,
      requiresPriorAuth: true
    });
    this.registerProcedure({
      code: '99970',
      description: 'PulseCare Medical Procedure: Evaluation and Management - Protocol Specification #078',
      category: 'Evaluation and Management',
      specialty: 'Primary Care & Specialist Consultation',
      baseFee: 662.5,
      rvu: 11.98,
      workRVU: 6.59,
      facilityRVU: 4.19,
      malpracticeRVU: 1.2,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '99980',
      description: 'PulseCare Medical Procedure: Evaluation and Management - Protocol Specification #079',
      category: 'Evaluation and Management',
      specialty: 'Primary Care & Specialist Consultation',
      baseFee: 670.0,
      rvu: 12.12,
      workRVU: 6.67,
      facilityRVU: 4.24,
      malpracticeRVU: 1.21,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '99990',
      description: 'PulseCare Medical Procedure: Evaluation and Management - Protocol Specification #080',
      category: 'Evaluation and Management',
      specialty: 'Primary Care & Specialist Consultation',
      baseFee: 677.5,
      rvu: 12.26,
      workRVU: 6.74,
      facilityRVU: 4.29,
      malpracticeRVU: 1.23,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '100000',
      description: 'PulseCare Medical Procedure: Evaluation and Management - Protocol Specification #081',
      category: 'Evaluation and Management',
      specialty: 'Primary Care & Specialist Consultation',
      baseFee: 685.0,
      rvu: 12.4,
      workRVU: 6.82,
      facilityRVU: 4.34,
      malpracticeRVU: 1.24,
      globalPeriodDays: 0,
      requiresPriorAuth: true
    });
    this.registerProcedure({
      code: '100010',
      description: 'PulseCare Medical Procedure: Evaluation and Management - Protocol Specification #082',
      category: 'Evaluation and Management',
      specialty: 'Primary Care & Specialist Consultation',
      baseFee: 692.5,
      rvu: 12.54,
      workRVU: 6.9,
      facilityRVU: 4.39,
      malpracticeRVU: 1.25,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '100020',
      description: 'PulseCare Medical Procedure: Evaluation and Management - Protocol Specification #083',
      category: 'Evaluation and Management',
      specialty: 'Primary Care & Specialist Consultation',
      baseFee: 700.0,
      rvu: 12.68,
      workRVU: 6.97,
      facilityRVU: 4.44,
      malpracticeRVU: 1.27,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '100030',
      description: 'PulseCare Medical Procedure: Evaluation and Management - Protocol Specification #084',
      category: 'Evaluation and Management',
      specialty: 'Primary Care & Specialist Consultation',
      baseFee: 707.5,
      rvu: 12.82,
      workRVU: 7.05,
      facilityRVU: 4.49,
      malpracticeRVU: 1.28,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '100040',
      description: 'PulseCare Medical Procedure: Evaluation and Management - Protocol Specification #085',
      category: 'Evaluation and Management',
      specialty: 'Primary Care & Specialist Consultation',
      baseFee: 715.0,
      rvu: 12.96,
      workRVU: 7.13,
      facilityRVU: 4.54,
      malpracticeRVU: 1.3,
      globalPeriodDays: 0,
      requiresPriorAuth: true
    });
    this.registerProcedure({
      code: '100050',
      description: 'PulseCare Medical Procedure: Evaluation and Management - Protocol Specification #086',
      category: 'Evaluation and Management',
      specialty: 'Primary Care & Specialist Consultation',
      baseFee: 722.5,
      rvu: 13.1,
      workRVU: 7.21,
      facilityRVU: 4.58,
      malpracticeRVU: 1.31,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '100060',
      description: 'PulseCare Medical Procedure: Evaluation and Management - Protocol Specification #087',
      category: 'Evaluation and Management',
      specialty: 'Primary Care & Specialist Consultation',
      baseFee: 730.0,
      rvu: 13.24,
      workRVU: 7.28,
      facilityRVU: 4.63,
      malpracticeRVU: 1.32,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '100070',
      description: 'PulseCare Medical Procedure: Evaluation and Management - Protocol Specification #088',
      category: 'Evaluation and Management',
      specialty: 'Primary Care & Specialist Consultation',
      baseFee: 737.5,
      rvu: 13.38,
      workRVU: 7.36,
      facilityRVU: 4.68,
      malpracticeRVU: 1.34,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '100080',
      description: 'PulseCare Medical Procedure: Evaluation and Management - Protocol Specification #089',
      category: 'Evaluation and Management',
      specialty: 'Primary Care & Specialist Consultation',
      baseFee: 745.0,
      rvu: 13.52,
      workRVU: 7.44,
      facilityRVU: 4.73,
      malpracticeRVU: 1.35,
      globalPeriodDays: 0,
      requiresPriorAuth: true
    });
    this.registerProcedure({
      code: '100090',
      description: 'PulseCare Medical Procedure: Evaluation and Management - Protocol Specification #090',
      category: 'Evaluation and Management',
      specialty: 'Primary Care & Specialist Consultation',
      baseFee: 752.5,
      rvu: 13.66,
      workRVU: 7.51,
      facilityRVU: 4.78,
      malpracticeRVU: 1.37,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '100100',
      description: 'PulseCare Medical Procedure: Evaluation and Management - Protocol Specification #091',
      category: 'Evaluation and Management',
      specialty: 'Primary Care & Specialist Consultation',
      baseFee: 760.0,
      rvu: 13.8,
      workRVU: 7.59,
      facilityRVU: 4.83,
      malpracticeRVU: 1.38,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '100110',
      description: 'PulseCare Medical Procedure: Evaluation and Management - Protocol Specification #092',
      category: 'Evaluation and Management',
      specialty: 'Primary Care & Specialist Consultation',
      baseFee: 767.5,
      rvu: 13.94,
      workRVU: 7.67,
      facilityRVU: 4.88,
      malpracticeRVU: 1.39,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '100120',
      description: 'PulseCare Medical Procedure: Evaluation and Management - Protocol Specification #093',
      category: 'Evaluation and Management',
      specialty: 'Primary Care & Specialist Consultation',
      baseFee: 775.0,
      rvu: 14.08,
      workRVU: 7.74,
      facilityRVU: 4.93,
      malpracticeRVU: 1.41,
      globalPeriodDays: 0,
      requiresPriorAuth: true
    });
    this.registerProcedure({
      code: '100130',
      description: 'PulseCare Medical Procedure: Evaluation and Management - Protocol Specification #094',
      category: 'Evaluation and Management',
      specialty: 'Primary Care & Specialist Consultation',
      baseFee: 782.5,
      rvu: 14.22,
      workRVU: 7.82,
      facilityRVU: 4.98,
      malpracticeRVU: 1.42,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '100140',
      description: 'PulseCare Medical Procedure: Evaluation and Management - Protocol Specification #095',
      category: 'Evaluation and Management',
      specialty: 'Primary Care & Specialist Consultation',
      baseFee: 790.0,
      rvu: 14.36,
      workRVU: 7.9,
      facilityRVU: 5.03,
      malpracticeRVU: 1.44,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '100150',
      description: 'PulseCare Medical Procedure: Evaluation and Management - Protocol Specification #096',
      category: 'Evaluation and Management',
      specialty: 'Primary Care & Specialist Consultation',
      baseFee: 797.5,
      rvu: 14.5,
      workRVU: 7.98,
      facilityRVU: 5.07,
      malpracticeRVU: 1.45,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '100160',
      description: 'PulseCare Medical Procedure: Evaluation and Management - Protocol Specification #097',
      category: 'Evaluation and Management',
      specialty: 'Primary Care & Specialist Consultation',
      baseFee: 805.0,
      rvu: 14.64,
      workRVU: 8.05,
      facilityRVU: 5.12,
      malpracticeRVU: 1.46,
      globalPeriodDays: 0,
      requiresPriorAuth: true
    });
    this.registerProcedure({
      code: '100170',
      description: 'PulseCare Medical Procedure: Evaluation and Management - Protocol Specification #098',
      category: 'Evaluation and Management',
      specialty: 'Primary Care & Specialist Consultation',
      baseFee: 812.5,
      rvu: 14.78,
      workRVU: 8.13,
      facilityRVU: 5.17,
      malpracticeRVU: 1.48,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '100180',
      description: 'PulseCare Medical Procedure: Evaluation and Management - Protocol Specification #099',
      category: 'Evaluation and Management',
      specialty: 'Primary Care & Specialist Consultation',
      baseFee: 820.0,
      rvu: 14.92,
      workRVU: 8.21,
      facilityRVU: 5.22,
      malpracticeRVU: 1.49,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '100190',
      description: 'PulseCare Medical Procedure: Evaluation and Management - Protocol Specification #100',
      category: 'Evaluation and Management',
      specialty: 'Primary Care & Specialist Consultation',
      baseFee: 827.5,
      rvu: 15.06,
      workRVU: 8.28,
      facilityRVU: 5.27,
      malpracticeRVU: 1.51,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '33000',
      description: 'PulseCare Medical Procedure: Cardiovascular Surgery & Intervention - Protocol Specification #001',
      category: 'Cardiovascular Surgery & Intervention',
      specialty: 'Cardiothoracic Surgery',
      baseFee: 85.0,
      rvu: 1.2,
      workRVU: 0.66,
      facilityRVU: 0.42,
      malpracticeRVU: 0.12,
      globalPeriodDays: 90,
      requiresPriorAuth: true
    });
    this.registerProcedure({
      code: '33010',
      description: 'PulseCare Medical Procedure: Cardiovascular Surgery & Intervention - Protocol Specification #002',
      category: 'Cardiovascular Surgery & Intervention',
      specialty: 'Cardiothoracic Surgery',
      baseFee: 92.5,
      rvu: 1.34,
      workRVU: 0.74,
      facilityRVU: 0.47,
      malpracticeRVU: 0.13,
      globalPeriodDays: 90,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '33020',
      description: 'PulseCare Medical Procedure: Cardiovascular Surgery & Intervention - Protocol Specification #003',
      category: 'Cardiovascular Surgery & Intervention',
      specialty: 'Cardiothoracic Surgery',
      baseFee: 100.0,
      rvu: 1.48,
      workRVU: 0.81,
      facilityRVU: 0.52,
      malpracticeRVU: 0.15,
      globalPeriodDays: 90,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '33030',
      description: 'PulseCare Medical Procedure: Cardiovascular Surgery & Intervention - Protocol Specification #004',
      category: 'Cardiovascular Surgery & Intervention',
      specialty: 'Cardiothoracic Surgery',
      baseFee: 107.5,
      rvu: 1.62,
      workRVU: 0.89,
      facilityRVU: 0.57,
      malpracticeRVU: 0.16,
      globalPeriodDays: 90,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '33040',
      description: 'PulseCare Medical Procedure: Cardiovascular Surgery & Intervention - Protocol Specification #005',
      category: 'Cardiovascular Surgery & Intervention',
      specialty: 'Cardiothoracic Surgery',
      baseFee: 115.0,
      rvu: 1.76,
      workRVU: 0.97,
      facilityRVU: 0.62,
      malpracticeRVU: 0.18,
      globalPeriodDays: 90,
      requiresPriorAuth: true
    });
    this.registerProcedure({
      code: '33050',
      description: 'PulseCare Medical Procedure: Cardiovascular Surgery & Intervention - Protocol Specification #006',
      category: 'Cardiovascular Surgery & Intervention',
      specialty: 'Cardiothoracic Surgery',
      baseFee: 122.5,
      rvu: 1.9,
      workRVU: 1.04,
      facilityRVU: 0.66,
      malpracticeRVU: 0.19,
      globalPeriodDays: 90,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '33060',
      description: 'PulseCare Medical Procedure: Cardiovascular Surgery & Intervention - Protocol Specification #007',
      category: 'Cardiovascular Surgery & Intervention',
      specialty: 'Cardiothoracic Surgery',
      baseFee: 130.0,
      rvu: 2.04,
      workRVU: 1.12,
      facilityRVU: 0.71,
      malpracticeRVU: 0.2,
      globalPeriodDays: 90,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '33070',
      description: 'PulseCare Medical Procedure: Cardiovascular Surgery & Intervention - Protocol Specification #008',
      category: 'Cardiovascular Surgery & Intervention',
      specialty: 'Cardiothoracic Surgery',
      baseFee: 137.5,
      rvu: 2.18,
      workRVU: 1.2,
      facilityRVU: 0.76,
      malpracticeRVU: 0.22,
      globalPeriodDays: 90,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '33080',
      description: 'PulseCare Medical Procedure: Cardiovascular Surgery & Intervention - Protocol Specification #009',
      category: 'Cardiovascular Surgery & Intervention',
      specialty: 'Cardiothoracic Surgery',
      baseFee: 145.0,
      rvu: 2.32,
      workRVU: 1.28,
      facilityRVU: 0.81,
      malpracticeRVU: 0.23,
      globalPeriodDays: 90,
      requiresPriorAuth: true
    });
    this.registerProcedure({
      code: '33090',
      description: 'PulseCare Medical Procedure: Cardiovascular Surgery & Intervention - Protocol Specification #010',
      category: 'Cardiovascular Surgery & Intervention',
      specialty: 'Cardiothoracic Surgery',
      baseFee: 152.5,
      rvu: 2.46,
      workRVU: 1.35,
      facilityRVU: 0.86,
      malpracticeRVU: 0.25,
      globalPeriodDays: 90,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '33100',
      description: 'PulseCare Medical Procedure: Cardiovascular Surgery & Intervention - Protocol Specification #011',
      category: 'Cardiovascular Surgery & Intervention',
      specialty: 'Cardiothoracic Surgery',
      baseFee: 160.0,
      rvu: 2.6,
      workRVU: 1.43,
      facilityRVU: 0.91,
      malpracticeRVU: 0.26,
      globalPeriodDays: 90,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '33110',
      description: 'PulseCare Medical Procedure: Cardiovascular Surgery & Intervention - Protocol Specification #012',
      category: 'Cardiovascular Surgery & Intervention',
      specialty: 'Cardiothoracic Surgery',
      baseFee: 167.5,
      rvu: 2.74,
      workRVU: 1.51,
      facilityRVU: 0.96,
      malpracticeRVU: 0.27,
      globalPeriodDays: 90,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '33120',
      description: 'PulseCare Medical Procedure: Cardiovascular Surgery & Intervention - Protocol Specification #013',
      category: 'Cardiovascular Surgery & Intervention',
      specialty: 'Cardiothoracic Surgery',
      baseFee: 175.0,
      rvu: 2.88,
      workRVU: 1.58,
      facilityRVU: 1.01,
      malpracticeRVU: 0.29,
      globalPeriodDays: 90,
      requiresPriorAuth: true
    });
    this.registerProcedure({
      code: '33130',
      description: 'PulseCare Medical Procedure: Cardiovascular Surgery & Intervention - Protocol Specification #014',
      category: 'Cardiovascular Surgery & Intervention',
      specialty: 'Cardiothoracic Surgery',
      baseFee: 182.5,
      rvu: 3.02,
      workRVU: 1.66,
      facilityRVU: 1.06,
      malpracticeRVU: 0.3,
      globalPeriodDays: 90,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '33140',
      description: 'PulseCare Medical Procedure: Cardiovascular Surgery & Intervention - Protocol Specification #015',
      category: 'Cardiovascular Surgery & Intervention',
      specialty: 'Cardiothoracic Surgery',
      baseFee: 190.0,
      rvu: 3.16,
      workRVU: 1.74,
      facilityRVU: 1.11,
      malpracticeRVU: 0.32,
      globalPeriodDays: 90,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '33150',
      description: 'PulseCare Medical Procedure: Cardiovascular Surgery & Intervention - Protocol Specification #016',
      category: 'Cardiovascular Surgery & Intervention',
      specialty: 'Cardiothoracic Surgery',
      baseFee: 197.5,
      rvu: 3.3,
      workRVU: 1.81,
      facilityRVU: 1.15,
      malpracticeRVU: 0.33,
      globalPeriodDays: 90,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '33160',
      description: 'PulseCare Medical Procedure: Cardiovascular Surgery & Intervention - Protocol Specification #017',
      category: 'Cardiovascular Surgery & Intervention',
      specialty: 'Cardiothoracic Surgery',
      baseFee: 205.0,
      rvu: 3.44,
      workRVU: 1.89,
      facilityRVU: 1.2,
      malpracticeRVU: 0.34,
      globalPeriodDays: 90,
      requiresPriorAuth: true
    });
    this.registerProcedure({
      code: '33170',
      description: 'PulseCare Medical Procedure: Cardiovascular Surgery & Intervention - Protocol Specification #018',
      category: 'Cardiovascular Surgery & Intervention',
      specialty: 'Cardiothoracic Surgery',
      baseFee: 212.5,
      rvu: 3.58,
      workRVU: 1.97,
      facilityRVU: 1.25,
      malpracticeRVU: 0.36,
      globalPeriodDays: 90,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '33180',
      description: 'PulseCare Medical Procedure: Cardiovascular Surgery & Intervention - Protocol Specification #019',
      category: 'Cardiovascular Surgery & Intervention',
      specialty: 'Cardiothoracic Surgery',
      baseFee: 220.0,
      rvu: 3.72,
      workRVU: 2.05,
      facilityRVU: 1.3,
      malpracticeRVU: 0.37,
      globalPeriodDays: 90,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '33190',
      description: 'PulseCare Medical Procedure: Cardiovascular Surgery & Intervention - Protocol Specification #020',
      category: 'Cardiovascular Surgery & Intervention',
      specialty: 'Cardiothoracic Surgery',
      baseFee: 227.5,
      rvu: 3.86,
      workRVU: 2.12,
      facilityRVU: 1.35,
      malpracticeRVU: 0.39,
      globalPeriodDays: 90,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '33200',
      description: 'PulseCare Medical Procedure: Cardiovascular Surgery & Intervention - Protocol Specification #021',
      category: 'Cardiovascular Surgery & Intervention',
      specialty: 'Cardiothoracic Surgery',
      baseFee: 235.0,
      rvu: 4.0,
      workRVU: 2.2,
      facilityRVU: 1.4,
      malpracticeRVU: 0.4,
      globalPeriodDays: 90,
      requiresPriorAuth: true
    });
    this.registerProcedure({
      code: '33210',
      description: 'PulseCare Medical Procedure: Cardiovascular Surgery & Intervention - Protocol Specification #022',
      category: 'Cardiovascular Surgery & Intervention',
      specialty: 'Cardiothoracic Surgery',
      baseFee: 242.5,
      rvu: 4.14,
      workRVU: 2.28,
      facilityRVU: 1.45,
      malpracticeRVU: 0.41,
      globalPeriodDays: 90,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '33220',
      description: 'PulseCare Medical Procedure: Cardiovascular Surgery & Intervention - Protocol Specification #023',
      category: 'Cardiovascular Surgery & Intervention',
      specialty: 'Cardiothoracic Surgery',
      baseFee: 250.0,
      rvu: 4.28,
      workRVU: 2.35,
      facilityRVU: 1.5,
      malpracticeRVU: 0.43,
      globalPeriodDays: 90,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '33230',
      description: 'PulseCare Medical Procedure: Cardiovascular Surgery & Intervention - Protocol Specification #024',
      category: 'Cardiovascular Surgery & Intervention',
      specialty: 'Cardiothoracic Surgery',
      baseFee: 257.5,
      rvu: 4.42,
      workRVU: 2.43,
      facilityRVU: 1.55,
      malpracticeRVU: 0.44,
      globalPeriodDays: 90,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '33240',
      description: 'PulseCare Medical Procedure: Cardiovascular Surgery & Intervention - Protocol Specification #025',
      category: 'Cardiovascular Surgery & Intervention',
      specialty: 'Cardiothoracic Surgery',
      baseFee: 265.0,
      rvu: 4.56,
      workRVU: 2.51,
      facilityRVU: 1.6,
      malpracticeRVU: 0.46,
      globalPeriodDays: 90,
      requiresPriorAuth: true
    });
    this.registerProcedure({
      code: '33250',
      description: 'PulseCare Medical Procedure: Cardiovascular Surgery & Intervention - Protocol Specification #026',
      category: 'Cardiovascular Surgery & Intervention',
      specialty: 'Cardiothoracic Surgery',
      baseFee: 272.5,
      rvu: 4.7,
      workRVU: 2.59,
      facilityRVU: 1.65,
      malpracticeRVU: 0.47,
      globalPeriodDays: 90,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '33260',
      description: 'PulseCare Medical Procedure: Cardiovascular Surgery & Intervention - Protocol Specification #027',
      category: 'Cardiovascular Surgery & Intervention',
      specialty: 'Cardiothoracic Surgery',
      baseFee: 280.0,
      rvu: 4.84,
      workRVU: 2.66,
      facilityRVU: 1.69,
      malpracticeRVU: 0.48,
      globalPeriodDays: 90,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '33270',
      description: 'PulseCare Medical Procedure: Cardiovascular Surgery & Intervention - Protocol Specification #028',
      category: 'Cardiovascular Surgery & Intervention',
      specialty: 'Cardiothoracic Surgery',
      baseFee: 287.5,
      rvu: 4.98,
      workRVU: 2.74,
      facilityRVU: 1.74,
      malpracticeRVU: 0.5,
      globalPeriodDays: 90,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '33280',
      description: 'PulseCare Medical Procedure: Cardiovascular Surgery & Intervention - Protocol Specification #029',
      category: 'Cardiovascular Surgery & Intervention',
      specialty: 'Cardiothoracic Surgery',
      baseFee: 295.0,
      rvu: 5.12,
      workRVU: 2.82,
      facilityRVU: 1.79,
      malpracticeRVU: 0.51,
      globalPeriodDays: 90,
      requiresPriorAuth: true
    });
    this.registerProcedure({
      code: '33290',
      description: 'PulseCare Medical Procedure: Cardiovascular Surgery & Intervention - Protocol Specification #030',
      category: 'Cardiovascular Surgery & Intervention',
      specialty: 'Cardiothoracic Surgery',
      baseFee: 302.5,
      rvu: 5.26,
      workRVU: 2.89,
      facilityRVU: 1.84,
      malpracticeRVU: 0.53,
      globalPeriodDays: 90,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '33300',
      description: 'PulseCare Medical Procedure: Cardiovascular Surgery & Intervention - Protocol Specification #031',
      category: 'Cardiovascular Surgery & Intervention',
      specialty: 'Cardiothoracic Surgery',
      baseFee: 310.0,
      rvu: 5.4,
      workRVU: 2.97,
      facilityRVU: 1.89,
      malpracticeRVU: 0.54,
      globalPeriodDays: 90,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '33310',
      description: 'PulseCare Medical Procedure: Cardiovascular Surgery & Intervention - Protocol Specification #032',
      category: 'Cardiovascular Surgery & Intervention',
      specialty: 'Cardiothoracic Surgery',
      baseFee: 317.5,
      rvu: 5.54,
      workRVU: 3.05,
      facilityRVU: 1.94,
      malpracticeRVU: 0.55,
      globalPeriodDays: 90,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '33320',
      description: 'PulseCare Medical Procedure: Cardiovascular Surgery & Intervention - Protocol Specification #033',
      category: 'Cardiovascular Surgery & Intervention',
      specialty: 'Cardiothoracic Surgery',
      baseFee: 325.0,
      rvu: 5.68,
      workRVU: 3.12,
      facilityRVU: 1.99,
      malpracticeRVU: 0.57,
      globalPeriodDays: 90,
      requiresPriorAuth: true
    });
    this.registerProcedure({
      code: '33330',
      description: 'PulseCare Medical Procedure: Cardiovascular Surgery & Intervention - Protocol Specification #034',
      category: 'Cardiovascular Surgery & Intervention',
      specialty: 'Cardiothoracic Surgery',
      baseFee: 332.5,
      rvu: 5.82,
      workRVU: 3.2,
      facilityRVU: 2.04,
      malpracticeRVU: 0.58,
      globalPeriodDays: 90,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '33340',
      description: 'PulseCare Medical Procedure: Cardiovascular Surgery & Intervention - Protocol Specification #035',
      category: 'Cardiovascular Surgery & Intervention',
      specialty: 'Cardiothoracic Surgery',
      baseFee: 340.0,
      rvu: 5.96,
      workRVU: 3.28,
      facilityRVU: 2.09,
      malpracticeRVU: 0.6,
      globalPeriodDays: 90,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '33350',
      description: 'PulseCare Medical Procedure: Cardiovascular Surgery & Intervention - Protocol Specification #036',
      category: 'Cardiovascular Surgery & Intervention',
      specialty: 'Cardiothoracic Surgery',
      baseFee: 347.5,
      rvu: 6.1,
      workRVU: 3.35,
      facilityRVU: 2.13,
      malpracticeRVU: 0.61,
      globalPeriodDays: 90,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '33360',
      description: 'PulseCare Medical Procedure: Cardiovascular Surgery & Intervention - Protocol Specification #037',
      category: 'Cardiovascular Surgery & Intervention',
      specialty: 'Cardiothoracic Surgery',
      baseFee: 355.0,
      rvu: 6.24,
      workRVU: 3.43,
      facilityRVU: 2.18,
      malpracticeRVU: 0.62,
      globalPeriodDays: 90,
      requiresPriorAuth: true
    });
    this.registerProcedure({
      code: '33370',
      description: 'PulseCare Medical Procedure: Cardiovascular Surgery & Intervention - Protocol Specification #038',
      category: 'Cardiovascular Surgery & Intervention',
      specialty: 'Cardiothoracic Surgery',
      baseFee: 362.5,
      rvu: 6.38,
      workRVU: 3.51,
      facilityRVU: 2.23,
      malpracticeRVU: 0.64,
      globalPeriodDays: 90,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '33380',
      description: 'PulseCare Medical Procedure: Cardiovascular Surgery & Intervention - Protocol Specification #039',
      category: 'Cardiovascular Surgery & Intervention',
      specialty: 'Cardiothoracic Surgery',
      baseFee: 370.0,
      rvu: 6.52,
      workRVU: 3.59,
      facilityRVU: 2.28,
      malpracticeRVU: 0.65,
      globalPeriodDays: 90,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '33390',
      description: 'PulseCare Medical Procedure: Cardiovascular Surgery & Intervention - Protocol Specification #040',
      category: 'Cardiovascular Surgery & Intervention',
      specialty: 'Cardiothoracic Surgery',
      baseFee: 377.5,
      rvu: 6.66,
      workRVU: 3.66,
      facilityRVU: 2.33,
      malpracticeRVU: 0.67,
      globalPeriodDays: 90,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '33400',
      description: 'PulseCare Medical Procedure: Cardiovascular Surgery & Intervention - Protocol Specification #041',
      category: 'Cardiovascular Surgery & Intervention',
      specialty: 'Cardiothoracic Surgery',
      baseFee: 385.0,
      rvu: 6.8,
      workRVU: 3.74,
      facilityRVU: 2.38,
      malpracticeRVU: 0.68,
      globalPeriodDays: 90,
      requiresPriorAuth: true
    });
    this.registerProcedure({
      code: '33410',
      description: 'PulseCare Medical Procedure: Cardiovascular Surgery & Intervention - Protocol Specification #042',
      category: 'Cardiovascular Surgery & Intervention',
      specialty: 'Cardiothoracic Surgery',
      baseFee: 392.5,
      rvu: 6.94,
      workRVU: 3.82,
      facilityRVU: 2.43,
      malpracticeRVU: 0.69,
      globalPeriodDays: 90,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '33420',
      description: 'PulseCare Medical Procedure: Cardiovascular Surgery & Intervention - Protocol Specification #043',
      category: 'Cardiovascular Surgery & Intervention',
      specialty: 'Cardiothoracic Surgery',
      baseFee: 400.0,
      rvu: 7.08,
      workRVU: 3.89,
      facilityRVU: 2.48,
      malpracticeRVU: 0.71,
      globalPeriodDays: 90,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '33430',
      description: 'PulseCare Medical Procedure: Cardiovascular Surgery & Intervention - Protocol Specification #044',
      category: 'Cardiovascular Surgery & Intervention',
      specialty: 'Cardiothoracic Surgery',
      baseFee: 407.5,
      rvu: 7.22,
      workRVU: 3.97,
      facilityRVU: 2.53,
      malpracticeRVU: 0.72,
      globalPeriodDays: 90,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '33440',
      description: 'PulseCare Medical Procedure: Cardiovascular Surgery & Intervention - Protocol Specification #045',
      category: 'Cardiovascular Surgery & Intervention',
      specialty: 'Cardiothoracic Surgery',
      baseFee: 415.0,
      rvu: 7.36,
      workRVU: 4.05,
      facilityRVU: 2.58,
      malpracticeRVU: 0.74,
      globalPeriodDays: 90,
      requiresPriorAuth: true
    });
    this.registerProcedure({
      code: '33450',
      description: 'PulseCare Medical Procedure: Cardiovascular Surgery & Intervention - Protocol Specification #046',
      category: 'Cardiovascular Surgery & Intervention',
      specialty: 'Cardiothoracic Surgery',
      baseFee: 422.5,
      rvu: 7.5,
      workRVU: 4.12,
      facilityRVU: 2.62,
      malpracticeRVU: 0.75,
      globalPeriodDays: 90,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '33460',
      description: 'PulseCare Medical Procedure: Cardiovascular Surgery & Intervention - Protocol Specification #047',
      category: 'Cardiovascular Surgery & Intervention',
      specialty: 'Cardiothoracic Surgery',
      baseFee: 430.0,
      rvu: 7.64,
      workRVU: 4.2,
      facilityRVU: 2.67,
      malpracticeRVU: 0.76,
      globalPeriodDays: 90,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '33470',
      description: 'PulseCare Medical Procedure: Cardiovascular Surgery & Intervention - Protocol Specification #048',
      category: 'Cardiovascular Surgery & Intervention',
      specialty: 'Cardiothoracic Surgery',
      baseFee: 437.5,
      rvu: 7.78,
      workRVU: 4.28,
      facilityRVU: 2.72,
      malpracticeRVU: 0.78,
      globalPeriodDays: 90,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '33480',
      description: 'PulseCare Medical Procedure: Cardiovascular Surgery & Intervention - Protocol Specification #049',
      category: 'Cardiovascular Surgery & Intervention',
      specialty: 'Cardiothoracic Surgery',
      baseFee: 445.0,
      rvu: 7.92,
      workRVU: 4.36,
      facilityRVU: 2.77,
      malpracticeRVU: 0.79,
      globalPeriodDays: 90,
      requiresPriorAuth: true
    });
    this.registerProcedure({
      code: '33490',
      description: 'PulseCare Medical Procedure: Cardiovascular Surgery & Intervention - Protocol Specification #050',
      category: 'Cardiovascular Surgery & Intervention',
      specialty: 'Cardiothoracic Surgery',
      baseFee: 452.5,
      rvu: 8.06,
      workRVU: 4.43,
      facilityRVU: 2.82,
      malpracticeRVU: 0.81,
      globalPeriodDays: 90,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '33500',
      description: 'PulseCare Medical Procedure: Cardiovascular Surgery & Intervention - Protocol Specification #051',
      category: 'Cardiovascular Surgery & Intervention',
      specialty: 'Cardiothoracic Surgery',
      baseFee: 460.0,
      rvu: 8.2,
      workRVU: 4.51,
      facilityRVU: 2.87,
      malpracticeRVU: 0.82,
      globalPeriodDays: 90,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '33510',
      description: 'PulseCare Medical Procedure: Cardiovascular Surgery & Intervention - Protocol Specification #052',
      category: 'Cardiovascular Surgery & Intervention',
      specialty: 'Cardiothoracic Surgery',
      baseFee: 467.5,
      rvu: 8.34,
      workRVU: 4.59,
      facilityRVU: 2.92,
      malpracticeRVU: 0.83,
      globalPeriodDays: 90,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '33520',
      description: 'PulseCare Medical Procedure: Cardiovascular Surgery & Intervention - Protocol Specification #053',
      category: 'Cardiovascular Surgery & Intervention',
      specialty: 'Cardiothoracic Surgery',
      baseFee: 475.0,
      rvu: 8.48,
      workRVU: 4.66,
      facilityRVU: 2.97,
      malpracticeRVU: 0.85,
      globalPeriodDays: 90,
      requiresPriorAuth: true
    });
    this.registerProcedure({
      code: '33530',
      description: 'PulseCare Medical Procedure: Cardiovascular Surgery & Intervention - Protocol Specification #054',
      category: 'Cardiovascular Surgery & Intervention',
      specialty: 'Cardiothoracic Surgery',
      baseFee: 482.5,
      rvu: 8.62,
      workRVU: 4.74,
      facilityRVU: 3.02,
      malpracticeRVU: 0.86,
      globalPeriodDays: 90,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '33540',
      description: 'PulseCare Medical Procedure: Cardiovascular Surgery & Intervention - Protocol Specification #055',
      category: 'Cardiovascular Surgery & Intervention',
      specialty: 'Cardiothoracic Surgery',
      baseFee: 490.0,
      rvu: 8.76,
      workRVU: 4.82,
      facilityRVU: 3.07,
      malpracticeRVU: 0.88,
      globalPeriodDays: 90,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '33550',
      description: 'PulseCare Medical Procedure: Cardiovascular Surgery & Intervention - Protocol Specification #056',
      category: 'Cardiovascular Surgery & Intervention',
      specialty: 'Cardiothoracic Surgery',
      baseFee: 497.5,
      rvu: 8.9,
      workRVU: 4.9,
      facilityRVU: 3.11,
      malpracticeRVU: 0.89,
      globalPeriodDays: 90,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '33560',
      description: 'PulseCare Medical Procedure: Cardiovascular Surgery & Intervention - Protocol Specification #057',
      category: 'Cardiovascular Surgery & Intervention',
      specialty: 'Cardiothoracic Surgery',
      baseFee: 505.0,
      rvu: 9.04,
      workRVU: 4.97,
      facilityRVU: 3.16,
      malpracticeRVU: 0.9,
      globalPeriodDays: 90,
      requiresPriorAuth: true
    });
    this.registerProcedure({
      code: '33570',
      description: 'PulseCare Medical Procedure: Cardiovascular Surgery & Intervention - Protocol Specification #058',
      category: 'Cardiovascular Surgery & Intervention',
      specialty: 'Cardiothoracic Surgery',
      baseFee: 512.5,
      rvu: 9.18,
      workRVU: 5.05,
      facilityRVU: 3.21,
      malpracticeRVU: 0.92,
      globalPeriodDays: 90,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '33580',
      description: 'PulseCare Medical Procedure: Cardiovascular Surgery & Intervention - Protocol Specification #059',
      category: 'Cardiovascular Surgery & Intervention',
      specialty: 'Cardiothoracic Surgery',
      baseFee: 520.0,
      rvu: 9.32,
      workRVU: 5.13,
      facilityRVU: 3.26,
      malpracticeRVU: 0.93,
      globalPeriodDays: 90,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '33590',
      description: 'PulseCare Medical Procedure: Cardiovascular Surgery & Intervention - Protocol Specification #060',
      category: 'Cardiovascular Surgery & Intervention',
      specialty: 'Cardiothoracic Surgery',
      baseFee: 527.5,
      rvu: 9.46,
      workRVU: 5.2,
      facilityRVU: 3.31,
      malpracticeRVU: 0.95,
      globalPeriodDays: 90,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '33600',
      description: 'PulseCare Medical Procedure: Cardiovascular Surgery & Intervention - Protocol Specification #061',
      category: 'Cardiovascular Surgery & Intervention',
      specialty: 'Cardiothoracic Surgery',
      baseFee: 535.0,
      rvu: 9.6,
      workRVU: 5.28,
      facilityRVU: 3.36,
      malpracticeRVU: 0.96,
      globalPeriodDays: 90,
      requiresPriorAuth: true
    });
    this.registerProcedure({
      code: '33610',
      description: 'PulseCare Medical Procedure: Cardiovascular Surgery & Intervention - Protocol Specification #062',
      category: 'Cardiovascular Surgery & Intervention',
      specialty: 'Cardiothoracic Surgery',
      baseFee: 542.5,
      rvu: 9.74,
      workRVU: 5.36,
      facilityRVU: 3.41,
      malpracticeRVU: 0.97,
      globalPeriodDays: 90,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '33620',
      description: 'PulseCare Medical Procedure: Cardiovascular Surgery & Intervention - Protocol Specification #063',
      category: 'Cardiovascular Surgery & Intervention',
      specialty: 'Cardiothoracic Surgery',
      baseFee: 550.0,
      rvu: 9.88,
      workRVU: 5.43,
      facilityRVU: 3.46,
      malpracticeRVU: 0.99,
      globalPeriodDays: 90,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '33630',
      description: 'PulseCare Medical Procedure: Cardiovascular Surgery & Intervention - Protocol Specification #064',
      category: 'Cardiovascular Surgery & Intervention',
      specialty: 'Cardiothoracic Surgery',
      baseFee: 557.5,
      rvu: 10.02,
      workRVU: 5.51,
      facilityRVU: 3.51,
      malpracticeRVU: 1.0,
      globalPeriodDays: 90,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '33640',
      description: 'PulseCare Medical Procedure: Cardiovascular Surgery & Intervention - Protocol Specification #065',
      category: 'Cardiovascular Surgery & Intervention',
      specialty: 'Cardiothoracic Surgery',
      baseFee: 565.0,
      rvu: 10.16,
      workRVU: 5.59,
      facilityRVU: 3.56,
      malpracticeRVU: 1.02,
      globalPeriodDays: 90,
      requiresPriorAuth: true
    });
    this.registerProcedure({
      code: '33650',
      description: 'PulseCare Medical Procedure: Cardiovascular Surgery & Intervention - Protocol Specification #066',
      category: 'Cardiovascular Surgery & Intervention',
      specialty: 'Cardiothoracic Surgery',
      baseFee: 572.5,
      rvu: 10.3,
      workRVU: 5.67,
      facilityRVU: 3.6,
      malpracticeRVU: 1.03,
      globalPeriodDays: 90,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '33660',
      description: 'PulseCare Medical Procedure: Cardiovascular Surgery & Intervention - Protocol Specification #067',
      category: 'Cardiovascular Surgery & Intervention',
      specialty: 'Cardiothoracic Surgery',
      baseFee: 580.0,
      rvu: 10.44,
      workRVU: 5.74,
      facilityRVU: 3.65,
      malpracticeRVU: 1.04,
      globalPeriodDays: 90,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '33670',
      description: 'PulseCare Medical Procedure: Cardiovascular Surgery & Intervention - Protocol Specification #068',
      category: 'Cardiovascular Surgery & Intervention',
      specialty: 'Cardiothoracic Surgery',
      baseFee: 587.5,
      rvu: 10.58,
      workRVU: 5.82,
      facilityRVU: 3.7,
      malpracticeRVU: 1.06,
      globalPeriodDays: 90,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '33680',
      description: 'PulseCare Medical Procedure: Cardiovascular Surgery & Intervention - Protocol Specification #069',
      category: 'Cardiovascular Surgery & Intervention',
      specialty: 'Cardiothoracic Surgery',
      baseFee: 595.0,
      rvu: 10.72,
      workRVU: 5.9,
      facilityRVU: 3.75,
      malpracticeRVU: 1.07,
      globalPeriodDays: 90,
      requiresPriorAuth: true
    });
    this.registerProcedure({
      code: '33690',
      description: 'PulseCare Medical Procedure: Cardiovascular Surgery & Intervention - Protocol Specification #070',
      category: 'Cardiovascular Surgery & Intervention',
      specialty: 'Cardiothoracic Surgery',
      baseFee: 602.5,
      rvu: 10.86,
      workRVU: 5.97,
      facilityRVU: 3.8,
      malpracticeRVU: 1.09,
      globalPeriodDays: 90,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '33700',
      description: 'PulseCare Medical Procedure: Cardiovascular Surgery & Intervention - Protocol Specification #071',
      category: 'Cardiovascular Surgery & Intervention',
      specialty: 'Cardiothoracic Surgery',
      baseFee: 610.0,
      rvu: 11.0,
      workRVU: 6.05,
      facilityRVU: 3.85,
      malpracticeRVU: 1.1,
      globalPeriodDays: 90,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '33710',
      description: 'PulseCare Medical Procedure: Cardiovascular Surgery & Intervention - Protocol Specification #072',
      category: 'Cardiovascular Surgery & Intervention',
      specialty: 'Cardiothoracic Surgery',
      baseFee: 617.5,
      rvu: 11.14,
      workRVU: 6.13,
      facilityRVU: 3.9,
      malpracticeRVU: 1.11,
      globalPeriodDays: 90,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '33720',
      description: 'PulseCare Medical Procedure: Cardiovascular Surgery & Intervention - Protocol Specification #073',
      category: 'Cardiovascular Surgery & Intervention',
      specialty: 'Cardiothoracic Surgery',
      baseFee: 625.0,
      rvu: 11.28,
      workRVU: 6.2,
      facilityRVU: 3.95,
      malpracticeRVU: 1.13,
      globalPeriodDays: 90,
      requiresPriorAuth: true
    });
    this.registerProcedure({
      code: '33730',
      description: 'PulseCare Medical Procedure: Cardiovascular Surgery & Intervention - Protocol Specification #074',
      category: 'Cardiovascular Surgery & Intervention',
      specialty: 'Cardiothoracic Surgery',
      baseFee: 632.5,
      rvu: 11.42,
      workRVU: 6.28,
      facilityRVU: 4.0,
      malpracticeRVU: 1.14,
      globalPeriodDays: 90,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '33740',
      description: 'PulseCare Medical Procedure: Cardiovascular Surgery & Intervention - Protocol Specification #075',
      category: 'Cardiovascular Surgery & Intervention',
      specialty: 'Cardiothoracic Surgery',
      baseFee: 640.0,
      rvu: 11.56,
      workRVU: 6.36,
      facilityRVU: 4.05,
      malpracticeRVU: 1.16,
      globalPeriodDays: 90,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '33750',
      description: 'PulseCare Medical Procedure: Cardiovascular Surgery & Intervention - Protocol Specification #076',
      category: 'Cardiovascular Surgery & Intervention',
      specialty: 'Cardiothoracic Surgery',
      baseFee: 647.5,
      rvu: 11.7,
      workRVU: 6.44,
      facilityRVU: 4.09,
      malpracticeRVU: 1.17,
      globalPeriodDays: 90,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '33760',
      description: 'PulseCare Medical Procedure: Cardiovascular Surgery & Intervention - Protocol Specification #077',
      category: 'Cardiovascular Surgery & Intervention',
      specialty: 'Cardiothoracic Surgery',
      baseFee: 655.0,
      rvu: 11.84,
      workRVU: 6.51,
      facilityRVU: 4.14,
      malpracticeRVU: 1.18,
      globalPeriodDays: 90,
      requiresPriorAuth: true
    });
    this.registerProcedure({
      code: '33770',
      description: 'PulseCare Medical Procedure: Cardiovascular Surgery & Intervention - Protocol Specification #078',
      category: 'Cardiovascular Surgery & Intervention',
      specialty: 'Cardiothoracic Surgery',
      baseFee: 662.5,
      rvu: 11.98,
      workRVU: 6.59,
      facilityRVU: 4.19,
      malpracticeRVU: 1.2,
      globalPeriodDays: 90,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '33780',
      description: 'PulseCare Medical Procedure: Cardiovascular Surgery & Intervention - Protocol Specification #079',
      category: 'Cardiovascular Surgery & Intervention',
      specialty: 'Cardiothoracic Surgery',
      baseFee: 670.0,
      rvu: 12.12,
      workRVU: 6.67,
      facilityRVU: 4.24,
      malpracticeRVU: 1.21,
      globalPeriodDays: 90,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '33790',
      description: 'PulseCare Medical Procedure: Cardiovascular Surgery & Intervention - Protocol Specification #080',
      category: 'Cardiovascular Surgery & Intervention',
      specialty: 'Cardiothoracic Surgery',
      baseFee: 677.5,
      rvu: 12.26,
      workRVU: 6.74,
      facilityRVU: 4.29,
      malpracticeRVU: 1.23,
      globalPeriodDays: 90,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '33800',
      description: 'PulseCare Medical Procedure: Cardiovascular Surgery & Intervention - Protocol Specification #081',
      category: 'Cardiovascular Surgery & Intervention',
      specialty: 'Cardiothoracic Surgery',
      baseFee: 685.0,
      rvu: 12.4,
      workRVU: 6.82,
      facilityRVU: 4.34,
      malpracticeRVU: 1.24,
      globalPeriodDays: 90,
      requiresPriorAuth: true
    });
    this.registerProcedure({
      code: '33810',
      description: 'PulseCare Medical Procedure: Cardiovascular Surgery & Intervention - Protocol Specification #082',
      category: 'Cardiovascular Surgery & Intervention',
      specialty: 'Cardiothoracic Surgery',
      baseFee: 692.5,
      rvu: 12.54,
      workRVU: 6.9,
      facilityRVU: 4.39,
      malpracticeRVU: 1.25,
      globalPeriodDays: 90,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '33820',
      description: 'PulseCare Medical Procedure: Cardiovascular Surgery & Intervention - Protocol Specification #083',
      category: 'Cardiovascular Surgery & Intervention',
      specialty: 'Cardiothoracic Surgery',
      baseFee: 700.0,
      rvu: 12.68,
      workRVU: 6.97,
      facilityRVU: 4.44,
      malpracticeRVU: 1.27,
      globalPeriodDays: 90,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '33830',
      description: 'PulseCare Medical Procedure: Cardiovascular Surgery & Intervention - Protocol Specification #084',
      category: 'Cardiovascular Surgery & Intervention',
      specialty: 'Cardiothoracic Surgery',
      baseFee: 707.5,
      rvu: 12.82,
      workRVU: 7.05,
      facilityRVU: 4.49,
      malpracticeRVU: 1.28,
      globalPeriodDays: 90,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '33840',
      description: 'PulseCare Medical Procedure: Cardiovascular Surgery & Intervention - Protocol Specification #085',
      category: 'Cardiovascular Surgery & Intervention',
      specialty: 'Cardiothoracic Surgery',
      baseFee: 715.0,
      rvu: 12.96,
      workRVU: 7.13,
      facilityRVU: 4.54,
      malpracticeRVU: 1.3,
      globalPeriodDays: 90,
      requiresPriorAuth: true
    });
    this.registerProcedure({
      code: '33850',
      description: 'PulseCare Medical Procedure: Cardiovascular Surgery & Intervention - Protocol Specification #086',
      category: 'Cardiovascular Surgery & Intervention',
      specialty: 'Cardiothoracic Surgery',
      baseFee: 722.5,
      rvu: 13.1,
      workRVU: 7.21,
      facilityRVU: 4.58,
      malpracticeRVU: 1.31,
      globalPeriodDays: 90,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '33860',
      description: 'PulseCare Medical Procedure: Cardiovascular Surgery & Intervention - Protocol Specification #087',
      category: 'Cardiovascular Surgery & Intervention',
      specialty: 'Cardiothoracic Surgery',
      baseFee: 730.0,
      rvu: 13.24,
      workRVU: 7.28,
      facilityRVU: 4.63,
      malpracticeRVU: 1.32,
      globalPeriodDays: 90,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '33870',
      description: 'PulseCare Medical Procedure: Cardiovascular Surgery & Intervention - Protocol Specification #088',
      category: 'Cardiovascular Surgery & Intervention',
      specialty: 'Cardiothoracic Surgery',
      baseFee: 737.5,
      rvu: 13.38,
      workRVU: 7.36,
      facilityRVU: 4.68,
      malpracticeRVU: 1.34,
      globalPeriodDays: 90,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '33880',
      description: 'PulseCare Medical Procedure: Cardiovascular Surgery & Intervention - Protocol Specification #089',
      category: 'Cardiovascular Surgery & Intervention',
      specialty: 'Cardiothoracic Surgery',
      baseFee: 745.0,
      rvu: 13.52,
      workRVU: 7.44,
      facilityRVU: 4.73,
      malpracticeRVU: 1.35,
      globalPeriodDays: 90,
      requiresPriorAuth: true
    });
    this.registerProcedure({
      code: '33890',
      description: 'PulseCare Medical Procedure: Cardiovascular Surgery & Intervention - Protocol Specification #090',
      category: 'Cardiovascular Surgery & Intervention',
      specialty: 'Cardiothoracic Surgery',
      baseFee: 752.5,
      rvu: 13.66,
      workRVU: 7.51,
      facilityRVU: 4.78,
      malpracticeRVU: 1.37,
      globalPeriodDays: 90,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '33900',
      description: 'PulseCare Medical Procedure: Cardiovascular Surgery & Intervention - Protocol Specification #091',
      category: 'Cardiovascular Surgery & Intervention',
      specialty: 'Cardiothoracic Surgery',
      baseFee: 760.0,
      rvu: 13.8,
      workRVU: 7.59,
      facilityRVU: 4.83,
      malpracticeRVU: 1.38,
      globalPeriodDays: 90,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '33910',
      description: 'PulseCare Medical Procedure: Cardiovascular Surgery & Intervention - Protocol Specification #092',
      category: 'Cardiovascular Surgery & Intervention',
      specialty: 'Cardiothoracic Surgery',
      baseFee: 767.5,
      rvu: 13.94,
      workRVU: 7.67,
      facilityRVU: 4.88,
      malpracticeRVU: 1.39,
      globalPeriodDays: 90,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '33920',
      description: 'PulseCare Medical Procedure: Cardiovascular Surgery & Intervention - Protocol Specification #093',
      category: 'Cardiovascular Surgery & Intervention',
      specialty: 'Cardiothoracic Surgery',
      baseFee: 775.0,
      rvu: 14.08,
      workRVU: 7.74,
      facilityRVU: 4.93,
      malpracticeRVU: 1.41,
      globalPeriodDays: 90,
      requiresPriorAuth: true
    });
    this.registerProcedure({
      code: '33930',
      description: 'PulseCare Medical Procedure: Cardiovascular Surgery & Intervention - Protocol Specification #094',
      category: 'Cardiovascular Surgery & Intervention',
      specialty: 'Cardiothoracic Surgery',
      baseFee: 782.5,
      rvu: 14.22,
      workRVU: 7.82,
      facilityRVU: 4.98,
      malpracticeRVU: 1.42,
      globalPeriodDays: 90,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '33940',
      description: 'PulseCare Medical Procedure: Cardiovascular Surgery & Intervention - Protocol Specification #095',
      category: 'Cardiovascular Surgery & Intervention',
      specialty: 'Cardiothoracic Surgery',
      baseFee: 790.0,
      rvu: 14.36,
      workRVU: 7.9,
      facilityRVU: 5.03,
      malpracticeRVU: 1.44,
      globalPeriodDays: 90,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '33950',
      description: 'PulseCare Medical Procedure: Cardiovascular Surgery & Intervention - Protocol Specification #096',
      category: 'Cardiovascular Surgery & Intervention',
      specialty: 'Cardiothoracic Surgery',
      baseFee: 797.5,
      rvu: 14.5,
      workRVU: 7.98,
      facilityRVU: 5.07,
      malpracticeRVU: 1.45,
      globalPeriodDays: 90,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '33960',
      description: 'PulseCare Medical Procedure: Cardiovascular Surgery & Intervention - Protocol Specification #097',
      category: 'Cardiovascular Surgery & Intervention',
      specialty: 'Cardiothoracic Surgery',
      baseFee: 805.0,
      rvu: 14.64,
      workRVU: 8.05,
      facilityRVU: 5.12,
      malpracticeRVU: 1.46,
      globalPeriodDays: 90,
      requiresPriorAuth: true
    });
    this.registerProcedure({
      code: '33970',
      description: 'PulseCare Medical Procedure: Cardiovascular Surgery & Intervention - Protocol Specification #098',
      category: 'Cardiovascular Surgery & Intervention',
      specialty: 'Cardiothoracic Surgery',
      baseFee: 812.5,
      rvu: 14.78,
      workRVU: 8.13,
      facilityRVU: 5.17,
      malpracticeRVU: 1.48,
      globalPeriodDays: 90,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '33980',
      description: 'PulseCare Medical Procedure: Cardiovascular Surgery & Intervention - Protocol Specification #099',
      category: 'Cardiovascular Surgery & Intervention',
      specialty: 'Cardiothoracic Surgery',
      baseFee: 820.0,
      rvu: 14.92,
      workRVU: 8.21,
      facilityRVU: 5.22,
      malpracticeRVU: 1.49,
      globalPeriodDays: 90,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '33990',
      description: 'PulseCare Medical Procedure: Cardiovascular Surgery & Intervention - Protocol Specification #100',
      category: 'Cardiovascular Surgery & Intervention',
      specialty: 'Cardiothoracic Surgery',
      baseFee: 827.5,
      rvu: 15.06,
      workRVU: 8.28,
      facilityRVU: 5.27,
      malpracticeRVU: 1.51,
      globalPeriodDays: 90,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '43000',
      description: 'PulseCare Medical Procedure: Digestive System & Endoscopy - Protocol Specification #001',
      category: 'Digestive System & Endoscopy',
      specialty: 'Gastroenterology & General Surgery',
      baseFee: 85.0,
      rvu: 1.2,
      workRVU: 0.66,
      facilityRVU: 0.42,
      malpracticeRVU: 0.12,
      globalPeriodDays: 0,
      requiresPriorAuth: true
    });
    this.registerProcedure({
      code: '43010',
      description: 'PulseCare Medical Procedure: Digestive System & Endoscopy - Protocol Specification #002',
      category: 'Digestive System & Endoscopy',
      specialty: 'Gastroenterology & General Surgery',
      baseFee: 92.5,
      rvu: 1.34,
      workRVU: 0.74,
      facilityRVU: 0.47,
      malpracticeRVU: 0.13,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '43020',
      description: 'PulseCare Medical Procedure: Digestive System & Endoscopy - Protocol Specification #003',
      category: 'Digestive System & Endoscopy',
      specialty: 'Gastroenterology & General Surgery',
      baseFee: 100.0,
      rvu: 1.48,
      workRVU: 0.81,
      facilityRVU: 0.52,
      malpracticeRVU: 0.15,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '43030',
      description: 'PulseCare Medical Procedure: Digestive System & Endoscopy - Protocol Specification #004',
      category: 'Digestive System & Endoscopy',
      specialty: 'Gastroenterology & General Surgery',
      baseFee: 107.5,
      rvu: 1.62,
      workRVU: 0.89,
      facilityRVU: 0.57,
      malpracticeRVU: 0.16,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '43040',
      description: 'PulseCare Medical Procedure: Digestive System & Endoscopy - Protocol Specification #005',
      category: 'Digestive System & Endoscopy',
      specialty: 'Gastroenterology & General Surgery',
      baseFee: 115.0,
      rvu: 1.76,
      workRVU: 0.97,
      facilityRVU: 0.62,
      malpracticeRVU: 0.18,
      globalPeriodDays: 0,
      requiresPriorAuth: true
    });
    this.registerProcedure({
      code: '43050',
      description: 'PulseCare Medical Procedure: Digestive System & Endoscopy - Protocol Specification #006',
      category: 'Digestive System & Endoscopy',
      specialty: 'Gastroenterology & General Surgery',
      baseFee: 122.5,
      rvu: 1.9,
      workRVU: 1.04,
      facilityRVU: 0.66,
      malpracticeRVU: 0.19,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '43060',
      description: 'PulseCare Medical Procedure: Digestive System & Endoscopy - Protocol Specification #007',
      category: 'Digestive System & Endoscopy',
      specialty: 'Gastroenterology & General Surgery',
      baseFee: 130.0,
      rvu: 2.04,
      workRVU: 1.12,
      facilityRVU: 0.71,
      malpracticeRVU: 0.2,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '43070',
      description: 'PulseCare Medical Procedure: Digestive System & Endoscopy - Protocol Specification #008',
      category: 'Digestive System & Endoscopy',
      specialty: 'Gastroenterology & General Surgery',
      baseFee: 137.5,
      rvu: 2.18,
      workRVU: 1.2,
      facilityRVU: 0.76,
      malpracticeRVU: 0.22,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '43080',
      description: 'PulseCare Medical Procedure: Digestive System & Endoscopy - Protocol Specification #009',
      category: 'Digestive System & Endoscopy',
      specialty: 'Gastroenterology & General Surgery',
      baseFee: 145.0,
      rvu: 2.32,
      workRVU: 1.28,
      facilityRVU: 0.81,
      malpracticeRVU: 0.23,
      globalPeriodDays: 0,
      requiresPriorAuth: true
    });
    this.registerProcedure({
      code: '43090',
      description: 'PulseCare Medical Procedure: Digestive System & Endoscopy - Protocol Specification #010',
      category: 'Digestive System & Endoscopy',
      specialty: 'Gastroenterology & General Surgery',
      baseFee: 152.5,
      rvu: 2.46,
      workRVU: 1.35,
      facilityRVU: 0.86,
      malpracticeRVU: 0.25,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '43100',
      description: 'PulseCare Medical Procedure: Digestive System & Endoscopy - Protocol Specification #011',
      category: 'Digestive System & Endoscopy',
      specialty: 'Gastroenterology & General Surgery',
      baseFee: 160.0,
      rvu: 2.6,
      workRVU: 1.43,
      facilityRVU: 0.91,
      malpracticeRVU: 0.26,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '43110',
      description: 'PulseCare Medical Procedure: Digestive System & Endoscopy - Protocol Specification #012',
      category: 'Digestive System & Endoscopy',
      specialty: 'Gastroenterology & General Surgery',
      baseFee: 167.5,
      rvu: 2.74,
      workRVU: 1.51,
      facilityRVU: 0.96,
      malpracticeRVU: 0.27,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '43120',
      description: 'PulseCare Medical Procedure: Digestive System & Endoscopy - Protocol Specification #013',
      category: 'Digestive System & Endoscopy',
      specialty: 'Gastroenterology & General Surgery',
      baseFee: 175.0,
      rvu: 2.88,
      workRVU: 1.58,
      facilityRVU: 1.01,
      malpracticeRVU: 0.29,
      globalPeriodDays: 0,
      requiresPriorAuth: true
    });
    this.registerProcedure({
      code: '43130',
      description: 'PulseCare Medical Procedure: Digestive System & Endoscopy - Protocol Specification #014',
      category: 'Digestive System & Endoscopy',
      specialty: 'Gastroenterology & General Surgery',
      baseFee: 182.5,
      rvu: 3.02,
      workRVU: 1.66,
      facilityRVU: 1.06,
      malpracticeRVU: 0.3,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '43140',
      description: 'PulseCare Medical Procedure: Digestive System & Endoscopy - Protocol Specification #015',
      category: 'Digestive System & Endoscopy',
      specialty: 'Gastroenterology & General Surgery',
      baseFee: 190.0,
      rvu: 3.16,
      workRVU: 1.74,
      facilityRVU: 1.11,
      malpracticeRVU: 0.32,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '43150',
      description: 'PulseCare Medical Procedure: Digestive System & Endoscopy - Protocol Specification #016',
      category: 'Digestive System & Endoscopy',
      specialty: 'Gastroenterology & General Surgery',
      baseFee: 197.5,
      rvu: 3.3,
      workRVU: 1.81,
      facilityRVU: 1.15,
      malpracticeRVU: 0.33,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '43160',
      description: 'PulseCare Medical Procedure: Digestive System & Endoscopy - Protocol Specification #017',
      category: 'Digestive System & Endoscopy',
      specialty: 'Gastroenterology & General Surgery',
      baseFee: 205.0,
      rvu: 3.44,
      workRVU: 1.89,
      facilityRVU: 1.2,
      malpracticeRVU: 0.34,
      globalPeriodDays: 0,
      requiresPriorAuth: true
    });
    this.registerProcedure({
      code: '43170',
      description: 'PulseCare Medical Procedure: Digestive System & Endoscopy - Protocol Specification #018',
      category: 'Digestive System & Endoscopy',
      specialty: 'Gastroenterology & General Surgery',
      baseFee: 212.5,
      rvu: 3.58,
      workRVU: 1.97,
      facilityRVU: 1.25,
      malpracticeRVU: 0.36,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '43180',
      description: 'PulseCare Medical Procedure: Digestive System & Endoscopy - Protocol Specification #019',
      category: 'Digestive System & Endoscopy',
      specialty: 'Gastroenterology & General Surgery',
      baseFee: 220.0,
      rvu: 3.72,
      workRVU: 2.05,
      facilityRVU: 1.3,
      malpracticeRVU: 0.37,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '43190',
      description: 'PulseCare Medical Procedure: Digestive System & Endoscopy - Protocol Specification #020',
      category: 'Digestive System & Endoscopy',
      specialty: 'Gastroenterology & General Surgery',
      baseFee: 227.5,
      rvu: 3.86,
      workRVU: 2.12,
      facilityRVU: 1.35,
      malpracticeRVU: 0.39,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '43200',
      description: 'PulseCare Medical Procedure: Digestive System & Endoscopy - Protocol Specification #021',
      category: 'Digestive System & Endoscopy',
      specialty: 'Gastroenterology & General Surgery',
      baseFee: 235.0,
      rvu: 4.0,
      workRVU: 2.2,
      facilityRVU: 1.4,
      malpracticeRVU: 0.4,
      globalPeriodDays: 0,
      requiresPriorAuth: true
    });
    this.registerProcedure({
      code: '43210',
      description: 'PulseCare Medical Procedure: Digestive System & Endoscopy - Protocol Specification #022',
      category: 'Digestive System & Endoscopy',
      specialty: 'Gastroenterology & General Surgery',
      baseFee: 242.5,
      rvu: 4.14,
      workRVU: 2.28,
      facilityRVU: 1.45,
      malpracticeRVU: 0.41,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '43220',
      description: 'PulseCare Medical Procedure: Digestive System & Endoscopy - Protocol Specification #023',
      category: 'Digestive System & Endoscopy',
      specialty: 'Gastroenterology & General Surgery',
      baseFee: 250.0,
      rvu: 4.28,
      workRVU: 2.35,
      facilityRVU: 1.5,
      malpracticeRVU: 0.43,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '43230',
      description: 'PulseCare Medical Procedure: Digestive System & Endoscopy - Protocol Specification #024',
      category: 'Digestive System & Endoscopy',
      specialty: 'Gastroenterology & General Surgery',
      baseFee: 257.5,
      rvu: 4.42,
      workRVU: 2.43,
      facilityRVU: 1.55,
      malpracticeRVU: 0.44,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '43240',
      description: 'PulseCare Medical Procedure: Digestive System & Endoscopy - Protocol Specification #025',
      category: 'Digestive System & Endoscopy',
      specialty: 'Gastroenterology & General Surgery',
      baseFee: 265.0,
      rvu: 4.56,
      workRVU: 2.51,
      facilityRVU: 1.6,
      malpracticeRVU: 0.46,
      globalPeriodDays: 0,
      requiresPriorAuth: true
    });
    this.registerProcedure({
      code: '43250',
      description: 'PulseCare Medical Procedure: Digestive System & Endoscopy - Protocol Specification #026',
      category: 'Digestive System & Endoscopy',
      specialty: 'Gastroenterology & General Surgery',
      baseFee: 272.5,
      rvu: 4.7,
      workRVU: 2.59,
      facilityRVU: 1.65,
      malpracticeRVU: 0.47,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '43260',
      description: 'PulseCare Medical Procedure: Digestive System & Endoscopy - Protocol Specification #027',
      category: 'Digestive System & Endoscopy',
      specialty: 'Gastroenterology & General Surgery',
      baseFee: 280.0,
      rvu: 4.84,
      workRVU: 2.66,
      facilityRVU: 1.69,
      malpracticeRVU: 0.48,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '43270',
      description: 'PulseCare Medical Procedure: Digestive System & Endoscopy - Protocol Specification #028',
      category: 'Digestive System & Endoscopy',
      specialty: 'Gastroenterology & General Surgery',
      baseFee: 287.5,
      rvu: 4.98,
      workRVU: 2.74,
      facilityRVU: 1.74,
      malpracticeRVU: 0.5,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '43280',
      description: 'PulseCare Medical Procedure: Digestive System & Endoscopy - Protocol Specification #029',
      category: 'Digestive System & Endoscopy',
      specialty: 'Gastroenterology & General Surgery',
      baseFee: 295.0,
      rvu: 5.12,
      workRVU: 2.82,
      facilityRVU: 1.79,
      malpracticeRVU: 0.51,
      globalPeriodDays: 0,
      requiresPriorAuth: true
    });
    this.registerProcedure({
      code: '43290',
      description: 'PulseCare Medical Procedure: Digestive System & Endoscopy - Protocol Specification #030',
      category: 'Digestive System & Endoscopy',
      specialty: 'Gastroenterology & General Surgery',
      baseFee: 302.5,
      rvu: 5.26,
      workRVU: 2.89,
      facilityRVU: 1.84,
      malpracticeRVU: 0.53,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '43300',
      description: 'PulseCare Medical Procedure: Digestive System & Endoscopy - Protocol Specification #031',
      category: 'Digestive System & Endoscopy',
      specialty: 'Gastroenterology & General Surgery',
      baseFee: 310.0,
      rvu: 5.4,
      workRVU: 2.97,
      facilityRVU: 1.89,
      malpracticeRVU: 0.54,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '43310',
      description: 'PulseCare Medical Procedure: Digestive System & Endoscopy - Protocol Specification #032',
      category: 'Digestive System & Endoscopy',
      specialty: 'Gastroenterology & General Surgery',
      baseFee: 317.5,
      rvu: 5.54,
      workRVU: 3.05,
      facilityRVU: 1.94,
      malpracticeRVU: 0.55,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '43320',
      description: 'PulseCare Medical Procedure: Digestive System & Endoscopy - Protocol Specification #033',
      category: 'Digestive System & Endoscopy',
      specialty: 'Gastroenterology & General Surgery',
      baseFee: 325.0,
      rvu: 5.68,
      workRVU: 3.12,
      facilityRVU: 1.99,
      malpracticeRVU: 0.57,
      globalPeriodDays: 0,
      requiresPriorAuth: true
    });
    this.registerProcedure({
      code: '43330',
      description: 'PulseCare Medical Procedure: Digestive System & Endoscopy - Protocol Specification #034',
      category: 'Digestive System & Endoscopy',
      specialty: 'Gastroenterology & General Surgery',
      baseFee: 332.5,
      rvu: 5.82,
      workRVU: 3.2,
      facilityRVU: 2.04,
      malpracticeRVU: 0.58,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '43340',
      description: 'PulseCare Medical Procedure: Digestive System & Endoscopy - Protocol Specification #035',
      category: 'Digestive System & Endoscopy',
      specialty: 'Gastroenterology & General Surgery',
      baseFee: 340.0,
      rvu: 5.96,
      workRVU: 3.28,
      facilityRVU: 2.09,
      malpracticeRVU: 0.6,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '43350',
      description: 'PulseCare Medical Procedure: Digestive System & Endoscopy - Protocol Specification #036',
      category: 'Digestive System & Endoscopy',
      specialty: 'Gastroenterology & General Surgery',
      baseFee: 347.5,
      rvu: 6.1,
      workRVU: 3.35,
      facilityRVU: 2.13,
      malpracticeRVU: 0.61,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '43360',
      description: 'PulseCare Medical Procedure: Digestive System & Endoscopy - Protocol Specification #037',
      category: 'Digestive System & Endoscopy',
      specialty: 'Gastroenterology & General Surgery',
      baseFee: 355.0,
      rvu: 6.24,
      workRVU: 3.43,
      facilityRVU: 2.18,
      malpracticeRVU: 0.62,
      globalPeriodDays: 0,
      requiresPriorAuth: true
    });
    this.registerProcedure({
      code: '43370',
      description: 'PulseCare Medical Procedure: Digestive System & Endoscopy - Protocol Specification #038',
      category: 'Digestive System & Endoscopy',
      specialty: 'Gastroenterology & General Surgery',
      baseFee: 362.5,
      rvu: 6.38,
      workRVU: 3.51,
      facilityRVU: 2.23,
      malpracticeRVU: 0.64,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '43380',
      description: 'PulseCare Medical Procedure: Digestive System & Endoscopy - Protocol Specification #039',
      category: 'Digestive System & Endoscopy',
      specialty: 'Gastroenterology & General Surgery',
      baseFee: 370.0,
      rvu: 6.52,
      workRVU: 3.59,
      facilityRVU: 2.28,
      malpracticeRVU: 0.65,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '43390',
      description: 'PulseCare Medical Procedure: Digestive System & Endoscopy - Protocol Specification #040',
      category: 'Digestive System & Endoscopy',
      specialty: 'Gastroenterology & General Surgery',
      baseFee: 377.5,
      rvu: 6.66,
      workRVU: 3.66,
      facilityRVU: 2.33,
      malpracticeRVU: 0.67,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '43400',
      description: 'PulseCare Medical Procedure: Digestive System & Endoscopy - Protocol Specification #041',
      category: 'Digestive System & Endoscopy',
      specialty: 'Gastroenterology & General Surgery',
      baseFee: 385.0,
      rvu: 6.8,
      workRVU: 3.74,
      facilityRVU: 2.38,
      malpracticeRVU: 0.68,
      globalPeriodDays: 0,
      requiresPriorAuth: true
    });
    this.registerProcedure({
      code: '43410',
      description: 'PulseCare Medical Procedure: Digestive System & Endoscopy - Protocol Specification #042',
      category: 'Digestive System & Endoscopy',
      specialty: 'Gastroenterology & General Surgery',
      baseFee: 392.5,
      rvu: 6.94,
      workRVU: 3.82,
      facilityRVU: 2.43,
      malpracticeRVU: 0.69,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '43420',
      description: 'PulseCare Medical Procedure: Digestive System & Endoscopy - Protocol Specification #043',
      category: 'Digestive System & Endoscopy',
      specialty: 'Gastroenterology & General Surgery',
      baseFee: 400.0,
      rvu: 7.08,
      workRVU: 3.89,
      facilityRVU: 2.48,
      malpracticeRVU: 0.71,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '43430',
      description: 'PulseCare Medical Procedure: Digestive System & Endoscopy - Protocol Specification #044',
      category: 'Digestive System & Endoscopy',
      specialty: 'Gastroenterology & General Surgery',
      baseFee: 407.5,
      rvu: 7.22,
      workRVU: 3.97,
      facilityRVU: 2.53,
      malpracticeRVU: 0.72,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '43440',
      description: 'PulseCare Medical Procedure: Digestive System & Endoscopy - Protocol Specification #045',
      category: 'Digestive System & Endoscopy',
      specialty: 'Gastroenterology & General Surgery',
      baseFee: 415.0,
      rvu: 7.36,
      workRVU: 4.05,
      facilityRVU: 2.58,
      malpracticeRVU: 0.74,
      globalPeriodDays: 0,
      requiresPriorAuth: true
    });
    this.registerProcedure({
      code: '43450',
      description: 'PulseCare Medical Procedure: Digestive System & Endoscopy - Protocol Specification #046',
      category: 'Digestive System & Endoscopy',
      specialty: 'Gastroenterology & General Surgery',
      baseFee: 422.5,
      rvu: 7.5,
      workRVU: 4.12,
      facilityRVU: 2.62,
      malpracticeRVU: 0.75,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '43460',
      description: 'PulseCare Medical Procedure: Digestive System & Endoscopy - Protocol Specification #047',
      category: 'Digestive System & Endoscopy',
      specialty: 'Gastroenterology & General Surgery',
      baseFee: 430.0,
      rvu: 7.64,
      workRVU: 4.2,
      facilityRVU: 2.67,
      malpracticeRVU: 0.76,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '43470',
      description: 'PulseCare Medical Procedure: Digestive System & Endoscopy - Protocol Specification #048',
      category: 'Digestive System & Endoscopy',
      specialty: 'Gastroenterology & General Surgery',
      baseFee: 437.5,
      rvu: 7.78,
      workRVU: 4.28,
      facilityRVU: 2.72,
      malpracticeRVU: 0.78,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '43480',
      description: 'PulseCare Medical Procedure: Digestive System & Endoscopy - Protocol Specification #049',
      category: 'Digestive System & Endoscopy',
      specialty: 'Gastroenterology & General Surgery',
      baseFee: 445.0,
      rvu: 7.92,
      workRVU: 4.36,
      facilityRVU: 2.77,
      malpracticeRVU: 0.79,
      globalPeriodDays: 0,
      requiresPriorAuth: true
    });
    this.registerProcedure({
      code: '43490',
      description: 'PulseCare Medical Procedure: Digestive System & Endoscopy - Protocol Specification #050',
      category: 'Digestive System & Endoscopy',
      specialty: 'Gastroenterology & General Surgery',
      baseFee: 452.5,
      rvu: 8.06,
      workRVU: 4.43,
      facilityRVU: 2.82,
      malpracticeRVU: 0.81,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '43500',
      description: 'PulseCare Medical Procedure: Digestive System & Endoscopy - Protocol Specification #051',
      category: 'Digestive System & Endoscopy',
      specialty: 'Gastroenterology & General Surgery',
      baseFee: 460.0,
      rvu: 8.2,
      workRVU: 4.51,
      facilityRVU: 2.87,
      malpracticeRVU: 0.82,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '43510',
      description: 'PulseCare Medical Procedure: Digestive System & Endoscopy - Protocol Specification #052',
      category: 'Digestive System & Endoscopy',
      specialty: 'Gastroenterology & General Surgery',
      baseFee: 467.5,
      rvu: 8.34,
      workRVU: 4.59,
      facilityRVU: 2.92,
      malpracticeRVU: 0.83,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '43520',
      description: 'PulseCare Medical Procedure: Digestive System & Endoscopy - Protocol Specification #053',
      category: 'Digestive System & Endoscopy',
      specialty: 'Gastroenterology & General Surgery',
      baseFee: 475.0,
      rvu: 8.48,
      workRVU: 4.66,
      facilityRVU: 2.97,
      malpracticeRVU: 0.85,
      globalPeriodDays: 0,
      requiresPriorAuth: true
    });
    this.registerProcedure({
      code: '43530',
      description: 'PulseCare Medical Procedure: Digestive System & Endoscopy - Protocol Specification #054',
      category: 'Digestive System & Endoscopy',
      specialty: 'Gastroenterology & General Surgery',
      baseFee: 482.5,
      rvu: 8.62,
      workRVU: 4.74,
      facilityRVU: 3.02,
      malpracticeRVU: 0.86,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '43540',
      description: 'PulseCare Medical Procedure: Digestive System & Endoscopy - Protocol Specification #055',
      category: 'Digestive System & Endoscopy',
      specialty: 'Gastroenterology & General Surgery',
      baseFee: 490.0,
      rvu: 8.76,
      workRVU: 4.82,
      facilityRVU: 3.07,
      malpracticeRVU: 0.88,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '43550',
      description: 'PulseCare Medical Procedure: Digestive System & Endoscopy - Protocol Specification #056',
      category: 'Digestive System & Endoscopy',
      specialty: 'Gastroenterology & General Surgery',
      baseFee: 497.5,
      rvu: 8.9,
      workRVU: 4.9,
      facilityRVU: 3.11,
      malpracticeRVU: 0.89,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '43560',
      description: 'PulseCare Medical Procedure: Digestive System & Endoscopy - Protocol Specification #057',
      category: 'Digestive System & Endoscopy',
      specialty: 'Gastroenterology & General Surgery',
      baseFee: 505.0,
      rvu: 9.04,
      workRVU: 4.97,
      facilityRVU: 3.16,
      malpracticeRVU: 0.9,
      globalPeriodDays: 0,
      requiresPriorAuth: true
    });
    this.registerProcedure({
      code: '43570',
      description: 'PulseCare Medical Procedure: Digestive System & Endoscopy - Protocol Specification #058',
      category: 'Digestive System & Endoscopy',
      specialty: 'Gastroenterology & General Surgery',
      baseFee: 512.5,
      rvu: 9.18,
      workRVU: 5.05,
      facilityRVU: 3.21,
      malpracticeRVU: 0.92,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '43580',
      description: 'PulseCare Medical Procedure: Digestive System & Endoscopy - Protocol Specification #059',
      category: 'Digestive System & Endoscopy',
      specialty: 'Gastroenterology & General Surgery',
      baseFee: 520.0,
      rvu: 9.32,
      workRVU: 5.13,
      facilityRVU: 3.26,
      malpracticeRVU: 0.93,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '43590',
      description: 'PulseCare Medical Procedure: Digestive System & Endoscopy - Protocol Specification #060',
      category: 'Digestive System & Endoscopy',
      specialty: 'Gastroenterology & General Surgery',
      baseFee: 527.5,
      rvu: 9.46,
      workRVU: 5.2,
      facilityRVU: 3.31,
      malpracticeRVU: 0.95,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '43600',
      description: 'PulseCare Medical Procedure: Digestive System & Endoscopy - Protocol Specification #061',
      category: 'Digestive System & Endoscopy',
      specialty: 'Gastroenterology & General Surgery',
      baseFee: 535.0,
      rvu: 9.6,
      workRVU: 5.28,
      facilityRVU: 3.36,
      malpracticeRVU: 0.96,
      globalPeriodDays: 0,
      requiresPriorAuth: true
    });
    this.registerProcedure({
      code: '43610',
      description: 'PulseCare Medical Procedure: Digestive System & Endoscopy - Protocol Specification #062',
      category: 'Digestive System & Endoscopy',
      specialty: 'Gastroenterology & General Surgery',
      baseFee: 542.5,
      rvu: 9.74,
      workRVU: 5.36,
      facilityRVU: 3.41,
      malpracticeRVU: 0.97,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '43620',
      description: 'PulseCare Medical Procedure: Digestive System & Endoscopy - Protocol Specification #063',
      category: 'Digestive System & Endoscopy',
      specialty: 'Gastroenterology & General Surgery',
      baseFee: 550.0,
      rvu: 9.88,
      workRVU: 5.43,
      facilityRVU: 3.46,
      malpracticeRVU: 0.99,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '43630',
      description: 'PulseCare Medical Procedure: Digestive System & Endoscopy - Protocol Specification #064',
      category: 'Digestive System & Endoscopy',
      specialty: 'Gastroenterology & General Surgery',
      baseFee: 557.5,
      rvu: 10.02,
      workRVU: 5.51,
      facilityRVU: 3.51,
      malpracticeRVU: 1.0,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '43640',
      description: 'PulseCare Medical Procedure: Digestive System & Endoscopy - Protocol Specification #065',
      category: 'Digestive System & Endoscopy',
      specialty: 'Gastroenterology & General Surgery',
      baseFee: 565.0,
      rvu: 10.16,
      workRVU: 5.59,
      facilityRVU: 3.56,
      malpracticeRVU: 1.02,
      globalPeriodDays: 0,
      requiresPriorAuth: true
    });
    this.registerProcedure({
      code: '43650',
      description: 'PulseCare Medical Procedure: Digestive System & Endoscopy - Protocol Specification #066',
      category: 'Digestive System & Endoscopy',
      specialty: 'Gastroenterology & General Surgery',
      baseFee: 572.5,
      rvu: 10.3,
      workRVU: 5.67,
      facilityRVU: 3.6,
      malpracticeRVU: 1.03,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '43660',
      description: 'PulseCare Medical Procedure: Digestive System & Endoscopy - Protocol Specification #067',
      category: 'Digestive System & Endoscopy',
      specialty: 'Gastroenterology & General Surgery',
      baseFee: 580.0,
      rvu: 10.44,
      workRVU: 5.74,
      facilityRVU: 3.65,
      malpracticeRVU: 1.04,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '43670',
      description: 'PulseCare Medical Procedure: Digestive System & Endoscopy - Protocol Specification #068',
      category: 'Digestive System & Endoscopy',
      specialty: 'Gastroenterology & General Surgery',
      baseFee: 587.5,
      rvu: 10.58,
      workRVU: 5.82,
      facilityRVU: 3.7,
      malpracticeRVU: 1.06,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '43680',
      description: 'PulseCare Medical Procedure: Digestive System & Endoscopy - Protocol Specification #069',
      category: 'Digestive System & Endoscopy',
      specialty: 'Gastroenterology & General Surgery',
      baseFee: 595.0,
      rvu: 10.72,
      workRVU: 5.9,
      facilityRVU: 3.75,
      malpracticeRVU: 1.07,
      globalPeriodDays: 0,
      requiresPriorAuth: true
    });
    this.registerProcedure({
      code: '43690',
      description: 'PulseCare Medical Procedure: Digestive System & Endoscopy - Protocol Specification #070',
      category: 'Digestive System & Endoscopy',
      specialty: 'Gastroenterology & General Surgery',
      baseFee: 602.5,
      rvu: 10.86,
      workRVU: 5.97,
      facilityRVU: 3.8,
      malpracticeRVU: 1.09,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '43700',
      description: 'PulseCare Medical Procedure: Digestive System & Endoscopy - Protocol Specification #071',
      category: 'Digestive System & Endoscopy',
      specialty: 'Gastroenterology & General Surgery',
      baseFee: 610.0,
      rvu: 11.0,
      workRVU: 6.05,
      facilityRVU: 3.85,
      malpracticeRVU: 1.1,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '43710',
      description: 'PulseCare Medical Procedure: Digestive System & Endoscopy - Protocol Specification #072',
      category: 'Digestive System & Endoscopy',
      specialty: 'Gastroenterology & General Surgery',
      baseFee: 617.5,
      rvu: 11.14,
      workRVU: 6.13,
      facilityRVU: 3.9,
      malpracticeRVU: 1.11,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '43720',
      description: 'PulseCare Medical Procedure: Digestive System & Endoscopy - Protocol Specification #073',
      category: 'Digestive System & Endoscopy',
      specialty: 'Gastroenterology & General Surgery',
      baseFee: 625.0,
      rvu: 11.28,
      workRVU: 6.2,
      facilityRVU: 3.95,
      malpracticeRVU: 1.13,
      globalPeriodDays: 0,
      requiresPriorAuth: true
    });
    this.registerProcedure({
      code: '43730',
      description: 'PulseCare Medical Procedure: Digestive System & Endoscopy - Protocol Specification #074',
      category: 'Digestive System & Endoscopy',
      specialty: 'Gastroenterology & General Surgery',
      baseFee: 632.5,
      rvu: 11.42,
      workRVU: 6.28,
      facilityRVU: 4.0,
      malpracticeRVU: 1.14,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '43740',
      description: 'PulseCare Medical Procedure: Digestive System & Endoscopy - Protocol Specification #075',
      category: 'Digestive System & Endoscopy',
      specialty: 'Gastroenterology & General Surgery',
      baseFee: 640.0,
      rvu: 11.56,
      workRVU: 6.36,
      facilityRVU: 4.05,
      malpracticeRVU: 1.16,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '43750',
      description: 'PulseCare Medical Procedure: Digestive System & Endoscopy - Protocol Specification #076',
      category: 'Digestive System & Endoscopy',
      specialty: 'Gastroenterology & General Surgery',
      baseFee: 647.5,
      rvu: 11.7,
      workRVU: 6.44,
      facilityRVU: 4.09,
      malpracticeRVU: 1.17,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '43760',
      description: 'PulseCare Medical Procedure: Digestive System & Endoscopy - Protocol Specification #077',
      category: 'Digestive System & Endoscopy',
      specialty: 'Gastroenterology & General Surgery',
      baseFee: 655.0,
      rvu: 11.84,
      workRVU: 6.51,
      facilityRVU: 4.14,
      malpracticeRVU: 1.18,
      globalPeriodDays: 0,
      requiresPriorAuth: true
    });
    this.registerProcedure({
      code: '43770',
      description: 'PulseCare Medical Procedure: Digestive System & Endoscopy - Protocol Specification #078',
      category: 'Digestive System & Endoscopy',
      specialty: 'Gastroenterology & General Surgery',
      baseFee: 662.5,
      rvu: 11.98,
      workRVU: 6.59,
      facilityRVU: 4.19,
      malpracticeRVU: 1.2,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '43780',
      description: 'PulseCare Medical Procedure: Digestive System & Endoscopy - Protocol Specification #079',
      category: 'Digestive System & Endoscopy',
      specialty: 'Gastroenterology & General Surgery',
      baseFee: 670.0,
      rvu: 12.12,
      workRVU: 6.67,
      facilityRVU: 4.24,
      malpracticeRVU: 1.21,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '43790',
      description: 'PulseCare Medical Procedure: Digestive System & Endoscopy - Protocol Specification #080',
      category: 'Digestive System & Endoscopy',
      specialty: 'Gastroenterology & General Surgery',
      baseFee: 677.5,
      rvu: 12.26,
      workRVU: 6.74,
      facilityRVU: 4.29,
      malpracticeRVU: 1.23,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '43800',
      description: 'PulseCare Medical Procedure: Digestive System & Endoscopy - Protocol Specification #081',
      category: 'Digestive System & Endoscopy',
      specialty: 'Gastroenterology & General Surgery',
      baseFee: 685.0,
      rvu: 12.4,
      workRVU: 6.82,
      facilityRVU: 4.34,
      malpracticeRVU: 1.24,
      globalPeriodDays: 0,
      requiresPriorAuth: true
    });
    this.registerProcedure({
      code: '43810',
      description: 'PulseCare Medical Procedure: Digestive System & Endoscopy - Protocol Specification #082',
      category: 'Digestive System & Endoscopy',
      specialty: 'Gastroenterology & General Surgery',
      baseFee: 692.5,
      rvu: 12.54,
      workRVU: 6.9,
      facilityRVU: 4.39,
      malpracticeRVU: 1.25,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '43820',
      description: 'PulseCare Medical Procedure: Digestive System & Endoscopy - Protocol Specification #083',
      category: 'Digestive System & Endoscopy',
      specialty: 'Gastroenterology & General Surgery',
      baseFee: 700.0,
      rvu: 12.68,
      workRVU: 6.97,
      facilityRVU: 4.44,
      malpracticeRVU: 1.27,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '43830',
      description: 'PulseCare Medical Procedure: Digestive System & Endoscopy - Protocol Specification #084',
      category: 'Digestive System & Endoscopy',
      specialty: 'Gastroenterology & General Surgery',
      baseFee: 707.5,
      rvu: 12.82,
      workRVU: 7.05,
      facilityRVU: 4.49,
      malpracticeRVU: 1.28,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '43840',
      description: 'PulseCare Medical Procedure: Digestive System & Endoscopy - Protocol Specification #085',
      category: 'Digestive System & Endoscopy',
      specialty: 'Gastroenterology & General Surgery',
      baseFee: 715.0,
      rvu: 12.96,
      workRVU: 7.13,
      facilityRVU: 4.54,
      malpracticeRVU: 1.3,
      globalPeriodDays: 0,
      requiresPriorAuth: true
    });
    this.registerProcedure({
      code: '43850',
      description: 'PulseCare Medical Procedure: Digestive System & Endoscopy - Protocol Specification #086',
      category: 'Digestive System & Endoscopy',
      specialty: 'Gastroenterology & General Surgery',
      baseFee: 722.5,
      rvu: 13.1,
      workRVU: 7.21,
      facilityRVU: 4.58,
      malpracticeRVU: 1.31,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '43860',
      description: 'PulseCare Medical Procedure: Digestive System & Endoscopy - Protocol Specification #087',
      category: 'Digestive System & Endoscopy',
      specialty: 'Gastroenterology & General Surgery',
      baseFee: 730.0,
      rvu: 13.24,
      workRVU: 7.28,
      facilityRVU: 4.63,
      malpracticeRVU: 1.32,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '43870',
      description: 'PulseCare Medical Procedure: Digestive System & Endoscopy - Protocol Specification #088',
      category: 'Digestive System & Endoscopy',
      specialty: 'Gastroenterology & General Surgery',
      baseFee: 737.5,
      rvu: 13.38,
      workRVU: 7.36,
      facilityRVU: 4.68,
      malpracticeRVU: 1.34,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '43880',
      description: 'PulseCare Medical Procedure: Digestive System & Endoscopy - Protocol Specification #089',
      category: 'Digestive System & Endoscopy',
      specialty: 'Gastroenterology & General Surgery',
      baseFee: 745.0,
      rvu: 13.52,
      workRVU: 7.44,
      facilityRVU: 4.73,
      malpracticeRVU: 1.35,
      globalPeriodDays: 0,
      requiresPriorAuth: true
    });
    this.registerProcedure({
      code: '43890',
      description: 'PulseCare Medical Procedure: Digestive System & Endoscopy - Protocol Specification #090',
      category: 'Digestive System & Endoscopy',
      specialty: 'Gastroenterology & General Surgery',
      baseFee: 752.5,
      rvu: 13.66,
      workRVU: 7.51,
      facilityRVU: 4.78,
      malpracticeRVU: 1.37,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '43900',
      description: 'PulseCare Medical Procedure: Digestive System & Endoscopy - Protocol Specification #091',
      category: 'Digestive System & Endoscopy',
      specialty: 'Gastroenterology & General Surgery',
      baseFee: 760.0,
      rvu: 13.8,
      workRVU: 7.59,
      facilityRVU: 4.83,
      malpracticeRVU: 1.38,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '43910',
      description: 'PulseCare Medical Procedure: Digestive System & Endoscopy - Protocol Specification #092',
      category: 'Digestive System & Endoscopy',
      specialty: 'Gastroenterology & General Surgery',
      baseFee: 767.5,
      rvu: 13.94,
      workRVU: 7.67,
      facilityRVU: 4.88,
      malpracticeRVU: 1.39,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '43920',
      description: 'PulseCare Medical Procedure: Digestive System & Endoscopy - Protocol Specification #093',
      category: 'Digestive System & Endoscopy',
      specialty: 'Gastroenterology & General Surgery',
      baseFee: 775.0,
      rvu: 14.08,
      workRVU: 7.74,
      facilityRVU: 4.93,
      malpracticeRVU: 1.41,
      globalPeriodDays: 0,
      requiresPriorAuth: true
    });
    this.registerProcedure({
      code: '43930',
      description: 'PulseCare Medical Procedure: Digestive System & Endoscopy - Protocol Specification #094',
      category: 'Digestive System & Endoscopy',
      specialty: 'Gastroenterology & General Surgery',
      baseFee: 782.5,
      rvu: 14.22,
      workRVU: 7.82,
      facilityRVU: 4.98,
      malpracticeRVU: 1.42,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '43940',
      description: 'PulseCare Medical Procedure: Digestive System & Endoscopy - Protocol Specification #095',
      category: 'Digestive System & Endoscopy',
      specialty: 'Gastroenterology & General Surgery',
      baseFee: 790.0,
      rvu: 14.36,
      workRVU: 7.9,
      facilityRVU: 5.03,
      malpracticeRVU: 1.44,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '43950',
      description: 'PulseCare Medical Procedure: Digestive System & Endoscopy - Protocol Specification #096',
      category: 'Digestive System & Endoscopy',
      specialty: 'Gastroenterology & General Surgery',
      baseFee: 797.5,
      rvu: 14.5,
      workRVU: 7.98,
      facilityRVU: 5.07,
      malpracticeRVU: 1.45,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '43960',
      description: 'PulseCare Medical Procedure: Digestive System & Endoscopy - Protocol Specification #097',
      category: 'Digestive System & Endoscopy',
      specialty: 'Gastroenterology & General Surgery',
      baseFee: 805.0,
      rvu: 14.64,
      workRVU: 8.05,
      facilityRVU: 5.12,
      malpracticeRVU: 1.46,
      globalPeriodDays: 0,
      requiresPriorAuth: true
    });
    this.registerProcedure({
      code: '43970',
      description: 'PulseCare Medical Procedure: Digestive System & Endoscopy - Protocol Specification #098',
      category: 'Digestive System & Endoscopy',
      specialty: 'Gastroenterology & General Surgery',
      baseFee: 812.5,
      rvu: 14.78,
      workRVU: 8.13,
      facilityRVU: 5.17,
      malpracticeRVU: 1.48,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '43980',
      description: 'PulseCare Medical Procedure: Digestive System & Endoscopy - Protocol Specification #099',
      category: 'Digestive System & Endoscopy',
      specialty: 'Gastroenterology & General Surgery',
      baseFee: 820.0,
      rvu: 14.92,
      workRVU: 8.21,
      facilityRVU: 5.22,
      malpracticeRVU: 1.49,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '43990',
      description: 'PulseCare Medical Procedure: Digestive System & Endoscopy - Protocol Specification #100',
      category: 'Digestive System & Endoscopy',
      specialty: 'Gastroenterology & General Surgery',
      baseFee: 827.5,
      rvu: 15.06,
      workRVU: 8.28,
      facilityRVU: 5.27,
      malpracticeRVU: 1.51,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '20000',
      description: 'PulseCare Medical Procedure: Musculoskeletal & Orthopedics - Protocol Specification #001',
      category: 'Musculoskeletal & Orthopedics',
      specialty: 'Orthopedic Surgery',
      baseFee: 85.0,
      rvu: 1.2,
      workRVU: 0.66,
      facilityRVU: 0.42,
      malpracticeRVU: 0.12,
      globalPeriodDays: 0,
      requiresPriorAuth: true
    });
    this.registerProcedure({
      code: '20010',
      description: 'PulseCare Medical Procedure: Musculoskeletal & Orthopedics - Protocol Specification #002',
      category: 'Musculoskeletal & Orthopedics',
      specialty: 'Orthopedic Surgery',
      baseFee: 92.5,
      rvu: 1.34,
      workRVU: 0.74,
      facilityRVU: 0.47,
      malpracticeRVU: 0.13,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '20020',
      description: 'PulseCare Medical Procedure: Musculoskeletal & Orthopedics - Protocol Specification #003',
      category: 'Musculoskeletal & Orthopedics',
      specialty: 'Orthopedic Surgery',
      baseFee: 100.0,
      rvu: 1.48,
      workRVU: 0.81,
      facilityRVU: 0.52,
      malpracticeRVU: 0.15,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '20030',
      description: 'PulseCare Medical Procedure: Musculoskeletal & Orthopedics - Protocol Specification #004',
      category: 'Musculoskeletal & Orthopedics',
      specialty: 'Orthopedic Surgery',
      baseFee: 107.5,
      rvu: 1.62,
      workRVU: 0.89,
      facilityRVU: 0.57,
      malpracticeRVU: 0.16,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '20040',
      description: 'PulseCare Medical Procedure: Musculoskeletal & Orthopedics - Protocol Specification #005',
      category: 'Musculoskeletal & Orthopedics',
      specialty: 'Orthopedic Surgery',
      baseFee: 115.0,
      rvu: 1.76,
      workRVU: 0.97,
      facilityRVU: 0.62,
      malpracticeRVU: 0.18,
      globalPeriodDays: 0,
      requiresPriorAuth: true
    });
    this.registerProcedure({
      code: '20050',
      description: 'PulseCare Medical Procedure: Musculoskeletal & Orthopedics - Protocol Specification #006',
      category: 'Musculoskeletal & Orthopedics',
      specialty: 'Orthopedic Surgery',
      baseFee: 122.5,
      rvu: 1.9,
      workRVU: 1.04,
      facilityRVU: 0.66,
      malpracticeRVU: 0.19,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '20060',
      description: 'PulseCare Medical Procedure: Musculoskeletal & Orthopedics - Protocol Specification #007',
      category: 'Musculoskeletal & Orthopedics',
      specialty: 'Orthopedic Surgery',
      baseFee: 130.0,
      rvu: 2.04,
      workRVU: 1.12,
      facilityRVU: 0.71,
      malpracticeRVU: 0.2,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '20070',
      description: 'PulseCare Medical Procedure: Musculoskeletal & Orthopedics - Protocol Specification #008',
      category: 'Musculoskeletal & Orthopedics',
      specialty: 'Orthopedic Surgery',
      baseFee: 137.5,
      rvu: 2.18,
      workRVU: 1.2,
      facilityRVU: 0.76,
      malpracticeRVU: 0.22,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '20080',
      description: 'PulseCare Medical Procedure: Musculoskeletal & Orthopedics - Protocol Specification #009',
      category: 'Musculoskeletal & Orthopedics',
      specialty: 'Orthopedic Surgery',
      baseFee: 145.0,
      rvu: 2.32,
      workRVU: 1.28,
      facilityRVU: 0.81,
      malpracticeRVU: 0.23,
      globalPeriodDays: 0,
      requiresPriorAuth: true
    });
    this.registerProcedure({
      code: '20090',
      description: 'PulseCare Medical Procedure: Musculoskeletal & Orthopedics - Protocol Specification #010',
      category: 'Musculoskeletal & Orthopedics',
      specialty: 'Orthopedic Surgery',
      baseFee: 152.5,
      rvu: 2.46,
      workRVU: 1.35,
      facilityRVU: 0.86,
      malpracticeRVU: 0.25,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '20100',
      description: 'PulseCare Medical Procedure: Musculoskeletal & Orthopedics - Protocol Specification #011',
      category: 'Musculoskeletal & Orthopedics',
      specialty: 'Orthopedic Surgery',
      baseFee: 160.0,
      rvu: 2.6,
      workRVU: 1.43,
      facilityRVU: 0.91,
      malpracticeRVU: 0.26,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '20110',
      description: 'PulseCare Medical Procedure: Musculoskeletal & Orthopedics - Protocol Specification #012',
      category: 'Musculoskeletal & Orthopedics',
      specialty: 'Orthopedic Surgery',
      baseFee: 167.5,
      rvu: 2.74,
      workRVU: 1.51,
      facilityRVU: 0.96,
      malpracticeRVU: 0.27,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '20120',
      description: 'PulseCare Medical Procedure: Musculoskeletal & Orthopedics - Protocol Specification #013',
      category: 'Musculoskeletal & Orthopedics',
      specialty: 'Orthopedic Surgery',
      baseFee: 175.0,
      rvu: 2.88,
      workRVU: 1.58,
      facilityRVU: 1.01,
      malpracticeRVU: 0.29,
      globalPeriodDays: 0,
      requiresPriorAuth: true
    });
    this.registerProcedure({
      code: '20130',
      description: 'PulseCare Medical Procedure: Musculoskeletal & Orthopedics - Protocol Specification #014',
      category: 'Musculoskeletal & Orthopedics',
      specialty: 'Orthopedic Surgery',
      baseFee: 182.5,
      rvu: 3.02,
      workRVU: 1.66,
      facilityRVU: 1.06,
      malpracticeRVU: 0.3,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '20140',
      description: 'PulseCare Medical Procedure: Musculoskeletal & Orthopedics - Protocol Specification #015',
      category: 'Musculoskeletal & Orthopedics',
      specialty: 'Orthopedic Surgery',
      baseFee: 190.0,
      rvu: 3.16,
      workRVU: 1.74,
      facilityRVU: 1.11,
      malpracticeRVU: 0.32,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '20150',
      description: 'PulseCare Medical Procedure: Musculoskeletal & Orthopedics - Protocol Specification #016',
      category: 'Musculoskeletal & Orthopedics',
      specialty: 'Orthopedic Surgery',
      baseFee: 197.5,
      rvu: 3.3,
      workRVU: 1.81,
      facilityRVU: 1.15,
      malpracticeRVU: 0.33,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '20160',
      description: 'PulseCare Medical Procedure: Musculoskeletal & Orthopedics - Protocol Specification #017',
      category: 'Musculoskeletal & Orthopedics',
      specialty: 'Orthopedic Surgery',
      baseFee: 205.0,
      rvu: 3.44,
      workRVU: 1.89,
      facilityRVU: 1.2,
      malpracticeRVU: 0.34,
      globalPeriodDays: 0,
      requiresPriorAuth: true
    });
    this.registerProcedure({
      code: '20170',
      description: 'PulseCare Medical Procedure: Musculoskeletal & Orthopedics - Protocol Specification #018',
      category: 'Musculoskeletal & Orthopedics',
      specialty: 'Orthopedic Surgery',
      baseFee: 212.5,
      rvu: 3.58,
      workRVU: 1.97,
      facilityRVU: 1.25,
      malpracticeRVU: 0.36,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '20180',
      description: 'PulseCare Medical Procedure: Musculoskeletal & Orthopedics - Protocol Specification #019',
      category: 'Musculoskeletal & Orthopedics',
      specialty: 'Orthopedic Surgery',
      baseFee: 220.0,
      rvu: 3.72,
      workRVU: 2.05,
      facilityRVU: 1.3,
      malpracticeRVU: 0.37,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '20190',
      description: 'PulseCare Medical Procedure: Musculoskeletal & Orthopedics - Protocol Specification #020',
      category: 'Musculoskeletal & Orthopedics',
      specialty: 'Orthopedic Surgery',
      baseFee: 227.5,
      rvu: 3.86,
      workRVU: 2.12,
      facilityRVU: 1.35,
      malpracticeRVU: 0.39,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '20200',
      description: 'PulseCare Medical Procedure: Musculoskeletal & Orthopedics - Protocol Specification #021',
      category: 'Musculoskeletal & Orthopedics',
      specialty: 'Orthopedic Surgery',
      baseFee: 235.0,
      rvu: 4.0,
      workRVU: 2.2,
      facilityRVU: 1.4,
      malpracticeRVU: 0.4,
      globalPeriodDays: 0,
      requiresPriorAuth: true
    });
    this.registerProcedure({
      code: '20210',
      description: 'PulseCare Medical Procedure: Musculoskeletal & Orthopedics - Protocol Specification #022',
      category: 'Musculoskeletal & Orthopedics',
      specialty: 'Orthopedic Surgery',
      baseFee: 242.5,
      rvu: 4.14,
      workRVU: 2.28,
      facilityRVU: 1.45,
      malpracticeRVU: 0.41,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '20220',
      description: 'PulseCare Medical Procedure: Musculoskeletal & Orthopedics - Protocol Specification #023',
      category: 'Musculoskeletal & Orthopedics',
      specialty: 'Orthopedic Surgery',
      baseFee: 250.0,
      rvu: 4.28,
      workRVU: 2.35,
      facilityRVU: 1.5,
      malpracticeRVU: 0.43,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '20230',
      description: 'PulseCare Medical Procedure: Musculoskeletal & Orthopedics - Protocol Specification #024',
      category: 'Musculoskeletal & Orthopedics',
      specialty: 'Orthopedic Surgery',
      baseFee: 257.5,
      rvu: 4.42,
      workRVU: 2.43,
      facilityRVU: 1.55,
      malpracticeRVU: 0.44,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '20240',
      description: 'PulseCare Medical Procedure: Musculoskeletal & Orthopedics - Protocol Specification #025',
      category: 'Musculoskeletal & Orthopedics',
      specialty: 'Orthopedic Surgery',
      baseFee: 265.0,
      rvu: 4.56,
      workRVU: 2.51,
      facilityRVU: 1.6,
      malpracticeRVU: 0.46,
      globalPeriodDays: 0,
      requiresPriorAuth: true
    });
    this.registerProcedure({
      code: '20250',
      description: 'PulseCare Medical Procedure: Musculoskeletal & Orthopedics - Protocol Specification #026',
      category: 'Musculoskeletal & Orthopedics',
      specialty: 'Orthopedic Surgery',
      baseFee: 272.5,
      rvu: 4.7,
      workRVU: 2.59,
      facilityRVU: 1.65,
      malpracticeRVU: 0.47,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '20260',
      description: 'PulseCare Medical Procedure: Musculoskeletal & Orthopedics - Protocol Specification #027',
      category: 'Musculoskeletal & Orthopedics',
      specialty: 'Orthopedic Surgery',
      baseFee: 280.0,
      rvu: 4.84,
      workRVU: 2.66,
      facilityRVU: 1.69,
      malpracticeRVU: 0.48,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '20270',
      description: 'PulseCare Medical Procedure: Musculoskeletal & Orthopedics - Protocol Specification #028',
      category: 'Musculoskeletal & Orthopedics',
      specialty: 'Orthopedic Surgery',
      baseFee: 287.5,
      rvu: 4.98,
      workRVU: 2.74,
      facilityRVU: 1.74,
      malpracticeRVU: 0.5,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '20280',
      description: 'PulseCare Medical Procedure: Musculoskeletal & Orthopedics - Protocol Specification #029',
      category: 'Musculoskeletal & Orthopedics',
      specialty: 'Orthopedic Surgery',
      baseFee: 295.0,
      rvu: 5.12,
      workRVU: 2.82,
      facilityRVU: 1.79,
      malpracticeRVU: 0.51,
      globalPeriodDays: 0,
      requiresPriorAuth: true
    });
    this.registerProcedure({
      code: '20290',
      description: 'PulseCare Medical Procedure: Musculoskeletal & Orthopedics - Protocol Specification #030',
      category: 'Musculoskeletal & Orthopedics',
      specialty: 'Orthopedic Surgery',
      baseFee: 302.5,
      rvu: 5.26,
      workRVU: 2.89,
      facilityRVU: 1.84,
      malpracticeRVU: 0.53,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '20300',
      description: 'PulseCare Medical Procedure: Musculoskeletal & Orthopedics - Protocol Specification #031',
      category: 'Musculoskeletal & Orthopedics',
      specialty: 'Orthopedic Surgery',
      baseFee: 310.0,
      rvu: 5.4,
      workRVU: 2.97,
      facilityRVU: 1.89,
      malpracticeRVU: 0.54,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '20310',
      description: 'PulseCare Medical Procedure: Musculoskeletal & Orthopedics - Protocol Specification #032',
      category: 'Musculoskeletal & Orthopedics',
      specialty: 'Orthopedic Surgery',
      baseFee: 317.5,
      rvu: 5.54,
      workRVU: 3.05,
      facilityRVU: 1.94,
      malpracticeRVU: 0.55,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '20320',
      description: 'PulseCare Medical Procedure: Musculoskeletal & Orthopedics - Protocol Specification #033',
      category: 'Musculoskeletal & Orthopedics',
      specialty: 'Orthopedic Surgery',
      baseFee: 325.0,
      rvu: 5.68,
      workRVU: 3.12,
      facilityRVU: 1.99,
      malpracticeRVU: 0.57,
      globalPeriodDays: 0,
      requiresPriorAuth: true
    });
    this.registerProcedure({
      code: '20330',
      description: 'PulseCare Medical Procedure: Musculoskeletal & Orthopedics - Protocol Specification #034',
      category: 'Musculoskeletal & Orthopedics',
      specialty: 'Orthopedic Surgery',
      baseFee: 332.5,
      rvu: 5.82,
      workRVU: 3.2,
      facilityRVU: 2.04,
      malpracticeRVU: 0.58,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '20340',
      description: 'PulseCare Medical Procedure: Musculoskeletal & Orthopedics - Protocol Specification #035',
      category: 'Musculoskeletal & Orthopedics',
      specialty: 'Orthopedic Surgery',
      baseFee: 340.0,
      rvu: 5.96,
      workRVU: 3.28,
      facilityRVU: 2.09,
      malpracticeRVU: 0.6,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '20350',
      description: 'PulseCare Medical Procedure: Musculoskeletal & Orthopedics - Protocol Specification #036',
      category: 'Musculoskeletal & Orthopedics',
      specialty: 'Orthopedic Surgery',
      baseFee: 347.5,
      rvu: 6.1,
      workRVU: 3.35,
      facilityRVU: 2.13,
      malpracticeRVU: 0.61,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '20360',
      description: 'PulseCare Medical Procedure: Musculoskeletal & Orthopedics - Protocol Specification #037',
      category: 'Musculoskeletal & Orthopedics',
      specialty: 'Orthopedic Surgery',
      baseFee: 355.0,
      rvu: 6.24,
      workRVU: 3.43,
      facilityRVU: 2.18,
      malpracticeRVU: 0.62,
      globalPeriodDays: 0,
      requiresPriorAuth: true
    });
    this.registerProcedure({
      code: '20370',
      description: 'PulseCare Medical Procedure: Musculoskeletal & Orthopedics - Protocol Specification #038',
      category: 'Musculoskeletal & Orthopedics',
      specialty: 'Orthopedic Surgery',
      baseFee: 362.5,
      rvu: 6.38,
      workRVU: 3.51,
      facilityRVU: 2.23,
      malpracticeRVU: 0.64,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '20380',
      description: 'PulseCare Medical Procedure: Musculoskeletal & Orthopedics - Protocol Specification #039',
      category: 'Musculoskeletal & Orthopedics',
      specialty: 'Orthopedic Surgery',
      baseFee: 370.0,
      rvu: 6.52,
      workRVU: 3.59,
      facilityRVU: 2.28,
      malpracticeRVU: 0.65,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '20390',
      description: 'PulseCare Medical Procedure: Musculoskeletal & Orthopedics - Protocol Specification #040',
      category: 'Musculoskeletal & Orthopedics',
      specialty: 'Orthopedic Surgery',
      baseFee: 377.5,
      rvu: 6.66,
      workRVU: 3.66,
      facilityRVU: 2.33,
      malpracticeRVU: 0.67,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '20400',
      description: 'PulseCare Medical Procedure: Musculoskeletal & Orthopedics - Protocol Specification #041',
      category: 'Musculoskeletal & Orthopedics',
      specialty: 'Orthopedic Surgery',
      baseFee: 385.0,
      rvu: 6.8,
      workRVU: 3.74,
      facilityRVU: 2.38,
      malpracticeRVU: 0.68,
      globalPeriodDays: 0,
      requiresPriorAuth: true
    });
    this.registerProcedure({
      code: '20410',
      description: 'PulseCare Medical Procedure: Musculoskeletal & Orthopedics - Protocol Specification #042',
      category: 'Musculoskeletal & Orthopedics',
      specialty: 'Orthopedic Surgery',
      baseFee: 392.5,
      rvu: 6.94,
      workRVU: 3.82,
      facilityRVU: 2.43,
      malpracticeRVU: 0.69,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '20420',
      description: 'PulseCare Medical Procedure: Musculoskeletal & Orthopedics - Protocol Specification #043',
      category: 'Musculoskeletal & Orthopedics',
      specialty: 'Orthopedic Surgery',
      baseFee: 400.0,
      rvu: 7.08,
      workRVU: 3.89,
      facilityRVU: 2.48,
      malpracticeRVU: 0.71,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '20430',
      description: 'PulseCare Medical Procedure: Musculoskeletal & Orthopedics - Protocol Specification #044',
      category: 'Musculoskeletal & Orthopedics',
      specialty: 'Orthopedic Surgery',
      baseFee: 407.5,
      rvu: 7.22,
      workRVU: 3.97,
      facilityRVU: 2.53,
      malpracticeRVU: 0.72,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '20440',
      description: 'PulseCare Medical Procedure: Musculoskeletal & Orthopedics - Protocol Specification #045',
      category: 'Musculoskeletal & Orthopedics',
      specialty: 'Orthopedic Surgery',
      baseFee: 415.0,
      rvu: 7.36,
      workRVU: 4.05,
      facilityRVU: 2.58,
      malpracticeRVU: 0.74,
      globalPeriodDays: 0,
      requiresPriorAuth: true
    });
    this.registerProcedure({
      code: '20450',
      description: 'PulseCare Medical Procedure: Musculoskeletal & Orthopedics - Protocol Specification #046',
      category: 'Musculoskeletal & Orthopedics',
      specialty: 'Orthopedic Surgery',
      baseFee: 422.5,
      rvu: 7.5,
      workRVU: 4.12,
      facilityRVU: 2.62,
      malpracticeRVU: 0.75,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '20460',
      description: 'PulseCare Medical Procedure: Musculoskeletal & Orthopedics - Protocol Specification #047',
      category: 'Musculoskeletal & Orthopedics',
      specialty: 'Orthopedic Surgery',
      baseFee: 430.0,
      rvu: 7.64,
      workRVU: 4.2,
      facilityRVU: 2.67,
      malpracticeRVU: 0.76,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '20470',
      description: 'PulseCare Medical Procedure: Musculoskeletal & Orthopedics - Protocol Specification #048',
      category: 'Musculoskeletal & Orthopedics',
      specialty: 'Orthopedic Surgery',
      baseFee: 437.5,
      rvu: 7.78,
      workRVU: 4.28,
      facilityRVU: 2.72,
      malpracticeRVU: 0.78,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '20480',
      description: 'PulseCare Medical Procedure: Musculoskeletal & Orthopedics - Protocol Specification #049',
      category: 'Musculoskeletal & Orthopedics',
      specialty: 'Orthopedic Surgery',
      baseFee: 445.0,
      rvu: 7.92,
      workRVU: 4.36,
      facilityRVU: 2.77,
      malpracticeRVU: 0.79,
      globalPeriodDays: 0,
      requiresPriorAuth: true
    });
    this.registerProcedure({
      code: '20490',
      description: 'PulseCare Medical Procedure: Musculoskeletal & Orthopedics - Protocol Specification #050',
      category: 'Musculoskeletal & Orthopedics',
      specialty: 'Orthopedic Surgery',
      baseFee: 452.5,
      rvu: 8.06,
      workRVU: 4.43,
      facilityRVU: 2.82,
      malpracticeRVU: 0.81,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '20500',
      description: 'PulseCare Medical Procedure: Musculoskeletal & Orthopedics - Protocol Specification #051',
      category: 'Musculoskeletal & Orthopedics',
      specialty: 'Orthopedic Surgery',
      baseFee: 460.0,
      rvu: 8.2,
      workRVU: 4.51,
      facilityRVU: 2.87,
      malpracticeRVU: 0.82,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '20510',
      description: 'PulseCare Medical Procedure: Musculoskeletal & Orthopedics - Protocol Specification #052',
      category: 'Musculoskeletal & Orthopedics',
      specialty: 'Orthopedic Surgery',
      baseFee: 467.5,
      rvu: 8.34,
      workRVU: 4.59,
      facilityRVU: 2.92,
      malpracticeRVU: 0.83,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '20520',
      description: 'PulseCare Medical Procedure: Musculoskeletal & Orthopedics - Protocol Specification #053',
      category: 'Musculoskeletal & Orthopedics',
      specialty: 'Orthopedic Surgery',
      baseFee: 475.0,
      rvu: 8.48,
      workRVU: 4.66,
      facilityRVU: 2.97,
      malpracticeRVU: 0.85,
      globalPeriodDays: 0,
      requiresPriorAuth: true
    });
    this.registerProcedure({
      code: '20530',
      description: 'PulseCare Medical Procedure: Musculoskeletal & Orthopedics - Protocol Specification #054',
      category: 'Musculoskeletal & Orthopedics',
      specialty: 'Orthopedic Surgery',
      baseFee: 482.5,
      rvu: 8.62,
      workRVU: 4.74,
      facilityRVU: 3.02,
      malpracticeRVU: 0.86,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '20540',
      description: 'PulseCare Medical Procedure: Musculoskeletal & Orthopedics - Protocol Specification #055',
      category: 'Musculoskeletal & Orthopedics',
      specialty: 'Orthopedic Surgery',
      baseFee: 490.0,
      rvu: 8.76,
      workRVU: 4.82,
      facilityRVU: 3.07,
      malpracticeRVU: 0.88,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '20550',
      description: 'PulseCare Medical Procedure: Musculoskeletal & Orthopedics - Protocol Specification #056',
      category: 'Musculoskeletal & Orthopedics',
      specialty: 'Orthopedic Surgery',
      baseFee: 497.5,
      rvu: 8.9,
      workRVU: 4.9,
      facilityRVU: 3.11,
      malpracticeRVU: 0.89,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '20560',
      description: 'PulseCare Medical Procedure: Musculoskeletal & Orthopedics - Protocol Specification #057',
      category: 'Musculoskeletal & Orthopedics',
      specialty: 'Orthopedic Surgery',
      baseFee: 505.0,
      rvu: 9.04,
      workRVU: 4.97,
      facilityRVU: 3.16,
      malpracticeRVU: 0.9,
      globalPeriodDays: 0,
      requiresPriorAuth: true
    });
    this.registerProcedure({
      code: '20570',
      description: 'PulseCare Medical Procedure: Musculoskeletal & Orthopedics - Protocol Specification #058',
      category: 'Musculoskeletal & Orthopedics',
      specialty: 'Orthopedic Surgery',
      baseFee: 512.5,
      rvu: 9.18,
      workRVU: 5.05,
      facilityRVU: 3.21,
      malpracticeRVU: 0.92,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '20580',
      description: 'PulseCare Medical Procedure: Musculoskeletal & Orthopedics - Protocol Specification #059',
      category: 'Musculoskeletal & Orthopedics',
      specialty: 'Orthopedic Surgery',
      baseFee: 520.0,
      rvu: 9.32,
      workRVU: 5.13,
      facilityRVU: 3.26,
      malpracticeRVU: 0.93,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '20590',
      description: 'PulseCare Medical Procedure: Musculoskeletal & Orthopedics - Protocol Specification #060',
      category: 'Musculoskeletal & Orthopedics',
      specialty: 'Orthopedic Surgery',
      baseFee: 527.5,
      rvu: 9.46,
      workRVU: 5.2,
      facilityRVU: 3.31,
      malpracticeRVU: 0.95,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '20600',
      description: 'PulseCare Medical Procedure: Musculoskeletal & Orthopedics - Protocol Specification #061',
      category: 'Musculoskeletal & Orthopedics',
      specialty: 'Orthopedic Surgery',
      baseFee: 535.0,
      rvu: 9.6,
      workRVU: 5.28,
      facilityRVU: 3.36,
      malpracticeRVU: 0.96,
      globalPeriodDays: 0,
      requiresPriorAuth: true
    });
    this.registerProcedure({
      code: '20610',
      description: 'PulseCare Medical Procedure: Musculoskeletal & Orthopedics - Protocol Specification #062',
      category: 'Musculoskeletal & Orthopedics',
      specialty: 'Orthopedic Surgery',
      baseFee: 542.5,
      rvu: 9.74,
      workRVU: 5.36,
      facilityRVU: 3.41,
      malpracticeRVU: 0.97,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '20620',
      description: 'PulseCare Medical Procedure: Musculoskeletal & Orthopedics - Protocol Specification #063',
      category: 'Musculoskeletal & Orthopedics',
      specialty: 'Orthopedic Surgery',
      baseFee: 550.0,
      rvu: 9.88,
      workRVU: 5.43,
      facilityRVU: 3.46,
      malpracticeRVU: 0.99,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '20630',
      description: 'PulseCare Medical Procedure: Musculoskeletal & Orthopedics - Protocol Specification #064',
      category: 'Musculoskeletal & Orthopedics',
      specialty: 'Orthopedic Surgery',
      baseFee: 557.5,
      rvu: 10.02,
      workRVU: 5.51,
      facilityRVU: 3.51,
      malpracticeRVU: 1.0,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '20640',
      description: 'PulseCare Medical Procedure: Musculoskeletal & Orthopedics - Protocol Specification #065',
      category: 'Musculoskeletal & Orthopedics',
      specialty: 'Orthopedic Surgery',
      baseFee: 565.0,
      rvu: 10.16,
      workRVU: 5.59,
      facilityRVU: 3.56,
      malpracticeRVU: 1.02,
      globalPeriodDays: 0,
      requiresPriorAuth: true
    });
    this.registerProcedure({
      code: '20650',
      description: 'PulseCare Medical Procedure: Musculoskeletal & Orthopedics - Protocol Specification #066',
      category: 'Musculoskeletal & Orthopedics',
      specialty: 'Orthopedic Surgery',
      baseFee: 572.5,
      rvu: 10.3,
      workRVU: 5.67,
      facilityRVU: 3.6,
      malpracticeRVU: 1.03,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '20660',
      description: 'PulseCare Medical Procedure: Musculoskeletal & Orthopedics - Protocol Specification #067',
      category: 'Musculoskeletal & Orthopedics',
      specialty: 'Orthopedic Surgery',
      baseFee: 580.0,
      rvu: 10.44,
      workRVU: 5.74,
      facilityRVU: 3.65,
      malpracticeRVU: 1.04,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '20670',
      description: 'PulseCare Medical Procedure: Musculoskeletal & Orthopedics - Protocol Specification #068',
      category: 'Musculoskeletal & Orthopedics',
      specialty: 'Orthopedic Surgery',
      baseFee: 587.5,
      rvu: 10.58,
      workRVU: 5.82,
      facilityRVU: 3.7,
      malpracticeRVU: 1.06,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '20680',
      description: 'PulseCare Medical Procedure: Musculoskeletal & Orthopedics - Protocol Specification #069',
      category: 'Musculoskeletal & Orthopedics',
      specialty: 'Orthopedic Surgery',
      baseFee: 595.0,
      rvu: 10.72,
      workRVU: 5.9,
      facilityRVU: 3.75,
      malpracticeRVU: 1.07,
      globalPeriodDays: 0,
      requiresPriorAuth: true
    });
    this.registerProcedure({
      code: '20690',
      description: 'PulseCare Medical Procedure: Musculoskeletal & Orthopedics - Protocol Specification #070',
      category: 'Musculoskeletal & Orthopedics',
      specialty: 'Orthopedic Surgery',
      baseFee: 602.5,
      rvu: 10.86,
      workRVU: 5.97,
      facilityRVU: 3.8,
      malpracticeRVU: 1.09,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '20700',
      description: 'PulseCare Medical Procedure: Musculoskeletal & Orthopedics - Protocol Specification #071',
      category: 'Musculoskeletal & Orthopedics',
      specialty: 'Orthopedic Surgery',
      baseFee: 610.0,
      rvu: 11.0,
      workRVU: 6.05,
      facilityRVU: 3.85,
      malpracticeRVU: 1.1,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '20710',
      description: 'PulseCare Medical Procedure: Musculoskeletal & Orthopedics - Protocol Specification #072',
      category: 'Musculoskeletal & Orthopedics',
      specialty: 'Orthopedic Surgery',
      baseFee: 617.5,
      rvu: 11.14,
      workRVU: 6.13,
      facilityRVU: 3.9,
      malpracticeRVU: 1.11,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '20720',
      description: 'PulseCare Medical Procedure: Musculoskeletal & Orthopedics - Protocol Specification #073',
      category: 'Musculoskeletal & Orthopedics',
      specialty: 'Orthopedic Surgery',
      baseFee: 625.0,
      rvu: 11.28,
      workRVU: 6.2,
      facilityRVU: 3.95,
      malpracticeRVU: 1.13,
      globalPeriodDays: 0,
      requiresPriorAuth: true
    });
    this.registerProcedure({
      code: '20730',
      description: 'PulseCare Medical Procedure: Musculoskeletal & Orthopedics - Protocol Specification #074',
      category: 'Musculoskeletal & Orthopedics',
      specialty: 'Orthopedic Surgery',
      baseFee: 632.5,
      rvu: 11.42,
      workRVU: 6.28,
      facilityRVU: 4.0,
      malpracticeRVU: 1.14,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '20740',
      description: 'PulseCare Medical Procedure: Musculoskeletal & Orthopedics - Protocol Specification #075',
      category: 'Musculoskeletal & Orthopedics',
      specialty: 'Orthopedic Surgery',
      baseFee: 640.0,
      rvu: 11.56,
      workRVU: 6.36,
      facilityRVU: 4.05,
      malpracticeRVU: 1.16,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '20750',
      description: 'PulseCare Medical Procedure: Musculoskeletal & Orthopedics - Protocol Specification #076',
      category: 'Musculoskeletal & Orthopedics',
      specialty: 'Orthopedic Surgery',
      baseFee: 647.5,
      rvu: 11.7,
      workRVU: 6.44,
      facilityRVU: 4.09,
      malpracticeRVU: 1.17,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '20760',
      description: 'PulseCare Medical Procedure: Musculoskeletal & Orthopedics - Protocol Specification #077',
      category: 'Musculoskeletal & Orthopedics',
      specialty: 'Orthopedic Surgery',
      baseFee: 655.0,
      rvu: 11.84,
      workRVU: 6.51,
      facilityRVU: 4.14,
      malpracticeRVU: 1.18,
      globalPeriodDays: 0,
      requiresPriorAuth: true
    });
    this.registerProcedure({
      code: '20770',
      description: 'PulseCare Medical Procedure: Musculoskeletal & Orthopedics - Protocol Specification #078',
      category: 'Musculoskeletal & Orthopedics',
      specialty: 'Orthopedic Surgery',
      baseFee: 662.5,
      rvu: 11.98,
      workRVU: 6.59,
      facilityRVU: 4.19,
      malpracticeRVU: 1.2,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '20780',
      description: 'PulseCare Medical Procedure: Musculoskeletal & Orthopedics - Protocol Specification #079',
      category: 'Musculoskeletal & Orthopedics',
      specialty: 'Orthopedic Surgery',
      baseFee: 670.0,
      rvu: 12.12,
      workRVU: 6.67,
      facilityRVU: 4.24,
      malpracticeRVU: 1.21,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '20790',
      description: 'PulseCare Medical Procedure: Musculoskeletal & Orthopedics - Protocol Specification #080',
      category: 'Musculoskeletal & Orthopedics',
      specialty: 'Orthopedic Surgery',
      baseFee: 677.5,
      rvu: 12.26,
      workRVU: 6.74,
      facilityRVU: 4.29,
      malpracticeRVU: 1.23,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '20800',
      description: 'PulseCare Medical Procedure: Musculoskeletal & Orthopedics - Protocol Specification #081',
      category: 'Musculoskeletal & Orthopedics',
      specialty: 'Orthopedic Surgery',
      baseFee: 685.0,
      rvu: 12.4,
      workRVU: 6.82,
      facilityRVU: 4.34,
      malpracticeRVU: 1.24,
      globalPeriodDays: 0,
      requiresPriorAuth: true
    });
    this.registerProcedure({
      code: '20810',
      description: 'PulseCare Medical Procedure: Musculoskeletal & Orthopedics - Protocol Specification #082',
      category: 'Musculoskeletal & Orthopedics',
      specialty: 'Orthopedic Surgery',
      baseFee: 692.5,
      rvu: 12.54,
      workRVU: 6.9,
      facilityRVU: 4.39,
      malpracticeRVU: 1.25,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '20820',
      description: 'PulseCare Medical Procedure: Musculoskeletal & Orthopedics - Protocol Specification #083',
      category: 'Musculoskeletal & Orthopedics',
      specialty: 'Orthopedic Surgery',
      baseFee: 700.0,
      rvu: 12.68,
      workRVU: 6.97,
      facilityRVU: 4.44,
      malpracticeRVU: 1.27,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '20830',
      description: 'PulseCare Medical Procedure: Musculoskeletal & Orthopedics - Protocol Specification #084',
      category: 'Musculoskeletal & Orthopedics',
      specialty: 'Orthopedic Surgery',
      baseFee: 707.5,
      rvu: 12.82,
      workRVU: 7.05,
      facilityRVU: 4.49,
      malpracticeRVU: 1.28,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '20840',
      description: 'PulseCare Medical Procedure: Musculoskeletal & Orthopedics - Protocol Specification #085',
      category: 'Musculoskeletal & Orthopedics',
      specialty: 'Orthopedic Surgery',
      baseFee: 715.0,
      rvu: 12.96,
      workRVU: 7.13,
      facilityRVU: 4.54,
      malpracticeRVU: 1.3,
      globalPeriodDays: 0,
      requiresPriorAuth: true
    });
    this.registerProcedure({
      code: '20850',
      description: 'PulseCare Medical Procedure: Musculoskeletal & Orthopedics - Protocol Specification #086',
      category: 'Musculoskeletal & Orthopedics',
      specialty: 'Orthopedic Surgery',
      baseFee: 722.5,
      rvu: 13.1,
      workRVU: 7.21,
      facilityRVU: 4.58,
      malpracticeRVU: 1.31,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '20860',
      description: 'PulseCare Medical Procedure: Musculoskeletal & Orthopedics - Protocol Specification #087',
      category: 'Musculoskeletal & Orthopedics',
      specialty: 'Orthopedic Surgery',
      baseFee: 730.0,
      rvu: 13.24,
      workRVU: 7.28,
      facilityRVU: 4.63,
      malpracticeRVU: 1.32,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '20870',
      description: 'PulseCare Medical Procedure: Musculoskeletal & Orthopedics - Protocol Specification #088',
      category: 'Musculoskeletal & Orthopedics',
      specialty: 'Orthopedic Surgery',
      baseFee: 737.5,
      rvu: 13.38,
      workRVU: 7.36,
      facilityRVU: 4.68,
      malpracticeRVU: 1.34,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '20880',
      description: 'PulseCare Medical Procedure: Musculoskeletal & Orthopedics - Protocol Specification #089',
      category: 'Musculoskeletal & Orthopedics',
      specialty: 'Orthopedic Surgery',
      baseFee: 745.0,
      rvu: 13.52,
      workRVU: 7.44,
      facilityRVU: 4.73,
      malpracticeRVU: 1.35,
      globalPeriodDays: 0,
      requiresPriorAuth: true
    });
    this.registerProcedure({
      code: '20890',
      description: 'PulseCare Medical Procedure: Musculoskeletal & Orthopedics - Protocol Specification #090',
      category: 'Musculoskeletal & Orthopedics',
      specialty: 'Orthopedic Surgery',
      baseFee: 752.5,
      rvu: 13.66,
      workRVU: 7.51,
      facilityRVU: 4.78,
      malpracticeRVU: 1.37,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '20900',
      description: 'PulseCare Medical Procedure: Musculoskeletal & Orthopedics - Protocol Specification #091',
      category: 'Musculoskeletal & Orthopedics',
      specialty: 'Orthopedic Surgery',
      baseFee: 760.0,
      rvu: 13.8,
      workRVU: 7.59,
      facilityRVU: 4.83,
      malpracticeRVU: 1.38,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '20910',
      description: 'PulseCare Medical Procedure: Musculoskeletal & Orthopedics - Protocol Specification #092',
      category: 'Musculoskeletal & Orthopedics',
      specialty: 'Orthopedic Surgery',
      baseFee: 767.5,
      rvu: 13.94,
      workRVU: 7.67,
      facilityRVU: 4.88,
      malpracticeRVU: 1.39,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '20920',
      description: 'PulseCare Medical Procedure: Musculoskeletal & Orthopedics - Protocol Specification #093',
      category: 'Musculoskeletal & Orthopedics',
      specialty: 'Orthopedic Surgery',
      baseFee: 775.0,
      rvu: 14.08,
      workRVU: 7.74,
      facilityRVU: 4.93,
      malpracticeRVU: 1.41,
      globalPeriodDays: 0,
      requiresPriorAuth: true
    });
    this.registerProcedure({
      code: '20930',
      description: 'PulseCare Medical Procedure: Musculoskeletal & Orthopedics - Protocol Specification #094',
      category: 'Musculoskeletal & Orthopedics',
      specialty: 'Orthopedic Surgery',
      baseFee: 782.5,
      rvu: 14.22,
      workRVU: 7.82,
      facilityRVU: 4.98,
      malpracticeRVU: 1.42,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '20940',
      description: 'PulseCare Medical Procedure: Musculoskeletal & Orthopedics - Protocol Specification #095',
      category: 'Musculoskeletal & Orthopedics',
      specialty: 'Orthopedic Surgery',
      baseFee: 790.0,
      rvu: 14.36,
      workRVU: 7.9,
      facilityRVU: 5.03,
      malpracticeRVU: 1.44,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '20950',
      description: 'PulseCare Medical Procedure: Musculoskeletal & Orthopedics - Protocol Specification #096',
      category: 'Musculoskeletal & Orthopedics',
      specialty: 'Orthopedic Surgery',
      baseFee: 797.5,
      rvu: 14.5,
      workRVU: 7.98,
      facilityRVU: 5.07,
      malpracticeRVU: 1.45,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '20960',
      description: 'PulseCare Medical Procedure: Musculoskeletal & Orthopedics - Protocol Specification #097',
      category: 'Musculoskeletal & Orthopedics',
      specialty: 'Orthopedic Surgery',
      baseFee: 805.0,
      rvu: 14.64,
      workRVU: 8.05,
      facilityRVU: 5.12,
      malpracticeRVU: 1.46,
      globalPeriodDays: 0,
      requiresPriorAuth: true
    });
    this.registerProcedure({
      code: '20970',
      description: 'PulseCare Medical Procedure: Musculoskeletal & Orthopedics - Protocol Specification #098',
      category: 'Musculoskeletal & Orthopedics',
      specialty: 'Orthopedic Surgery',
      baseFee: 812.5,
      rvu: 14.78,
      workRVU: 8.13,
      facilityRVU: 5.17,
      malpracticeRVU: 1.48,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '20980',
      description: 'PulseCare Medical Procedure: Musculoskeletal & Orthopedics - Protocol Specification #099',
      category: 'Musculoskeletal & Orthopedics',
      specialty: 'Orthopedic Surgery',
      baseFee: 820.0,
      rvu: 14.92,
      workRVU: 8.21,
      facilityRVU: 5.22,
      malpracticeRVU: 1.49,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '20990',
      description: 'PulseCare Medical Procedure: Musculoskeletal & Orthopedics - Protocol Specification #100',
      category: 'Musculoskeletal & Orthopedics',
      specialty: 'Orthopedic Surgery',
      baseFee: 827.5,
      rvu: 15.06,
      workRVU: 8.28,
      facilityRVU: 5.27,
      malpracticeRVU: 1.51,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '30000',
      description: 'PulseCare Medical Procedure: Respiratory & Pulmonology - Protocol Specification #001',
      category: 'Respiratory & Pulmonology',
      specialty: 'Pulmonary Medicine',
      baseFee: 85.0,
      rvu: 1.2,
      workRVU: 0.66,
      facilityRVU: 0.42,
      malpracticeRVU: 0.12,
      globalPeriodDays: 0,
      requiresPriorAuth: true
    });
    this.registerProcedure({
      code: '30010',
      description: 'PulseCare Medical Procedure: Respiratory & Pulmonology - Protocol Specification #002',
      category: 'Respiratory & Pulmonology',
      specialty: 'Pulmonary Medicine',
      baseFee: 92.5,
      rvu: 1.34,
      workRVU: 0.74,
      facilityRVU: 0.47,
      malpracticeRVU: 0.13,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '30020',
      description: 'PulseCare Medical Procedure: Respiratory & Pulmonology - Protocol Specification #003',
      category: 'Respiratory & Pulmonology',
      specialty: 'Pulmonary Medicine',
      baseFee: 100.0,
      rvu: 1.48,
      workRVU: 0.81,
      facilityRVU: 0.52,
      malpracticeRVU: 0.15,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '30030',
      description: 'PulseCare Medical Procedure: Respiratory & Pulmonology - Protocol Specification #004',
      category: 'Respiratory & Pulmonology',
      specialty: 'Pulmonary Medicine',
      baseFee: 107.5,
      rvu: 1.62,
      workRVU: 0.89,
      facilityRVU: 0.57,
      malpracticeRVU: 0.16,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '30040',
      description: 'PulseCare Medical Procedure: Respiratory & Pulmonology - Protocol Specification #005',
      category: 'Respiratory & Pulmonology',
      specialty: 'Pulmonary Medicine',
      baseFee: 115.0,
      rvu: 1.76,
      workRVU: 0.97,
      facilityRVU: 0.62,
      malpracticeRVU: 0.18,
      globalPeriodDays: 0,
      requiresPriorAuth: true
    });
    this.registerProcedure({
      code: '30050',
      description: 'PulseCare Medical Procedure: Respiratory & Pulmonology - Protocol Specification #006',
      category: 'Respiratory & Pulmonology',
      specialty: 'Pulmonary Medicine',
      baseFee: 122.5,
      rvu: 1.9,
      workRVU: 1.04,
      facilityRVU: 0.66,
      malpracticeRVU: 0.19,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '30060',
      description: 'PulseCare Medical Procedure: Respiratory & Pulmonology - Protocol Specification #007',
      category: 'Respiratory & Pulmonology',
      specialty: 'Pulmonary Medicine',
      baseFee: 130.0,
      rvu: 2.04,
      workRVU: 1.12,
      facilityRVU: 0.71,
      malpracticeRVU: 0.2,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '30070',
      description: 'PulseCare Medical Procedure: Respiratory & Pulmonology - Protocol Specification #008',
      category: 'Respiratory & Pulmonology',
      specialty: 'Pulmonary Medicine',
      baseFee: 137.5,
      rvu: 2.18,
      workRVU: 1.2,
      facilityRVU: 0.76,
      malpracticeRVU: 0.22,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '30080',
      description: 'PulseCare Medical Procedure: Respiratory & Pulmonology - Protocol Specification #009',
      category: 'Respiratory & Pulmonology',
      specialty: 'Pulmonary Medicine',
      baseFee: 145.0,
      rvu: 2.32,
      workRVU: 1.28,
      facilityRVU: 0.81,
      malpracticeRVU: 0.23,
      globalPeriodDays: 0,
      requiresPriorAuth: true
    });
    this.registerProcedure({
      code: '30090',
      description: 'PulseCare Medical Procedure: Respiratory & Pulmonology - Protocol Specification #010',
      category: 'Respiratory & Pulmonology',
      specialty: 'Pulmonary Medicine',
      baseFee: 152.5,
      rvu: 2.46,
      workRVU: 1.35,
      facilityRVU: 0.86,
      malpracticeRVU: 0.25,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '30100',
      description: 'PulseCare Medical Procedure: Respiratory & Pulmonology - Protocol Specification #011',
      category: 'Respiratory & Pulmonology',
      specialty: 'Pulmonary Medicine',
      baseFee: 160.0,
      rvu: 2.6,
      workRVU: 1.43,
      facilityRVU: 0.91,
      malpracticeRVU: 0.26,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '30110',
      description: 'PulseCare Medical Procedure: Respiratory & Pulmonology - Protocol Specification #012',
      category: 'Respiratory & Pulmonology',
      specialty: 'Pulmonary Medicine',
      baseFee: 167.5,
      rvu: 2.74,
      workRVU: 1.51,
      facilityRVU: 0.96,
      malpracticeRVU: 0.27,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '30120',
      description: 'PulseCare Medical Procedure: Respiratory & Pulmonology - Protocol Specification #013',
      category: 'Respiratory & Pulmonology',
      specialty: 'Pulmonary Medicine',
      baseFee: 175.0,
      rvu: 2.88,
      workRVU: 1.58,
      facilityRVU: 1.01,
      malpracticeRVU: 0.29,
      globalPeriodDays: 0,
      requiresPriorAuth: true
    });
    this.registerProcedure({
      code: '30130',
      description: 'PulseCare Medical Procedure: Respiratory & Pulmonology - Protocol Specification #014',
      category: 'Respiratory & Pulmonology',
      specialty: 'Pulmonary Medicine',
      baseFee: 182.5,
      rvu: 3.02,
      workRVU: 1.66,
      facilityRVU: 1.06,
      malpracticeRVU: 0.3,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '30140',
      description: 'PulseCare Medical Procedure: Respiratory & Pulmonology - Protocol Specification #015',
      category: 'Respiratory & Pulmonology',
      specialty: 'Pulmonary Medicine',
      baseFee: 190.0,
      rvu: 3.16,
      workRVU: 1.74,
      facilityRVU: 1.11,
      malpracticeRVU: 0.32,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '30150',
      description: 'PulseCare Medical Procedure: Respiratory & Pulmonology - Protocol Specification #016',
      category: 'Respiratory & Pulmonology',
      specialty: 'Pulmonary Medicine',
      baseFee: 197.5,
      rvu: 3.3,
      workRVU: 1.81,
      facilityRVU: 1.15,
      malpracticeRVU: 0.33,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '30160',
      description: 'PulseCare Medical Procedure: Respiratory & Pulmonology - Protocol Specification #017',
      category: 'Respiratory & Pulmonology',
      specialty: 'Pulmonary Medicine',
      baseFee: 205.0,
      rvu: 3.44,
      workRVU: 1.89,
      facilityRVU: 1.2,
      malpracticeRVU: 0.34,
      globalPeriodDays: 0,
      requiresPriorAuth: true
    });
    this.registerProcedure({
      code: '30170',
      description: 'PulseCare Medical Procedure: Respiratory & Pulmonology - Protocol Specification #018',
      category: 'Respiratory & Pulmonology',
      specialty: 'Pulmonary Medicine',
      baseFee: 212.5,
      rvu: 3.58,
      workRVU: 1.97,
      facilityRVU: 1.25,
      malpracticeRVU: 0.36,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '30180',
      description: 'PulseCare Medical Procedure: Respiratory & Pulmonology - Protocol Specification #019',
      category: 'Respiratory & Pulmonology',
      specialty: 'Pulmonary Medicine',
      baseFee: 220.0,
      rvu: 3.72,
      workRVU: 2.05,
      facilityRVU: 1.3,
      malpracticeRVU: 0.37,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '30190',
      description: 'PulseCare Medical Procedure: Respiratory & Pulmonology - Protocol Specification #020',
      category: 'Respiratory & Pulmonology',
      specialty: 'Pulmonary Medicine',
      baseFee: 227.5,
      rvu: 3.86,
      workRVU: 2.12,
      facilityRVU: 1.35,
      malpracticeRVU: 0.39,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '30200',
      description: 'PulseCare Medical Procedure: Respiratory & Pulmonology - Protocol Specification #021',
      category: 'Respiratory & Pulmonology',
      specialty: 'Pulmonary Medicine',
      baseFee: 235.0,
      rvu: 4.0,
      workRVU: 2.2,
      facilityRVU: 1.4,
      malpracticeRVU: 0.4,
      globalPeriodDays: 0,
      requiresPriorAuth: true
    });
    this.registerProcedure({
      code: '30210',
      description: 'PulseCare Medical Procedure: Respiratory & Pulmonology - Protocol Specification #022',
      category: 'Respiratory & Pulmonology',
      specialty: 'Pulmonary Medicine',
      baseFee: 242.5,
      rvu: 4.14,
      workRVU: 2.28,
      facilityRVU: 1.45,
      malpracticeRVU: 0.41,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '30220',
      description: 'PulseCare Medical Procedure: Respiratory & Pulmonology - Protocol Specification #023',
      category: 'Respiratory & Pulmonology',
      specialty: 'Pulmonary Medicine',
      baseFee: 250.0,
      rvu: 4.28,
      workRVU: 2.35,
      facilityRVU: 1.5,
      malpracticeRVU: 0.43,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '30230',
      description: 'PulseCare Medical Procedure: Respiratory & Pulmonology - Protocol Specification #024',
      category: 'Respiratory & Pulmonology',
      specialty: 'Pulmonary Medicine',
      baseFee: 257.5,
      rvu: 4.42,
      workRVU: 2.43,
      facilityRVU: 1.55,
      malpracticeRVU: 0.44,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '30240',
      description: 'PulseCare Medical Procedure: Respiratory & Pulmonology - Protocol Specification #025',
      category: 'Respiratory & Pulmonology',
      specialty: 'Pulmonary Medicine',
      baseFee: 265.0,
      rvu: 4.56,
      workRVU: 2.51,
      facilityRVU: 1.6,
      malpracticeRVU: 0.46,
      globalPeriodDays: 0,
      requiresPriorAuth: true
    });
    this.registerProcedure({
      code: '30250',
      description: 'PulseCare Medical Procedure: Respiratory & Pulmonology - Protocol Specification #026',
      category: 'Respiratory & Pulmonology',
      specialty: 'Pulmonary Medicine',
      baseFee: 272.5,
      rvu: 4.7,
      workRVU: 2.59,
      facilityRVU: 1.65,
      malpracticeRVU: 0.47,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '30260',
      description: 'PulseCare Medical Procedure: Respiratory & Pulmonology - Protocol Specification #027',
      category: 'Respiratory & Pulmonology',
      specialty: 'Pulmonary Medicine',
      baseFee: 280.0,
      rvu: 4.84,
      workRVU: 2.66,
      facilityRVU: 1.69,
      malpracticeRVU: 0.48,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '30270',
      description: 'PulseCare Medical Procedure: Respiratory & Pulmonology - Protocol Specification #028',
      category: 'Respiratory & Pulmonology',
      specialty: 'Pulmonary Medicine',
      baseFee: 287.5,
      rvu: 4.98,
      workRVU: 2.74,
      facilityRVU: 1.74,
      malpracticeRVU: 0.5,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '30280',
      description: 'PulseCare Medical Procedure: Respiratory & Pulmonology - Protocol Specification #029',
      category: 'Respiratory & Pulmonology',
      specialty: 'Pulmonary Medicine',
      baseFee: 295.0,
      rvu: 5.12,
      workRVU: 2.82,
      facilityRVU: 1.79,
      malpracticeRVU: 0.51,
      globalPeriodDays: 0,
      requiresPriorAuth: true
    });
    this.registerProcedure({
      code: '30290',
      description: 'PulseCare Medical Procedure: Respiratory & Pulmonology - Protocol Specification #030',
      category: 'Respiratory & Pulmonology',
      specialty: 'Pulmonary Medicine',
      baseFee: 302.5,
      rvu: 5.26,
      workRVU: 2.89,
      facilityRVU: 1.84,
      malpracticeRVU: 0.53,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '30300',
      description: 'PulseCare Medical Procedure: Respiratory & Pulmonology - Protocol Specification #031',
      category: 'Respiratory & Pulmonology',
      specialty: 'Pulmonary Medicine',
      baseFee: 310.0,
      rvu: 5.4,
      workRVU: 2.97,
      facilityRVU: 1.89,
      malpracticeRVU: 0.54,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '30310',
      description: 'PulseCare Medical Procedure: Respiratory & Pulmonology - Protocol Specification #032',
      category: 'Respiratory & Pulmonology',
      specialty: 'Pulmonary Medicine',
      baseFee: 317.5,
      rvu: 5.54,
      workRVU: 3.05,
      facilityRVU: 1.94,
      malpracticeRVU: 0.55,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '30320',
      description: 'PulseCare Medical Procedure: Respiratory & Pulmonology - Protocol Specification #033',
      category: 'Respiratory & Pulmonology',
      specialty: 'Pulmonary Medicine',
      baseFee: 325.0,
      rvu: 5.68,
      workRVU: 3.12,
      facilityRVU: 1.99,
      malpracticeRVU: 0.57,
      globalPeriodDays: 0,
      requiresPriorAuth: true
    });
    this.registerProcedure({
      code: '30330',
      description: 'PulseCare Medical Procedure: Respiratory & Pulmonology - Protocol Specification #034',
      category: 'Respiratory & Pulmonology',
      specialty: 'Pulmonary Medicine',
      baseFee: 332.5,
      rvu: 5.82,
      workRVU: 3.2,
      facilityRVU: 2.04,
      malpracticeRVU: 0.58,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '30340',
      description: 'PulseCare Medical Procedure: Respiratory & Pulmonology - Protocol Specification #035',
      category: 'Respiratory & Pulmonology',
      specialty: 'Pulmonary Medicine',
      baseFee: 340.0,
      rvu: 5.96,
      workRVU: 3.28,
      facilityRVU: 2.09,
      malpracticeRVU: 0.6,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '30350',
      description: 'PulseCare Medical Procedure: Respiratory & Pulmonology - Protocol Specification #036',
      category: 'Respiratory & Pulmonology',
      specialty: 'Pulmonary Medicine',
      baseFee: 347.5,
      rvu: 6.1,
      workRVU: 3.35,
      facilityRVU: 2.13,
      malpracticeRVU: 0.61,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '30360',
      description: 'PulseCare Medical Procedure: Respiratory & Pulmonology - Protocol Specification #037',
      category: 'Respiratory & Pulmonology',
      specialty: 'Pulmonary Medicine',
      baseFee: 355.0,
      rvu: 6.24,
      workRVU: 3.43,
      facilityRVU: 2.18,
      malpracticeRVU: 0.62,
      globalPeriodDays: 0,
      requiresPriorAuth: true
    });
    this.registerProcedure({
      code: '30370',
      description: 'PulseCare Medical Procedure: Respiratory & Pulmonology - Protocol Specification #038',
      category: 'Respiratory & Pulmonology',
      specialty: 'Pulmonary Medicine',
      baseFee: 362.5,
      rvu: 6.38,
      workRVU: 3.51,
      facilityRVU: 2.23,
      malpracticeRVU: 0.64,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '30380',
      description: 'PulseCare Medical Procedure: Respiratory & Pulmonology - Protocol Specification #039',
      category: 'Respiratory & Pulmonology',
      specialty: 'Pulmonary Medicine',
      baseFee: 370.0,
      rvu: 6.52,
      workRVU: 3.59,
      facilityRVU: 2.28,
      malpracticeRVU: 0.65,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '30390',
      description: 'PulseCare Medical Procedure: Respiratory & Pulmonology - Protocol Specification #040',
      category: 'Respiratory & Pulmonology',
      specialty: 'Pulmonary Medicine',
      baseFee: 377.5,
      rvu: 6.66,
      workRVU: 3.66,
      facilityRVU: 2.33,
      malpracticeRVU: 0.67,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '30400',
      description: 'PulseCare Medical Procedure: Respiratory & Pulmonology - Protocol Specification #041',
      category: 'Respiratory & Pulmonology',
      specialty: 'Pulmonary Medicine',
      baseFee: 385.0,
      rvu: 6.8,
      workRVU: 3.74,
      facilityRVU: 2.38,
      malpracticeRVU: 0.68,
      globalPeriodDays: 0,
      requiresPriorAuth: true
    });
    this.registerProcedure({
      code: '30410',
      description: 'PulseCare Medical Procedure: Respiratory & Pulmonology - Protocol Specification #042',
      category: 'Respiratory & Pulmonology',
      specialty: 'Pulmonary Medicine',
      baseFee: 392.5,
      rvu: 6.94,
      workRVU: 3.82,
      facilityRVU: 2.43,
      malpracticeRVU: 0.69,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '30420',
      description: 'PulseCare Medical Procedure: Respiratory & Pulmonology - Protocol Specification #043',
      category: 'Respiratory & Pulmonology',
      specialty: 'Pulmonary Medicine',
      baseFee: 400.0,
      rvu: 7.08,
      workRVU: 3.89,
      facilityRVU: 2.48,
      malpracticeRVU: 0.71,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '30430',
      description: 'PulseCare Medical Procedure: Respiratory & Pulmonology - Protocol Specification #044',
      category: 'Respiratory & Pulmonology',
      specialty: 'Pulmonary Medicine',
      baseFee: 407.5,
      rvu: 7.22,
      workRVU: 3.97,
      facilityRVU: 2.53,
      malpracticeRVU: 0.72,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '30440',
      description: 'PulseCare Medical Procedure: Respiratory & Pulmonology - Protocol Specification #045',
      category: 'Respiratory & Pulmonology',
      specialty: 'Pulmonary Medicine',
      baseFee: 415.0,
      rvu: 7.36,
      workRVU: 4.05,
      facilityRVU: 2.58,
      malpracticeRVU: 0.74,
      globalPeriodDays: 0,
      requiresPriorAuth: true
    });
    this.registerProcedure({
      code: '30450',
      description: 'PulseCare Medical Procedure: Respiratory & Pulmonology - Protocol Specification #046',
      category: 'Respiratory & Pulmonology',
      specialty: 'Pulmonary Medicine',
      baseFee: 422.5,
      rvu: 7.5,
      workRVU: 4.12,
      facilityRVU: 2.62,
      malpracticeRVU: 0.75,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '30460',
      description: 'PulseCare Medical Procedure: Respiratory & Pulmonology - Protocol Specification #047',
      category: 'Respiratory & Pulmonology',
      specialty: 'Pulmonary Medicine',
      baseFee: 430.0,
      rvu: 7.64,
      workRVU: 4.2,
      facilityRVU: 2.67,
      malpracticeRVU: 0.76,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '30470',
      description: 'PulseCare Medical Procedure: Respiratory & Pulmonology - Protocol Specification #048',
      category: 'Respiratory & Pulmonology',
      specialty: 'Pulmonary Medicine',
      baseFee: 437.5,
      rvu: 7.78,
      workRVU: 4.28,
      facilityRVU: 2.72,
      malpracticeRVU: 0.78,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '30480',
      description: 'PulseCare Medical Procedure: Respiratory & Pulmonology - Protocol Specification #049',
      category: 'Respiratory & Pulmonology',
      specialty: 'Pulmonary Medicine',
      baseFee: 445.0,
      rvu: 7.92,
      workRVU: 4.36,
      facilityRVU: 2.77,
      malpracticeRVU: 0.79,
      globalPeriodDays: 0,
      requiresPriorAuth: true
    });
    this.registerProcedure({
      code: '30490',
      description: 'PulseCare Medical Procedure: Respiratory & Pulmonology - Protocol Specification #050',
      category: 'Respiratory & Pulmonology',
      specialty: 'Pulmonary Medicine',
      baseFee: 452.5,
      rvu: 8.06,
      workRVU: 4.43,
      facilityRVU: 2.82,
      malpracticeRVU: 0.81,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '30500',
      description: 'PulseCare Medical Procedure: Respiratory & Pulmonology - Protocol Specification #051',
      category: 'Respiratory & Pulmonology',
      specialty: 'Pulmonary Medicine',
      baseFee: 460.0,
      rvu: 8.2,
      workRVU: 4.51,
      facilityRVU: 2.87,
      malpracticeRVU: 0.82,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '30510',
      description: 'PulseCare Medical Procedure: Respiratory & Pulmonology - Protocol Specification #052',
      category: 'Respiratory & Pulmonology',
      specialty: 'Pulmonary Medicine',
      baseFee: 467.5,
      rvu: 8.34,
      workRVU: 4.59,
      facilityRVU: 2.92,
      malpracticeRVU: 0.83,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '30520',
      description: 'PulseCare Medical Procedure: Respiratory & Pulmonology - Protocol Specification #053',
      category: 'Respiratory & Pulmonology',
      specialty: 'Pulmonary Medicine',
      baseFee: 475.0,
      rvu: 8.48,
      workRVU: 4.66,
      facilityRVU: 2.97,
      malpracticeRVU: 0.85,
      globalPeriodDays: 0,
      requiresPriorAuth: true
    });
    this.registerProcedure({
      code: '30530',
      description: 'PulseCare Medical Procedure: Respiratory & Pulmonology - Protocol Specification #054',
      category: 'Respiratory & Pulmonology',
      specialty: 'Pulmonary Medicine',
      baseFee: 482.5,
      rvu: 8.62,
      workRVU: 4.74,
      facilityRVU: 3.02,
      malpracticeRVU: 0.86,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '30540',
      description: 'PulseCare Medical Procedure: Respiratory & Pulmonology - Protocol Specification #055',
      category: 'Respiratory & Pulmonology',
      specialty: 'Pulmonary Medicine',
      baseFee: 490.0,
      rvu: 8.76,
      workRVU: 4.82,
      facilityRVU: 3.07,
      malpracticeRVU: 0.88,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '30550',
      description: 'PulseCare Medical Procedure: Respiratory & Pulmonology - Protocol Specification #056',
      category: 'Respiratory & Pulmonology',
      specialty: 'Pulmonary Medicine',
      baseFee: 497.5,
      rvu: 8.9,
      workRVU: 4.9,
      facilityRVU: 3.11,
      malpracticeRVU: 0.89,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '30560',
      description: 'PulseCare Medical Procedure: Respiratory & Pulmonology - Protocol Specification #057',
      category: 'Respiratory & Pulmonology',
      specialty: 'Pulmonary Medicine',
      baseFee: 505.0,
      rvu: 9.04,
      workRVU: 4.97,
      facilityRVU: 3.16,
      malpracticeRVU: 0.9,
      globalPeriodDays: 0,
      requiresPriorAuth: true
    });
    this.registerProcedure({
      code: '30570',
      description: 'PulseCare Medical Procedure: Respiratory & Pulmonology - Protocol Specification #058',
      category: 'Respiratory & Pulmonology',
      specialty: 'Pulmonary Medicine',
      baseFee: 512.5,
      rvu: 9.18,
      workRVU: 5.05,
      facilityRVU: 3.21,
      malpracticeRVU: 0.92,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '30580',
      description: 'PulseCare Medical Procedure: Respiratory & Pulmonology - Protocol Specification #059',
      category: 'Respiratory & Pulmonology',
      specialty: 'Pulmonary Medicine',
      baseFee: 520.0,
      rvu: 9.32,
      workRVU: 5.13,
      facilityRVU: 3.26,
      malpracticeRVU: 0.93,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '30590',
      description: 'PulseCare Medical Procedure: Respiratory & Pulmonology - Protocol Specification #060',
      category: 'Respiratory & Pulmonology',
      specialty: 'Pulmonary Medicine',
      baseFee: 527.5,
      rvu: 9.46,
      workRVU: 5.2,
      facilityRVU: 3.31,
      malpracticeRVU: 0.95,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '30600',
      description: 'PulseCare Medical Procedure: Respiratory & Pulmonology - Protocol Specification #061',
      category: 'Respiratory & Pulmonology',
      specialty: 'Pulmonary Medicine',
      baseFee: 535.0,
      rvu: 9.6,
      workRVU: 5.28,
      facilityRVU: 3.36,
      malpracticeRVU: 0.96,
      globalPeriodDays: 0,
      requiresPriorAuth: true
    });
    this.registerProcedure({
      code: '30610',
      description: 'PulseCare Medical Procedure: Respiratory & Pulmonology - Protocol Specification #062',
      category: 'Respiratory & Pulmonology',
      specialty: 'Pulmonary Medicine',
      baseFee: 542.5,
      rvu: 9.74,
      workRVU: 5.36,
      facilityRVU: 3.41,
      malpracticeRVU: 0.97,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '30620',
      description: 'PulseCare Medical Procedure: Respiratory & Pulmonology - Protocol Specification #063',
      category: 'Respiratory & Pulmonology',
      specialty: 'Pulmonary Medicine',
      baseFee: 550.0,
      rvu: 9.88,
      workRVU: 5.43,
      facilityRVU: 3.46,
      malpracticeRVU: 0.99,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '30630',
      description: 'PulseCare Medical Procedure: Respiratory & Pulmonology - Protocol Specification #064',
      category: 'Respiratory & Pulmonology',
      specialty: 'Pulmonary Medicine',
      baseFee: 557.5,
      rvu: 10.02,
      workRVU: 5.51,
      facilityRVU: 3.51,
      malpracticeRVU: 1.0,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '30640',
      description: 'PulseCare Medical Procedure: Respiratory & Pulmonology - Protocol Specification #065',
      category: 'Respiratory & Pulmonology',
      specialty: 'Pulmonary Medicine',
      baseFee: 565.0,
      rvu: 10.16,
      workRVU: 5.59,
      facilityRVU: 3.56,
      malpracticeRVU: 1.02,
      globalPeriodDays: 0,
      requiresPriorAuth: true
    });
    this.registerProcedure({
      code: '30650',
      description: 'PulseCare Medical Procedure: Respiratory & Pulmonology - Protocol Specification #066',
      category: 'Respiratory & Pulmonology',
      specialty: 'Pulmonary Medicine',
      baseFee: 572.5,
      rvu: 10.3,
      workRVU: 5.67,
      facilityRVU: 3.6,
      malpracticeRVU: 1.03,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '30660',
      description: 'PulseCare Medical Procedure: Respiratory & Pulmonology - Protocol Specification #067',
      category: 'Respiratory & Pulmonology',
      specialty: 'Pulmonary Medicine',
      baseFee: 580.0,
      rvu: 10.44,
      workRVU: 5.74,
      facilityRVU: 3.65,
      malpracticeRVU: 1.04,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '30670',
      description: 'PulseCare Medical Procedure: Respiratory & Pulmonology - Protocol Specification #068',
      category: 'Respiratory & Pulmonology',
      specialty: 'Pulmonary Medicine',
      baseFee: 587.5,
      rvu: 10.58,
      workRVU: 5.82,
      facilityRVU: 3.7,
      malpracticeRVU: 1.06,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '30680',
      description: 'PulseCare Medical Procedure: Respiratory & Pulmonology - Protocol Specification #069',
      category: 'Respiratory & Pulmonology',
      specialty: 'Pulmonary Medicine',
      baseFee: 595.0,
      rvu: 10.72,
      workRVU: 5.9,
      facilityRVU: 3.75,
      malpracticeRVU: 1.07,
      globalPeriodDays: 0,
      requiresPriorAuth: true
    });
    this.registerProcedure({
      code: '30690',
      description: 'PulseCare Medical Procedure: Respiratory & Pulmonology - Protocol Specification #070',
      category: 'Respiratory & Pulmonology',
      specialty: 'Pulmonary Medicine',
      baseFee: 602.5,
      rvu: 10.86,
      workRVU: 5.97,
      facilityRVU: 3.8,
      malpracticeRVU: 1.09,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '30700',
      description: 'PulseCare Medical Procedure: Respiratory & Pulmonology - Protocol Specification #071',
      category: 'Respiratory & Pulmonology',
      specialty: 'Pulmonary Medicine',
      baseFee: 610.0,
      rvu: 11.0,
      workRVU: 6.05,
      facilityRVU: 3.85,
      malpracticeRVU: 1.1,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '30710',
      description: 'PulseCare Medical Procedure: Respiratory & Pulmonology - Protocol Specification #072',
      category: 'Respiratory & Pulmonology',
      specialty: 'Pulmonary Medicine',
      baseFee: 617.5,
      rvu: 11.14,
      workRVU: 6.13,
      facilityRVU: 3.9,
      malpracticeRVU: 1.11,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '30720',
      description: 'PulseCare Medical Procedure: Respiratory & Pulmonology - Protocol Specification #073',
      category: 'Respiratory & Pulmonology',
      specialty: 'Pulmonary Medicine',
      baseFee: 625.0,
      rvu: 11.28,
      workRVU: 6.2,
      facilityRVU: 3.95,
      malpracticeRVU: 1.13,
      globalPeriodDays: 0,
      requiresPriorAuth: true
    });
    this.registerProcedure({
      code: '30730',
      description: 'PulseCare Medical Procedure: Respiratory & Pulmonology - Protocol Specification #074',
      category: 'Respiratory & Pulmonology',
      specialty: 'Pulmonary Medicine',
      baseFee: 632.5,
      rvu: 11.42,
      workRVU: 6.28,
      facilityRVU: 4.0,
      malpracticeRVU: 1.14,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '30740',
      description: 'PulseCare Medical Procedure: Respiratory & Pulmonology - Protocol Specification #075',
      category: 'Respiratory & Pulmonology',
      specialty: 'Pulmonary Medicine',
      baseFee: 640.0,
      rvu: 11.56,
      workRVU: 6.36,
      facilityRVU: 4.05,
      malpracticeRVU: 1.16,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '30750',
      description: 'PulseCare Medical Procedure: Respiratory & Pulmonology - Protocol Specification #076',
      category: 'Respiratory & Pulmonology',
      specialty: 'Pulmonary Medicine',
      baseFee: 647.5,
      rvu: 11.7,
      workRVU: 6.44,
      facilityRVU: 4.09,
      malpracticeRVU: 1.17,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '30760',
      description: 'PulseCare Medical Procedure: Respiratory & Pulmonology - Protocol Specification #077',
      category: 'Respiratory & Pulmonology',
      specialty: 'Pulmonary Medicine',
      baseFee: 655.0,
      rvu: 11.84,
      workRVU: 6.51,
      facilityRVU: 4.14,
      malpracticeRVU: 1.18,
      globalPeriodDays: 0,
      requiresPriorAuth: true
    });
    this.registerProcedure({
      code: '30770',
      description: 'PulseCare Medical Procedure: Respiratory & Pulmonology - Protocol Specification #078',
      category: 'Respiratory & Pulmonology',
      specialty: 'Pulmonary Medicine',
      baseFee: 662.5,
      rvu: 11.98,
      workRVU: 6.59,
      facilityRVU: 4.19,
      malpracticeRVU: 1.2,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '30780',
      description: 'PulseCare Medical Procedure: Respiratory & Pulmonology - Protocol Specification #079',
      category: 'Respiratory & Pulmonology',
      specialty: 'Pulmonary Medicine',
      baseFee: 670.0,
      rvu: 12.12,
      workRVU: 6.67,
      facilityRVU: 4.24,
      malpracticeRVU: 1.21,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '30790',
      description: 'PulseCare Medical Procedure: Respiratory & Pulmonology - Protocol Specification #080',
      category: 'Respiratory & Pulmonology',
      specialty: 'Pulmonary Medicine',
      baseFee: 677.5,
      rvu: 12.26,
      workRVU: 6.74,
      facilityRVU: 4.29,
      malpracticeRVU: 1.23,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '30800',
      description: 'PulseCare Medical Procedure: Respiratory & Pulmonology - Protocol Specification #081',
      category: 'Respiratory & Pulmonology',
      specialty: 'Pulmonary Medicine',
      baseFee: 685.0,
      rvu: 12.4,
      workRVU: 6.82,
      facilityRVU: 4.34,
      malpracticeRVU: 1.24,
      globalPeriodDays: 0,
      requiresPriorAuth: true
    });
    this.registerProcedure({
      code: '30810',
      description: 'PulseCare Medical Procedure: Respiratory & Pulmonology - Protocol Specification #082',
      category: 'Respiratory & Pulmonology',
      specialty: 'Pulmonary Medicine',
      baseFee: 692.5,
      rvu: 12.54,
      workRVU: 6.9,
      facilityRVU: 4.39,
      malpracticeRVU: 1.25,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '30820',
      description: 'PulseCare Medical Procedure: Respiratory & Pulmonology - Protocol Specification #083',
      category: 'Respiratory & Pulmonology',
      specialty: 'Pulmonary Medicine',
      baseFee: 700.0,
      rvu: 12.68,
      workRVU: 6.97,
      facilityRVU: 4.44,
      malpracticeRVU: 1.27,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '30830',
      description: 'PulseCare Medical Procedure: Respiratory & Pulmonology - Protocol Specification #084',
      category: 'Respiratory & Pulmonology',
      specialty: 'Pulmonary Medicine',
      baseFee: 707.5,
      rvu: 12.82,
      workRVU: 7.05,
      facilityRVU: 4.49,
      malpracticeRVU: 1.28,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '30840',
      description: 'PulseCare Medical Procedure: Respiratory & Pulmonology - Protocol Specification #085',
      category: 'Respiratory & Pulmonology',
      specialty: 'Pulmonary Medicine',
      baseFee: 715.0,
      rvu: 12.96,
      workRVU: 7.13,
      facilityRVU: 4.54,
      malpracticeRVU: 1.3,
      globalPeriodDays: 0,
      requiresPriorAuth: true
    });
    this.registerProcedure({
      code: '30850',
      description: 'PulseCare Medical Procedure: Respiratory & Pulmonology - Protocol Specification #086',
      category: 'Respiratory & Pulmonology',
      specialty: 'Pulmonary Medicine',
      baseFee: 722.5,
      rvu: 13.1,
      workRVU: 7.21,
      facilityRVU: 4.58,
      malpracticeRVU: 1.31,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '30860',
      description: 'PulseCare Medical Procedure: Respiratory & Pulmonology - Protocol Specification #087',
      category: 'Respiratory & Pulmonology',
      specialty: 'Pulmonary Medicine',
      baseFee: 730.0,
      rvu: 13.24,
      workRVU: 7.28,
      facilityRVU: 4.63,
      malpracticeRVU: 1.32,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '30870',
      description: 'PulseCare Medical Procedure: Respiratory & Pulmonology - Protocol Specification #088',
      category: 'Respiratory & Pulmonology',
      specialty: 'Pulmonary Medicine',
      baseFee: 737.5,
      rvu: 13.38,
      workRVU: 7.36,
      facilityRVU: 4.68,
      malpracticeRVU: 1.34,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '30880',
      description: 'PulseCare Medical Procedure: Respiratory & Pulmonology - Protocol Specification #089',
      category: 'Respiratory & Pulmonology',
      specialty: 'Pulmonary Medicine',
      baseFee: 745.0,
      rvu: 13.52,
      workRVU: 7.44,
      facilityRVU: 4.73,
      malpracticeRVU: 1.35,
      globalPeriodDays: 0,
      requiresPriorAuth: true
    });
    this.registerProcedure({
      code: '30890',
      description: 'PulseCare Medical Procedure: Respiratory & Pulmonology - Protocol Specification #090',
      category: 'Respiratory & Pulmonology',
      specialty: 'Pulmonary Medicine',
      baseFee: 752.5,
      rvu: 13.66,
      workRVU: 7.51,
      facilityRVU: 4.78,
      malpracticeRVU: 1.37,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '30900',
      description: 'PulseCare Medical Procedure: Respiratory & Pulmonology - Protocol Specification #091',
      category: 'Respiratory & Pulmonology',
      specialty: 'Pulmonary Medicine',
      baseFee: 760.0,
      rvu: 13.8,
      workRVU: 7.59,
      facilityRVU: 4.83,
      malpracticeRVU: 1.38,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '30910',
      description: 'PulseCare Medical Procedure: Respiratory & Pulmonology - Protocol Specification #092',
      category: 'Respiratory & Pulmonology',
      specialty: 'Pulmonary Medicine',
      baseFee: 767.5,
      rvu: 13.94,
      workRVU: 7.67,
      facilityRVU: 4.88,
      malpracticeRVU: 1.39,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '30920',
      description: 'PulseCare Medical Procedure: Respiratory & Pulmonology - Protocol Specification #093',
      category: 'Respiratory & Pulmonology',
      specialty: 'Pulmonary Medicine',
      baseFee: 775.0,
      rvu: 14.08,
      workRVU: 7.74,
      facilityRVU: 4.93,
      malpracticeRVU: 1.41,
      globalPeriodDays: 0,
      requiresPriorAuth: true
    });
    this.registerProcedure({
      code: '30930',
      description: 'PulseCare Medical Procedure: Respiratory & Pulmonology - Protocol Specification #094',
      category: 'Respiratory & Pulmonology',
      specialty: 'Pulmonary Medicine',
      baseFee: 782.5,
      rvu: 14.22,
      workRVU: 7.82,
      facilityRVU: 4.98,
      malpracticeRVU: 1.42,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '30940',
      description: 'PulseCare Medical Procedure: Respiratory & Pulmonology - Protocol Specification #095',
      category: 'Respiratory & Pulmonology',
      specialty: 'Pulmonary Medicine',
      baseFee: 790.0,
      rvu: 14.36,
      workRVU: 7.9,
      facilityRVU: 5.03,
      malpracticeRVU: 1.44,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '30950',
      description: 'PulseCare Medical Procedure: Respiratory & Pulmonology - Protocol Specification #096',
      category: 'Respiratory & Pulmonology',
      specialty: 'Pulmonary Medicine',
      baseFee: 797.5,
      rvu: 14.5,
      workRVU: 7.98,
      facilityRVU: 5.07,
      malpracticeRVU: 1.45,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '30960',
      description: 'PulseCare Medical Procedure: Respiratory & Pulmonology - Protocol Specification #097',
      category: 'Respiratory & Pulmonology',
      specialty: 'Pulmonary Medicine',
      baseFee: 805.0,
      rvu: 14.64,
      workRVU: 8.05,
      facilityRVU: 5.12,
      malpracticeRVU: 1.46,
      globalPeriodDays: 0,
      requiresPriorAuth: true
    });
    this.registerProcedure({
      code: '30970',
      description: 'PulseCare Medical Procedure: Respiratory & Pulmonology - Protocol Specification #098',
      category: 'Respiratory & Pulmonology',
      specialty: 'Pulmonary Medicine',
      baseFee: 812.5,
      rvu: 14.78,
      workRVU: 8.13,
      facilityRVU: 5.17,
      malpracticeRVU: 1.48,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '30980',
      description: 'PulseCare Medical Procedure: Respiratory & Pulmonology - Protocol Specification #099',
      category: 'Respiratory & Pulmonology',
      specialty: 'Pulmonary Medicine',
      baseFee: 820.0,
      rvu: 14.92,
      workRVU: 8.21,
      facilityRVU: 5.22,
      malpracticeRVU: 1.49,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '30990',
      description: 'PulseCare Medical Procedure: Respiratory & Pulmonology - Protocol Specification #100',
      category: 'Respiratory & Pulmonology',
      specialty: 'Pulmonary Medicine',
      baseFee: 827.5,
      rvu: 15.06,
      workRVU: 8.28,
      facilityRVU: 5.27,
      malpracticeRVU: 1.51,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '80000',
      description: 'PulseCare Medical Procedure: Pathology and Laboratory Diagnostics - Protocol Specification #001',
      category: 'Pathology and Laboratory Diagnostics',
      specialty: 'Clinical Pathology',
      baseFee: 85.0,
      rvu: 1.2,
      workRVU: 0.66,
      facilityRVU: 0.42,
      malpracticeRVU: 0.12,
      globalPeriodDays: 0,
      requiresPriorAuth: true
    });
    this.registerProcedure({
      code: '80010',
      description: 'PulseCare Medical Procedure: Pathology and Laboratory Diagnostics - Protocol Specification #002',
      category: 'Pathology and Laboratory Diagnostics',
      specialty: 'Clinical Pathology',
      baseFee: 92.5,
      rvu: 1.34,
      workRVU: 0.74,
      facilityRVU: 0.47,
      malpracticeRVU: 0.13,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '80020',
      description: 'PulseCare Medical Procedure: Pathology and Laboratory Diagnostics - Protocol Specification #003',
      category: 'Pathology and Laboratory Diagnostics',
      specialty: 'Clinical Pathology',
      baseFee: 100.0,
      rvu: 1.48,
      workRVU: 0.81,
      facilityRVU: 0.52,
      malpracticeRVU: 0.15,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '80030',
      description: 'PulseCare Medical Procedure: Pathology and Laboratory Diagnostics - Protocol Specification #004',
      category: 'Pathology and Laboratory Diagnostics',
      specialty: 'Clinical Pathology',
      baseFee: 107.5,
      rvu: 1.62,
      workRVU: 0.89,
      facilityRVU: 0.57,
      malpracticeRVU: 0.16,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '80040',
      description: 'PulseCare Medical Procedure: Pathology and Laboratory Diagnostics - Protocol Specification #005',
      category: 'Pathology and Laboratory Diagnostics',
      specialty: 'Clinical Pathology',
      baseFee: 115.0,
      rvu: 1.76,
      workRVU: 0.97,
      facilityRVU: 0.62,
      malpracticeRVU: 0.18,
      globalPeriodDays: 0,
      requiresPriorAuth: true
    });
    this.registerProcedure({
      code: '80050',
      description: 'PulseCare Medical Procedure: Pathology and Laboratory Diagnostics - Protocol Specification #006',
      category: 'Pathology and Laboratory Diagnostics',
      specialty: 'Clinical Pathology',
      baseFee: 122.5,
      rvu: 1.9,
      workRVU: 1.04,
      facilityRVU: 0.66,
      malpracticeRVU: 0.19,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '80060',
      description: 'PulseCare Medical Procedure: Pathology and Laboratory Diagnostics - Protocol Specification #007',
      category: 'Pathology and Laboratory Diagnostics',
      specialty: 'Clinical Pathology',
      baseFee: 130.0,
      rvu: 2.04,
      workRVU: 1.12,
      facilityRVU: 0.71,
      malpracticeRVU: 0.2,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '80070',
      description: 'PulseCare Medical Procedure: Pathology and Laboratory Diagnostics - Protocol Specification #008',
      category: 'Pathology and Laboratory Diagnostics',
      specialty: 'Clinical Pathology',
      baseFee: 137.5,
      rvu: 2.18,
      workRVU: 1.2,
      facilityRVU: 0.76,
      malpracticeRVU: 0.22,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '80080',
      description: 'PulseCare Medical Procedure: Pathology and Laboratory Diagnostics - Protocol Specification #009',
      category: 'Pathology and Laboratory Diagnostics',
      specialty: 'Clinical Pathology',
      baseFee: 145.0,
      rvu: 2.32,
      workRVU: 1.28,
      facilityRVU: 0.81,
      malpracticeRVU: 0.23,
      globalPeriodDays: 0,
      requiresPriorAuth: true
    });
    this.registerProcedure({
      code: '80090',
      description: 'PulseCare Medical Procedure: Pathology and Laboratory Diagnostics - Protocol Specification #010',
      category: 'Pathology and Laboratory Diagnostics',
      specialty: 'Clinical Pathology',
      baseFee: 152.5,
      rvu: 2.46,
      workRVU: 1.35,
      facilityRVU: 0.86,
      malpracticeRVU: 0.25,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '80100',
      description: 'PulseCare Medical Procedure: Pathology and Laboratory Diagnostics - Protocol Specification #011',
      category: 'Pathology and Laboratory Diagnostics',
      specialty: 'Clinical Pathology',
      baseFee: 160.0,
      rvu: 2.6,
      workRVU: 1.43,
      facilityRVU: 0.91,
      malpracticeRVU: 0.26,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '80110',
      description: 'PulseCare Medical Procedure: Pathology and Laboratory Diagnostics - Protocol Specification #012',
      category: 'Pathology and Laboratory Diagnostics',
      specialty: 'Clinical Pathology',
      baseFee: 167.5,
      rvu: 2.74,
      workRVU: 1.51,
      facilityRVU: 0.96,
      malpracticeRVU: 0.27,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '80120',
      description: 'PulseCare Medical Procedure: Pathology and Laboratory Diagnostics - Protocol Specification #013',
      category: 'Pathology and Laboratory Diagnostics',
      specialty: 'Clinical Pathology',
      baseFee: 175.0,
      rvu: 2.88,
      workRVU: 1.58,
      facilityRVU: 1.01,
      malpracticeRVU: 0.29,
      globalPeriodDays: 0,
      requiresPriorAuth: true
    });
    this.registerProcedure({
      code: '80130',
      description: 'PulseCare Medical Procedure: Pathology and Laboratory Diagnostics - Protocol Specification #014',
      category: 'Pathology and Laboratory Diagnostics',
      specialty: 'Clinical Pathology',
      baseFee: 182.5,
      rvu: 3.02,
      workRVU: 1.66,
      facilityRVU: 1.06,
      malpracticeRVU: 0.3,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '80140',
      description: 'PulseCare Medical Procedure: Pathology and Laboratory Diagnostics - Protocol Specification #015',
      category: 'Pathology and Laboratory Diagnostics',
      specialty: 'Clinical Pathology',
      baseFee: 190.0,
      rvu: 3.16,
      workRVU: 1.74,
      facilityRVU: 1.11,
      malpracticeRVU: 0.32,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '80150',
      description: 'PulseCare Medical Procedure: Pathology and Laboratory Diagnostics - Protocol Specification #016',
      category: 'Pathology and Laboratory Diagnostics',
      specialty: 'Clinical Pathology',
      baseFee: 197.5,
      rvu: 3.3,
      workRVU: 1.81,
      facilityRVU: 1.15,
      malpracticeRVU: 0.33,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '80160',
      description: 'PulseCare Medical Procedure: Pathology and Laboratory Diagnostics - Protocol Specification #017',
      category: 'Pathology and Laboratory Diagnostics',
      specialty: 'Clinical Pathology',
      baseFee: 205.0,
      rvu: 3.44,
      workRVU: 1.89,
      facilityRVU: 1.2,
      malpracticeRVU: 0.34,
      globalPeriodDays: 0,
      requiresPriorAuth: true
    });
    this.registerProcedure({
      code: '80170',
      description: 'PulseCare Medical Procedure: Pathology and Laboratory Diagnostics - Protocol Specification #018',
      category: 'Pathology and Laboratory Diagnostics',
      specialty: 'Clinical Pathology',
      baseFee: 212.5,
      rvu: 3.58,
      workRVU: 1.97,
      facilityRVU: 1.25,
      malpracticeRVU: 0.36,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '80180',
      description: 'PulseCare Medical Procedure: Pathology and Laboratory Diagnostics - Protocol Specification #019',
      category: 'Pathology and Laboratory Diagnostics',
      specialty: 'Clinical Pathology',
      baseFee: 220.0,
      rvu: 3.72,
      workRVU: 2.05,
      facilityRVU: 1.3,
      malpracticeRVU: 0.37,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '80190',
      description: 'PulseCare Medical Procedure: Pathology and Laboratory Diagnostics - Protocol Specification #020',
      category: 'Pathology and Laboratory Diagnostics',
      specialty: 'Clinical Pathology',
      baseFee: 227.5,
      rvu: 3.86,
      workRVU: 2.12,
      facilityRVU: 1.35,
      malpracticeRVU: 0.39,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '80200',
      description: 'PulseCare Medical Procedure: Pathology and Laboratory Diagnostics - Protocol Specification #021',
      category: 'Pathology and Laboratory Diagnostics',
      specialty: 'Clinical Pathology',
      baseFee: 235.0,
      rvu: 4.0,
      workRVU: 2.2,
      facilityRVU: 1.4,
      malpracticeRVU: 0.4,
      globalPeriodDays: 0,
      requiresPriorAuth: true
    });
    this.registerProcedure({
      code: '80210',
      description: 'PulseCare Medical Procedure: Pathology and Laboratory Diagnostics - Protocol Specification #022',
      category: 'Pathology and Laboratory Diagnostics',
      specialty: 'Clinical Pathology',
      baseFee: 242.5,
      rvu: 4.14,
      workRVU: 2.28,
      facilityRVU: 1.45,
      malpracticeRVU: 0.41,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '80220',
      description: 'PulseCare Medical Procedure: Pathology and Laboratory Diagnostics - Protocol Specification #023',
      category: 'Pathology and Laboratory Diagnostics',
      specialty: 'Clinical Pathology',
      baseFee: 250.0,
      rvu: 4.28,
      workRVU: 2.35,
      facilityRVU: 1.5,
      malpracticeRVU: 0.43,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '80230',
      description: 'PulseCare Medical Procedure: Pathology and Laboratory Diagnostics - Protocol Specification #024',
      category: 'Pathology and Laboratory Diagnostics',
      specialty: 'Clinical Pathology',
      baseFee: 257.5,
      rvu: 4.42,
      workRVU: 2.43,
      facilityRVU: 1.55,
      malpracticeRVU: 0.44,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '80240',
      description: 'PulseCare Medical Procedure: Pathology and Laboratory Diagnostics - Protocol Specification #025',
      category: 'Pathology and Laboratory Diagnostics',
      specialty: 'Clinical Pathology',
      baseFee: 265.0,
      rvu: 4.56,
      workRVU: 2.51,
      facilityRVU: 1.6,
      malpracticeRVU: 0.46,
      globalPeriodDays: 0,
      requiresPriorAuth: true
    });
    this.registerProcedure({
      code: '80250',
      description: 'PulseCare Medical Procedure: Pathology and Laboratory Diagnostics - Protocol Specification #026',
      category: 'Pathology and Laboratory Diagnostics',
      specialty: 'Clinical Pathology',
      baseFee: 272.5,
      rvu: 4.7,
      workRVU: 2.59,
      facilityRVU: 1.65,
      malpracticeRVU: 0.47,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '80260',
      description: 'PulseCare Medical Procedure: Pathology and Laboratory Diagnostics - Protocol Specification #027',
      category: 'Pathology and Laboratory Diagnostics',
      specialty: 'Clinical Pathology',
      baseFee: 280.0,
      rvu: 4.84,
      workRVU: 2.66,
      facilityRVU: 1.69,
      malpracticeRVU: 0.48,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '80270',
      description: 'PulseCare Medical Procedure: Pathology and Laboratory Diagnostics - Protocol Specification #028',
      category: 'Pathology and Laboratory Diagnostics',
      specialty: 'Clinical Pathology',
      baseFee: 287.5,
      rvu: 4.98,
      workRVU: 2.74,
      facilityRVU: 1.74,
      malpracticeRVU: 0.5,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '80280',
      description: 'PulseCare Medical Procedure: Pathology and Laboratory Diagnostics - Protocol Specification #029',
      category: 'Pathology and Laboratory Diagnostics',
      specialty: 'Clinical Pathology',
      baseFee: 295.0,
      rvu: 5.12,
      workRVU: 2.82,
      facilityRVU: 1.79,
      malpracticeRVU: 0.51,
      globalPeriodDays: 0,
      requiresPriorAuth: true
    });
    this.registerProcedure({
      code: '80290',
      description: 'PulseCare Medical Procedure: Pathology and Laboratory Diagnostics - Protocol Specification #030',
      category: 'Pathology and Laboratory Diagnostics',
      specialty: 'Clinical Pathology',
      baseFee: 302.5,
      rvu: 5.26,
      workRVU: 2.89,
      facilityRVU: 1.84,
      malpracticeRVU: 0.53,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '80300',
      description: 'PulseCare Medical Procedure: Pathology and Laboratory Diagnostics - Protocol Specification #031',
      category: 'Pathology and Laboratory Diagnostics',
      specialty: 'Clinical Pathology',
      baseFee: 310.0,
      rvu: 5.4,
      workRVU: 2.97,
      facilityRVU: 1.89,
      malpracticeRVU: 0.54,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '80310',
      description: 'PulseCare Medical Procedure: Pathology and Laboratory Diagnostics - Protocol Specification #032',
      category: 'Pathology and Laboratory Diagnostics',
      specialty: 'Clinical Pathology',
      baseFee: 317.5,
      rvu: 5.54,
      workRVU: 3.05,
      facilityRVU: 1.94,
      malpracticeRVU: 0.55,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '80320',
      description: 'PulseCare Medical Procedure: Pathology and Laboratory Diagnostics - Protocol Specification #033',
      category: 'Pathology and Laboratory Diagnostics',
      specialty: 'Clinical Pathology',
      baseFee: 325.0,
      rvu: 5.68,
      workRVU: 3.12,
      facilityRVU: 1.99,
      malpracticeRVU: 0.57,
      globalPeriodDays: 0,
      requiresPriorAuth: true
    });
    this.registerProcedure({
      code: '80330',
      description: 'PulseCare Medical Procedure: Pathology and Laboratory Diagnostics - Protocol Specification #034',
      category: 'Pathology and Laboratory Diagnostics',
      specialty: 'Clinical Pathology',
      baseFee: 332.5,
      rvu: 5.82,
      workRVU: 3.2,
      facilityRVU: 2.04,
      malpracticeRVU: 0.58,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '80340',
      description: 'PulseCare Medical Procedure: Pathology and Laboratory Diagnostics - Protocol Specification #035',
      category: 'Pathology and Laboratory Diagnostics',
      specialty: 'Clinical Pathology',
      baseFee: 340.0,
      rvu: 5.96,
      workRVU: 3.28,
      facilityRVU: 2.09,
      malpracticeRVU: 0.6,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '80350',
      description: 'PulseCare Medical Procedure: Pathology and Laboratory Diagnostics - Protocol Specification #036',
      category: 'Pathology and Laboratory Diagnostics',
      specialty: 'Clinical Pathology',
      baseFee: 347.5,
      rvu: 6.1,
      workRVU: 3.35,
      facilityRVU: 2.13,
      malpracticeRVU: 0.61,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '80360',
      description: 'PulseCare Medical Procedure: Pathology and Laboratory Diagnostics - Protocol Specification #037',
      category: 'Pathology and Laboratory Diagnostics',
      specialty: 'Clinical Pathology',
      baseFee: 355.0,
      rvu: 6.24,
      workRVU: 3.43,
      facilityRVU: 2.18,
      malpracticeRVU: 0.62,
      globalPeriodDays: 0,
      requiresPriorAuth: true
    });
    this.registerProcedure({
      code: '80370',
      description: 'PulseCare Medical Procedure: Pathology and Laboratory Diagnostics - Protocol Specification #038',
      category: 'Pathology and Laboratory Diagnostics',
      specialty: 'Clinical Pathology',
      baseFee: 362.5,
      rvu: 6.38,
      workRVU: 3.51,
      facilityRVU: 2.23,
      malpracticeRVU: 0.64,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '80380',
      description: 'PulseCare Medical Procedure: Pathology and Laboratory Diagnostics - Protocol Specification #039',
      category: 'Pathology and Laboratory Diagnostics',
      specialty: 'Clinical Pathology',
      baseFee: 370.0,
      rvu: 6.52,
      workRVU: 3.59,
      facilityRVU: 2.28,
      malpracticeRVU: 0.65,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '80390',
      description: 'PulseCare Medical Procedure: Pathology and Laboratory Diagnostics - Protocol Specification #040',
      category: 'Pathology and Laboratory Diagnostics',
      specialty: 'Clinical Pathology',
      baseFee: 377.5,
      rvu: 6.66,
      workRVU: 3.66,
      facilityRVU: 2.33,
      malpracticeRVU: 0.67,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '80400',
      description: 'PulseCare Medical Procedure: Pathology and Laboratory Diagnostics - Protocol Specification #041',
      category: 'Pathology and Laboratory Diagnostics',
      specialty: 'Clinical Pathology',
      baseFee: 385.0,
      rvu: 6.8,
      workRVU: 3.74,
      facilityRVU: 2.38,
      malpracticeRVU: 0.68,
      globalPeriodDays: 0,
      requiresPriorAuth: true
    });
    this.registerProcedure({
      code: '80410',
      description: 'PulseCare Medical Procedure: Pathology and Laboratory Diagnostics - Protocol Specification #042',
      category: 'Pathology and Laboratory Diagnostics',
      specialty: 'Clinical Pathology',
      baseFee: 392.5,
      rvu: 6.94,
      workRVU: 3.82,
      facilityRVU: 2.43,
      malpracticeRVU: 0.69,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '80420',
      description: 'PulseCare Medical Procedure: Pathology and Laboratory Diagnostics - Protocol Specification #043',
      category: 'Pathology and Laboratory Diagnostics',
      specialty: 'Clinical Pathology',
      baseFee: 400.0,
      rvu: 7.08,
      workRVU: 3.89,
      facilityRVU: 2.48,
      malpracticeRVU: 0.71,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '80430',
      description: 'PulseCare Medical Procedure: Pathology and Laboratory Diagnostics - Protocol Specification #044',
      category: 'Pathology and Laboratory Diagnostics',
      specialty: 'Clinical Pathology',
      baseFee: 407.5,
      rvu: 7.22,
      workRVU: 3.97,
      facilityRVU: 2.53,
      malpracticeRVU: 0.72,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '80440',
      description: 'PulseCare Medical Procedure: Pathology and Laboratory Diagnostics - Protocol Specification #045',
      category: 'Pathology and Laboratory Diagnostics',
      specialty: 'Clinical Pathology',
      baseFee: 415.0,
      rvu: 7.36,
      workRVU: 4.05,
      facilityRVU: 2.58,
      malpracticeRVU: 0.74,
      globalPeriodDays: 0,
      requiresPriorAuth: true
    });
    this.registerProcedure({
      code: '80450',
      description: 'PulseCare Medical Procedure: Pathology and Laboratory Diagnostics - Protocol Specification #046',
      category: 'Pathology and Laboratory Diagnostics',
      specialty: 'Clinical Pathology',
      baseFee: 422.5,
      rvu: 7.5,
      workRVU: 4.12,
      facilityRVU: 2.62,
      malpracticeRVU: 0.75,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '80460',
      description: 'PulseCare Medical Procedure: Pathology and Laboratory Diagnostics - Protocol Specification #047',
      category: 'Pathology and Laboratory Diagnostics',
      specialty: 'Clinical Pathology',
      baseFee: 430.0,
      rvu: 7.64,
      workRVU: 4.2,
      facilityRVU: 2.67,
      malpracticeRVU: 0.76,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '80470',
      description: 'PulseCare Medical Procedure: Pathology and Laboratory Diagnostics - Protocol Specification #048',
      category: 'Pathology and Laboratory Diagnostics',
      specialty: 'Clinical Pathology',
      baseFee: 437.5,
      rvu: 7.78,
      workRVU: 4.28,
      facilityRVU: 2.72,
      malpracticeRVU: 0.78,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '80480',
      description: 'PulseCare Medical Procedure: Pathology and Laboratory Diagnostics - Protocol Specification #049',
      category: 'Pathology and Laboratory Diagnostics',
      specialty: 'Clinical Pathology',
      baseFee: 445.0,
      rvu: 7.92,
      workRVU: 4.36,
      facilityRVU: 2.77,
      malpracticeRVU: 0.79,
      globalPeriodDays: 0,
      requiresPriorAuth: true
    });
    this.registerProcedure({
      code: '80490',
      description: 'PulseCare Medical Procedure: Pathology and Laboratory Diagnostics - Protocol Specification #050',
      category: 'Pathology and Laboratory Diagnostics',
      specialty: 'Clinical Pathology',
      baseFee: 452.5,
      rvu: 8.06,
      workRVU: 4.43,
      facilityRVU: 2.82,
      malpracticeRVU: 0.81,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '80500',
      description: 'PulseCare Medical Procedure: Pathology and Laboratory Diagnostics - Protocol Specification #051',
      category: 'Pathology and Laboratory Diagnostics',
      specialty: 'Clinical Pathology',
      baseFee: 460.0,
      rvu: 8.2,
      workRVU: 4.51,
      facilityRVU: 2.87,
      malpracticeRVU: 0.82,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '80510',
      description: 'PulseCare Medical Procedure: Pathology and Laboratory Diagnostics - Protocol Specification #052',
      category: 'Pathology and Laboratory Diagnostics',
      specialty: 'Clinical Pathology',
      baseFee: 467.5,
      rvu: 8.34,
      workRVU: 4.59,
      facilityRVU: 2.92,
      malpracticeRVU: 0.83,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '80520',
      description: 'PulseCare Medical Procedure: Pathology and Laboratory Diagnostics - Protocol Specification #053',
      category: 'Pathology and Laboratory Diagnostics',
      specialty: 'Clinical Pathology',
      baseFee: 475.0,
      rvu: 8.48,
      workRVU: 4.66,
      facilityRVU: 2.97,
      malpracticeRVU: 0.85,
      globalPeriodDays: 0,
      requiresPriorAuth: true
    });
    this.registerProcedure({
      code: '80530',
      description: 'PulseCare Medical Procedure: Pathology and Laboratory Diagnostics - Protocol Specification #054',
      category: 'Pathology and Laboratory Diagnostics',
      specialty: 'Clinical Pathology',
      baseFee: 482.5,
      rvu: 8.62,
      workRVU: 4.74,
      facilityRVU: 3.02,
      malpracticeRVU: 0.86,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '80540',
      description: 'PulseCare Medical Procedure: Pathology and Laboratory Diagnostics - Protocol Specification #055',
      category: 'Pathology and Laboratory Diagnostics',
      specialty: 'Clinical Pathology',
      baseFee: 490.0,
      rvu: 8.76,
      workRVU: 4.82,
      facilityRVU: 3.07,
      malpracticeRVU: 0.88,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '80550',
      description: 'PulseCare Medical Procedure: Pathology and Laboratory Diagnostics - Protocol Specification #056',
      category: 'Pathology and Laboratory Diagnostics',
      specialty: 'Clinical Pathology',
      baseFee: 497.5,
      rvu: 8.9,
      workRVU: 4.9,
      facilityRVU: 3.11,
      malpracticeRVU: 0.89,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '80560',
      description: 'PulseCare Medical Procedure: Pathology and Laboratory Diagnostics - Protocol Specification #057',
      category: 'Pathology and Laboratory Diagnostics',
      specialty: 'Clinical Pathology',
      baseFee: 505.0,
      rvu: 9.04,
      workRVU: 4.97,
      facilityRVU: 3.16,
      malpracticeRVU: 0.9,
      globalPeriodDays: 0,
      requiresPriorAuth: true
    });
    this.registerProcedure({
      code: '80570',
      description: 'PulseCare Medical Procedure: Pathology and Laboratory Diagnostics - Protocol Specification #058',
      category: 'Pathology and Laboratory Diagnostics',
      specialty: 'Clinical Pathology',
      baseFee: 512.5,
      rvu: 9.18,
      workRVU: 5.05,
      facilityRVU: 3.21,
      malpracticeRVU: 0.92,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '80580',
      description: 'PulseCare Medical Procedure: Pathology and Laboratory Diagnostics - Protocol Specification #059',
      category: 'Pathology and Laboratory Diagnostics',
      specialty: 'Clinical Pathology',
      baseFee: 520.0,
      rvu: 9.32,
      workRVU: 5.13,
      facilityRVU: 3.26,
      malpracticeRVU: 0.93,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '80590',
      description: 'PulseCare Medical Procedure: Pathology and Laboratory Diagnostics - Protocol Specification #060',
      category: 'Pathology and Laboratory Diagnostics',
      specialty: 'Clinical Pathology',
      baseFee: 527.5,
      rvu: 9.46,
      workRVU: 5.2,
      facilityRVU: 3.31,
      malpracticeRVU: 0.95,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '80600',
      description: 'PulseCare Medical Procedure: Pathology and Laboratory Diagnostics - Protocol Specification #061',
      category: 'Pathology and Laboratory Diagnostics',
      specialty: 'Clinical Pathology',
      baseFee: 535.0,
      rvu: 9.6,
      workRVU: 5.28,
      facilityRVU: 3.36,
      malpracticeRVU: 0.96,
      globalPeriodDays: 0,
      requiresPriorAuth: true
    });
    this.registerProcedure({
      code: '80610',
      description: 'PulseCare Medical Procedure: Pathology and Laboratory Diagnostics - Protocol Specification #062',
      category: 'Pathology and Laboratory Diagnostics',
      specialty: 'Clinical Pathology',
      baseFee: 542.5,
      rvu: 9.74,
      workRVU: 5.36,
      facilityRVU: 3.41,
      malpracticeRVU: 0.97,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '80620',
      description: 'PulseCare Medical Procedure: Pathology and Laboratory Diagnostics - Protocol Specification #063',
      category: 'Pathology and Laboratory Diagnostics',
      specialty: 'Clinical Pathology',
      baseFee: 550.0,
      rvu: 9.88,
      workRVU: 5.43,
      facilityRVU: 3.46,
      malpracticeRVU: 0.99,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '80630',
      description: 'PulseCare Medical Procedure: Pathology and Laboratory Diagnostics - Protocol Specification #064',
      category: 'Pathology and Laboratory Diagnostics',
      specialty: 'Clinical Pathology',
      baseFee: 557.5,
      rvu: 10.02,
      workRVU: 5.51,
      facilityRVU: 3.51,
      malpracticeRVU: 1.0,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '80640',
      description: 'PulseCare Medical Procedure: Pathology and Laboratory Diagnostics - Protocol Specification #065',
      category: 'Pathology and Laboratory Diagnostics',
      specialty: 'Clinical Pathology',
      baseFee: 565.0,
      rvu: 10.16,
      workRVU: 5.59,
      facilityRVU: 3.56,
      malpracticeRVU: 1.02,
      globalPeriodDays: 0,
      requiresPriorAuth: true
    });
    this.registerProcedure({
      code: '80650',
      description: 'PulseCare Medical Procedure: Pathology and Laboratory Diagnostics - Protocol Specification #066',
      category: 'Pathology and Laboratory Diagnostics',
      specialty: 'Clinical Pathology',
      baseFee: 572.5,
      rvu: 10.3,
      workRVU: 5.67,
      facilityRVU: 3.6,
      malpracticeRVU: 1.03,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '80660',
      description: 'PulseCare Medical Procedure: Pathology and Laboratory Diagnostics - Protocol Specification #067',
      category: 'Pathology and Laboratory Diagnostics',
      specialty: 'Clinical Pathology',
      baseFee: 580.0,
      rvu: 10.44,
      workRVU: 5.74,
      facilityRVU: 3.65,
      malpracticeRVU: 1.04,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '80670',
      description: 'PulseCare Medical Procedure: Pathology and Laboratory Diagnostics - Protocol Specification #068',
      category: 'Pathology and Laboratory Diagnostics',
      specialty: 'Clinical Pathology',
      baseFee: 587.5,
      rvu: 10.58,
      workRVU: 5.82,
      facilityRVU: 3.7,
      malpracticeRVU: 1.06,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '80680',
      description: 'PulseCare Medical Procedure: Pathology and Laboratory Diagnostics - Protocol Specification #069',
      category: 'Pathology and Laboratory Diagnostics',
      specialty: 'Clinical Pathology',
      baseFee: 595.0,
      rvu: 10.72,
      workRVU: 5.9,
      facilityRVU: 3.75,
      malpracticeRVU: 1.07,
      globalPeriodDays: 0,
      requiresPriorAuth: true
    });
    this.registerProcedure({
      code: '80690',
      description: 'PulseCare Medical Procedure: Pathology and Laboratory Diagnostics - Protocol Specification #070',
      category: 'Pathology and Laboratory Diagnostics',
      specialty: 'Clinical Pathology',
      baseFee: 602.5,
      rvu: 10.86,
      workRVU: 5.97,
      facilityRVU: 3.8,
      malpracticeRVU: 1.09,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '80700',
      description: 'PulseCare Medical Procedure: Pathology and Laboratory Diagnostics - Protocol Specification #071',
      category: 'Pathology and Laboratory Diagnostics',
      specialty: 'Clinical Pathology',
      baseFee: 610.0,
      rvu: 11.0,
      workRVU: 6.05,
      facilityRVU: 3.85,
      malpracticeRVU: 1.1,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '80710',
      description: 'PulseCare Medical Procedure: Pathology and Laboratory Diagnostics - Protocol Specification #072',
      category: 'Pathology and Laboratory Diagnostics',
      specialty: 'Clinical Pathology',
      baseFee: 617.5,
      rvu: 11.14,
      workRVU: 6.13,
      facilityRVU: 3.9,
      malpracticeRVU: 1.11,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '80720',
      description: 'PulseCare Medical Procedure: Pathology and Laboratory Diagnostics - Protocol Specification #073',
      category: 'Pathology and Laboratory Diagnostics',
      specialty: 'Clinical Pathology',
      baseFee: 625.0,
      rvu: 11.28,
      workRVU: 6.2,
      facilityRVU: 3.95,
      malpracticeRVU: 1.13,
      globalPeriodDays: 0,
      requiresPriorAuth: true
    });
    this.registerProcedure({
      code: '80730',
      description: 'PulseCare Medical Procedure: Pathology and Laboratory Diagnostics - Protocol Specification #074',
      category: 'Pathology and Laboratory Diagnostics',
      specialty: 'Clinical Pathology',
      baseFee: 632.5,
      rvu: 11.42,
      workRVU: 6.28,
      facilityRVU: 4.0,
      malpracticeRVU: 1.14,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '80740',
      description: 'PulseCare Medical Procedure: Pathology and Laboratory Diagnostics - Protocol Specification #075',
      category: 'Pathology and Laboratory Diagnostics',
      specialty: 'Clinical Pathology',
      baseFee: 640.0,
      rvu: 11.56,
      workRVU: 6.36,
      facilityRVU: 4.05,
      malpracticeRVU: 1.16,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '80750',
      description: 'PulseCare Medical Procedure: Pathology and Laboratory Diagnostics - Protocol Specification #076',
      category: 'Pathology and Laboratory Diagnostics',
      specialty: 'Clinical Pathology',
      baseFee: 647.5,
      rvu: 11.7,
      workRVU: 6.44,
      facilityRVU: 4.09,
      malpracticeRVU: 1.17,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '80760',
      description: 'PulseCare Medical Procedure: Pathology and Laboratory Diagnostics - Protocol Specification #077',
      category: 'Pathology and Laboratory Diagnostics',
      specialty: 'Clinical Pathology',
      baseFee: 655.0,
      rvu: 11.84,
      workRVU: 6.51,
      facilityRVU: 4.14,
      malpracticeRVU: 1.18,
      globalPeriodDays: 0,
      requiresPriorAuth: true
    });
    this.registerProcedure({
      code: '80770',
      description: 'PulseCare Medical Procedure: Pathology and Laboratory Diagnostics - Protocol Specification #078',
      category: 'Pathology and Laboratory Diagnostics',
      specialty: 'Clinical Pathology',
      baseFee: 662.5,
      rvu: 11.98,
      workRVU: 6.59,
      facilityRVU: 4.19,
      malpracticeRVU: 1.2,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '80780',
      description: 'PulseCare Medical Procedure: Pathology and Laboratory Diagnostics - Protocol Specification #079',
      category: 'Pathology and Laboratory Diagnostics',
      specialty: 'Clinical Pathology',
      baseFee: 670.0,
      rvu: 12.12,
      workRVU: 6.67,
      facilityRVU: 4.24,
      malpracticeRVU: 1.21,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '80790',
      description: 'PulseCare Medical Procedure: Pathology and Laboratory Diagnostics - Protocol Specification #080',
      category: 'Pathology and Laboratory Diagnostics',
      specialty: 'Clinical Pathology',
      baseFee: 677.5,
      rvu: 12.26,
      workRVU: 6.74,
      facilityRVU: 4.29,
      malpracticeRVU: 1.23,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '80800',
      description: 'PulseCare Medical Procedure: Pathology and Laboratory Diagnostics - Protocol Specification #081',
      category: 'Pathology and Laboratory Diagnostics',
      specialty: 'Clinical Pathology',
      baseFee: 685.0,
      rvu: 12.4,
      workRVU: 6.82,
      facilityRVU: 4.34,
      malpracticeRVU: 1.24,
      globalPeriodDays: 0,
      requiresPriorAuth: true
    });
    this.registerProcedure({
      code: '80810',
      description: 'PulseCare Medical Procedure: Pathology and Laboratory Diagnostics - Protocol Specification #082',
      category: 'Pathology and Laboratory Diagnostics',
      specialty: 'Clinical Pathology',
      baseFee: 692.5,
      rvu: 12.54,
      workRVU: 6.9,
      facilityRVU: 4.39,
      malpracticeRVU: 1.25,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '80820',
      description: 'PulseCare Medical Procedure: Pathology and Laboratory Diagnostics - Protocol Specification #083',
      category: 'Pathology and Laboratory Diagnostics',
      specialty: 'Clinical Pathology',
      baseFee: 700.0,
      rvu: 12.68,
      workRVU: 6.97,
      facilityRVU: 4.44,
      malpracticeRVU: 1.27,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '80830',
      description: 'PulseCare Medical Procedure: Pathology and Laboratory Diagnostics - Protocol Specification #084',
      category: 'Pathology and Laboratory Diagnostics',
      specialty: 'Clinical Pathology',
      baseFee: 707.5,
      rvu: 12.82,
      workRVU: 7.05,
      facilityRVU: 4.49,
      malpracticeRVU: 1.28,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '80840',
      description: 'PulseCare Medical Procedure: Pathology and Laboratory Diagnostics - Protocol Specification #085',
      category: 'Pathology and Laboratory Diagnostics',
      specialty: 'Clinical Pathology',
      baseFee: 715.0,
      rvu: 12.96,
      workRVU: 7.13,
      facilityRVU: 4.54,
      malpracticeRVU: 1.3,
      globalPeriodDays: 0,
      requiresPriorAuth: true
    });
    this.registerProcedure({
      code: '80850',
      description: 'PulseCare Medical Procedure: Pathology and Laboratory Diagnostics - Protocol Specification #086',
      category: 'Pathology and Laboratory Diagnostics',
      specialty: 'Clinical Pathology',
      baseFee: 722.5,
      rvu: 13.1,
      workRVU: 7.21,
      facilityRVU: 4.58,
      malpracticeRVU: 1.31,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '80860',
      description: 'PulseCare Medical Procedure: Pathology and Laboratory Diagnostics - Protocol Specification #087',
      category: 'Pathology and Laboratory Diagnostics',
      specialty: 'Clinical Pathology',
      baseFee: 730.0,
      rvu: 13.24,
      workRVU: 7.28,
      facilityRVU: 4.63,
      malpracticeRVU: 1.32,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '80870',
      description: 'PulseCare Medical Procedure: Pathology and Laboratory Diagnostics - Protocol Specification #088',
      category: 'Pathology and Laboratory Diagnostics',
      specialty: 'Clinical Pathology',
      baseFee: 737.5,
      rvu: 13.38,
      workRVU: 7.36,
      facilityRVU: 4.68,
      malpracticeRVU: 1.34,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '80880',
      description: 'PulseCare Medical Procedure: Pathology and Laboratory Diagnostics - Protocol Specification #089',
      category: 'Pathology and Laboratory Diagnostics',
      specialty: 'Clinical Pathology',
      baseFee: 745.0,
      rvu: 13.52,
      workRVU: 7.44,
      facilityRVU: 4.73,
      malpracticeRVU: 1.35,
      globalPeriodDays: 0,
      requiresPriorAuth: true
    });
    this.registerProcedure({
      code: '80890',
      description: 'PulseCare Medical Procedure: Pathology and Laboratory Diagnostics - Protocol Specification #090',
      category: 'Pathology and Laboratory Diagnostics',
      specialty: 'Clinical Pathology',
      baseFee: 752.5,
      rvu: 13.66,
      workRVU: 7.51,
      facilityRVU: 4.78,
      malpracticeRVU: 1.37,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '80900',
      description: 'PulseCare Medical Procedure: Pathology and Laboratory Diagnostics - Protocol Specification #091',
      category: 'Pathology and Laboratory Diagnostics',
      specialty: 'Clinical Pathology',
      baseFee: 760.0,
      rvu: 13.8,
      workRVU: 7.59,
      facilityRVU: 4.83,
      malpracticeRVU: 1.38,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '80910',
      description: 'PulseCare Medical Procedure: Pathology and Laboratory Diagnostics - Protocol Specification #092',
      category: 'Pathology and Laboratory Diagnostics',
      specialty: 'Clinical Pathology',
      baseFee: 767.5,
      rvu: 13.94,
      workRVU: 7.67,
      facilityRVU: 4.88,
      malpracticeRVU: 1.39,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '80920',
      description: 'PulseCare Medical Procedure: Pathology and Laboratory Diagnostics - Protocol Specification #093',
      category: 'Pathology and Laboratory Diagnostics',
      specialty: 'Clinical Pathology',
      baseFee: 775.0,
      rvu: 14.08,
      workRVU: 7.74,
      facilityRVU: 4.93,
      malpracticeRVU: 1.41,
      globalPeriodDays: 0,
      requiresPriorAuth: true
    });
    this.registerProcedure({
      code: '80930',
      description: 'PulseCare Medical Procedure: Pathology and Laboratory Diagnostics - Protocol Specification #094',
      category: 'Pathology and Laboratory Diagnostics',
      specialty: 'Clinical Pathology',
      baseFee: 782.5,
      rvu: 14.22,
      workRVU: 7.82,
      facilityRVU: 4.98,
      malpracticeRVU: 1.42,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '80940',
      description: 'PulseCare Medical Procedure: Pathology and Laboratory Diagnostics - Protocol Specification #095',
      category: 'Pathology and Laboratory Diagnostics',
      specialty: 'Clinical Pathology',
      baseFee: 790.0,
      rvu: 14.36,
      workRVU: 7.9,
      facilityRVU: 5.03,
      malpracticeRVU: 1.44,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '80950',
      description: 'PulseCare Medical Procedure: Pathology and Laboratory Diagnostics - Protocol Specification #096',
      category: 'Pathology and Laboratory Diagnostics',
      specialty: 'Clinical Pathology',
      baseFee: 797.5,
      rvu: 14.5,
      workRVU: 7.98,
      facilityRVU: 5.07,
      malpracticeRVU: 1.45,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '80960',
      description: 'PulseCare Medical Procedure: Pathology and Laboratory Diagnostics - Protocol Specification #097',
      category: 'Pathology and Laboratory Diagnostics',
      specialty: 'Clinical Pathology',
      baseFee: 805.0,
      rvu: 14.64,
      workRVU: 8.05,
      facilityRVU: 5.12,
      malpracticeRVU: 1.46,
      globalPeriodDays: 0,
      requiresPriorAuth: true
    });
    this.registerProcedure({
      code: '80970',
      description: 'PulseCare Medical Procedure: Pathology and Laboratory Diagnostics - Protocol Specification #098',
      category: 'Pathology and Laboratory Diagnostics',
      specialty: 'Clinical Pathology',
      baseFee: 812.5,
      rvu: 14.78,
      workRVU: 8.13,
      facilityRVU: 5.17,
      malpracticeRVU: 1.48,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '80980',
      description: 'PulseCare Medical Procedure: Pathology and Laboratory Diagnostics - Protocol Specification #099',
      category: 'Pathology and Laboratory Diagnostics',
      specialty: 'Clinical Pathology',
      baseFee: 820.0,
      rvu: 14.92,
      workRVU: 8.21,
      facilityRVU: 5.22,
      malpracticeRVU: 1.49,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '80990',
      description: 'PulseCare Medical Procedure: Pathology and Laboratory Diagnostics - Protocol Specification #100',
      category: 'Pathology and Laboratory Diagnostics',
      specialty: 'Clinical Pathology',
      baseFee: 827.5,
      rvu: 15.06,
      workRVU: 8.28,
      facilityRVU: 5.27,
      malpracticeRVU: 1.51,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '70000',
      description: 'PulseCare Medical Procedure: Radiology & Advanced Imaging - Protocol Specification #001',
      category: 'Radiology & Advanced Imaging',
      specialty: 'Diagnostic Radiology',
      baseFee: 85.0,
      rvu: 1.2,
      workRVU: 0.66,
      facilityRVU: 0.42,
      malpracticeRVU: 0.12,
      globalPeriodDays: 0,
      requiresPriorAuth: true
    });
    this.registerProcedure({
      code: '70010',
      description: 'PulseCare Medical Procedure: Radiology & Advanced Imaging - Protocol Specification #002',
      category: 'Radiology & Advanced Imaging',
      specialty: 'Diagnostic Radiology',
      baseFee: 92.5,
      rvu: 1.34,
      workRVU: 0.74,
      facilityRVU: 0.47,
      malpracticeRVU: 0.13,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '70020',
      description: 'PulseCare Medical Procedure: Radiology & Advanced Imaging - Protocol Specification #003',
      category: 'Radiology & Advanced Imaging',
      specialty: 'Diagnostic Radiology',
      baseFee: 100.0,
      rvu: 1.48,
      workRVU: 0.81,
      facilityRVU: 0.52,
      malpracticeRVU: 0.15,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '70030',
      description: 'PulseCare Medical Procedure: Radiology & Advanced Imaging - Protocol Specification #004',
      category: 'Radiology & Advanced Imaging',
      specialty: 'Diagnostic Radiology',
      baseFee: 107.5,
      rvu: 1.62,
      workRVU: 0.89,
      facilityRVU: 0.57,
      malpracticeRVU: 0.16,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '70040',
      description: 'PulseCare Medical Procedure: Radiology & Advanced Imaging - Protocol Specification #005',
      category: 'Radiology & Advanced Imaging',
      specialty: 'Diagnostic Radiology',
      baseFee: 115.0,
      rvu: 1.76,
      workRVU: 0.97,
      facilityRVU: 0.62,
      malpracticeRVU: 0.18,
      globalPeriodDays: 0,
      requiresPriorAuth: true
    });
    this.registerProcedure({
      code: '70050',
      description: 'PulseCare Medical Procedure: Radiology & Advanced Imaging - Protocol Specification #006',
      category: 'Radiology & Advanced Imaging',
      specialty: 'Diagnostic Radiology',
      baseFee: 122.5,
      rvu: 1.9,
      workRVU: 1.04,
      facilityRVU: 0.66,
      malpracticeRVU: 0.19,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '70060',
      description: 'PulseCare Medical Procedure: Radiology & Advanced Imaging - Protocol Specification #007',
      category: 'Radiology & Advanced Imaging',
      specialty: 'Diagnostic Radiology',
      baseFee: 130.0,
      rvu: 2.04,
      workRVU: 1.12,
      facilityRVU: 0.71,
      malpracticeRVU: 0.2,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '70070',
      description: 'PulseCare Medical Procedure: Radiology & Advanced Imaging - Protocol Specification #008',
      category: 'Radiology & Advanced Imaging',
      specialty: 'Diagnostic Radiology',
      baseFee: 137.5,
      rvu: 2.18,
      workRVU: 1.2,
      facilityRVU: 0.76,
      malpracticeRVU: 0.22,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '70080',
      description: 'PulseCare Medical Procedure: Radiology & Advanced Imaging - Protocol Specification #009',
      category: 'Radiology & Advanced Imaging',
      specialty: 'Diagnostic Radiology',
      baseFee: 145.0,
      rvu: 2.32,
      workRVU: 1.28,
      facilityRVU: 0.81,
      malpracticeRVU: 0.23,
      globalPeriodDays: 0,
      requiresPriorAuth: true
    });
    this.registerProcedure({
      code: '70090',
      description: 'PulseCare Medical Procedure: Radiology & Advanced Imaging - Protocol Specification #010',
      category: 'Radiology & Advanced Imaging',
      specialty: 'Diagnostic Radiology',
      baseFee: 152.5,
      rvu: 2.46,
      workRVU: 1.35,
      facilityRVU: 0.86,
      malpracticeRVU: 0.25,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '70100',
      description: 'PulseCare Medical Procedure: Radiology & Advanced Imaging - Protocol Specification #011',
      category: 'Radiology & Advanced Imaging',
      specialty: 'Diagnostic Radiology',
      baseFee: 160.0,
      rvu: 2.6,
      workRVU: 1.43,
      facilityRVU: 0.91,
      malpracticeRVU: 0.26,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '70110',
      description: 'PulseCare Medical Procedure: Radiology & Advanced Imaging - Protocol Specification #012',
      category: 'Radiology & Advanced Imaging',
      specialty: 'Diagnostic Radiology',
      baseFee: 167.5,
      rvu: 2.74,
      workRVU: 1.51,
      facilityRVU: 0.96,
      malpracticeRVU: 0.27,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '70120',
      description: 'PulseCare Medical Procedure: Radiology & Advanced Imaging - Protocol Specification #013',
      category: 'Radiology & Advanced Imaging',
      specialty: 'Diagnostic Radiology',
      baseFee: 175.0,
      rvu: 2.88,
      workRVU: 1.58,
      facilityRVU: 1.01,
      malpracticeRVU: 0.29,
      globalPeriodDays: 0,
      requiresPriorAuth: true
    });
    this.registerProcedure({
      code: '70130',
      description: 'PulseCare Medical Procedure: Radiology & Advanced Imaging - Protocol Specification #014',
      category: 'Radiology & Advanced Imaging',
      specialty: 'Diagnostic Radiology',
      baseFee: 182.5,
      rvu: 3.02,
      workRVU: 1.66,
      facilityRVU: 1.06,
      malpracticeRVU: 0.3,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '70140',
      description: 'PulseCare Medical Procedure: Radiology & Advanced Imaging - Protocol Specification #015',
      category: 'Radiology & Advanced Imaging',
      specialty: 'Diagnostic Radiology',
      baseFee: 190.0,
      rvu: 3.16,
      workRVU: 1.74,
      facilityRVU: 1.11,
      malpracticeRVU: 0.32,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '70150',
      description: 'PulseCare Medical Procedure: Radiology & Advanced Imaging - Protocol Specification #016',
      category: 'Radiology & Advanced Imaging',
      specialty: 'Diagnostic Radiology',
      baseFee: 197.5,
      rvu: 3.3,
      workRVU: 1.81,
      facilityRVU: 1.15,
      malpracticeRVU: 0.33,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '70160',
      description: 'PulseCare Medical Procedure: Radiology & Advanced Imaging - Protocol Specification #017',
      category: 'Radiology & Advanced Imaging',
      specialty: 'Diagnostic Radiology',
      baseFee: 205.0,
      rvu: 3.44,
      workRVU: 1.89,
      facilityRVU: 1.2,
      malpracticeRVU: 0.34,
      globalPeriodDays: 0,
      requiresPriorAuth: true
    });
    this.registerProcedure({
      code: '70170',
      description: 'PulseCare Medical Procedure: Radiology & Advanced Imaging - Protocol Specification #018',
      category: 'Radiology & Advanced Imaging',
      specialty: 'Diagnostic Radiology',
      baseFee: 212.5,
      rvu: 3.58,
      workRVU: 1.97,
      facilityRVU: 1.25,
      malpracticeRVU: 0.36,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '70180',
      description: 'PulseCare Medical Procedure: Radiology & Advanced Imaging - Protocol Specification #019',
      category: 'Radiology & Advanced Imaging',
      specialty: 'Diagnostic Radiology',
      baseFee: 220.0,
      rvu: 3.72,
      workRVU: 2.05,
      facilityRVU: 1.3,
      malpracticeRVU: 0.37,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '70190',
      description: 'PulseCare Medical Procedure: Radiology & Advanced Imaging - Protocol Specification #020',
      category: 'Radiology & Advanced Imaging',
      specialty: 'Diagnostic Radiology',
      baseFee: 227.5,
      rvu: 3.86,
      workRVU: 2.12,
      facilityRVU: 1.35,
      malpracticeRVU: 0.39,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '70200',
      description: 'PulseCare Medical Procedure: Radiology & Advanced Imaging - Protocol Specification #021',
      category: 'Radiology & Advanced Imaging',
      specialty: 'Diagnostic Radiology',
      baseFee: 235.0,
      rvu: 4.0,
      workRVU: 2.2,
      facilityRVU: 1.4,
      malpracticeRVU: 0.4,
      globalPeriodDays: 0,
      requiresPriorAuth: true
    });
    this.registerProcedure({
      code: '70210',
      description: 'PulseCare Medical Procedure: Radiology & Advanced Imaging - Protocol Specification #022',
      category: 'Radiology & Advanced Imaging',
      specialty: 'Diagnostic Radiology',
      baseFee: 242.5,
      rvu: 4.14,
      workRVU: 2.28,
      facilityRVU: 1.45,
      malpracticeRVU: 0.41,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '70220',
      description: 'PulseCare Medical Procedure: Radiology & Advanced Imaging - Protocol Specification #023',
      category: 'Radiology & Advanced Imaging',
      specialty: 'Diagnostic Radiology',
      baseFee: 250.0,
      rvu: 4.28,
      workRVU: 2.35,
      facilityRVU: 1.5,
      malpracticeRVU: 0.43,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '70230',
      description: 'PulseCare Medical Procedure: Radiology & Advanced Imaging - Protocol Specification #024',
      category: 'Radiology & Advanced Imaging',
      specialty: 'Diagnostic Radiology',
      baseFee: 257.5,
      rvu: 4.42,
      workRVU: 2.43,
      facilityRVU: 1.55,
      malpracticeRVU: 0.44,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '70240',
      description: 'PulseCare Medical Procedure: Radiology & Advanced Imaging - Protocol Specification #025',
      category: 'Radiology & Advanced Imaging',
      specialty: 'Diagnostic Radiology',
      baseFee: 265.0,
      rvu: 4.56,
      workRVU: 2.51,
      facilityRVU: 1.6,
      malpracticeRVU: 0.46,
      globalPeriodDays: 0,
      requiresPriorAuth: true
    });
    this.registerProcedure({
      code: '70250',
      description: 'PulseCare Medical Procedure: Radiology & Advanced Imaging - Protocol Specification #026',
      category: 'Radiology & Advanced Imaging',
      specialty: 'Diagnostic Radiology',
      baseFee: 272.5,
      rvu: 4.7,
      workRVU: 2.59,
      facilityRVU: 1.65,
      malpracticeRVU: 0.47,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '70260',
      description: 'PulseCare Medical Procedure: Radiology & Advanced Imaging - Protocol Specification #027',
      category: 'Radiology & Advanced Imaging',
      specialty: 'Diagnostic Radiology',
      baseFee: 280.0,
      rvu: 4.84,
      workRVU: 2.66,
      facilityRVU: 1.69,
      malpracticeRVU: 0.48,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '70270',
      description: 'PulseCare Medical Procedure: Radiology & Advanced Imaging - Protocol Specification #028',
      category: 'Radiology & Advanced Imaging',
      specialty: 'Diagnostic Radiology',
      baseFee: 287.5,
      rvu: 4.98,
      workRVU: 2.74,
      facilityRVU: 1.74,
      malpracticeRVU: 0.5,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '70280',
      description: 'PulseCare Medical Procedure: Radiology & Advanced Imaging - Protocol Specification #029',
      category: 'Radiology & Advanced Imaging',
      specialty: 'Diagnostic Radiology',
      baseFee: 295.0,
      rvu: 5.12,
      workRVU: 2.82,
      facilityRVU: 1.79,
      malpracticeRVU: 0.51,
      globalPeriodDays: 0,
      requiresPriorAuth: true
    });
    this.registerProcedure({
      code: '70290',
      description: 'PulseCare Medical Procedure: Radiology & Advanced Imaging - Protocol Specification #030',
      category: 'Radiology & Advanced Imaging',
      specialty: 'Diagnostic Radiology',
      baseFee: 302.5,
      rvu: 5.26,
      workRVU: 2.89,
      facilityRVU: 1.84,
      malpracticeRVU: 0.53,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '70300',
      description: 'PulseCare Medical Procedure: Radiology & Advanced Imaging - Protocol Specification #031',
      category: 'Radiology & Advanced Imaging',
      specialty: 'Diagnostic Radiology',
      baseFee: 310.0,
      rvu: 5.4,
      workRVU: 2.97,
      facilityRVU: 1.89,
      malpracticeRVU: 0.54,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '70310',
      description: 'PulseCare Medical Procedure: Radiology & Advanced Imaging - Protocol Specification #032',
      category: 'Radiology & Advanced Imaging',
      specialty: 'Diagnostic Radiology',
      baseFee: 317.5,
      rvu: 5.54,
      workRVU: 3.05,
      facilityRVU: 1.94,
      malpracticeRVU: 0.55,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '70320',
      description: 'PulseCare Medical Procedure: Radiology & Advanced Imaging - Protocol Specification #033',
      category: 'Radiology & Advanced Imaging',
      specialty: 'Diagnostic Radiology',
      baseFee: 325.0,
      rvu: 5.68,
      workRVU: 3.12,
      facilityRVU: 1.99,
      malpracticeRVU: 0.57,
      globalPeriodDays: 0,
      requiresPriorAuth: true
    });
    this.registerProcedure({
      code: '70330',
      description: 'PulseCare Medical Procedure: Radiology & Advanced Imaging - Protocol Specification #034',
      category: 'Radiology & Advanced Imaging',
      specialty: 'Diagnostic Radiology',
      baseFee: 332.5,
      rvu: 5.82,
      workRVU: 3.2,
      facilityRVU: 2.04,
      malpracticeRVU: 0.58,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '70340',
      description: 'PulseCare Medical Procedure: Radiology & Advanced Imaging - Protocol Specification #035',
      category: 'Radiology & Advanced Imaging',
      specialty: 'Diagnostic Radiology',
      baseFee: 340.0,
      rvu: 5.96,
      workRVU: 3.28,
      facilityRVU: 2.09,
      malpracticeRVU: 0.6,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '70350',
      description: 'PulseCare Medical Procedure: Radiology & Advanced Imaging - Protocol Specification #036',
      category: 'Radiology & Advanced Imaging',
      specialty: 'Diagnostic Radiology',
      baseFee: 347.5,
      rvu: 6.1,
      workRVU: 3.35,
      facilityRVU: 2.13,
      malpracticeRVU: 0.61,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '70360',
      description: 'PulseCare Medical Procedure: Radiology & Advanced Imaging - Protocol Specification #037',
      category: 'Radiology & Advanced Imaging',
      specialty: 'Diagnostic Radiology',
      baseFee: 355.0,
      rvu: 6.24,
      workRVU: 3.43,
      facilityRVU: 2.18,
      malpracticeRVU: 0.62,
      globalPeriodDays: 0,
      requiresPriorAuth: true
    });
    this.registerProcedure({
      code: '70370',
      description: 'PulseCare Medical Procedure: Radiology & Advanced Imaging - Protocol Specification #038',
      category: 'Radiology & Advanced Imaging',
      specialty: 'Diagnostic Radiology',
      baseFee: 362.5,
      rvu: 6.38,
      workRVU: 3.51,
      facilityRVU: 2.23,
      malpracticeRVU: 0.64,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '70380',
      description: 'PulseCare Medical Procedure: Radiology & Advanced Imaging - Protocol Specification #039',
      category: 'Radiology & Advanced Imaging',
      specialty: 'Diagnostic Radiology',
      baseFee: 370.0,
      rvu: 6.52,
      workRVU: 3.59,
      facilityRVU: 2.28,
      malpracticeRVU: 0.65,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '70390',
      description: 'PulseCare Medical Procedure: Radiology & Advanced Imaging - Protocol Specification #040',
      category: 'Radiology & Advanced Imaging',
      specialty: 'Diagnostic Radiology',
      baseFee: 377.5,
      rvu: 6.66,
      workRVU: 3.66,
      facilityRVU: 2.33,
      malpracticeRVU: 0.67,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '70400',
      description: 'PulseCare Medical Procedure: Radiology & Advanced Imaging - Protocol Specification #041',
      category: 'Radiology & Advanced Imaging',
      specialty: 'Diagnostic Radiology',
      baseFee: 385.0,
      rvu: 6.8,
      workRVU: 3.74,
      facilityRVU: 2.38,
      malpracticeRVU: 0.68,
      globalPeriodDays: 0,
      requiresPriorAuth: true
    });
    this.registerProcedure({
      code: '70410',
      description: 'PulseCare Medical Procedure: Radiology & Advanced Imaging - Protocol Specification #042',
      category: 'Radiology & Advanced Imaging',
      specialty: 'Diagnostic Radiology',
      baseFee: 392.5,
      rvu: 6.94,
      workRVU: 3.82,
      facilityRVU: 2.43,
      malpracticeRVU: 0.69,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '70420',
      description: 'PulseCare Medical Procedure: Radiology & Advanced Imaging - Protocol Specification #043',
      category: 'Radiology & Advanced Imaging',
      specialty: 'Diagnostic Radiology',
      baseFee: 400.0,
      rvu: 7.08,
      workRVU: 3.89,
      facilityRVU: 2.48,
      malpracticeRVU: 0.71,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '70430',
      description: 'PulseCare Medical Procedure: Radiology & Advanced Imaging - Protocol Specification #044',
      category: 'Radiology & Advanced Imaging',
      specialty: 'Diagnostic Radiology',
      baseFee: 407.5,
      rvu: 7.22,
      workRVU: 3.97,
      facilityRVU: 2.53,
      malpracticeRVU: 0.72,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '70440',
      description: 'PulseCare Medical Procedure: Radiology & Advanced Imaging - Protocol Specification #045',
      category: 'Radiology & Advanced Imaging',
      specialty: 'Diagnostic Radiology',
      baseFee: 415.0,
      rvu: 7.36,
      workRVU: 4.05,
      facilityRVU: 2.58,
      malpracticeRVU: 0.74,
      globalPeriodDays: 0,
      requiresPriorAuth: true
    });
    this.registerProcedure({
      code: '70450',
      description: 'PulseCare Medical Procedure: Radiology & Advanced Imaging - Protocol Specification #046',
      category: 'Radiology & Advanced Imaging',
      specialty: 'Diagnostic Radiology',
      baseFee: 422.5,
      rvu: 7.5,
      workRVU: 4.12,
      facilityRVU: 2.62,
      malpracticeRVU: 0.75,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '70460',
      description: 'PulseCare Medical Procedure: Radiology & Advanced Imaging - Protocol Specification #047',
      category: 'Radiology & Advanced Imaging',
      specialty: 'Diagnostic Radiology',
      baseFee: 430.0,
      rvu: 7.64,
      workRVU: 4.2,
      facilityRVU: 2.67,
      malpracticeRVU: 0.76,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '70470',
      description: 'PulseCare Medical Procedure: Radiology & Advanced Imaging - Protocol Specification #048',
      category: 'Radiology & Advanced Imaging',
      specialty: 'Diagnostic Radiology',
      baseFee: 437.5,
      rvu: 7.78,
      workRVU: 4.28,
      facilityRVU: 2.72,
      malpracticeRVU: 0.78,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '70480',
      description: 'PulseCare Medical Procedure: Radiology & Advanced Imaging - Protocol Specification #049',
      category: 'Radiology & Advanced Imaging',
      specialty: 'Diagnostic Radiology',
      baseFee: 445.0,
      rvu: 7.92,
      workRVU: 4.36,
      facilityRVU: 2.77,
      malpracticeRVU: 0.79,
      globalPeriodDays: 0,
      requiresPriorAuth: true
    });
    this.registerProcedure({
      code: '70490',
      description: 'PulseCare Medical Procedure: Radiology & Advanced Imaging - Protocol Specification #050',
      category: 'Radiology & Advanced Imaging',
      specialty: 'Diagnostic Radiology',
      baseFee: 452.5,
      rvu: 8.06,
      workRVU: 4.43,
      facilityRVU: 2.82,
      malpracticeRVU: 0.81,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '70500',
      description: 'PulseCare Medical Procedure: Radiology & Advanced Imaging - Protocol Specification #051',
      category: 'Radiology & Advanced Imaging',
      specialty: 'Diagnostic Radiology',
      baseFee: 460.0,
      rvu: 8.2,
      workRVU: 4.51,
      facilityRVU: 2.87,
      malpracticeRVU: 0.82,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '70510',
      description: 'PulseCare Medical Procedure: Radiology & Advanced Imaging - Protocol Specification #052',
      category: 'Radiology & Advanced Imaging',
      specialty: 'Diagnostic Radiology',
      baseFee: 467.5,
      rvu: 8.34,
      workRVU: 4.59,
      facilityRVU: 2.92,
      malpracticeRVU: 0.83,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '70520',
      description: 'PulseCare Medical Procedure: Radiology & Advanced Imaging - Protocol Specification #053',
      category: 'Radiology & Advanced Imaging',
      specialty: 'Diagnostic Radiology',
      baseFee: 475.0,
      rvu: 8.48,
      workRVU: 4.66,
      facilityRVU: 2.97,
      malpracticeRVU: 0.85,
      globalPeriodDays: 0,
      requiresPriorAuth: true
    });
    this.registerProcedure({
      code: '70530',
      description: 'PulseCare Medical Procedure: Radiology & Advanced Imaging - Protocol Specification #054',
      category: 'Radiology & Advanced Imaging',
      specialty: 'Diagnostic Radiology',
      baseFee: 482.5,
      rvu: 8.62,
      workRVU: 4.74,
      facilityRVU: 3.02,
      malpracticeRVU: 0.86,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '70540',
      description: 'PulseCare Medical Procedure: Radiology & Advanced Imaging - Protocol Specification #055',
      category: 'Radiology & Advanced Imaging',
      specialty: 'Diagnostic Radiology',
      baseFee: 490.0,
      rvu: 8.76,
      workRVU: 4.82,
      facilityRVU: 3.07,
      malpracticeRVU: 0.88,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '70550',
      description: 'PulseCare Medical Procedure: Radiology & Advanced Imaging - Protocol Specification #056',
      category: 'Radiology & Advanced Imaging',
      specialty: 'Diagnostic Radiology',
      baseFee: 497.5,
      rvu: 8.9,
      workRVU: 4.9,
      facilityRVU: 3.11,
      malpracticeRVU: 0.89,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '70560',
      description: 'PulseCare Medical Procedure: Radiology & Advanced Imaging - Protocol Specification #057',
      category: 'Radiology & Advanced Imaging',
      specialty: 'Diagnostic Radiology',
      baseFee: 505.0,
      rvu: 9.04,
      workRVU: 4.97,
      facilityRVU: 3.16,
      malpracticeRVU: 0.9,
      globalPeriodDays: 0,
      requiresPriorAuth: true
    });
    this.registerProcedure({
      code: '70570',
      description: 'PulseCare Medical Procedure: Radiology & Advanced Imaging - Protocol Specification #058',
      category: 'Radiology & Advanced Imaging',
      specialty: 'Diagnostic Radiology',
      baseFee: 512.5,
      rvu: 9.18,
      workRVU: 5.05,
      facilityRVU: 3.21,
      malpracticeRVU: 0.92,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '70580',
      description: 'PulseCare Medical Procedure: Radiology & Advanced Imaging - Protocol Specification #059',
      category: 'Radiology & Advanced Imaging',
      specialty: 'Diagnostic Radiology',
      baseFee: 520.0,
      rvu: 9.32,
      workRVU: 5.13,
      facilityRVU: 3.26,
      malpracticeRVU: 0.93,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '70590',
      description: 'PulseCare Medical Procedure: Radiology & Advanced Imaging - Protocol Specification #060',
      category: 'Radiology & Advanced Imaging',
      specialty: 'Diagnostic Radiology',
      baseFee: 527.5,
      rvu: 9.46,
      workRVU: 5.2,
      facilityRVU: 3.31,
      malpracticeRVU: 0.95,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '70600',
      description: 'PulseCare Medical Procedure: Radiology & Advanced Imaging - Protocol Specification #061',
      category: 'Radiology & Advanced Imaging',
      specialty: 'Diagnostic Radiology',
      baseFee: 535.0,
      rvu: 9.6,
      workRVU: 5.28,
      facilityRVU: 3.36,
      malpracticeRVU: 0.96,
      globalPeriodDays: 0,
      requiresPriorAuth: true
    });
    this.registerProcedure({
      code: '70610',
      description: 'PulseCare Medical Procedure: Radiology & Advanced Imaging - Protocol Specification #062',
      category: 'Radiology & Advanced Imaging',
      specialty: 'Diagnostic Radiology',
      baseFee: 542.5,
      rvu: 9.74,
      workRVU: 5.36,
      facilityRVU: 3.41,
      malpracticeRVU: 0.97,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '70620',
      description: 'PulseCare Medical Procedure: Radiology & Advanced Imaging - Protocol Specification #063',
      category: 'Radiology & Advanced Imaging',
      specialty: 'Diagnostic Radiology',
      baseFee: 550.0,
      rvu: 9.88,
      workRVU: 5.43,
      facilityRVU: 3.46,
      malpracticeRVU: 0.99,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '70630',
      description: 'PulseCare Medical Procedure: Radiology & Advanced Imaging - Protocol Specification #064',
      category: 'Radiology & Advanced Imaging',
      specialty: 'Diagnostic Radiology',
      baseFee: 557.5,
      rvu: 10.02,
      workRVU: 5.51,
      facilityRVU: 3.51,
      malpracticeRVU: 1.0,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '70640',
      description: 'PulseCare Medical Procedure: Radiology & Advanced Imaging - Protocol Specification #065',
      category: 'Radiology & Advanced Imaging',
      specialty: 'Diagnostic Radiology',
      baseFee: 565.0,
      rvu: 10.16,
      workRVU: 5.59,
      facilityRVU: 3.56,
      malpracticeRVU: 1.02,
      globalPeriodDays: 0,
      requiresPriorAuth: true
    });
    this.registerProcedure({
      code: '70650',
      description: 'PulseCare Medical Procedure: Radiology & Advanced Imaging - Protocol Specification #066',
      category: 'Radiology & Advanced Imaging',
      specialty: 'Diagnostic Radiology',
      baseFee: 572.5,
      rvu: 10.3,
      workRVU: 5.67,
      facilityRVU: 3.6,
      malpracticeRVU: 1.03,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '70660',
      description: 'PulseCare Medical Procedure: Radiology & Advanced Imaging - Protocol Specification #067',
      category: 'Radiology & Advanced Imaging',
      specialty: 'Diagnostic Radiology',
      baseFee: 580.0,
      rvu: 10.44,
      workRVU: 5.74,
      facilityRVU: 3.65,
      malpracticeRVU: 1.04,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '70670',
      description: 'PulseCare Medical Procedure: Radiology & Advanced Imaging - Protocol Specification #068',
      category: 'Radiology & Advanced Imaging',
      specialty: 'Diagnostic Radiology',
      baseFee: 587.5,
      rvu: 10.58,
      workRVU: 5.82,
      facilityRVU: 3.7,
      malpracticeRVU: 1.06,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '70680',
      description: 'PulseCare Medical Procedure: Radiology & Advanced Imaging - Protocol Specification #069',
      category: 'Radiology & Advanced Imaging',
      specialty: 'Diagnostic Radiology',
      baseFee: 595.0,
      rvu: 10.72,
      workRVU: 5.9,
      facilityRVU: 3.75,
      malpracticeRVU: 1.07,
      globalPeriodDays: 0,
      requiresPriorAuth: true
    });
    this.registerProcedure({
      code: '70690',
      description: 'PulseCare Medical Procedure: Radiology & Advanced Imaging - Protocol Specification #070',
      category: 'Radiology & Advanced Imaging',
      specialty: 'Diagnostic Radiology',
      baseFee: 602.5,
      rvu: 10.86,
      workRVU: 5.97,
      facilityRVU: 3.8,
      malpracticeRVU: 1.09,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '70700',
      description: 'PulseCare Medical Procedure: Radiology & Advanced Imaging - Protocol Specification #071',
      category: 'Radiology & Advanced Imaging',
      specialty: 'Diagnostic Radiology',
      baseFee: 610.0,
      rvu: 11.0,
      workRVU: 6.05,
      facilityRVU: 3.85,
      malpracticeRVU: 1.1,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '70710',
      description: 'PulseCare Medical Procedure: Radiology & Advanced Imaging - Protocol Specification #072',
      category: 'Radiology & Advanced Imaging',
      specialty: 'Diagnostic Radiology',
      baseFee: 617.5,
      rvu: 11.14,
      workRVU: 6.13,
      facilityRVU: 3.9,
      malpracticeRVU: 1.11,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '70720',
      description: 'PulseCare Medical Procedure: Radiology & Advanced Imaging - Protocol Specification #073',
      category: 'Radiology & Advanced Imaging',
      specialty: 'Diagnostic Radiology',
      baseFee: 625.0,
      rvu: 11.28,
      workRVU: 6.2,
      facilityRVU: 3.95,
      malpracticeRVU: 1.13,
      globalPeriodDays: 0,
      requiresPriorAuth: true
    });
    this.registerProcedure({
      code: '70730',
      description: 'PulseCare Medical Procedure: Radiology & Advanced Imaging - Protocol Specification #074',
      category: 'Radiology & Advanced Imaging',
      specialty: 'Diagnostic Radiology',
      baseFee: 632.5,
      rvu: 11.42,
      workRVU: 6.28,
      facilityRVU: 4.0,
      malpracticeRVU: 1.14,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '70740',
      description: 'PulseCare Medical Procedure: Radiology & Advanced Imaging - Protocol Specification #075',
      category: 'Radiology & Advanced Imaging',
      specialty: 'Diagnostic Radiology',
      baseFee: 640.0,
      rvu: 11.56,
      workRVU: 6.36,
      facilityRVU: 4.05,
      malpracticeRVU: 1.16,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '70750',
      description: 'PulseCare Medical Procedure: Radiology & Advanced Imaging - Protocol Specification #076',
      category: 'Radiology & Advanced Imaging',
      specialty: 'Diagnostic Radiology',
      baseFee: 647.5,
      rvu: 11.7,
      workRVU: 6.44,
      facilityRVU: 4.09,
      malpracticeRVU: 1.17,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '70760',
      description: 'PulseCare Medical Procedure: Radiology & Advanced Imaging - Protocol Specification #077',
      category: 'Radiology & Advanced Imaging',
      specialty: 'Diagnostic Radiology',
      baseFee: 655.0,
      rvu: 11.84,
      workRVU: 6.51,
      facilityRVU: 4.14,
      malpracticeRVU: 1.18,
      globalPeriodDays: 0,
      requiresPriorAuth: true
    });
    this.registerProcedure({
      code: '70770',
      description: 'PulseCare Medical Procedure: Radiology & Advanced Imaging - Protocol Specification #078',
      category: 'Radiology & Advanced Imaging',
      specialty: 'Diagnostic Radiology',
      baseFee: 662.5,
      rvu: 11.98,
      workRVU: 6.59,
      facilityRVU: 4.19,
      malpracticeRVU: 1.2,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '70780',
      description: 'PulseCare Medical Procedure: Radiology & Advanced Imaging - Protocol Specification #079',
      category: 'Radiology & Advanced Imaging',
      specialty: 'Diagnostic Radiology',
      baseFee: 670.0,
      rvu: 12.12,
      workRVU: 6.67,
      facilityRVU: 4.24,
      malpracticeRVU: 1.21,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '70790',
      description: 'PulseCare Medical Procedure: Radiology & Advanced Imaging - Protocol Specification #080',
      category: 'Radiology & Advanced Imaging',
      specialty: 'Diagnostic Radiology',
      baseFee: 677.5,
      rvu: 12.26,
      workRVU: 6.74,
      facilityRVU: 4.29,
      malpracticeRVU: 1.23,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '70800',
      description: 'PulseCare Medical Procedure: Radiology & Advanced Imaging - Protocol Specification #081',
      category: 'Radiology & Advanced Imaging',
      specialty: 'Diagnostic Radiology',
      baseFee: 685.0,
      rvu: 12.4,
      workRVU: 6.82,
      facilityRVU: 4.34,
      malpracticeRVU: 1.24,
      globalPeriodDays: 0,
      requiresPriorAuth: true
    });
    this.registerProcedure({
      code: '70810',
      description: 'PulseCare Medical Procedure: Radiology & Advanced Imaging - Protocol Specification #082',
      category: 'Radiology & Advanced Imaging',
      specialty: 'Diagnostic Radiology',
      baseFee: 692.5,
      rvu: 12.54,
      workRVU: 6.9,
      facilityRVU: 4.39,
      malpracticeRVU: 1.25,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '70820',
      description: 'PulseCare Medical Procedure: Radiology & Advanced Imaging - Protocol Specification #083',
      category: 'Radiology & Advanced Imaging',
      specialty: 'Diagnostic Radiology',
      baseFee: 700.0,
      rvu: 12.68,
      workRVU: 6.97,
      facilityRVU: 4.44,
      malpracticeRVU: 1.27,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '70830',
      description: 'PulseCare Medical Procedure: Radiology & Advanced Imaging - Protocol Specification #084',
      category: 'Radiology & Advanced Imaging',
      specialty: 'Diagnostic Radiology',
      baseFee: 707.5,
      rvu: 12.82,
      workRVU: 7.05,
      facilityRVU: 4.49,
      malpracticeRVU: 1.28,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '70840',
      description: 'PulseCare Medical Procedure: Radiology & Advanced Imaging - Protocol Specification #085',
      category: 'Radiology & Advanced Imaging',
      specialty: 'Diagnostic Radiology',
      baseFee: 715.0,
      rvu: 12.96,
      workRVU: 7.13,
      facilityRVU: 4.54,
      malpracticeRVU: 1.3,
      globalPeriodDays: 0,
      requiresPriorAuth: true
    });
    this.registerProcedure({
      code: '70850',
      description: 'PulseCare Medical Procedure: Radiology & Advanced Imaging - Protocol Specification #086',
      category: 'Radiology & Advanced Imaging',
      specialty: 'Diagnostic Radiology',
      baseFee: 722.5,
      rvu: 13.1,
      workRVU: 7.21,
      facilityRVU: 4.58,
      malpracticeRVU: 1.31,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '70860',
      description: 'PulseCare Medical Procedure: Radiology & Advanced Imaging - Protocol Specification #087',
      category: 'Radiology & Advanced Imaging',
      specialty: 'Diagnostic Radiology',
      baseFee: 730.0,
      rvu: 13.24,
      workRVU: 7.28,
      facilityRVU: 4.63,
      malpracticeRVU: 1.32,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '70870',
      description: 'PulseCare Medical Procedure: Radiology & Advanced Imaging - Protocol Specification #088',
      category: 'Radiology & Advanced Imaging',
      specialty: 'Diagnostic Radiology',
      baseFee: 737.5,
      rvu: 13.38,
      workRVU: 7.36,
      facilityRVU: 4.68,
      malpracticeRVU: 1.34,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '70880',
      description: 'PulseCare Medical Procedure: Radiology & Advanced Imaging - Protocol Specification #089',
      category: 'Radiology & Advanced Imaging',
      specialty: 'Diagnostic Radiology',
      baseFee: 745.0,
      rvu: 13.52,
      workRVU: 7.44,
      facilityRVU: 4.73,
      malpracticeRVU: 1.35,
      globalPeriodDays: 0,
      requiresPriorAuth: true
    });
    this.registerProcedure({
      code: '70890',
      description: 'PulseCare Medical Procedure: Radiology & Advanced Imaging - Protocol Specification #090',
      category: 'Radiology & Advanced Imaging',
      specialty: 'Diagnostic Radiology',
      baseFee: 752.5,
      rvu: 13.66,
      workRVU: 7.51,
      facilityRVU: 4.78,
      malpracticeRVU: 1.37,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '70900',
      description: 'PulseCare Medical Procedure: Radiology & Advanced Imaging - Protocol Specification #091',
      category: 'Radiology & Advanced Imaging',
      specialty: 'Diagnostic Radiology',
      baseFee: 760.0,
      rvu: 13.8,
      workRVU: 7.59,
      facilityRVU: 4.83,
      malpracticeRVU: 1.38,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '70910',
      description: 'PulseCare Medical Procedure: Radiology & Advanced Imaging - Protocol Specification #092',
      category: 'Radiology & Advanced Imaging',
      specialty: 'Diagnostic Radiology',
      baseFee: 767.5,
      rvu: 13.94,
      workRVU: 7.67,
      facilityRVU: 4.88,
      malpracticeRVU: 1.39,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '70920',
      description: 'PulseCare Medical Procedure: Radiology & Advanced Imaging - Protocol Specification #093',
      category: 'Radiology & Advanced Imaging',
      specialty: 'Diagnostic Radiology',
      baseFee: 775.0,
      rvu: 14.08,
      workRVU: 7.74,
      facilityRVU: 4.93,
      malpracticeRVU: 1.41,
      globalPeriodDays: 0,
      requiresPriorAuth: true
    });
    this.registerProcedure({
      code: '70930',
      description: 'PulseCare Medical Procedure: Radiology & Advanced Imaging - Protocol Specification #094',
      category: 'Radiology & Advanced Imaging',
      specialty: 'Diagnostic Radiology',
      baseFee: 782.5,
      rvu: 14.22,
      workRVU: 7.82,
      facilityRVU: 4.98,
      malpracticeRVU: 1.42,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '70940',
      description: 'PulseCare Medical Procedure: Radiology & Advanced Imaging - Protocol Specification #095',
      category: 'Radiology & Advanced Imaging',
      specialty: 'Diagnostic Radiology',
      baseFee: 790.0,
      rvu: 14.36,
      workRVU: 7.9,
      facilityRVU: 5.03,
      malpracticeRVU: 1.44,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '70950',
      description: 'PulseCare Medical Procedure: Radiology & Advanced Imaging - Protocol Specification #096',
      category: 'Radiology & Advanced Imaging',
      specialty: 'Diagnostic Radiology',
      baseFee: 797.5,
      rvu: 14.5,
      workRVU: 7.98,
      facilityRVU: 5.07,
      malpracticeRVU: 1.45,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '70960',
      description: 'PulseCare Medical Procedure: Radiology & Advanced Imaging - Protocol Specification #097',
      category: 'Radiology & Advanced Imaging',
      specialty: 'Diagnostic Radiology',
      baseFee: 805.0,
      rvu: 14.64,
      workRVU: 8.05,
      facilityRVU: 5.12,
      malpracticeRVU: 1.46,
      globalPeriodDays: 0,
      requiresPriorAuth: true
    });
    this.registerProcedure({
      code: '70970',
      description: 'PulseCare Medical Procedure: Radiology & Advanced Imaging - Protocol Specification #098',
      category: 'Radiology & Advanced Imaging',
      specialty: 'Diagnostic Radiology',
      baseFee: 812.5,
      rvu: 14.78,
      workRVU: 8.13,
      facilityRVU: 5.17,
      malpracticeRVU: 1.48,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '70980',
      description: 'PulseCare Medical Procedure: Radiology & Advanced Imaging - Protocol Specification #099',
      category: 'Radiology & Advanced Imaging',
      specialty: 'Diagnostic Radiology',
      baseFee: 820.0,
      rvu: 14.92,
      workRVU: 8.21,
      facilityRVU: 5.22,
      malpracticeRVU: 1.49,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '70990',
      description: 'PulseCare Medical Procedure: Radiology & Advanced Imaging - Protocol Specification #100',
      category: 'Radiology & Advanced Imaging',
      specialty: 'Diagnostic Radiology',
      baseFee: 827.5,
      rvu: 15.06,
      workRVU: 8.28,
      facilityRVU: 5.27,
      malpracticeRVU: 1.51,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '90000',
      description: 'PulseCare Medical Procedure: Medicine, Vaccines & Therapeutics - Protocol Specification #001',
      category: 'Medicine, Vaccines & Therapeutics',
      specialty: 'Preventive Medicine & Infusions',
      baseFee: 85.0,
      rvu: 1.2,
      workRVU: 0.66,
      facilityRVU: 0.42,
      malpracticeRVU: 0.12,
      globalPeriodDays: 0,
      requiresPriorAuth: true
    });
    this.registerProcedure({
      code: '90010',
      description: 'PulseCare Medical Procedure: Medicine, Vaccines & Therapeutics - Protocol Specification #002',
      category: 'Medicine, Vaccines & Therapeutics',
      specialty: 'Preventive Medicine & Infusions',
      baseFee: 92.5,
      rvu: 1.34,
      workRVU: 0.74,
      facilityRVU: 0.47,
      malpracticeRVU: 0.13,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '90020',
      description: 'PulseCare Medical Procedure: Medicine, Vaccines & Therapeutics - Protocol Specification #003',
      category: 'Medicine, Vaccines & Therapeutics',
      specialty: 'Preventive Medicine & Infusions',
      baseFee: 100.0,
      rvu: 1.48,
      workRVU: 0.81,
      facilityRVU: 0.52,
      malpracticeRVU: 0.15,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '90030',
      description: 'PulseCare Medical Procedure: Medicine, Vaccines & Therapeutics - Protocol Specification #004',
      category: 'Medicine, Vaccines & Therapeutics',
      specialty: 'Preventive Medicine & Infusions',
      baseFee: 107.5,
      rvu: 1.62,
      workRVU: 0.89,
      facilityRVU: 0.57,
      malpracticeRVU: 0.16,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '90040',
      description: 'PulseCare Medical Procedure: Medicine, Vaccines & Therapeutics - Protocol Specification #005',
      category: 'Medicine, Vaccines & Therapeutics',
      specialty: 'Preventive Medicine & Infusions',
      baseFee: 115.0,
      rvu: 1.76,
      workRVU: 0.97,
      facilityRVU: 0.62,
      malpracticeRVU: 0.18,
      globalPeriodDays: 0,
      requiresPriorAuth: true
    });
    this.registerProcedure({
      code: '90050',
      description: 'PulseCare Medical Procedure: Medicine, Vaccines & Therapeutics - Protocol Specification #006',
      category: 'Medicine, Vaccines & Therapeutics',
      specialty: 'Preventive Medicine & Infusions',
      baseFee: 122.5,
      rvu: 1.9,
      workRVU: 1.04,
      facilityRVU: 0.66,
      malpracticeRVU: 0.19,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '90060',
      description: 'PulseCare Medical Procedure: Medicine, Vaccines & Therapeutics - Protocol Specification #007',
      category: 'Medicine, Vaccines & Therapeutics',
      specialty: 'Preventive Medicine & Infusions',
      baseFee: 130.0,
      rvu: 2.04,
      workRVU: 1.12,
      facilityRVU: 0.71,
      malpracticeRVU: 0.2,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '90070',
      description: 'PulseCare Medical Procedure: Medicine, Vaccines & Therapeutics - Protocol Specification #008',
      category: 'Medicine, Vaccines & Therapeutics',
      specialty: 'Preventive Medicine & Infusions',
      baseFee: 137.5,
      rvu: 2.18,
      workRVU: 1.2,
      facilityRVU: 0.76,
      malpracticeRVU: 0.22,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '90080',
      description: 'PulseCare Medical Procedure: Medicine, Vaccines & Therapeutics - Protocol Specification #009',
      category: 'Medicine, Vaccines & Therapeutics',
      specialty: 'Preventive Medicine & Infusions',
      baseFee: 145.0,
      rvu: 2.32,
      workRVU: 1.28,
      facilityRVU: 0.81,
      malpracticeRVU: 0.23,
      globalPeriodDays: 0,
      requiresPriorAuth: true
    });
    this.registerProcedure({
      code: '90090',
      description: 'PulseCare Medical Procedure: Medicine, Vaccines & Therapeutics - Protocol Specification #010',
      category: 'Medicine, Vaccines & Therapeutics',
      specialty: 'Preventive Medicine & Infusions',
      baseFee: 152.5,
      rvu: 2.46,
      workRVU: 1.35,
      facilityRVU: 0.86,
      malpracticeRVU: 0.25,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '90100',
      description: 'PulseCare Medical Procedure: Medicine, Vaccines & Therapeutics - Protocol Specification #011',
      category: 'Medicine, Vaccines & Therapeutics',
      specialty: 'Preventive Medicine & Infusions',
      baseFee: 160.0,
      rvu: 2.6,
      workRVU: 1.43,
      facilityRVU: 0.91,
      malpracticeRVU: 0.26,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '90110',
      description: 'PulseCare Medical Procedure: Medicine, Vaccines & Therapeutics - Protocol Specification #012',
      category: 'Medicine, Vaccines & Therapeutics',
      specialty: 'Preventive Medicine & Infusions',
      baseFee: 167.5,
      rvu: 2.74,
      workRVU: 1.51,
      facilityRVU: 0.96,
      malpracticeRVU: 0.27,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '90120',
      description: 'PulseCare Medical Procedure: Medicine, Vaccines & Therapeutics - Protocol Specification #013',
      category: 'Medicine, Vaccines & Therapeutics',
      specialty: 'Preventive Medicine & Infusions',
      baseFee: 175.0,
      rvu: 2.88,
      workRVU: 1.58,
      facilityRVU: 1.01,
      malpracticeRVU: 0.29,
      globalPeriodDays: 0,
      requiresPriorAuth: true
    });
    this.registerProcedure({
      code: '90130',
      description: 'PulseCare Medical Procedure: Medicine, Vaccines & Therapeutics - Protocol Specification #014',
      category: 'Medicine, Vaccines & Therapeutics',
      specialty: 'Preventive Medicine & Infusions',
      baseFee: 182.5,
      rvu: 3.02,
      workRVU: 1.66,
      facilityRVU: 1.06,
      malpracticeRVU: 0.3,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '90140',
      description: 'PulseCare Medical Procedure: Medicine, Vaccines & Therapeutics - Protocol Specification #015',
      category: 'Medicine, Vaccines & Therapeutics',
      specialty: 'Preventive Medicine & Infusions',
      baseFee: 190.0,
      rvu: 3.16,
      workRVU: 1.74,
      facilityRVU: 1.11,
      malpracticeRVU: 0.32,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '90150',
      description: 'PulseCare Medical Procedure: Medicine, Vaccines & Therapeutics - Protocol Specification #016',
      category: 'Medicine, Vaccines & Therapeutics',
      specialty: 'Preventive Medicine & Infusions',
      baseFee: 197.5,
      rvu: 3.3,
      workRVU: 1.81,
      facilityRVU: 1.15,
      malpracticeRVU: 0.33,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '90160',
      description: 'PulseCare Medical Procedure: Medicine, Vaccines & Therapeutics - Protocol Specification #017',
      category: 'Medicine, Vaccines & Therapeutics',
      specialty: 'Preventive Medicine & Infusions',
      baseFee: 205.0,
      rvu: 3.44,
      workRVU: 1.89,
      facilityRVU: 1.2,
      malpracticeRVU: 0.34,
      globalPeriodDays: 0,
      requiresPriorAuth: true
    });
    this.registerProcedure({
      code: '90170',
      description: 'PulseCare Medical Procedure: Medicine, Vaccines & Therapeutics - Protocol Specification #018',
      category: 'Medicine, Vaccines & Therapeutics',
      specialty: 'Preventive Medicine & Infusions',
      baseFee: 212.5,
      rvu: 3.58,
      workRVU: 1.97,
      facilityRVU: 1.25,
      malpracticeRVU: 0.36,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '90180',
      description: 'PulseCare Medical Procedure: Medicine, Vaccines & Therapeutics - Protocol Specification #019',
      category: 'Medicine, Vaccines & Therapeutics',
      specialty: 'Preventive Medicine & Infusions',
      baseFee: 220.0,
      rvu: 3.72,
      workRVU: 2.05,
      facilityRVU: 1.3,
      malpracticeRVU: 0.37,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '90190',
      description: 'PulseCare Medical Procedure: Medicine, Vaccines & Therapeutics - Protocol Specification #020',
      category: 'Medicine, Vaccines & Therapeutics',
      specialty: 'Preventive Medicine & Infusions',
      baseFee: 227.5,
      rvu: 3.86,
      workRVU: 2.12,
      facilityRVU: 1.35,
      malpracticeRVU: 0.39,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '90200',
      description: 'PulseCare Medical Procedure: Medicine, Vaccines & Therapeutics - Protocol Specification #021',
      category: 'Medicine, Vaccines & Therapeutics',
      specialty: 'Preventive Medicine & Infusions',
      baseFee: 235.0,
      rvu: 4.0,
      workRVU: 2.2,
      facilityRVU: 1.4,
      malpracticeRVU: 0.4,
      globalPeriodDays: 0,
      requiresPriorAuth: true
    });
    this.registerProcedure({
      code: '90210',
      description: 'PulseCare Medical Procedure: Medicine, Vaccines & Therapeutics - Protocol Specification #022',
      category: 'Medicine, Vaccines & Therapeutics',
      specialty: 'Preventive Medicine & Infusions',
      baseFee: 242.5,
      rvu: 4.14,
      workRVU: 2.28,
      facilityRVU: 1.45,
      malpracticeRVU: 0.41,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '90220',
      description: 'PulseCare Medical Procedure: Medicine, Vaccines & Therapeutics - Protocol Specification #023',
      category: 'Medicine, Vaccines & Therapeutics',
      specialty: 'Preventive Medicine & Infusions',
      baseFee: 250.0,
      rvu: 4.28,
      workRVU: 2.35,
      facilityRVU: 1.5,
      malpracticeRVU: 0.43,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '90230',
      description: 'PulseCare Medical Procedure: Medicine, Vaccines & Therapeutics - Protocol Specification #024',
      category: 'Medicine, Vaccines & Therapeutics',
      specialty: 'Preventive Medicine & Infusions',
      baseFee: 257.5,
      rvu: 4.42,
      workRVU: 2.43,
      facilityRVU: 1.55,
      malpracticeRVU: 0.44,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '90240',
      description: 'PulseCare Medical Procedure: Medicine, Vaccines & Therapeutics - Protocol Specification #025',
      category: 'Medicine, Vaccines & Therapeutics',
      specialty: 'Preventive Medicine & Infusions',
      baseFee: 265.0,
      rvu: 4.56,
      workRVU: 2.51,
      facilityRVU: 1.6,
      malpracticeRVU: 0.46,
      globalPeriodDays: 0,
      requiresPriorAuth: true
    });
    this.registerProcedure({
      code: '90250',
      description: 'PulseCare Medical Procedure: Medicine, Vaccines & Therapeutics - Protocol Specification #026',
      category: 'Medicine, Vaccines & Therapeutics',
      specialty: 'Preventive Medicine & Infusions',
      baseFee: 272.5,
      rvu: 4.7,
      workRVU: 2.59,
      facilityRVU: 1.65,
      malpracticeRVU: 0.47,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '90260',
      description: 'PulseCare Medical Procedure: Medicine, Vaccines & Therapeutics - Protocol Specification #027',
      category: 'Medicine, Vaccines & Therapeutics',
      specialty: 'Preventive Medicine & Infusions',
      baseFee: 280.0,
      rvu: 4.84,
      workRVU: 2.66,
      facilityRVU: 1.69,
      malpracticeRVU: 0.48,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '90270',
      description: 'PulseCare Medical Procedure: Medicine, Vaccines & Therapeutics - Protocol Specification #028',
      category: 'Medicine, Vaccines & Therapeutics',
      specialty: 'Preventive Medicine & Infusions',
      baseFee: 287.5,
      rvu: 4.98,
      workRVU: 2.74,
      facilityRVU: 1.74,
      malpracticeRVU: 0.5,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '90280',
      description: 'PulseCare Medical Procedure: Medicine, Vaccines & Therapeutics - Protocol Specification #029',
      category: 'Medicine, Vaccines & Therapeutics',
      specialty: 'Preventive Medicine & Infusions',
      baseFee: 295.0,
      rvu: 5.12,
      workRVU: 2.82,
      facilityRVU: 1.79,
      malpracticeRVU: 0.51,
      globalPeriodDays: 0,
      requiresPriorAuth: true
    });
    this.registerProcedure({
      code: '90290',
      description: 'PulseCare Medical Procedure: Medicine, Vaccines & Therapeutics - Protocol Specification #030',
      category: 'Medicine, Vaccines & Therapeutics',
      specialty: 'Preventive Medicine & Infusions',
      baseFee: 302.5,
      rvu: 5.26,
      workRVU: 2.89,
      facilityRVU: 1.84,
      malpracticeRVU: 0.53,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '90300',
      description: 'PulseCare Medical Procedure: Medicine, Vaccines & Therapeutics - Protocol Specification #031',
      category: 'Medicine, Vaccines & Therapeutics',
      specialty: 'Preventive Medicine & Infusions',
      baseFee: 310.0,
      rvu: 5.4,
      workRVU: 2.97,
      facilityRVU: 1.89,
      malpracticeRVU: 0.54,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '90310',
      description: 'PulseCare Medical Procedure: Medicine, Vaccines & Therapeutics - Protocol Specification #032',
      category: 'Medicine, Vaccines & Therapeutics',
      specialty: 'Preventive Medicine & Infusions',
      baseFee: 317.5,
      rvu: 5.54,
      workRVU: 3.05,
      facilityRVU: 1.94,
      malpracticeRVU: 0.55,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '90320',
      description: 'PulseCare Medical Procedure: Medicine, Vaccines & Therapeutics - Protocol Specification #033',
      category: 'Medicine, Vaccines & Therapeutics',
      specialty: 'Preventive Medicine & Infusions',
      baseFee: 325.0,
      rvu: 5.68,
      workRVU: 3.12,
      facilityRVU: 1.99,
      malpracticeRVU: 0.57,
      globalPeriodDays: 0,
      requiresPriorAuth: true
    });
    this.registerProcedure({
      code: '90330',
      description: 'PulseCare Medical Procedure: Medicine, Vaccines & Therapeutics - Protocol Specification #034',
      category: 'Medicine, Vaccines & Therapeutics',
      specialty: 'Preventive Medicine & Infusions',
      baseFee: 332.5,
      rvu: 5.82,
      workRVU: 3.2,
      facilityRVU: 2.04,
      malpracticeRVU: 0.58,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '90340',
      description: 'PulseCare Medical Procedure: Medicine, Vaccines & Therapeutics - Protocol Specification #035',
      category: 'Medicine, Vaccines & Therapeutics',
      specialty: 'Preventive Medicine & Infusions',
      baseFee: 340.0,
      rvu: 5.96,
      workRVU: 3.28,
      facilityRVU: 2.09,
      malpracticeRVU: 0.6,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '90350',
      description: 'PulseCare Medical Procedure: Medicine, Vaccines & Therapeutics - Protocol Specification #036',
      category: 'Medicine, Vaccines & Therapeutics',
      specialty: 'Preventive Medicine & Infusions',
      baseFee: 347.5,
      rvu: 6.1,
      workRVU: 3.35,
      facilityRVU: 2.13,
      malpracticeRVU: 0.61,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '90360',
      description: 'PulseCare Medical Procedure: Medicine, Vaccines & Therapeutics - Protocol Specification #037',
      category: 'Medicine, Vaccines & Therapeutics',
      specialty: 'Preventive Medicine & Infusions',
      baseFee: 355.0,
      rvu: 6.24,
      workRVU: 3.43,
      facilityRVU: 2.18,
      malpracticeRVU: 0.62,
      globalPeriodDays: 0,
      requiresPriorAuth: true
    });
    this.registerProcedure({
      code: '90370',
      description: 'PulseCare Medical Procedure: Medicine, Vaccines & Therapeutics - Protocol Specification #038',
      category: 'Medicine, Vaccines & Therapeutics',
      specialty: 'Preventive Medicine & Infusions',
      baseFee: 362.5,
      rvu: 6.38,
      workRVU: 3.51,
      facilityRVU: 2.23,
      malpracticeRVU: 0.64,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '90380',
      description: 'PulseCare Medical Procedure: Medicine, Vaccines & Therapeutics - Protocol Specification #039',
      category: 'Medicine, Vaccines & Therapeutics',
      specialty: 'Preventive Medicine & Infusions',
      baseFee: 370.0,
      rvu: 6.52,
      workRVU: 3.59,
      facilityRVU: 2.28,
      malpracticeRVU: 0.65,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '90390',
      description: 'PulseCare Medical Procedure: Medicine, Vaccines & Therapeutics - Protocol Specification #040',
      category: 'Medicine, Vaccines & Therapeutics',
      specialty: 'Preventive Medicine & Infusions',
      baseFee: 377.5,
      rvu: 6.66,
      workRVU: 3.66,
      facilityRVU: 2.33,
      malpracticeRVU: 0.67,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '90400',
      description: 'PulseCare Medical Procedure: Medicine, Vaccines & Therapeutics - Protocol Specification #041',
      category: 'Medicine, Vaccines & Therapeutics',
      specialty: 'Preventive Medicine & Infusions',
      baseFee: 385.0,
      rvu: 6.8,
      workRVU: 3.74,
      facilityRVU: 2.38,
      malpracticeRVU: 0.68,
      globalPeriodDays: 0,
      requiresPriorAuth: true
    });
    this.registerProcedure({
      code: '90410',
      description: 'PulseCare Medical Procedure: Medicine, Vaccines & Therapeutics - Protocol Specification #042',
      category: 'Medicine, Vaccines & Therapeutics',
      specialty: 'Preventive Medicine & Infusions',
      baseFee: 392.5,
      rvu: 6.94,
      workRVU: 3.82,
      facilityRVU: 2.43,
      malpracticeRVU: 0.69,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '90420',
      description: 'PulseCare Medical Procedure: Medicine, Vaccines & Therapeutics - Protocol Specification #043',
      category: 'Medicine, Vaccines & Therapeutics',
      specialty: 'Preventive Medicine & Infusions',
      baseFee: 400.0,
      rvu: 7.08,
      workRVU: 3.89,
      facilityRVU: 2.48,
      malpracticeRVU: 0.71,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '90430',
      description: 'PulseCare Medical Procedure: Medicine, Vaccines & Therapeutics - Protocol Specification #044',
      category: 'Medicine, Vaccines & Therapeutics',
      specialty: 'Preventive Medicine & Infusions',
      baseFee: 407.5,
      rvu: 7.22,
      workRVU: 3.97,
      facilityRVU: 2.53,
      malpracticeRVU: 0.72,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '90440',
      description: 'PulseCare Medical Procedure: Medicine, Vaccines & Therapeutics - Protocol Specification #045',
      category: 'Medicine, Vaccines & Therapeutics',
      specialty: 'Preventive Medicine & Infusions',
      baseFee: 415.0,
      rvu: 7.36,
      workRVU: 4.05,
      facilityRVU: 2.58,
      malpracticeRVU: 0.74,
      globalPeriodDays: 0,
      requiresPriorAuth: true
    });
    this.registerProcedure({
      code: '90450',
      description: 'PulseCare Medical Procedure: Medicine, Vaccines & Therapeutics - Protocol Specification #046',
      category: 'Medicine, Vaccines & Therapeutics',
      specialty: 'Preventive Medicine & Infusions',
      baseFee: 422.5,
      rvu: 7.5,
      workRVU: 4.12,
      facilityRVU: 2.62,
      malpracticeRVU: 0.75,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '90460',
      description: 'PulseCare Medical Procedure: Medicine, Vaccines & Therapeutics - Protocol Specification #047',
      category: 'Medicine, Vaccines & Therapeutics',
      specialty: 'Preventive Medicine & Infusions',
      baseFee: 430.0,
      rvu: 7.64,
      workRVU: 4.2,
      facilityRVU: 2.67,
      malpracticeRVU: 0.76,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '90470',
      description: 'PulseCare Medical Procedure: Medicine, Vaccines & Therapeutics - Protocol Specification #048',
      category: 'Medicine, Vaccines & Therapeutics',
      specialty: 'Preventive Medicine & Infusions',
      baseFee: 437.5,
      rvu: 7.78,
      workRVU: 4.28,
      facilityRVU: 2.72,
      malpracticeRVU: 0.78,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '90480',
      description: 'PulseCare Medical Procedure: Medicine, Vaccines & Therapeutics - Protocol Specification #049',
      category: 'Medicine, Vaccines & Therapeutics',
      specialty: 'Preventive Medicine & Infusions',
      baseFee: 445.0,
      rvu: 7.92,
      workRVU: 4.36,
      facilityRVU: 2.77,
      malpracticeRVU: 0.79,
      globalPeriodDays: 0,
      requiresPriorAuth: true
    });
    this.registerProcedure({
      code: '90490',
      description: 'PulseCare Medical Procedure: Medicine, Vaccines & Therapeutics - Protocol Specification #050',
      category: 'Medicine, Vaccines & Therapeutics',
      specialty: 'Preventive Medicine & Infusions',
      baseFee: 452.5,
      rvu: 8.06,
      workRVU: 4.43,
      facilityRVU: 2.82,
      malpracticeRVU: 0.81,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '90500',
      description: 'PulseCare Medical Procedure: Medicine, Vaccines & Therapeutics - Protocol Specification #051',
      category: 'Medicine, Vaccines & Therapeutics',
      specialty: 'Preventive Medicine & Infusions',
      baseFee: 460.0,
      rvu: 8.2,
      workRVU: 4.51,
      facilityRVU: 2.87,
      malpracticeRVU: 0.82,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '90510',
      description: 'PulseCare Medical Procedure: Medicine, Vaccines & Therapeutics - Protocol Specification #052',
      category: 'Medicine, Vaccines & Therapeutics',
      specialty: 'Preventive Medicine & Infusions',
      baseFee: 467.5,
      rvu: 8.34,
      workRVU: 4.59,
      facilityRVU: 2.92,
      malpracticeRVU: 0.83,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '90520',
      description: 'PulseCare Medical Procedure: Medicine, Vaccines & Therapeutics - Protocol Specification #053',
      category: 'Medicine, Vaccines & Therapeutics',
      specialty: 'Preventive Medicine & Infusions',
      baseFee: 475.0,
      rvu: 8.48,
      workRVU: 4.66,
      facilityRVU: 2.97,
      malpracticeRVU: 0.85,
      globalPeriodDays: 0,
      requiresPriorAuth: true
    });
    this.registerProcedure({
      code: '90530',
      description: 'PulseCare Medical Procedure: Medicine, Vaccines & Therapeutics - Protocol Specification #054',
      category: 'Medicine, Vaccines & Therapeutics',
      specialty: 'Preventive Medicine & Infusions',
      baseFee: 482.5,
      rvu: 8.62,
      workRVU: 4.74,
      facilityRVU: 3.02,
      malpracticeRVU: 0.86,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '90540',
      description: 'PulseCare Medical Procedure: Medicine, Vaccines & Therapeutics - Protocol Specification #055',
      category: 'Medicine, Vaccines & Therapeutics',
      specialty: 'Preventive Medicine & Infusions',
      baseFee: 490.0,
      rvu: 8.76,
      workRVU: 4.82,
      facilityRVU: 3.07,
      malpracticeRVU: 0.88,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '90550',
      description: 'PulseCare Medical Procedure: Medicine, Vaccines & Therapeutics - Protocol Specification #056',
      category: 'Medicine, Vaccines & Therapeutics',
      specialty: 'Preventive Medicine & Infusions',
      baseFee: 497.5,
      rvu: 8.9,
      workRVU: 4.9,
      facilityRVU: 3.11,
      malpracticeRVU: 0.89,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '90560',
      description: 'PulseCare Medical Procedure: Medicine, Vaccines & Therapeutics - Protocol Specification #057',
      category: 'Medicine, Vaccines & Therapeutics',
      specialty: 'Preventive Medicine & Infusions',
      baseFee: 505.0,
      rvu: 9.04,
      workRVU: 4.97,
      facilityRVU: 3.16,
      malpracticeRVU: 0.9,
      globalPeriodDays: 0,
      requiresPriorAuth: true
    });
    this.registerProcedure({
      code: '90570',
      description: 'PulseCare Medical Procedure: Medicine, Vaccines & Therapeutics - Protocol Specification #058',
      category: 'Medicine, Vaccines & Therapeutics',
      specialty: 'Preventive Medicine & Infusions',
      baseFee: 512.5,
      rvu: 9.18,
      workRVU: 5.05,
      facilityRVU: 3.21,
      malpracticeRVU: 0.92,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '90580',
      description: 'PulseCare Medical Procedure: Medicine, Vaccines & Therapeutics - Protocol Specification #059',
      category: 'Medicine, Vaccines & Therapeutics',
      specialty: 'Preventive Medicine & Infusions',
      baseFee: 520.0,
      rvu: 9.32,
      workRVU: 5.13,
      facilityRVU: 3.26,
      malpracticeRVU: 0.93,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '90590',
      description: 'PulseCare Medical Procedure: Medicine, Vaccines & Therapeutics - Protocol Specification #060',
      category: 'Medicine, Vaccines & Therapeutics',
      specialty: 'Preventive Medicine & Infusions',
      baseFee: 527.5,
      rvu: 9.46,
      workRVU: 5.2,
      facilityRVU: 3.31,
      malpracticeRVU: 0.95,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '90600',
      description: 'PulseCare Medical Procedure: Medicine, Vaccines & Therapeutics - Protocol Specification #061',
      category: 'Medicine, Vaccines & Therapeutics',
      specialty: 'Preventive Medicine & Infusions',
      baseFee: 535.0,
      rvu: 9.6,
      workRVU: 5.28,
      facilityRVU: 3.36,
      malpracticeRVU: 0.96,
      globalPeriodDays: 0,
      requiresPriorAuth: true
    });
    this.registerProcedure({
      code: '90610',
      description: 'PulseCare Medical Procedure: Medicine, Vaccines & Therapeutics - Protocol Specification #062',
      category: 'Medicine, Vaccines & Therapeutics',
      specialty: 'Preventive Medicine & Infusions',
      baseFee: 542.5,
      rvu: 9.74,
      workRVU: 5.36,
      facilityRVU: 3.41,
      malpracticeRVU: 0.97,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '90620',
      description: 'PulseCare Medical Procedure: Medicine, Vaccines & Therapeutics - Protocol Specification #063',
      category: 'Medicine, Vaccines & Therapeutics',
      specialty: 'Preventive Medicine & Infusions',
      baseFee: 550.0,
      rvu: 9.88,
      workRVU: 5.43,
      facilityRVU: 3.46,
      malpracticeRVU: 0.99,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '90630',
      description: 'PulseCare Medical Procedure: Medicine, Vaccines & Therapeutics - Protocol Specification #064',
      category: 'Medicine, Vaccines & Therapeutics',
      specialty: 'Preventive Medicine & Infusions',
      baseFee: 557.5,
      rvu: 10.02,
      workRVU: 5.51,
      facilityRVU: 3.51,
      malpracticeRVU: 1.0,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '90640',
      description: 'PulseCare Medical Procedure: Medicine, Vaccines & Therapeutics - Protocol Specification #065',
      category: 'Medicine, Vaccines & Therapeutics',
      specialty: 'Preventive Medicine & Infusions',
      baseFee: 565.0,
      rvu: 10.16,
      workRVU: 5.59,
      facilityRVU: 3.56,
      malpracticeRVU: 1.02,
      globalPeriodDays: 0,
      requiresPriorAuth: true
    });
    this.registerProcedure({
      code: '90650',
      description: 'PulseCare Medical Procedure: Medicine, Vaccines & Therapeutics - Protocol Specification #066',
      category: 'Medicine, Vaccines & Therapeutics',
      specialty: 'Preventive Medicine & Infusions',
      baseFee: 572.5,
      rvu: 10.3,
      workRVU: 5.67,
      facilityRVU: 3.6,
      malpracticeRVU: 1.03,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '90660',
      description: 'PulseCare Medical Procedure: Medicine, Vaccines & Therapeutics - Protocol Specification #067',
      category: 'Medicine, Vaccines & Therapeutics',
      specialty: 'Preventive Medicine & Infusions',
      baseFee: 580.0,
      rvu: 10.44,
      workRVU: 5.74,
      facilityRVU: 3.65,
      malpracticeRVU: 1.04,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '90670',
      description: 'PulseCare Medical Procedure: Medicine, Vaccines & Therapeutics - Protocol Specification #068',
      category: 'Medicine, Vaccines & Therapeutics',
      specialty: 'Preventive Medicine & Infusions',
      baseFee: 587.5,
      rvu: 10.58,
      workRVU: 5.82,
      facilityRVU: 3.7,
      malpracticeRVU: 1.06,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '90680',
      description: 'PulseCare Medical Procedure: Medicine, Vaccines & Therapeutics - Protocol Specification #069',
      category: 'Medicine, Vaccines & Therapeutics',
      specialty: 'Preventive Medicine & Infusions',
      baseFee: 595.0,
      rvu: 10.72,
      workRVU: 5.9,
      facilityRVU: 3.75,
      malpracticeRVU: 1.07,
      globalPeriodDays: 0,
      requiresPriorAuth: true
    });
    this.registerProcedure({
      code: '90690',
      description: 'PulseCare Medical Procedure: Medicine, Vaccines & Therapeutics - Protocol Specification #070',
      category: 'Medicine, Vaccines & Therapeutics',
      specialty: 'Preventive Medicine & Infusions',
      baseFee: 602.5,
      rvu: 10.86,
      workRVU: 5.97,
      facilityRVU: 3.8,
      malpracticeRVU: 1.09,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '90700',
      description: 'PulseCare Medical Procedure: Medicine, Vaccines & Therapeutics - Protocol Specification #071',
      category: 'Medicine, Vaccines & Therapeutics',
      specialty: 'Preventive Medicine & Infusions',
      baseFee: 610.0,
      rvu: 11.0,
      workRVU: 6.05,
      facilityRVU: 3.85,
      malpracticeRVU: 1.1,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '90710',
      description: 'PulseCare Medical Procedure: Medicine, Vaccines & Therapeutics - Protocol Specification #072',
      category: 'Medicine, Vaccines & Therapeutics',
      specialty: 'Preventive Medicine & Infusions',
      baseFee: 617.5,
      rvu: 11.14,
      workRVU: 6.13,
      facilityRVU: 3.9,
      malpracticeRVU: 1.11,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '90720',
      description: 'PulseCare Medical Procedure: Medicine, Vaccines & Therapeutics - Protocol Specification #073',
      category: 'Medicine, Vaccines & Therapeutics',
      specialty: 'Preventive Medicine & Infusions',
      baseFee: 625.0,
      rvu: 11.28,
      workRVU: 6.2,
      facilityRVU: 3.95,
      malpracticeRVU: 1.13,
      globalPeriodDays: 0,
      requiresPriorAuth: true
    });
    this.registerProcedure({
      code: '90730',
      description: 'PulseCare Medical Procedure: Medicine, Vaccines & Therapeutics - Protocol Specification #074',
      category: 'Medicine, Vaccines & Therapeutics',
      specialty: 'Preventive Medicine & Infusions',
      baseFee: 632.5,
      rvu: 11.42,
      workRVU: 6.28,
      facilityRVU: 4.0,
      malpracticeRVU: 1.14,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '90740',
      description: 'PulseCare Medical Procedure: Medicine, Vaccines & Therapeutics - Protocol Specification #075',
      category: 'Medicine, Vaccines & Therapeutics',
      specialty: 'Preventive Medicine & Infusions',
      baseFee: 640.0,
      rvu: 11.56,
      workRVU: 6.36,
      facilityRVU: 4.05,
      malpracticeRVU: 1.16,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '90750',
      description: 'PulseCare Medical Procedure: Medicine, Vaccines & Therapeutics - Protocol Specification #076',
      category: 'Medicine, Vaccines & Therapeutics',
      specialty: 'Preventive Medicine & Infusions',
      baseFee: 647.5,
      rvu: 11.7,
      workRVU: 6.44,
      facilityRVU: 4.09,
      malpracticeRVU: 1.17,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '90760',
      description: 'PulseCare Medical Procedure: Medicine, Vaccines & Therapeutics - Protocol Specification #077',
      category: 'Medicine, Vaccines & Therapeutics',
      specialty: 'Preventive Medicine & Infusions',
      baseFee: 655.0,
      rvu: 11.84,
      workRVU: 6.51,
      facilityRVU: 4.14,
      malpracticeRVU: 1.18,
      globalPeriodDays: 0,
      requiresPriorAuth: true
    });
    this.registerProcedure({
      code: '90770',
      description: 'PulseCare Medical Procedure: Medicine, Vaccines & Therapeutics - Protocol Specification #078',
      category: 'Medicine, Vaccines & Therapeutics',
      specialty: 'Preventive Medicine & Infusions',
      baseFee: 662.5,
      rvu: 11.98,
      workRVU: 6.59,
      facilityRVU: 4.19,
      malpracticeRVU: 1.2,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '90780',
      description: 'PulseCare Medical Procedure: Medicine, Vaccines & Therapeutics - Protocol Specification #079',
      category: 'Medicine, Vaccines & Therapeutics',
      specialty: 'Preventive Medicine & Infusions',
      baseFee: 670.0,
      rvu: 12.12,
      workRVU: 6.67,
      facilityRVU: 4.24,
      malpracticeRVU: 1.21,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '90790',
      description: 'PulseCare Medical Procedure: Medicine, Vaccines & Therapeutics - Protocol Specification #080',
      category: 'Medicine, Vaccines & Therapeutics',
      specialty: 'Preventive Medicine & Infusions',
      baseFee: 677.5,
      rvu: 12.26,
      workRVU: 6.74,
      facilityRVU: 4.29,
      malpracticeRVU: 1.23,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '90800',
      description: 'PulseCare Medical Procedure: Medicine, Vaccines & Therapeutics - Protocol Specification #081',
      category: 'Medicine, Vaccines & Therapeutics',
      specialty: 'Preventive Medicine & Infusions',
      baseFee: 685.0,
      rvu: 12.4,
      workRVU: 6.82,
      facilityRVU: 4.34,
      malpracticeRVU: 1.24,
      globalPeriodDays: 0,
      requiresPriorAuth: true
    });
    this.registerProcedure({
      code: '90810',
      description: 'PulseCare Medical Procedure: Medicine, Vaccines & Therapeutics - Protocol Specification #082',
      category: 'Medicine, Vaccines & Therapeutics',
      specialty: 'Preventive Medicine & Infusions',
      baseFee: 692.5,
      rvu: 12.54,
      workRVU: 6.9,
      facilityRVU: 4.39,
      malpracticeRVU: 1.25,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '90820',
      description: 'PulseCare Medical Procedure: Medicine, Vaccines & Therapeutics - Protocol Specification #083',
      category: 'Medicine, Vaccines & Therapeutics',
      specialty: 'Preventive Medicine & Infusions',
      baseFee: 700.0,
      rvu: 12.68,
      workRVU: 6.97,
      facilityRVU: 4.44,
      malpracticeRVU: 1.27,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '90830',
      description: 'PulseCare Medical Procedure: Medicine, Vaccines & Therapeutics - Protocol Specification #084',
      category: 'Medicine, Vaccines & Therapeutics',
      specialty: 'Preventive Medicine & Infusions',
      baseFee: 707.5,
      rvu: 12.82,
      workRVU: 7.05,
      facilityRVU: 4.49,
      malpracticeRVU: 1.28,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '90840',
      description: 'PulseCare Medical Procedure: Medicine, Vaccines & Therapeutics - Protocol Specification #085',
      category: 'Medicine, Vaccines & Therapeutics',
      specialty: 'Preventive Medicine & Infusions',
      baseFee: 715.0,
      rvu: 12.96,
      workRVU: 7.13,
      facilityRVU: 4.54,
      malpracticeRVU: 1.3,
      globalPeriodDays: 0,
      requiresPriorAuth: true
    });
    this.registerProcedure({
      code: '90850',
      description: 'PulseCare Medical Procedure: Medicine, Vaccines & Therapeutics - Protocol Specification #086',
      category: 'Medicine, Vaccines & Therapeutics',
      specialty: 'Preventive Medicine & Infusions',
      baseFee: 722.5,
      rvu: 13.1,
      workRVU: 7.21,
      facilityRVU: 4.58,
      malpracticeRVU: 1.31,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '90860',
      description: 'PulseCare Medical Procedure: Medicine, Vaccines & Therapeutics - Protocol Specification #087',
      category: 'Medicine, Vaccines & Therapeutics',
      specialty: 'Preventive Medicine & Infusions',
      baseFee: 730.0,
      rvu: 13.24,
      workRVU: 7.28,
      facilityRVU: 4.63,
      malpracticeRVU: 1.32,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '90870',
      description: 'PulseCare Medical Procedure: Medicine, Vaccines & Therapeutics - Protocol Specification #088',
      category: 'Medicine, Vaccines & Therapeutics',
      specialty: 'Preventive Medicine & Infusions',
      baseFee: 737.5,
      rvu: 13.38,
      workRVU: 7.36,
      facilityRVU: 4.68,
      malpracticeRVU: 1.34,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '90880',
      description: 'PulseCare Medical Procedure: Medicine, Vaccines & Therapeutics - Protocol Specification #089',
      category: 'Medicine, Vaccines & Therapeutics',
      specialty: 'Preventive Medicine & Infusions',
      baseFee: 745.0,
      rvu: 13.52,
      workRVU: 7.44,
      facilityRVU: 4.73,
      malpracticeRVU: 1.35,
      globalPeriodDays: 0,
      requiresPriorAuth: true
    });
    this.registerProcedure({
      code: '90890',
      description: 'PulseCare Medical Procedure: Medicine, Vaccines & Therapeutics - Protocol Specification #090',
      category: 'Medicine, Vaccines & Therapeutics',
      specialty: 'Preventive Medicine & Infusions',
      baseFee: 752.5,
      rvu: 13.66,
      workRVU: 7.51,
      facilityRVU: 4.78,
      malpracticeRVU: 1.37,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '90900',
      description: 'PulseCare Medical Procedure: Medicine, Vaccines & Therapeutics - Protocol Specification #091',
      category: 'Medicine, Vaccines & Therapeutics',
      specialty: 'Preventive Medicine & Infusions',
      baseFee: 760.0,
      rvu: 13.8,
      workRVU: 7.59,
      facilityRVU: 4.83,
      malpracticeRVU: 1.38,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '90910',
      description: 'PulseCare Medical Procedure: Medicine, Vaccines & Therapeutics - Protocol Specification #092',
      category: 'Medicine, Vaccines & Therapeutics',
      specialty: 'Preventive Medicine & Infusions',
      baseFee: 767.5,
      rvu: 13.94,
      workRVU: 7.67,
      facilityRVU: 4.88,
      malpracticeRVU: 1.39,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '90920',
      description: 'PulseCare Medical Procedure: Medicine, Vaccines & Therapeutics - Protocol Specification #093',
      category: 'Medicine, Vaccines & Therapeutics',
      specialty: 'Preventive Medicine & Infusions',
      baseFee: 775.0,
      rvu: 14.08,
      workRVU: 7.74,
      facilityRVU: 4.93,
      malpracticeRVU: 1.41,
      globalPeriodDays: 0,
      requiresPriorAuth: true
    });
    this.registerProcedure({
      code: '90930',
      description: 'PulseCare Medical Procedure: Medicine, Vaccines & Therapeutics - Protocol Specification #094',
      category: 'Medicine, Vaccines & Therapeutics',
      specialty: 'Preventive Medicine & Infusions',
      baseFee: 782.5,
      rvu: 14.22,
      workRVU: 7.82,
      facilityRVU: 4.98,
      malpracticeRVU: 1.42,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '90940',
      description: 'PulseCare Medical Procedure: Medicine, Vaccines & Therapeutics - Protocol Specification #095',
      category: 'Medicine, Vaccines & Therapeutics',
      specialty: 'Preventive Medicine & Infusions',
      baseFee: 790.0,
      rvu: 14.36,
      workRVU: 7.9,
      facilityRVU: 5.03,
      malpracticeRVU: 1.44,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '90950',
      description: 'PulseCare Medical Procedure: Medicine, Vaccines & Therapeutics - Protocol Specification #096',
      category: 'Medicine, Vaccines & Therapeutics',
      specialty: 'Preventive Medicine & Infusions',
      baseFee: 797.5,
      rvu: 14.5,
      workRVU: 7.98,
      facilityRVU: 5.07,
      malpracticeRVU: 1.45,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '90960',
      description: 'PulseCare Medical Procedure: Medicine, Vaccines & Therapeutics - Protocol Specification #097',
      category: 'Medicine, Vaccines & Therapeutics',
      specialty: 'Preventive Medicine & Infusions',
      baseFee: 805.0,
      rvu: 14.64,
      workRVU: 8.05,
      facilityRVU: 5.12,
      malpracticeRVU: 1.46,
      globalPeriodDays: 0,
      requiresPriorAuth: true
    });
    this.registerProcedure({
      code: '90970',
      description: 'PulseCare Medical Procedure: Medicine, Vaccines & Therapeutics - Protocol Specification #098',
      category: 'Medicine, Vaccines & Therapeutics',
      specialty: 'Preventive Medicine & Infusions',
      baseFee: 812.5,
      rvu: 14.78,
      workRVU: 8.13,
      facilityRVU: 5.17,
      malpracticeRVU: 1.48,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '90980',
      description: 'PulseCare Medical Procedure: Medicine, Vaccines & Therapeutics - Protocol Specification #099',
      category: 'Medicine, Vaccines & Therapeutics',
      specialty: 'Preventive Medicine & Infusions',
      baseFee: 820.0,
      rvu: 14.92,
      workRVU: 8.21,
      facilityRVU: 5.22,
      malpracticeRVU: 1.49,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
    this.registerProcedure({
      code: '90990',
      description: 'PulseCare Medical Procedure: Medicine, Vaccines & Therapeutics - Protocol Specification #100',
      category: 'Medicine, Vaccines & Therapeutics',
      specialty: 'Preventive Medicine & Infusions',
      baseFee: 827.5,
      rvu: 15.06,
      workRVU: 8.28,
      facilityRVU: 5.27,
      malpracticeRVU: 1.51,
      globalPeriodDays: 0,
      requiresPriorAuth: false
    });
  }

  registerProcedure(proc) {
    this.procedures.set(proc.code, proc);
    if (!this.categoryIndex.has(proc.category)) {
      this.categoryIndex.set(proc.category, []);
    }
    this.categoryIndex.get(proc.category).push(proc);
  }

  lookup(code) {
    return this.procedures.get(code) || null;
  }

  search(query, limit = 50) {
    if (!query) return Array.from(this.procedures.values()).slice(0, limit);
    const q = query.toLowerCase();
    const results = [];
    for (const proc of this.procedures.values()) {
      if (proc.code.includes(q) || proc.description.toLowerCase().includes(q) || proc.category.toLowerCase().includes(q)) {
        results.push(proc);
        if (results.length >= limit) break;
      }
    }
    return results;
  }

  calculateTotalFee(cptCodes = []) {
    let total = 0;
    for (const code of cptCodes) {
      const proc = this.lookup(code);
      if (proc) total += proc.baseFee;
    }
    return total;
  }
}

module.exports = new CPTProcedureCatalogue();
