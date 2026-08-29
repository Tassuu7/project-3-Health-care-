/**
 * PulseCare Patient Self-Service Health Portal View Controller
 * Provides longitudinal health summary, active medications, refill requests,
 * lab test results, direct clinic appointment scheduling, and care team messaging.
 */

const PatientPortalView = {
  async render(container) {
    const user = Auth.currentUser || { fullName: 'Eleanor Vance', mrn: 'MRN-100492' };

    container.innerHTML = `
      <div class="patient-hero-banner">
        <div>
          <div style="font-size: 0.85rem; opacity: 0.85; text-transform: uppercase; letter-spacing: 1px;">Patient Health Portal</div>
          <h1 style="font-size: 1.75rem; font-weight: 700; margin: 0.25rem 0;">Welcome, ${user.fullName}</h1>
          <div style="font-size: 0.875rem; opacity: 0.9;">MRN: <strong>${user.mrn || 'MRN-100492'}</strong> • Primary Care: <strong>Dr. Evelyn Smith, MD (Cardiology)</strong></div>
        </div>
        <div>
          <a href="#appointments" class="btn btn-success" style="padding: 0.75rem 1.25rem; font-size: 1rem; box-shadow: 0 0 20px rgba(16, 185, 129, 0.4);">
            📅 Schedule Clinic Appointment
          </a>
        </div>
      </div>

      <!-- Quick Action Cards Grid -->
      <div class="patient-action-grid">
        <div class="patient-card-btn" onclick="Router.navigate('appointments')">
          <div style="font-size: 2rem;">📅</div>
          <h3 style="font-size: 1.15rem; font-weight: 700;">Clinical Appointments</h3>
          <p style="font-size: 0.85rem; color: var(--text-secondary);">View upcoming outpatient clinic visits and schedule new specialist consultations.</p>
          <span class="badge badge-green" style="align-self: flex-start;">Active Queue</span>
        </div>

        <div class="patient-card-btn" id="quickRefillCard">
          <div style="font-size: 2rem;">💊</div>
          <h3 style="font-size: 1.15rem; font-weight: 700;">Prescriptions & Refills</h3>
          <p style="font-size: 0.85rem; color: var(--text-secondary);">Review active medications (Lisinopril, Metformin) and submit 1-click refill requests.</p>
          <span class="badge badge-blue" style="align-self: flex-start;">3 Active Meds</span>
        </div>

        <div class="patient-card-btn" onclick="Router.navigate('labs')">
          <div style="font-size: 2rem;">🔬</div>
          <h3 style="font-size: 1.15rem; font-weight: 700;">Diagnostic Lab Reports</h3>
          <p style="font-size: 0.85rem; color: var(--text-secondary);">View Comprehensive Metabolic Panels, Lipid Profiles, and HbA1c results.</p>
          <span class="badge badge-amber" style="align-self: flex-start;">Results Verified</span>
        </div>
      </div>

      <!-- Health Overview & Vitals -->
      <div style="display: grid; grid-template-columns: 2fr 1fr; gap: 1.25rem; margin-bottom: 1.5rem;">
        <div class="panel">
          <div class="panel-header">
            <h3 class="panel-title"><span>📊</span> My Longitudinal Health Summary</h3>
          </div>
          <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 1rem; margin-bottom: 1.25rem;">
            <div style="background: var(--bg-surface-elevated); padding: 1rem; border-radius: var(--radius-lg); text-align: center;">
              <div style="font-size: 0.75rem; color: var(--text-muted);">Blood Pressure</div>
              <div style="font-size: 1.4rem; font-weight: 700; color: var(--clinical-emerald);">138/84</div>
              <div style="font-size: 0.7rem; color: var(--text-muted);">mmHg (Controlled)</div>
            </div>
            <div style="background: var(--bg-surface-elevated); padding: 1rem; border-radius: var(--radius-lg); text-align: center;">
              <div style="font-size: 0.75rem; color: var(--text-muted);">Heart Rate</div>
              <div style="font-size: 1.4rem; font-weight: 700; color: var(--primary-400);">72</div>
              <div style="font-size: 0.7rem; color: var(--text-muted);">bpm (Regular)</div>
            </div>
            <div style="background: var(--bg-surface-elevated); padding: 1rem; border-radius: var(--radius-lg); text-align: center;">
              <div style="font-size: 0.75rem; color: var(--text-muted);">Oxygen Saturation</div>
              <div style="font-size: 1.4rem; font-weight: 700; color: var(--clinical-teal);">98%</div>
              <div style="font-size: 0.7rem; color: var(--text-muted);">Room Air</div>
            </div>
            <div style="background: var(--bg-surface-elevated); padding: 1rem; border-radius: var(--radius-lg); text-align: center;">
              <div style="font-size: 0.75rem; color: var(--text-muted);">BMI Score</div>
              <div style="font-size: 1.4rem; font-weight: 700; color: var(--clinical-amber);">28.4</div>
              <div style="font-size: 0.7rem; color: var(--text-muted);">Overweight (Stable)</div>
            </div>
          </div>

          <h4 style="font-size: 0.95rem; font-weight: 600; margin-bottom: 0.5rem;">Active Medications & Schedule:</h4>
          <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.5rem;">
            <li style="background: var(--bg-surface-elevated); padding: 0.75rem 1rem; border-radius: var(--radius-md); display: flex; justify-content: space-between; align-items: center;">
              <div>
                <strong>Lisinopril 20mg</strong> — 1 tablet PO every morning with water
                <div style="font-size: 0.75rem; color: var(--text-muted);">For Hypertension • Refills: 2 remaining</div>
              </div>
              <button class="btn btn-secondary btn-sm" onclick="Toast.show('success', 'Refill requested for Lisinopril 20mg. Pharmacy notified.')">Request Refill</button>
            </li>
            <li style="background: var(--bg-surface-elevated); padding: 0.75rem 1rem; border-radius: var(--radius-md); display: flex; justify-content: space-between; align-items: center;">
              <div>
                <strong>Metformin 1000mg</strong> — 1 tablet PO twice daily with meals
                <div style="font-size: 0.75rem; color: var(--text-muted);">For Type 2 Diabetes • Refills: 3 remaining</div>
              </div>
              <button class="btn btn-secondary btn-sm" onclick="Toast.show('success', 'Refill requested for Metformin 1000mg. Pharmacy notified.')">Request Refill</button>
            </li>
          </ul>
        </div>

        <!-- Allergies & Care Team -->
        <div class="panel">
          <div class="panel-header">
            <h3 class="panel-title"><span>🛡️</span> Allergies & Care Team</h3>
          </div>
          <div style="margin-bottom: 1rem;">
            <div style="font-size: 0.8rem; color: var(--text-muted); margin-bottom: 0.25rem;">DOCUMENTED ALLERGIES:</div>
            <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
              <span class="badge badge-rose">Penicillin (Severe)</span>
              <span class="badge badge-amber">Sulfa Drugs (Moderate)</span>
            </div>
          </div>

          <div>
            <div style="font-size: 0.8rem; color: var(--text-muted); margin-bottom: 0.25rem;">ASSIGNED CLINICIANS:</div>
            <div style="font-size: 0.875rem;"><strong>Dr. Evelyn Smith, MD</strong> (Cardiologist)</div>
            <div style="font-size: 0.75rem; color: var(--text-muted);">Springfield Memorial Hospital • Outpatient Suite 402</div>
          </div>
        </div>
      </div>
    `;

    document.getElementById('quickRefillCard').addEventListener('click', () => {
      Toast.show('success', 'Refill request submitted to Springfield Outpatient Pharmacy!');
    });
  }
};
