/**
 * Emergency Triage & Hospital Bed Census View Controller
 */

const TriageBedView = {
  async render(container) {
    container.innerHTML = `
      <div class="page-header">
        <div>
          <h1 class="page-title"><span>🚑</span> Emergency Triage & Inpatient Bed Census</h1>
          <p class="page-subtitle">Emergency Severity Index (ESI 1-5), acute telemetry monitoring, and ward occupancy</p>
        </div>
        <button class="btn btn-primary" onclick="Toast.show('success', 'Bed census updated in real-time.')">Refresh Bed Matrix</button>
      </div>

      <div class="grid-cards">
        <div class="stat-card">
          <div class="stat-icon-wrapper" style="background: #fee2e2; color: #991b1b;">🚨</div>
          <div>
            <div class="stat-val">ESI 1-2 (Acute)</div>
            <div class="stat-label">2 Critical Trauma Patients</div>
          </div>
        </div>
        <div class="stat-card">
          <div class="stat-icon-wrapper" style="background: #dbeafe; color: #1d4ed8;">🛏️</div>
          <div>
            <div class="stat-val">82.4%</div>
            <div class="stat-label">Overall Ward Bed Occupancy</div>
          </div>
        </div>
        <div class="stat-card">
          <div class="stat-icon-wrapper" style="background: #d1fae5; color: #047857;">✅</div>
          <div>
            <div class="stat-val">6 Beds</div>
            <div class="stat-label">Available Clean Inpatient Beds</div>
          </div>
        </div>
        <div class="stat-card">
          <div class="stat-icon-wrapper" style="background: #ede9fe; color: #6d28d9;">⏱️</div>
          <div>
            <div class="stat-val">18 min</div>
            <div class="stat-label">Door-to-Doctor Triage Velocity</div>
          </div>
        </div>
      </div>

      <div class="panel">
        <div class="panel-header">
          <h3 class="panel-title"><span>🏥</span> Real-Time Ward & Bed Census Matrix</h3>
        </div>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 1.25rem;">
          <div style="background: var(--bg-surface-elevated); padding: 1.25rem; border-radius: var(--radius-lg); border: 1px solid var(--border-color);">
            <div style="font-size: 0.75rem; color: var(--text-muted); font-weight: 700;">INTENSIVE CARE UNIT (ICU)</div>
            <h3 style="font-size: 1.2rem; font-weight: 700; margin: 0.25rem 0;">Bed ICU-01</h3>
            <div style="margin: 0.5rem 0;"><span class="badge badge-red">OCCUPIED (ESI-1)</span></div>
            <div style="font-size: 0.85rem;">Patient: <strong>Eleanor Vance</strong></div>
            <div style="font-size: 0.75rem; color: var(--text-muted);">Attending: Dr. Evelyn Smith</div>
          </div>

          <div style="background: var(--bg-surface-elevated); padding: 1.25rem; border-radius: var(--radius-lg); border: 1px solid var(--border-color);">
            <div style="font-size: 0.75rem; color: var(--text-muted); font-weight: 700;">INTENSIVE CARE UNIT (ICU)</div>
            <h3 style="font-size: 1.2rem; font-weight: 700; margin: 0.25rem 0;">Bed ICU-02</h3>
            <div style="margin: 0.5rem 0;"><span class="badge badge-green">AVAILABLE (CLEANED)</span></div>
            <div style="font-size: 0.85rem; color: var(--text-muted);">Telemetry Active</div>
            <button class="btn btn-secondary btn-sm" style="margin-top: 0.5rem;" onclick="Toast.show('info', 'Bed ICU-02 reserved for direct admit.')">Assign Patient</button>
          </div>

          <div style="background: var(--bg-surface-elevated); padding: 1.25rem; border-radius: var(--radius-lg); border: 1px solid var(--border-color);">
            <div style="font-size: 0.75rem; color: var(--text-muted); font-weight: 700;">CARDIAC STEP-DOWN</div>
            <h3 style="font-size: 1.2rem; font-weight: 700; margin: 0.25rem 0;">Bed CARD-01</h3>
            <div style="margin: 0.5rem 0;"><span class="badge badge-amber">OCCUPIED (ESI-3)</span></div>
            <div style="font-size: 0.85rem;">Patient: <strong>James Holloway</strong></div>
            <div style="font-size: 0.75rem; color: var(--text-muted);">Attending: Dr. Evelyn Smith</div>
          </div>

          <div style="background: var(--bg-surface-elevated); padding: 1.25rem; border-radius: var(--radius-lg); border: 1px solid var(--border-color);">
            <div style="font-size: 0.75rem; color: var(--text-muted); font-weight: 700;">PULMONARY CARE WARD</div>
            <h3 style="font-size: 1.2rem; font-weight: 700; margin: 0.25rem 0;">Bed PULM-01</h3>
            <div style="margin: 0.5rem 0;"><span class="badge badge-blue">OCCUPIED (ESI-3)</span></div>
            <div style="font-size: 0.85rem;">Patient: <strong>Aaliyah Mansour</strong></div>
            <div style="font-size: 0.75rem; color: var(--text-muted);">Attending: Dr. Marcus Chen</div>
          </div>

          <div style="background: var(--bg-surface-elevated); padding: 1.25rem; border-radius: var(--radius-lg); border: 1px solid var(--border-color);">
            <div style="font-size: 0.75rem; color: var(--text-muted); font-weight: 700;">MED-SURG 4TH FLOOR</div>
            <h3 style="font-size: 1.2rem; font-weight: 700; margin: 0.25rem 0;">Bed MS-402</h3>
            <div style="margin: 0.5rem 0;"><span class="badge badge-green">AVAILABLE (CLEANED)</span></div>
            <div style="font-size: 0.85rem; color: var(--text-muted);">Standard Inpatient Bed</div>
            <button class="btn btn-secondary btn-sm" style="margin-top: 0.5rem;" onclick="Toast.show('info', 'Bed MS-402 reserved for admit.')">Assign Patient</button>
          </div>
        </div>
      </div>
    `;
  }
};
