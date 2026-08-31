/**
 * Hospital Analytics & Clinical Intelligence View Controller
 */

const AnalyticsView = {
  async render(container) {
    container.innerHTML = `
      <div class="page-header">
        <div>
          <h1 class="page-title"><span>📈</span> Hospital Analytics & Clinical Intelligence</h1>
          <p class="page-subtitle">Epidemiology cohorts, quality indicators, average length of stay (ALOS), and revenue cycle</p>
        </div>
        <button class="btn btn-primary" onclick="Toast.show('success', 'Clinical analytics report exported to PDF and CSV.')">Export Quality Report</button>
      </div>

      <div class="grid-cards">
        <div class="stat-card">
          <div class="stat-icon-wrapper" style="background: #d1fae5; color: #047857;">📈</div>
          <div>
            <div class="stat-val">99.4%</div>
            <div class="stat-label">HEDIS Quality Adherence</div>
            <div class="stat-delta positive">Top Decile Nationally</div>
          </div>
        </div>
        <div class="stat-card">
          <div class="stat-icon-wrapper" style="background: #dbeafe; color: #1d4ed8;">⏱️</div>
          <div>
            <div class="stat-val">2.8 Days</div>
            <div class="stat-label">Inpatient Average Length of Stay</div>
            <div class="stat-delta positive">↓ 0.4 days improvement</div>
          </div>
        </div>
        <div class="stat-card">
          <div class="stat-icon-wrapper" style="background: #fef3c7; color: #b45309;">👥</div>
          <div>
            <div class="stat-val">25</div>
            <div class="stat-label">Active Registry Cohorts</div>
            <div class="stat-delta">Master Patient Index (MPI)</div>
          </div>
        </div>
        <div class="stat-card">
          <div class="stat-icon-wrapper" style="background: #ede9fe; color: #6d28d9;">🏥</div>
          <div>
            <div class="stat-val">100%</div>
            <div class="stat-label">HIPAA Security & Audit Score</div>
            <div class="stat-delta positive">256-bit AES Enforced</div>
          </div>
        </div>
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-bottom: 1.5rem;">
        <div class="panel">
          <div class="panel-header">
            <h3 class="panel-title"><span>📊</span> Chronic Disease Prevalence Breakdown</h3>
          </div>
          <div style="display: flex; flex-direction: column; gap: 1rem;">
            <div>
              <div style="display: flex; justify-content: space-between; font-size: 0.85rem; font-weight: 600; margin-bottom: 0.25rem;">
                <span>Essential Hypertension (I10)</span>
                <span>68.0% (17 Patients)</span>
              </div>
              <div style="height: 8px; background: var(--bg-muted); border-radius: var(--radius-full); overflow: hidden;">
                <div style="width: 68%; height: 100%; background: var(--primary-600);"></div>
              </div>
            </div>
            <div>
              <div style="display: flex; justify-content: space-between; font-size: 0.85rem; font-weight: 600; margin-bottom: 0.25rem;">
                <span>Type 2 Diabetes Mellitus (E11.9)</span>
                <span>52.0% (13 Patients)</span>
              </div>
              <div style="height: 8px; background: var(--bg-muted); border-radius: var(--radius-full); overflow: hidden;">
                <div style="width: 52%; height: 100%; background: var(--clinical-emerald);"></div>
              </div>
            </div>
            <div>
              <div style="display: flex; justify-content: space-between; font-size: 0.85rem; font-weight: 600; margin-bottom: 0.25rem;">
                <span>Chronic Systolic Heart Failure (I50.22)</span>
                <span>28.0% (7 Patients)</span>
              </div>
              <div style="height: 8px; background: var(--bg-muted); border-radius: var(--radius-full); overflow: hidden;">
                <div style="width: 28%; height: 100%; background: var(--clinical-amber);"></div>
              </div>
            </div>
            <div>
              <div style="display: flex; justify-content: space-between; font-size: 0.85rem; font-weight: 600; margin-bottom: 0.25rem;">
                <span>Chronic Kidney Disease Stage 3 (N18.3)</span>
                <span>24.0% (6 Patients)</span>
              </div>
              <div style="height: 8px; background: var(--bg-muted); border-radius: var(--radius-full); overflow: hidden;">
                <div style="width: 24%; height: 100%; background: var(--clinical-rose);"></div>
              </div>
            </div>
          </div>
        </div>

        <div class="panel">
          <div class="panel-header">
            <h3 class="panel-title"><span>💳</span> Hospital Financial & Claims Performance</h3>
          </div>
          <div style="display: flex; flex-direction: column; gap: 1rem;">
            <div style="background: var(--bg-surface-elevated); padding: 1rem; border-radius: var(--radius-md); display: flex; justify-content: space-between; align-items: center;">
              <div>
                <div style="font-size: 0.75rem; color: var(--text-muted);">Total Gross Charges Billed</div>
                <div style="font-size: 1.3rem; font-weight: 800;">$142,850.00</div>
              </div>
              <span class="badge badge-blue">98.2% Clean Claims Rate</span>
            </div>
            <div style="background: var(--bg-surface-elevated); padding: 1rem; border-radius: var(--radius-md); display: flex; justify-content: space-between; align-items: center;">
              <div>
                <div style="font-size: 0.75rem; color: var(--text-muted);">Net Insurance Collections</div>
                <div style="font-size: 1.3rem; font-weight: 800; color: var(--clinical-emerald);">$118,420.00</div>
              </div>
              <span class="badge badge-green">82.9% Reimbursement Ratio</span>
            </div>
            <div style="background: var(--bg-surface-elevated); padding: 1rem; border-radius: var(--radius-md); display: flex; justify-content: space-between; align-items: center;">
              <div>
                <div style="font-size: 0.75rem; color: var(--text-muted);">Average Reimbursement Velocity</div>
                <div style="font-size: 1.3rem; font-weight: 800; color: var(--clinical-indigo);">14.2 Days</div>
              </div>
              <span class="badge badge-purple">Electronic EDI 837P</span>
            </div>
          </div>
        </div>
      </div>
    `;
  }
};
