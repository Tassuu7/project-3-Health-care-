/**
 * Patient Health Portal View Controller
 */

const PatientPortalView = {
  async render(container) {
    container.innerHTML = `
      <div class="page-header">
        <div>
          <h1 class="page-title"><span>🌟</span> Patient Health & Wellness Portal</h1>
          <p class="page-subtitle">Direct access to your clinical records, test results & medication refills</p>
        </div>
      </div>

      <div class="grid-cards">
        <div class="stat-card">
          <div class="stat-icon-wrapper" style="background: #dbeafe; color: #1d4ed8;">🩺</div>
          <div>
            <div class="stat-val">138/84</div>
            <div class="stat-label">Blood Pressure (mmHg)</div>
            <div class="stat-delta positive">Normal Range</div>
          </div>
        </div>

        <div class="stat-card">
          <div class="stat-icon-wrapper" style="background: #d1fae5; color: #047857;">❤️</div>
          <div>
            <div class="stat-val">72 bpm</div>
            <div class="stat-label">Resting Heart Rate</div>
            <div class="stat-delta positive">Optimal Rhythm</div>
          </div>
        </div>

        <div class="stat-card">
          <div class="stat-icon-wrapper" style="background: #fef3c7; color: #b45309;">🫁</div>
          <div>
            <div class="stat-val">98%</div>
            <div class="stat-label">Pulse Oximetry (SpO2)</div>
            <div class="stat-delta positive">Excellent</div>
          </div>
        </div>

        <div class="stat-card">
          <div class="stat-icon-wrapper" style="background: #ede9fe; color: #6d28d9;">⚖️</div>
          <div>
            <div class="stat-val">28.4</div>
            <div class="stat-label">Body Mass Index (BMI)</div>
          </div>
        </div>
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem;">
        <div class="panel">
          <div class="panel-header">
            <h3 class="panel-title"><span>💊</span> Your Active Prescriptions</h3>
            <button class="btn btn-secondary btn-sm" onclick="Toast.show('success', 'Refill request submitted to clinical team.')">Request Refill</button>
          </div>
          <ul style="font-size: 0.875rem;">
            <li style="padding: 0.75rem 0; border-bottom: 1px solid var(--border-color);">
              <strong>Lisinopril 20mg Tablet</strong><br>
              <span style="color: var(--text-muted);">Take 1 tablet daily in the morning | 3 refills remaining</span>
            </li>
            <li style="padding: 0.75rem 0;">
              <strong>Metformin 1000mg Tablet</strong><br>
              <span style="color: var(--text-muted);">Take 1 tablet twice daily with meals | 5 refills remaining</span>
            </li>
          </ul>
        </div>

        <div class="panel">
          <div class="panel-header">
            <h3 class="panel-title"><span>📅</span> Upcoming Clinic Visits</h3>
            <button class="btn btn-secondary btn-sm" onclick="Router.navigate('appointments')">Book Visit</button>
          </div>
          <div style="font-size: 0.875rem; padding: 0.5rem 0;">
            <div style="font-weight: 700; color: var(--primary-700);">Cardiology Comprehensive Review</div>
            <div style="color: var(--text-muted); margin-top: 0.25rem;">With Dr. Evelyn Smith, MD • Tomorrow at 09:00 AM</div>
            <div style="margin-top: 0.75rem;">
              <span class="badge badge-green">Confirmed</span>
            </div>
          </div>
        </div>
      </div>
    `;
  }
};
