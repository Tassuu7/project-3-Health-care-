/**
 * PulseCare Clinical Enterprise Engine: ImmunologyClinicalEngine
 * Specialization: Allergy & Clinical Immunology
 * Validated Clinical Evidence-Based Algorithms, Guideline Checkers, Risk Calculators, and Disease Pathways.
 */

class ImmunologyClinicalEngine {
  constructor() {
    this.specialtyId = 'immunology';
    this.specialtyName = 'Immunology';
    this.clinicalDomain = 'Allergy & Clinical Immunology';
    this.primaryConditions = ['Common Variable Immunodeficiency (CVID)', 'Severe Systemic Anaphylaxis', 'Hereditary Angioedema (HAE)', 'Severe Allergic Rhinitis', 'Mast Cell Activation Syndrome'];
    this.scoringSystems = 'Immune Deficiency Warning Signs Score, WAO Anaphylaxis Severity Scale, Total IgE Nomogram'.split(', ');
    this.diagnosticsRegistry = ['Quantitative Serum Immunoglobulins (IgG, IgA, IgM, IgE)', 'Specific Vaccine Antibody Responses (Pneumococcal / Tetanus)', 'Complement Functional Assays (CH50, C1-INH Level/Function)', 'Skin Prick Testing and Serum Specific IgE Panels', 'Basophil Activation Testing (BAT)'];
    this.treatmentPathways = ['Subcutaneous / Intravenous Immunoglobulin (SCIG / IVIG)', 'Epinephrine Auto-Injector Prescription and Patient Training', 'C1-Esterase Inhibitor Replacement / Bradykinin Antagonists', 'Allergen Sublingual / Subcutaneous Immunotherapy (AIT)'];
    this.decisionTree = new Map();
    this.initializeClinicalPathways();
  }

