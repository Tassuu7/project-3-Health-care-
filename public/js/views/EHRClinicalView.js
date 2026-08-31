/**
 * Comprehensive Clinical EHR Station View Controller
 */

const EHRClinicalView = {
  async render(container) {
    const patientId = State.currentPatientId || 'pat-001';

    const patient = {
      id: 'pat-001',
      mrn: 'MRN-100492',
      firstName: 'Eleanor',
      lastName: 'Vance',
      dob: '1961-04-12',
      gender: 'Female',
      bloodGroup: 'A+',
      insurance: { payerName: 'Blue Cross Blue Shield', policyNumber: 'BCBS-9912049' },
      allergies: [{ allergen: 'Penicillin (Severe)' }],
      vitalsHistory: [{ bpSys: 138, bpDia: 84, hr: 72, spo2: 98, bmi: 28.4 }],
      currentMedications: [
        { drug: 'Lisinopril', dose: '20mg', frequency: 'Daily in AM' },
        { drug: 'Metformin', dose: '1000mg', frequency: 'BID with meals' }
      ]
    };

    const alerts = [
      { severity: 'CRITICAL', title: 'Penicillin Allergy Contraindication', message: 'Patient has documented severe allergy to Penicillin. Beta-lactam antibiotics are contraindicated.' },
      { severity: 'MODERATE', title: 'ACE-Inhibitor Hyperkalemia Risk', message: 'Concurrent Lisinopril requires routine potassium and serum creatinine monitoring.' }
    ];

    container.innerHTML = `
      <!-- Patient Clinical Banner -->
      <div class="patient-header-bar">
        <div>
          <div style="font-size: 1.4rem; font-weight: 700;">${patient.firstName} ${patient.lastName}</div>
          <div style="font-size: 0.875rem; opacity: 0.9; margin-top: 0.25rem;">
            <strong>MRN:</strong> ${patient.mrn} | <strong>DOB:</strong> ${patient.dob} | <strong>Gender:</strong> ${patient.gender} | <strong>Blood:</strong> ${patient.bloodGroup}
          </div>
          <div style="font-size: 0.8125rem; opacity: 0.85; margin-top: 0.25rem;">
            <strong>Insurance:</strong> ${patient.insurance.payerName} (#${patient.insurance.policyNumber})
          </div>
        </div>
        <div style="text-align: right;">
          <div style="display: flex; gap: 0.5rem; justify-content: flex-end; margin-bottom: 0.5rem;">
            <button class="btn btn-secondary btn-sm" onclick="Toast.show('success', 'Vitals recorded in telemetry stream.')">+ Record Vitals</button>
            <button class="btn btn-secondary btn-sm" onclick="Router.navigate('prescriptions')">+ Prescribe e-Rx</button>
          </div>
          <div>
            ${patient.allergies.map(a => `<span class="badge badge-red" style="background: rgba(239, 68, 68, 0.9); color: white;">⚠️ Allergic: ${a.allergen}</span>`).join(' ')}
          </div>
        </div>
      </div>

      <!-- Clinical Decision Support (CDS) Banner -->
      <div style="background: #fffbeb; border: 1px solid #fde68a; border-radius: var(--radius-lg); padding: 1rem; margin-bottom: 1.5rem;">
        <div style="font-weight: 700; color: #b45309; display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem;">
          <span>🚨</span> Clinical Decision Support (CDS) Rules Engine: 2 Active Safety Alerts
        </div>
        ${alerts.map(al => `
          <div style="font-size: 0.8125rem; color: #92400e; margin-bottom: 0.35rem; padding-left: 1.5rem;">
            <strong>[${al.severity}] ${al.title}:</strong> ${al.message}
          </div>
        `).join('')}
      </div>

      <div class="ehr-layout">
        <!-- Left Column: Clinical Summary & Vitals -->
        <div>
          <div class="panel" style="margin-bottom: 1.5rem;">
            <div class="panel-header">
              <h3 class="panel-title">Latest Vitals Telemetry</h3>
            </div>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem; font-size: 0.875rem;">
              <div style="background: var(--bg-muted); padding: 0.75rem; border-radius: var(--radius-md);">
                <div style="color: var(--text-muted); font-size: 0.75rem;">Blood Pressure</div>
                <div style="font-weight: 700; font-size: 1.1rem; color: var(--primary-700);">138/84 mmHg</div>
              </div>
              <div style="background: var(--bg-muted); padding: 0.75rem; border-radius: var(--radius-md);">
                <div style="color: var(--text-muted); font-size: 0.75rem;">Heart Rate</div>
                <div style="font-weight: 700; font-size: 1.1rem;">72 bpm</div>
              </div>
              <div style="background: var(--bg-muted); padding: 0.75rem; border-radius: var(--radius-md);">
                <div style="color: var(--text-muted); font-size: 0.75rem;">Oxygen (SpO2)</div>
                <div style="font-weight: 700; font-size: 1.1rem; color: var(--clinical-emerald);">98%</div>
              </div>
              <div style="background: var(--bg-muted); padding: 0.75rem; border-radius: var(--radius-md);">
                <div style="color: var(--text-muted); font-size: 0.75rem;">BMI</div>
                <div style="font-weight: 700; font-size: 1.1rem;">28.4</div>
              </div>
            </div>
          </div>

          <div class="panel" style="margin-bottom: 1.5rem;">
            <div class="panel-header">
              <h3 class="panel-title">Active Medications</h3>
            </div>
            <ul style="font-size: 0.8125rem;">
              ${patient.currentMedications.map(m => `<li style="padding: 0.35rem 0; border-bottom: 1px solid var(--border-color);">💊 <strong>${m.drug}</strong> (${m.dose}) - ${m.frequency}</li>`).join('')}
            </ul>
          </div>
        </div>

        <!-- Right Column: SOAP Clinical Encounter Documentation Editor -->
        <div class="panel">
          <div class="panel-header">
            <h3 class="panel-title"><span>🩺</span> SOAP Clinical Encounter Documentation</h3>
            <button class="btn btn-success btn-sm" onclick="Toast.show('success', 'SOAP Note signed & committed to EHR.')">Sign & Seal Encounter</button>
          </div>

          <div class="soap-section">
            <div class="soap-label">Subjective (Chief Complaint & HPI):</div>
            <textarea class="form-control" rows="2">Patient presents for 3-month follow-up of Essential Hypertension and Type 2 Diabetes. Reports good medication adherence with Lisinopril and Metformin. Denies chest pain, shortness of breath, palpitations, or lightheadedness.</textarea>
          </div>

          <div class="soap-section">
            <div class="soap-label">Objective (Physical Exam & Diagnostics):</div>
            <textarea class="form-control" rows="2">BP 138/84 mmHg, HR 72 bpm regular. Heart: RRR, S1/S2 present, no murmurs. Lungs: Clear to auscultation bilaterally. Extremities: No peripheral edema. Recent HbA1c: 6.8%, eGFR: 78 mL/min/1.73m2.</textarea>
          </div>

          <div class="soap-section">
            <div class="soap-label">Assessment (ICD-10 Diagnoses):</div>
            <textarea class="form-control" rows="2">1. Essential (Primary) Hypertension - ICD-10: I10 (Controlled on current regimen)
2. Type 2 Diabetes Mellitus without complications - ICD-10: E11.9 (Glycemic control target achieved)</textarea>
          </div>

          <div class="soap-section">
            <div class="soap-label">Plan (Treatment & Orders):</div>
            <textarea class="form-control" rows="2">1. Continue Lisinopril 20mg PO daily.
2. Continue Metformin 1000mg PO BID with meals.
3. Order Comprehensive Metabolic Panel (CMP) in 6 months.
4. Return to clinic in 3-6 months or sooner PRN.</textarea>
          </div>
        </div>
      </div>
    `;
  }
};
