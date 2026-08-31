/**
 * Comprehensive Clinical EHR Station View Controller
 * Features SOAP documentation, Vitals Entry, CDS Alerts, and E-Prescribing.
 */

const EHRClinicalView = {
  async render(container) {
    const patientId = State.currentPatientId || 'pat-001';
    container.innerHTML = `<div style="padding: 2rem; text-align: center;">Loading Clinical Station...</div>`;

    try {
      const [patRes, cdsRes] = await Promise.all([
        API.get(`/patients/${patientId}`),
        API.get(`/patients/${patientId}/cds`)
      ]);

      const patient = patRes.data;
      const alerts = cdsRes.data.alerts || [];
      const latestVitals = patient.vitalsHistory && patient.vitalsHistory.length > 0
        ? patient.vitalsHistory[patient.vitalsHistory.length - 1]
        : null;

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
              <button class="btn btn-secondary btn-sm" id="ehrAddVitalsBtn">+ Record Vitals</button>
              <button class="btn btn-secondary btn-sm" id="ehrNewRxBtn">+ Prescribe e-Rx</button>
            </div>
            <div>
              ${patient.allergies.length > 0
                ? patient.allergies.map(a => `<span class="badge badge-red" style="background: rgba(239, 68, 68, 0.9); color: white;">⚠️ Allergic: ${a.allergen}</span>`).join(' ')
                : '<span class="badge" style="background: rgba(16, 185, 129, 0.9); color: white;">No Known Drug Allergies</span>'}
            </div>
          </div>
        </div>

        <!-- Clinical Decision Support (CDS) Banner -->
        ${alerts.length > 0 ? `
          <div style="background: #fffbeb; border: 1px solid #fde68a; border-radius: var(--radius-lg); padding: 1rem; margin-bottom: 1.5rem;">
            <div style="font-weight: 700; color: #b45309; display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem;">
              <span>🚨</span> Clinical Decision Support (CDS) Rules Engine: ${alerts.length} Active Alert(s)
            </div>
            ${alerts.map(al => `
              <div style="font-size: 0.8125rem; color: #92400e; margin-bottom: 0.35rem; padding-left: 1.5rem;">
                <strong>[${al.severity}] ${al.title}:</strong> ${al.message}
              </div>
            `).join('')}
          </div>
        ` : ''}

        <div class="ehr-layout">
          <!-- Left Column: Clinical Summary & Vitals -->
          <div>
            <div class="panel" style="margin-bottom: 1.5rem;">
              <div class="panel-header">
                <h3 class="panel-title">Latest Vitals Telemetry</h3>
              </div>
              ${latestVitals ? `
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem; font-size: 0.875rem;">
                  <div style="background: var(--bg-muted); padding: 0.75rem; border-radius: var(--radius-md);">
                    <div style="color: var(--text-muted); font-size: 0.75rem;">Blood Pressure</div>
                    <div style="font-weight: 700; font-size: 1.1rem; color: var(--primary-700);">${latestVitals.bpSys}/${latestVitals.bpDia} mmHg</div>
                  </div>
                  <div style="background: var(--bg-muted); padding: 0.75rem; border-radius: var(--radius-md);">
                    <div style="color: var(--text-muted); font-size: 0.75rem;">Heart Rate</div>
                    <div style="font-weight: 700; font-size: 1.1rem;">${latestVitals.hr} bpm</div>
                  </div>
                  <div style="background: var(--bg-muted); padding: 0.75rem; border-radius: var(--radius-md);">
                    <div style="color: var(--text-muted); font-size: 0.75rem;">Oxygen (SpO2)</div>
                    <div style="font-weight: 700; font-size: 1.1rem; color: var(--clinical-emerald);">${latestVitals.spo2}%</div>
                  </div>
                  <div style="background: var(--bg-muted); padding: 0.75rem; border-radius: var(--radius-md);">
                    <div style="color: var(--text-muted); font-size: 0.75rem;">BMI</div>
                    <div style="font-weight: 700; font-size: 1.1rem;">${latestVitals.bmi}</div>
                  </div>
                </div>
              ` : '<div style="color: var(--text-muted);">No vitals recorded yet.</div>'}
            </div>

            <div class="panel" style="margin-bottom: 1.5rem;">
              <div class="panel-header">
                <h3 class="panel-title">Active Medications</h3>
              </div>
              <ul style="font-size: 0.8125rem;">
                ${patient.currentMedications && patient.currentMedications.length > 0
                  ? patient.currentMedications.map(m => `<li style="padding: 0.35rem 0; border-bottom: 1px solid var(--border-color);">💊 <strong>${m.drug}</strong> (${m.dose}) - ${m.frequency}</li>`).join('')
                  : '<li style="color: var(--text-muted);">No active medications.</li>'}
              </ul>
            </div>
          </div>

          <!-- Right Column: SOAP Note Clinical Authoring -->
          <div>
            <div class="panel">
              <div class="panel-header">
                <h3 class="panel-title">Physician SOAP Encounter Documentation</h3>
                <button class="btn btn-success btn-sm" id="saveSOAPBtn">Save & Sign Encounter</button>
              </div>

              <div class="form-group">
                <label class="form-label">Chief Complaint</label>
                <input type="text" id="soapChiefComplaint" class="form-control" value="Routine Clinical Evaluation and Chronic Disease Management">
              </div>

              <div class="soap-editor-section">
                <div class="soap-box">
                  <div class="soap-title"><span>📝</span> Subjective (S)</div>
                  <textarea id="soapSubjective" class="soap-textarea" placeholder="History of present illness, patient-reported symptoms, medication adherence...">Patient reports feeling generally well. Denies acute chest pain, shortness of breath, or edema. Continues prescribed medications regularly.</textarea>
                </div>

                <div class="soap-box">
                  <div class="soap-title"><span>🩺</span> Objective (O)</div>
                  <textarea id="soapObjective" class="soap-textarea" placeholder="Physical examination findings, vital signs, lung sounds, heart rhythm...">Alert, oriented x4 in no acute distress. Lungs clear bilaterally. Regular rate and rhythm, normal S1/S2 without murmurs. Extremities warm and well-perfused.</textarea>
                </div>

                <div class="soap-box">
                  <div class="soap-title"><span>🔍</span> Assessment (A)</div>
                  <textarea id="soapAssessment" class="soap-textarea" placeholder="Clinical impressions, differential diagnoses, ICD-10 codings...">1. Essential Hypertension (ICD-10 I10) - Stable, well controlled on current regimen.
2. General Health Maintenance.</textarea>
                </div>

                <div class="soap-box">
                  <div class="soap-title"><span>📋</span> Plan (P)</div>
                  <textarea id="soapPlan" class="soap-textarea" placeholder="Therapeutic plan, diagnostics ordered, medications prescribed, follow-up...">1. Continue current medication regimen without changes.
2. Routine metabolic monitoring in 6 months.
3. Return to clinic as needed.</textarea>
                </div>
              </div>
            </div>
          </div>
        </div>
      `;

      // Event Handlers
      document.getElementById('saveSOAPBtn').addEventListener('click', async () => {
        try {
          const soapData = {
            patientId: patient.id,
            encounterType: 'OUTPATIENT_VISIT',
            chiefComplaint: document.getElementById('soapChiefComplaint').value,
            soapNote: {
              subjective: document.getElementById('soapSubjective').value,
              objective: document.getElementById('soapObjective').value,
              assessment: document.getElementById('soapAssessment').value,
              plan: document.getElementById('soapPlan').value
            }
          };

          const created = await API.post('/encounters', soapData);
          await API.post(`/encounters/${created.data.id}/sign`, {});
          Toast.show('success', 'Encounter documented and signed successfully!');
        } catch (e) {
          Toast.show('error', e.message);
        }
      });

      document.getElementById('ehrAddVitalsBtn').addEventListener('click', () => this.showVitalsModal(patient.id));
      document.getElementById('ehrNewRxBtn').addEventListener('click', () => this.showRxModal(patient.id));

    } catch (err) {
      container.innerHTML = `<div style="padding: 2rem; color: var(--clinical-rose);">Failed loading chart: ${err.message}</div>`;
    }
  },

  showVitalsModal(patientId) {
    const content = `
      <form id="vitalsEntryForm">
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
          <div class="form-group">
            <label class="form-label">Systolic BP (mmHg)</label>
            <input type="number" id="vitSys" class="form-control" value="120">
          </div>
          <div class="form-group">
            <label class="form-label">Diastolic BP (mmHg)</label>
            <input type="number" id="vitDia" class="form-control" value="80">
          </div>
        </div>
        <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 1rem;">
          <div class="form-group">
            <label class="form-label">Heart Rate (bpm)</label>
            <input type="number" id="vitHR" class="form-control" value="72">
          </div>
          <div class="form-group">
            <label class="form-label">Resp Rate (/min)</label>
            <input type="number" id="vitRR" class="form-control" value="16">
          </div>
          <div class="form-group">
            <label class="form-label">SpO2 (%)</label>
            <input type="number" id="vitSpO2" class="form-control" value="98">
          </div>
        </div>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
          <div class="form-group">
            <label class="form-label">Weight (kg)</label>
            <input type="number" step="0.1" id="vitWeight" class="form-control" value="75.0">
          </div>
          <div class="form-group">
            <label class="form-label">Height (cm)</label>
            <input type="number" id="vitHeight" class="form-control" value="175">
          </div>
        </div>
      </form>
    `;

    Modal.show('Record Patient Vitals', content, [
      {
        label: 'Save Vitals',
        className: 'btn-primary',
        onClick: async (close) => {
          const body = {
            bpSys: document.getElementById('vitSys').value,
            bpDia: document.getElementById('vitDia').value,
            hr: document.getElementById('vitHR').value,
            rr: document.getElementById('vitRR').value,
            spo2: document.getElementById('vitSpO2').value,
            weightKg: document.getElementById('vitWeight').value,
            heightCm: document.getElementById('vitHeight').value
          };
          try {
            await API.post(`/patients/${patientId}/vitals`, body);
            Toast.show('success', 'Vitals recorded successfully.');
            close();
            EHRClinicalView.render(document.getElementById('contentContainer'));
          } catch (e) {
            Toast.show('error', e.message);
          }
        }
      }
    ]);
  },

  showRxModal(patientId) {
    const content = `
      <form id="rxEntryForm">
        <div class="form-group">
          <label class="form-label">Medication / Drug Name</label>
          <input type="text" id="rxDrugName" class="form-control" placeholder="e.g. Lisinopril, Metformin, Atorvastatin" required>
        </div>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
          <div class="form-group">
            <label class="form-label">Strength</label>
            <input type="text" id="rxStrength" class="form-control" placeholder="e.g. 20mg" required>
          </div>
          <div class="form-group">
            <label class="form-label">Quantity</label>
            <input type="number" id="rxQuantity" class="form-control" value="30" required>
          </div>
        </div>
        <div class="form-group">
          <label class="form-label">Sig / Patient Directions</label>
          <input type="text" id="rxSig" class="form-control" placeholder="Take 1 tablet by mouth once daily every morning" required>
        </div>
      </form>
    `;

    Modal.show('Prescribe Electronic Prescription (e-Rx)', content, [
      {
        label: 'Issue Prescription',
        className: 'btn-primary',
        onClick: async (close) => {
          const body = {
            patientId,
            drugName: document.getElementById('rxDrugName').value,
            strength: document.getElementById('rxStrength').value,
            quantity: document.getElementById('rxQuantity').value,
            sig: document.getElementById('rxSig').value,
            refillsRemaining: 3
          };
          try {
            await API.post('/prescriptions', body);
            Toast.show('success', 'Prescription transmitted to pharmacy.');
            close();
            EHRClinicalView.render(document.getElementById('contentContainer'));
          } catch (e) {
            Toast.show('error', e.message);
          }
        }
      }
    ]);
  }
};