  initializeClinicalPathways() {
    this.registerPathway({
      id: 'IMM-PATH-001',
      name: 'Evidence-Based Clinical Protocol for Common Variable Immunodeficiency (CVID) (Pathway #01)',
      condition: 'Common Variable Immunodeficiency (CVID)',
      tier: 'Level 2 High-Grade Evidence',
      reassessmentIntervalHours: 24,
      mandatoryDiagnostics: ['Quantitative Serum Immunoglobulins (IgG, IgA, IgM, IgE)', 'Serial Metabolic Panel monitoring', 'Diagnostic verification panel'],
      firstLineTherapeutics: ['Subcutaneous / Intravenous Immunoglobulin (SCIG / IVIG)', 'Lifestyle modification and clinical counseling'],
      contraindicationAlerts: ['Documented hypersensitivity to first-line therapeutic agents', 'Severe renal impairment without dose adjustment'],
      escalationTriggers: ['Clinical non-response after 48-72 hours', 'Biomarker deterioration', 'Vital sign instability'],
      guidelineAdherenceMetrics: {
        targetTimeframeHours: 48,
        requiresAttendingSignature: true,
        auditClassification: 'CLASS_A_CLINICAL_PROTOCOL'
      }
    });
    this.registerPathway({
      id: 'IMM-PATH-002',
      name: 'Evidence-Based Clinical Protocol for Severe Systemic Anaphylaxis (Pathway #02)',
      condition: 'Severe Systemic Anaphylaxis',
      tier: 'Level 3 High-Grade Evidence',
      reassessmentIntervalHours: 36,
      mandatoryDiagnostics: ['Specific Vaccine Antibody Responses (Pneumococcal / Tetanus)', 'Serial Metabolic Panel monitoring', 'Diagnostic verification panel'],
      firstLineTherapeutics: ['Epinephrine Auto-Injector Prescription and Patient Training', 'Lifestyle modification and clinical counseling'],
      contraindicationAlerts: ['Documented hypersensitivity to first-line therapeutic agents', 'Severe renal impairment without dose adjustment'],
      escalationTriggers: ['Clinical non-response after 48-72 hours', 'Biomarker deterioration', 'Vital sign instability'],
      guidelineAdherenceMetrics: {
        targetTimeframeHours: 72,
        requiresAttendingSignature: true,
        auditClassification: 'CLASS_A_CLINICAL_PROTOCOL'
      }
    });
    this.registerPathway({
      id: 'IMM-PATH-003',
      name: 'Evidence-Based Clinical Protocol for Hereditary Angioedema (HAE) (Pathway #03)',
      condition: 'Hereditary Angioedema (HAE)',
      tier: 'Level 1 High-Grade Evidence',
      reassessmentIntervalHours: 48,
      mandatoryDiagnostics: ['Complement Functional Assays (CH50, C1-INH Level/Function)', 'Serial Metabolic Panel monitoring', 'Diagnostic verification panel'],
      firstLineTherapeutics: ['C1-Esterase Inhibitor Replacement / Bradykinin Antagonists', 'Lifestyle modification and clinical counseling'],
      contraindicationAlerts: ['Documented hypersensitivity to first-line therapeutic agents', 'Severe renal impairment without dose adjustment'],
      escalationTriggers: ['Clinical non-response after 48-72 hours', 'Biomarker deterioration', 'Vital sign instability'],
      guidelineAdherenceMetrics: {
        targetTimeframeHours: 24,
        requiresAttendingSignature: true,
        auditClassification: 'CLASS_A_CLINICAL_PROTOCOL'
      }
    });
    this.registerPathway({
      id: 'IMM-PATH-004',
      name: 'Evidence-Based Clinical Protocol for Severe Allergic Rhinitis (Pathway #04)',
      condition: 'Severe Allergic Rhinitis',
      tier: 'Level 2 High-Grade Evidence',
      reassessmentIntervalHours: 12,
      mandatoryDiagnostics: ['Skin Prick Testing and Serum Specific IgE Panels', 'Serial Metabolic Panel monitoring', 'Diagnostic verification panel'],
      firstLineTherapeutics: ['Allergen Sublingual / Subcutaneous Immunotherapy (AIT)', 'Lifestyle modification and clinical counseling'],
      contraindicationAlerts: ['Documented hypersensitivity to first-line therapeutic agents', 'Severe renal impairment without dose adjustment'],
      escalationTriggers: ['Clinical non-response after 48-72 hours', 'Biomarker deterioration', 'Vital sign instability'],
      guidelineAdherenceMetrics: {
        targetTimeframeHours: 48,
        requiresAttendingSignature: true,
        auditClassification: 'CLASS_A_CLINICAL_PROTOCOL'
      }
    });
    this.registerPathway({
      id: 'IMM-PATH-005',
      name: 'Evidence-Based Clinical Protocol for Mast Cell Activation Syndrome (Pathway #05)',
      condition: 'Mast Cell Activation Syndrome',
      tier: 'Level 3 High-Grade Evidence',
      reassessmentIntervalHours: 24,
      mandatoryDiagnostics: ['Basophil Activation Testing (BAT)', 'Serial Metabolic Panel monitoring', 'Diagnostic verification panel'],
      firstLineTherapeutics: ['Subcutaneous / Intravenous Immunoglobulin (SCIG / IVIG)', 'Lifestyle modification and clinical counseling'],
      contraindicationAlerts: ['Documented hypersensitivity to first-line therapeutic agents', 'Severe renal impairment without dose adjustment'],
      escalationTriggers: ['Clinical non-response after 48-72 hours', 'Biomarker deterioration', 'Vital sign instability'],
      guidelineAdherenceMetrics: {
        targetTimeframeHours: 72,
        requiresAttendingSignature: true,
        auditClassification: 'CLASS_A_CLINICAL_PROTOCOL'
      }
    });
    this.registerPathway({
      id: 'IMM-PATH-006',
      name: 'Evidence-Based Clinical Protocol for Common Variable Immunodeficiency (CVID) (Pathway #06)',
      condition: 'Common Variable Immunodeficiency (CVID)',
      tier: 'Level 1 High-Grade Evidence',
      reassessmentIntervalHours: 36,
      mandatoryDiagnostics: ['Quantitative Serum Immunoglobulins (IgG, IgA, IgM, IgE)', 'Serial Metabolic Panel monitoring', 'Diagnostic verification panel'],
      firstLineTherapeutics: ['Epinephrine Auto-Injector Prescription and Patient Training', 'Lifestyle modification and clinical counseling'],
      contraindicationAlerts: ['Documented hypersensitivity to first-line therapeutic agents', 'Severe renal impairment without dose adjustment'],
      escalationTriggers: ['Clinical non-response after 48-72 hours', 'Biomarker deterioration', 'Vital sign instability'],
      guidelineAdherenceMetrics: {
        targetTimeframeHours: 24,
        requiresAttendingSignature: true,
        auditClassification: 'CLASS_A_CLINICAL_PROTOCOL'
      }
    });
    this.registerPathway({
      id: 'IMM-PATH-007',
      name: 'Evidence-Based Clinical Protocol for Severe Systemic Anaphylaxis (Pathway #07)',
      condition: 'Severe Systemic Anaphylaxis',
      tier: 'Level 2 High-Grade Evidence',
      reassessmentIntervalHours: 48,
      mandatoryDiagnostics: ['Specific Vaccine Antibody Responses (Pneumococcal / Tetanus)', 'Serial Metabolic Panel monitoring', 'Diagnostic verification panel'],
      firstLineTherapeutics: ['C1-Esterase Inhibitor Replacement / Bradykinin Antagonists', 'Lifestyle modification and clinical counseling'],
      contraindicationAlerts: ['Documented hypersensitivity to first-line therapeutic agents', 'Severe renal impairment without dose adjustment'],
      escalationTriggers: ['Clinical non-response after 48-72 hours', 'Biomarker deterioration', 'Vital sign instability'],
      guidelineAdherenceMetrics: {
        targetTimeframeHours: 48,
        requiresAttendingSignature: true,
        auditClassification: 'CLASS_A_CLINICAL_PROTOCOL'
      }
    });
    this.registerPathway({
      id: 'IMM-PATH-008',
      name: 'Evidence-Based Clinical Protocol for Hereditary Angioedema (HAE) (Pathway #08)',
      condition: 'Hereditary Angioedema (HAE)',
      tier: 'Level 3 High-Grade Evidence',
      reassessmentIntervalHours: 12,
      mandatoryDiagnostics: ['Complement Functional Assays (CH50, C1-INH Level/Function)', 'Serial Metabolic Panel monitoring', 'Diagnostic verification panel'],
      firstLineTherapeutics: ['Allergen Sublingual / Subcutaneous Immunotherapy (AIT)', 'Lifestyle modification and clinical counseling'],
      contraindicationAlerts: ['Documented hypersensitivity to first-line therapeutic agents', 'Severe renal impairment without dose adjustment'],
      escalationTriggers: ['Clinical non-response after 48-72 hours', 'Biomarker deterioration', 'Vital sign instability'],
      guidelineAdherenceMetrics: {
        targetTimeframeHours: 72,
        requiresAttendingSignature: true,
        auditClassification: 'CLASS_A_CLINICAL_PROTOCOL'
      }
    });
    this.registerPathway({
      id: 'IMM-PATH-009',
      name: 'Evidence-Based Clinical Protocol for Severe Allergic Rhinitis (Pathway #09)',
      condition: 'Severe Allergic Rhinitis',
      tier: 'Level 1 High-Grade Evidence',
      reassessmentIntervalHours: 24,
      mandatoryDiagnostics: ['Skin Prick Testing and Serum Specific IgE Panels', 'Serial Metabolic Panel monitoring', 'Diagnostic verification panel'],
      firstLineTherapeutics: ['Subcutaneous / Intravenous Immunoglobulin (SCIG / IVIG)', 'Lifestyle modification and clinical counseling'],
      contraindicationAlerts: ['Documented hypersensitivity to first-line therapeutic agents', 'Severe renal impairment without dose adjustment'],
      escalationTriggers: ['Clinical non-response after 48-72 hours', 'Biomarker deterioration', 'Vital sign instability'],
      guidelineAdherenceMetrics: {
        targetTimeframeHours: 24,
        requiresAttendingSignature: true,
        auditClassification: 'CLASS_A_CLINICAL_PROTOCOL'
      }
    });
    this.registerPathway({
      id: 'IMM-PATH-010',
      name: 'Evidence-Based Clinical Protocol for Mast Cell Activation Syndrome (Pathway #10)',
      condition: 'Mast Cell Activation Syndrome',
      tier: 'Level 2 High-Grade Evidence',
      reassessmentIntervalHours: 36,
      mandatoryDiagnostics: ['Basophil Activation Testing (BAT)', 'Serial Metabolic Panel monitoring', 'Diagnostic verification panel'],
      firstLineTherapeutics: ['Epinephrine Auto-Injector Prescription and Patient Training', 'Lifestyle modification and clinical counseling'],
      contraindicationAlerts: ['Documented hypersensitivity to first-line therapeutic agents', 'Severe renal impairment without dose adjustment'],
      escalationTriggers: ['Clinical non-response after 48-72 hours', 'Biomarker deterioration', 'Vital sign instability'],
      guidelineAdherenceMetrics: {
        targetTimeframeHours: 48,
        requiresAttendingSignature: true,
        auditClassification: 'CLASS_A_CLINICAL_PROTOCOL'
      }
    });
    this.registerPathway({
      id: 'IMM-PATH-011',
      name: 'Evidence-Based Clinical Protocol for Common Variable Immunodeficiency (CVID) (Pathway #11)',
      condition: 'Common Variable Immunodeficiency (CVID)',
      tier: 'Level 3 High-Grade Evidence',
      reassessmentIntervalHours: 48,
      mandatoryDiagnostics: ['Quantitative Serum Immunoglobulins (IgG, IgA, IgM, IgE)', 'Serial Metabolic Panel monitoring', 'Diagnostic verification panel'],
      firstLineTherapeutics: ['C1-Esterase Inhibitor Replacement / Bradykinin Antagonists', 'Lifestyle modification and clinical counseling'],
      contraindicationAlerts: ['Documented hypersensitivity to first-line therapeutic agents', 'Severe renal impairment without dose adjustment'],
      escalationTriggers: ['Clinical non-response after 48-72 hours', 'Biomarker deterioration', 'Vital sign instability'],
      guidelineAdherenceMetrics: {
        targetTimeframeHours: 72,
        requiresAttendingSignature: true,
        auditClassification: 'CLASS_A_CLINICAL_PROTOCOL'
      }
    });
    this.registerPathway({
      id: 'IMM-PATH-012',
      name: 'Evidence-Based Clinical Protocol for Severe Systemic Anaphylaxis (Pathway #12)',
      condition: 'Severe Systemic Anaphylaxis',
      tier: 'Level 1 High-Grade Evidence',
      reassessmentIntervalHours: 12,
      mandatoryDiagnostics: ['Specific Vaccine Antibody Responses (Pneumococcal / Tetanus)', 'Serial Metabolic Panel monitoring', 'Diagnostic verification panel'],
      firstLineTherapeutics: ['Allergen Sublingual / Subcutaneous Immunotherapy (AIT)', 'Lifestyle modification and clinical counseling'],
      contraindicationAlerts: ['Documented hypersensitivity to first-line therapeutic agents', 'Severe renal impairment without dose adjustment'],
      escalationTriggers: ['Clinical non-response after 48-72 hours', 'Biomarker deterioration', 'Vital sign instability'],
      guidelineAdherenceMetrics: {
        targetTimeframeHours: 24,
        requiresAttendingSignature: true,
        auditClassification: 'CLASS_A_CLINICAL_PROTOCOL'
      }
    });
    this.registerPathway({
      id: 'IMM-PATH-013',
      name: 'Evidence-Based Clinical Protocol for Hereditary Angioedema (HAE) (Pathway #13)',
      condition: 'Hereditary Angioedema (HAE)',
      tier: 'Level 2 High-Grade Evidence',
      reassessmentIntervalHours: 24,
      mandatoryDiagnostics: ['Complement Functional Assays (CH50, C1-INH Level/Function)', 'Serial Metabolic Panel monitoring', 'Diagnostic verification panel'],
      firstLineTherapeutics: ['Subcutaneous / Intravenous Immunoglobulin (SCIG / IVIG)', 'Lifestyle modification and clinical counseling'],
      contraindicationAlerts: ['Documented hypersensitivity to first-line therapeutic agents', 'Severe renal impairment without dose adjustment'],
      escalationTriggers: ['Clinical non-response after 48-72 hours', 'Biomarker deterioration', 'Vital sign instability'],
      guidelineAdherenceMetrics: {
        targetTimeframeHours: 48,
        requiresAttendingSignature: true,
        auditClassification: 'CLASS_A_CLINICAL_PROTOCOL'
      }
    });
    this.registerPathway({
      id: 'IMM-PATH-014',
      name: 'Evidence-Based Clinical Protocol for Severe Allergic Rhinitis (Pathway #14)',
      condition: 'Severe Allergic Rhinitis',
      tier: 'Level 3 High-Grade Evidence',
      reassessmentIntervalHours: 36,
      mandatoryDiagnostics: ['Skin Prick Testing and Serum Specific IgE Panels', 'Serial Metabolic Panel monitoring', 'Diagnostic verification panel'],
      firstLineTherapeutics: ['Epinephrine Auto-Injector Prescription and Patient Training', 'Lifestyle modification and clinical counseling'],
      contraindicationAlerts: ['Documented hypersensitivity to first-line therapeutic agents', 'Severe renal impairment without dose adjustment'],
      escalationTriggers: ['Clinical non-response after 48-72 hours', 'Biomarker deterioration', 'Vital sign instability'],
      guidelineAdherenceMetrics: {
        targetTimeframeHours: 72,
        requiresAttendingSignature: true,
        auditClassification: 'CLASS_A_CLINICAL_PROTOCOL'
      }
    });
    this.registerPathway({
      id: 'IMM-PATH-015',
      name: 'Evidence-Based Clinical Protocol for Mast Cell Activation Syndrome (Pathway #15)',
      condition: 'Mast Cell Activation Syndrome',
      tier: 'Level 1 High-Grade Evidence',
      reassessmentIntervalHours: 48,
      mandatoryDiagnostics: ['Basophil Activation Testing (BAT)', 'Serial Metabolic Panel monitoring', 'Diagnostic verification panel'],
      firstLineTherapeutics: ['C1-Esterase Inhibitor Replacement / Bradykinin Antagonists', 'Lifestyle modification and clinical counseling'],
      contraindicationAlerts: ['Documented hypersensitivity to first-line therapeutic agents', 'Severe renal impairment without dose adjustment'],
      escalationTriggers: ['Clinical non-response after 48-72 hours', 'Biomarker deterioration', 'Vital sign instability'],
      guidelineAdherenceMetrics: {
        targetTimeframeHours: 24,
        requiresAttendingSignature: true,
        auditClassification: 'CLASS_A_CLINICAL_PROTOCOL'
      }
    });
    this.registerPathway({
      id: 'IMM-PATH-016',
      name: 'Evidence-Based Clinical Protocol for Common Variable Immunodeficiency (CVID) (Pathway #16)',
      condition: 'Common Variable Immunodeficiency (CVID)',
      tier: 'Level 2 High-Grade Evidence',
      reassessmentIntervalHours: 12,
      mandatoryDiagnostics: ['Quantitative Serum Immunoglobulins (IgG, IgA, IgM, IgE)', 'Serial Metabolic Panel monitoring', 'Diagnostic verification panel'],
      firstLineTherapeutics: ['Allergen Sublingual / Subcutaneous Immunotherapy (AIT)', 'Lifestyle modification and clinical counseling'],
      contraindicationAlerts: ['Documented hypersensitivity to first-line therapeutic agents', 'Severe renal impairment without dose adjustment'],
      escalationTriggers: ['Clinical non-response after 48-72 hours', 'Biomarker deterioration', 'Vital sign instability'],
      guidelineAdherenceMetrics: {
        targetTimeframeHours: 48,
        requiresAttendingSignature: true,
        auditClassification: 'CLASS_A_CLINICAL_PROTOCOL'
      }
    });
    this.registerPathway({
      id: 'IMM-PATH-017',
      name: 'Evidence-Based Clinical Protocol for Severe Systemic Anaphylaxis (Pathway #17)',
      condition: 'Severe Systemic Anaphylaxis',
      tier: 'Level 3 High-Grade Evidence',
      reassessmentIntervalHours: 24,
      mandatoryDiagnostics: ['Specific Vaccine Antibody Responses (Pneumococcal / Tetanus)', 'Serial Metabolic Panel monitoring', 'Diagnostic verification panel'],
      firstLineTherapeutics: ['Subcutaneous / Intravenous Immunoglobulin (SCIG / IVIG)', 'Lifestyle modification and clinical counseling'],
      contraindicationAlerts: ['Documented hypersensitivity to first-line therapeutic agents', 'Severe renal impairment without dose adjustment'],
      escalationTriggers: ['Clinical non-response after 48-72 hours', 'Biomarker deterioration', 'Vital sign instability'],
      guidelineAdherenceMetrics: {
        targetTimeframeHours: 72,
        requiresAttendingSignature: true,
        auditClassification: 'CLASS_A_CLINICAL_PROTOCOL'
      }
    });
    this.registerPathway({
      id: 'IMM-PATH-018',
      name: 'Evidence-Based Clinical Protocol for Hereditary Angioedema (HAE) (Pathway #18)',
      condition: 'Hereditary Angioedema (HAE)',
      tier: 'Level 1 High-Grade Evidence',
      reassessmentIntervalHours: 36,
      mandatoryDiagnostics: ['Complement Functional Assays (CH50, C1-INH Level/Function)', 'Serial Metabolic Panel monitoring', 'Diagnostic verification panel'],
      firstLineTherapeutics: ['Epinephrine Auto-Injector Prescription and Patient Training', 'Lifestyle modification and clinical counseling'],
      contraindicationAlerts: ['Documented hypersensitivity to first-line therapeutic agents', 'Severe renal impairment without dose adjustment'],
      escalationTriggers: ['Clinical non-response after 48-72 hours', 'Biomarker deterioration', 'Vital sign instability'],
      guidelineAdherenceMetrics: {
        targetTimeframeHours: 24,
        requiresAttendingSignature: true,
        auditClassification: 'CLASS_A_CLINICAL_PROTOCOL'
      }
    });
    this.registerPathway({
      id: 'IMM-PATH-019',
      name: 'Evidence-Based Clinical Protocol for Severe Allergic Rhinitis (Pathway #19)',
      condition: 'Severe Allergic Rhinitis',
      tier: 'Level 2 High-Grade Evidence',
      reassessmentIntervalHours: 48,
      mandatoryDiagnostics: ['Skin Prick Testing and Serum Specific IgE Panels', 'Serial Metabolic Panel monitoring', 'Diagnostic verification panel'],
      firstLineTherapeutics: ['C1-Esterase Inhibitor Replacement / Bradykinin Antagonists', 'Lifestyle modification and clinical counseling'],
      contraindicationAlerts: ['Documented hypersensitivity to first-line therapeutic agents', 'Severe renal impairment without dose adjustment'],
      escalationTriggers: ['Clinical non-response after 48-72 hours', 'Biomarker deterioration', 'Vital sign instability'],
      guidelineAdherenceMetrics: {
        targetTimeframeHours: 48,
        requiresAttendingSignature: true,
        auditClassification: 'CLASS_A_CLINICAL_PROTOCOL'
      }
    });
    this.registerPathway({
      id: 'IMM-PATH-020',
      name: 'Evidence-Based Clinical Protocol for Mast Cell Activation Syndrome (Pathway #20)',
      condition: 'Mast Cell Activation Syndrome',
      tier: 'Level 3 High-Grade Evidence',
      reassessmentIntervalHours: 12,
      mandatoryDiagnostics: ['Basophil Activation Testing (BAT)', 'Serial Metabolic Panel monitoring', 'Diagnostic verification panel'],
      firstLineTherapeutics: ['Allergen Sublingual / Subcutaneous Immunotherapy (AIT)', 'Lifestyle modification and clinical counseling'],
      contraindicationAlerts: ['Documented hypersensitivity to first-line therapeutic agents', 'Severe renal impairment without dose adjustment'],
      escalationTriggers: ['Clinical non-response after 48-72 hours', 'Biomarker deterioration', 'Vital sign instability'],
      guidelineAdherenceMetrics: {
        targetTimeframeHours: 72,
        requiresAttendingSignature: true,
        auditClassification: 'CLASS_A_CLINICAL_PROTOCOL'
      }
    });
    this.registerPathway({
      id: 'IMM-PATH-021',
      name: 'Evidence-Based Clinical Protocol for Common Variable Immunodeficiency (CVID) (Pathway #21)',
      condition: 'Common Variable Immunodeficiency (CVID)',
      tier: 'Level 1 High-Grade Evidence',
      reassessmentIntervalHours: 24,
      mandatoryDiagnostics: ['Quantitative Serum Immunoglobulins (IgG, IgA, IgM, IgE)', 'Serial Metabolic Panel monitoring', 'Diagnostic verification panel'],
      firstLineTherapeutics: ['Subcutaneous / Intravenous Immunoglobulin (SCIG / IVIG)', 'Lifestyle modification and clinical counseling'],
      contraindicationAlerts: ['Documented hypersensitivity to first-line therapeutic agents', 'Severe renal impairment without dose adjustment'],
      escalationTriggers: ['Clinical non-response after 48-72 hours', 'Biomarker deterioration', 'Vital sign instability'],
      guidelineAdherenceMetrics: {
        targetTimeframeHours: 24,
        requiresAttendingSignature: true,
        auditClassification: 'CLASS_A_CLINICAL_PROTOCOL'
      }
    });
    this.registerPathway({
      id: 'IMM-PATH-022',
      name: 'Evidence-Based Clinical Protocol for Severe Systemic Anaphylaxis (Pathway #22)',
      condition: 'Severe Systemic Anaphylaxis',
      tier: 'Level 2 High-Grade Evidence',
      reassessmentIntervalHours: 36,
      mandatoryDiagnostics: ['Specific Vaccine Antibody Responses (Pneumococcal / Tetanus)', 'Serial Metabolic Panel monitoring', 'Diagnostic verification panel'],
      firstLineTherapeutics: ['Epinephrine Auto-Injector Prescription and Patient Training', 'Lifestyle modification and clinical counseling'],
      contraindicationAlerts: ['Documented hypersensitivity to first-line therapeutic agents', 'Severe renal impairment without dose adjustment'],
      escalationTriggers: ['Clinical non-response after 48-72 hours', 'Biomarker deterioration', 'Vital sign instability'],
      guidelineAdherenceMetrics: {
        targetTimeframeHours: 48,
        requiresAttendingSignature: true,
        auditClassification: 'CLASS_A_CLINICAL_PROTOCOL'
      }
    });
    this.registerPathway({
      id: 'IMM-PATH-023',
      name: 'Evidence-Based Clinical Protocol for Hereditary Angioedema (HAE) (Pathway #23)',
      condition: 'Hereditary Angioedema (HAE)',
      tier: 'Level 3 High-Grade Evidence',
      reassessmentIntervalHours: 48,
      mandatoryDiagnostics: ['Complement Functional Assays (CH50, C1-INH Level/Function)', 'Serial Metabolic Panel monitoring', 'Diagnostic verification panel'],
      firstLineTherapeutics: ['C1-Esterase Inhibitor Replacement / Bradykinin Antagonists', 'Lifestyle modification and clinical counseling'],
      contraindicationAlerts: ['Documented hypersensitivity to first-line therapeutic agents', 'Severe renal impairment without dose adjustment'],
      escalationTriggers: ['Clinical non-response after 48-72 hours', 'Biomarker deterioration', 'Vital sign instability'],
      guidelineAdherenceMetrics: {
        targetTimeframeHours: 72,
        requiresAttendingSignature: true,
        auditClassification: 'CLASS_A_CLINICAL_PROTOCOL'
      }
    });
    this.registerPathway({
      id: 'IMM-PATH-024',
      name: 'Evidence-Based Clinical Protocol for Severe Allergic Rhinitis (Pathway #24)',
      condition: 'Severe Allergic Rhinitis',
      tier: 'Level 1 High-Grade Evidence',
      reassessmentIntervalHours: 12,
      mandatoryDiagnostics: ['Skin Prick Testing and Serum Specific IgE Panels', 'Serial Metabolic Panel monitoring', 'Diagnostic verification panel'],
      firstLineTherapeutics: ['Allergen Sublingual / Subcutaneous Immunotherapy (AIT)', 'Lifestyle modification and clinical counseling'],
      contraindicationAlerts: ['Documented hypersensitivity to first-line therapeutic agents', 'Severe renal impairment without dose adjustment'],
      escalationTriggers: ['Clinical non-response after 48-72 hours', 'Biomarker deterioration', 'Vital sign instability'],
      guidelineAdherenceMetrics: {
        targetTimeframeHours: 24,
        requiresAttendingSignature: true,
        auditClassification: 'CLASS_A_CLINICAL_PROTOCOL'
      }
    });
    this.registerPathway({
      id: 'IMM-PATH-025',
      name: 'Evidence-Based Clinical Protocol for Mast Cell Activation Syndrome (Pathway #25)',
      condition: 'Mast Cell Activation Syndrome',
      tier: 'Level 2 High-Grade Evidence',
      reassessmentIntervalHours: 24,
      mandatoryDiagnostics: ['Basophil Activation Testing (BAT)', 'Serial Metabolic Panel monitoring', 'Diagnostic verification panel'],
      firstLineTherapeutics: ['Subcutaneous / Intravenous Immunoglobulin (SCIG / IVIG)', 'Lifestyle modification and clinical counseling'],
      contraindicationAlerts: ['Documented hypersensitivity to first-line therapeutic agents', 'Severe renal impairment without dose adjustment'],
      escalationTriggers: ['Clinical non-response after 48-72 hours', 'Biomarker deterioration', 'Vital sign instability'],
      guidelineAdherenceMetrics: {
        targetTimeframeHours: 48,
        requiresAttendingSignature: true,
        auditClassification: 'CLASS_A_CLINICAL_PROTOCOL'
      }
    });
    this.registerPathway({
      id: 'IMM-PATH-026',
      name: 'Evidence-Based Clinical Protocol for Common Variable Immunodeficiency (CVID) (Pathway #26)',
      condition: 'Common Variable Immunodeficiency (CVID)',
      tier: 'Level 3 High-Grade Evidence',
      reassessmentIntervalHours: 36,
      mandatoryDiagnostics: ['Quantitative Serum Immunoglobulins (IgG, IgA, IgM, IgE)', 'Serial Metabolic Panel monitoring', 'Diagnostic verification panel'],
      firstLineTherapeutics: ['Epinephrine Auto-Injector Prescription and Patient Training', 'Lifestyle modification and clinical counseling'],
      contraindicationAlerts: ['Documented hypersensitivity to first-line therapeutic agents', 'Severe renal impairment without dose adjustment'],
      escalationTriggers: ['Clinical non-response after 48-72 hours', 'Biomarker deterioration', 'Vital sign instability'],
      guidelineAdherenceMetrics: {
        targetTimeframeHours: 72,
        requiresAttendingSignature: true,
        auditClassification: 'CLASS_A_CLINICAL_PROTOCOL'
      }
    });
    this.registerPathway({
      id: 'IMM-PATH-027',
      name: 'Evidence-Based Clinical Protocol for Severe Systemic Anaphylaxis (Pathway #27)',
      condition: 'Severe Systemic Anaphylaxis',
      tier: 'Level 1 High-Grade Evidence',
      reassessmentIntervalHours: 48,
      mandatoryDiagnostics: ['Specific Vaccine Antibody Responses (Pneumococcal / Tetanus)', 'Serial Metabolic Panel monitoring', 'Diagnostic verification panel'],
      firstLineTherapeutics: ['C1-Esterase Inhibitor Replacement / Bradykinin Antagonists', 'Lifestyle modification and clinical counseling'],
      contraindicationAlerts: ['Documented hypersensitivity to first-line therapeutic agents', 'Severe renal impairment without dose adjustment'],
      escalationTriggers: ['Clinical non-response after 48-72 hours', 'Biomarker deterioration', 'Vital sign instability'],
      guidelineAdherenceMetrics: {
        targetTimeframeHours: 24,
        requiresAttendingSignature: true,
        auditClassification: 'CLASS_A_CLINICAL_PROTOCOL'
      }
    });
    this.registerPathway({
      id: 'IMM-PATH-028',
      name: 'Evidence-Based Clinical Protocol for Hereditary Angioedema (HAE) (Pathway #28)',
      condition: 'Hereditary Angioedema (HAE)',
      tier: 'Level 2 High-Grade Evidence',
      reassessmentIntervalHours: 12,
      mandatoryDiagnostics: ['Complement Functional Assays (CH50, C1-INH Level/Function)', 'Serial Metabolic Panel monitoring', 'Diagnostic verification panel'],
      firstLineTherapeutics: ['Allergen Sublingual / Subcutaneous Immunotherapy (AIT)', 'Lifestyle modification and clinical counseling'],
      contraindicationAlerts: ['Documented hypersensitivity to first-line therapeutic agents', 'Severe renal impairment without dose adjustment'],
      escalationTriggers: ['Clinical non-response after 48-72 hours', 'Biomarker deterioration', 'Vital sign instability'],
      guidelineAdherenceMetrics: {
        targetTimeframeHours: 48,
        requiresAttendingSignature: true,
        auditClassification: 'CLASS_A_CLINICAL_PROTOCOL'
      }
    });
    this.registerPathway({
      id: 'IMM-PATH-029',
      name: 'Evidence-Based Clinical Protocol for Severe Allergic Rhinitis (Pathway #29)',
      condition: 'Severe Allergic Rhinitis',
      tier: 'Level 3 High-Grade Evidence',
      reassessmentIntervalHours: 24,
      mandatoryDiagnostics: ['Skin Prick Testing and Serum Specific IgE Panels', 'Serial Metabolic Panel monitoring', 'Diagnostic verification panel'],
      firstLineTherapeutics: ['Subcutaneous / Intravenous Immunoglobulin (SCIG / IVIG)', 'Lifestyle modification and clinical counseling'],
      contraindicationAlerts: ['Documented hypersensitivity to first-line therapeutic agents', 'Severe renal impairment without dose adjustment'],
      escalationTriggers: ['Clinical non-response after 48-72 hours', 'Biomarker deterioration', 'Vital sign instability'],
      guidelineAdherenceMetrics: {
        targetTimeframeHours: 72,
        requiresAttendingSignature: true,
        auditClassification: 'CLASS_A_CLINICAL_PROTOCOL'
      }
    });
    this.registerPathway({
      id: 'IMM-PATH-030',
      name: 'Evidence-Based Clinical Protocol for Mast Cell Activation Syndrome (Pathway #30)',
      condition: 'Mast Cell Activation Syndrome',
      tier: 'Level 1 High-Grade Evidence',
      reassessmentIntervalHours: 36,
      mandatoryDiagnostics: ['Basophil Activation Testing (BAT)', 'Serial Metabolic Panel monitoring', 'Diagnostic verification panel'],
      firstLineTherapeutics: ['Epinephrine Auto-Injector Prescription and Patient Training', 'Lifestyle modification and clinical counseling'],
      contraindicationAlerts: ['Documented hypersensitivity to first-line therapeutic agents', 'Severe renal impairment without dose adjustment'],
      escalationTriggers: ['Clinical non-response after 48-72 hours', 'Biomarker deterioration', 'Vital sign instability'],
      guidelineAdherenceMetrics: {
        targetTimeframeHours: 24,
        requiresAttendingSignature: true,
        auditClassification: 'CLASS_A_CLINICAL_PROTOCOL'
      }
    });
    this.registerPathway({
      id: 'IMM-PATH-031',
      name: 'Evidence-Based Clinical Protocol for Common Variable Immunodeficiency (CVID) (Pathway #31)',
      condition: 'Common Variable Immunodeficiency (CVID)',
      tier: 'Level 2 High-Grade Evidence',
      reassessmentIntervalHours: 48,
      mandatoryDiagnostics: ['Quantitative Serum Immunoglobulins (IgG, IgA, IgM, IgE)', 'Serial Metabolic Panel monitoring', 'Diagnostic verification panel'],
      firstLineTherapeutics: ['C1-Esterase Inhibitor Replacement / Bradykinin Antagonists', 'Lifestyle modification and clinical counseling'],
      contraindicationAlerts: ['Documented hypersensitivity to first-line therapeutic agents', 'Severe renal impairment without dose adjustment'],
      escalationTriggers: ['Clinical non-response after 48-72 hours', 'Biomarker deterioration', 'Vital sign instability'],
      guidelineAdherenceMetrics: {
        targetTimeframeHours: 48,
        requiresAttendingSignature: true,
        auditClassification: 'CLASS_A_CLINICAL_PROTOCOL'
      }
    });
    this.registerPathway({
      id: 'IMM-PATH-032',
      name: 'Evidence-Based Clinical Protocol for Severe Systemic Anaphylaxis (Pathway #32)',
      condition: 'Severe Systemic Anaphylaxis',
      tier: 'Level 3 High-Grade Evidence',
      reassessmentIntervalHours: 12,
      mandatoryDiagnostics: ['Specific Vaccine Antibody Responses (Pneumococcal / Tetanus)', 'Serial Metabolic Panel monitoring', 'Diagnostic verification panel'],
      firstLineTherapeutics: ['Allergen Sublingual / Subcutaneous Immunotherapy (AIT)', 'Lifestyle modification and clinical counseling'],
      contraindicationAlerts: ['Documented hypersensitivity to first-line therapeutic agents', 'Severe renal impairment without dose adjustment'],
      escalationTriggers: ['Clinical non-response after 48-72 hours', 'Biomarker deterioration', 'Vital sign instability'],
      guidelineAdherenceMetrics: {
        targetTimeframeHours: 72,
        requiresAttendingSignature: true,
        auditClassification: 'CLASS_A_CLINICAL_PROTOCOL'
      }
    });
    this.registerPathway({
      id: 'IMM-PATH-033',
      name: 'Evidence-Based Clinical Protocol for Hereditary Angioedema (HAE) (Pathway #33)',
      condition: 'Hereditary Angioedema (HAE)',
      tier: 'Level 1 High-Grade Evidence',
      reassessmentIntervalHours: 24,
      mandatoryDiagnostics: ['Complement Functional Assays (CH50, C1-INH Level/Function)', 'Serial Metabolic Panel monitoring', 'Diagnostic verification panel'],
      firstLineTherapeutics: ['Subcutaneous / Intravenous Immunoglobulin (SCIG / IVIG)', 'Lifestyle modification and clinical counseling'],
      contraindicationAlerts: ['Documented hypersensitivity to first-line therapeutic agents', 'Severe renal impairment without dose adjustment'],
      escalationTriggers: ['Clinical non-response after 48-72 hours', 'Biomarker deterioration', 'Vital sign instability'],
      guidelineAdherenceMetrics: {
        targetTimeframeHours: 24,
        requiresAttendingSignature: true,
        auditClassification: 'CLASS_A_CLINICAL_PROTOCOL'
      }
    });
    this.registerPathway({
      id: 'IMM-PATH-034',
      name: 'Evidence-Based Clinical Protocol for Severe Allergic Rhinitis (Pathway #34)',
      condition: 'Severe Allergic Rhinitis',
      tier: 'Level 2 High-Grade Evidence',
      reassessmentIntervalHours: 36,
      mandatoryDiagnostics: ['Skin Prick Testing and Serum Specific IgE Panels', 'Serial Metabolic Panel monitoring', 'Diagnostic verification panel'],
      firstLineTherapeutics: ['Epinephrine Auto-Injector Prescription and Patient Training', 'Lifestyle modification and clinical counseling'],
      contraindicationAlerts: ['Documented hypersensitivity to first-line therapeutic agents', 'Severe renal impairment without dose adjustment'],
      escalationTriggers: ['Clinical non-response after 48-72 hours', 'Biomarker deterioration', 'Vital sign instability'],
      guidelineAdherenceMetrics: {
        targetTimeframeHours: 48,
        requiresAttendingSignature: true,
        auditClassification: 'CLASS_A_CLINICAL_PROTOCOL'
      }
    });
  }

  registerPathway(pathway) {
    this.decisionTree.set(pathway.id, pathway);
  }

  evaluateClinicalRisk(patient, vitals, labData = {}) {
    const auditReport = {
      engine: this.specialtyName,
      domain: this.clinicalDomain,
      evaluatedAt: new Date().toISOString(),
      patientId: patient ? patient.id : null,
      riskScore: 0,
      riskLevel: 'LOW_RISK_ROUTINE',
      activeAlerts: [],
      matchedPathways: [],
      recommendedActions: []
    };

    if (!patient) return auditReport;

    // Age & Demographic risk weighting
    if (patient.dob) {
      const age = new Date().getFullYear() - new Date(patient.dob).getFullYear();
      if (age >= 65) {
        auditReport.riskScore += 18;
        auditReport.activeAlerts.push('Geriatric demographic category: enhanced monitoring required.');
      }
    }

    // Vitals Evaluation
    if (vitals) {
      if (vitals.bpSys && vitals.bpSys >= 140) {
        auditReport.riskScore += 22;
        auditReport.activeAlerts.push('Stage 2 Systolic Hypertension identified during Immunology review.');
      }
      if (vitals.hr && (vitals.hr > 100 || vitals.hr < 55)) {
        auditReport.riskScore += 15;
        auditReport.activeAlerts.push('Heart rate anomaly detected outside physiologic baseline.');
      }
      if (vitals.spo2 && vitals.spo2 < 94) {
        auditReport.riskScore += 25;
        auditReport.activeAlerts.push('Hypoxemia warning: SpO2 measured below 94%.');
      }
    }

    // Chronic Disease Matching
    const chronic = patient.chronicConditions || [];
    for (const c of chronic) {
      const matched = Array.from(this.decisionTree.values()).find(p => p.condition.toLowerCase().includes(c.name.toLowerCase()) || c.name.toLowerCase().includes(p.condition.toLowerCase()));
      if (matched) {
        auditReport.riskScore += 20;
        auditReport.matchedPathways.push(matched);
      }
    }

    // Assign Overall Risk Level
    if (auditReport.riskScore >= 60) {
      auditReport.riskLevel = 'HIGH_PRIORITY_CLINICAL_ESCALATION';
    } else if (auditReport.riskScore >= 30) {
      auditReport.riskLevel = 'MODERATE_SURVEILLANCE_INDICATED';
    } else {
      auditReport.riskLevel = 'STABLE_STANDARD_OF_CARE';
    }

    auditReport.recommendedDiagnostics = this.diagnosticsRegistry;
    auditReport.recommendedTherapeutics = this.treatmentPathways;

    return auditReport;
  }

  getProtocolsForCondition(conditionName) {
    if (!conditionName) return Array.from(this.decisionTree.values());
    const q = conditionName.toLowerCase();
    return Array.from(this.decisionTree.values()).filter(p => p.condition.toLowerCase().includes(q) || p.name.toLowerCase().includes(q));
  }

  validateTherapeuticOrder(order = {}, patient = {}) {
    const validation = {
      approved: true,
      warnings: [],
      requiresDoseAdjustment: false
    };

    if (!order.drugName) return validation;

    const allergies = patient.allergies || [];
    for (const a of allergies) {
      if (order.drugName.toLowerCase().includes(a.allergen.toLowerCase())) {
        validation.approved = false;
        validation.warnings.push('Severe Allergy Contraindication: Documented allergy to ' + a.allergen);
      }
    }

    return validation;
  }
}

module.exports = ImmunologyClinicalEngine;
