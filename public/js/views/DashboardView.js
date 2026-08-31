/**
 * Dashboard View Controller
 */

const DashboardView = {
  async render(container) {
    container.innerHTML = `<div style="padding: 2rem; text-align: center;">Loading clinical analytics dashboard...</div>`;

    try {
      const res = await API.get('/analytics/dashboard');
      const data = res.data;
      const o = data.overview;

      container.innerHTML = `
        <div class="page-header">
          <div>
            <h1 class="page-title">Hospital Clinical Operations Center</h1>
            <p class="page-subtitle">Real-time patient census, clinical alerts, bed occupancy & telemetry</p>
          </div>
          <button class="btn btn-primary" onclick="Router.navigate('ehr')">Open Clinical EHR Station</button>
        </div>

        <div class="grid-cards">
          <div class="stat-card">
            <div class="stat-icon-wrapper" style="background: #dbeafe; color: #1d4ed8;">👥</div>
            <div>
              <div class="stat-val">${o.totalPatients}</div>
              <div class="stat-label">Active Patients</div>
              <div class="stat-delta positive">↑ 12% census growth</div>
            </div>
          </div>

          <div class="stat-card">
            <div class="stat-icon-wrapper" style="background: #d1fae5; color: #047857;">🩺</div>
            <div>
              <div class="stat-val">${o.totalEncounters}</div>
              <div class="stat-label">Completed Encounters</div>
              <div class="stat-delta positive">100% SOAP Documentation</div>
            </div>
          </div>

          <div class="stat-card">
            <div class="stat-icon-wrapper" style="background: #fef3c7; color: #b45309;">🛏️</div>
            <div>
              <div class="stat-val">${o.bedOccupancyRate}%</div>
              <div class="stat-label">Bed Occupancy</div>
              <div class="stat-delta">Normal Capacity</div>
            </div>
          </div>

          <div class="stat-card">
            <div class="stat-icon-wrapper" style="background: #ede9fe; color: #6d28d9;">💳</div>
            <div>
              <div class="stat-val">$${o.revenueMetrics.totalBilled.toLocaleString()}</div>
              <div class="stat-label">Total Claims Billed</div>
              <div class="stat-delta positive">${o.revenueMetrics.collectionRatio}% Collection Ratio</div>
            </div>
          </div>
        </div>

        <div style="display: grid; grid-template-columns: 2fr 1fr; gap: 1.5rem;">
          <div class="panel">
            <div class="panel-header">
              <h3 class="panel-title">Active Clinical Queue & Today's Schedule</h3>
              <button class="btn btn-secondary btn-sm" onclick="Router.navigate('appointments')">View All</button>
            </div>
            <div id="dashboardQueueTable">Loading appointments...</div>
          </div>

          <div class="panel">
            <div class="panel-header">
              <h3 class="panel-title">Disease Prevalence & Epidemiology</h3>
            </div>
            <div>
              ${data.diseasePrevalence.map(d => `
                <div style="margin-bottom: 1rem;">
                  <div style="display: flex; justify-content: space-between; font-size: 0.8125rem; font-weight: 600; margin-bottom: 0.25rem;">
                    <span>${d.condition}</span>
                    <span>${d.percentage}% (${d.count} patients)</span>
                  </div>
                  <div style="width: 100%; height: 8px; background: var(--bg-muted); border-radius: var(--radius-full); overflow: hidden;">
                    <div style="width: ${d.percentage}%; height: 100%; background: var(--primary-600); border-radius: var(--radius-full);"></div>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      `;

      // Load appointments into queue table
      const apts = await API.get('/appointments');
      const tableDiv = document.getElementById('dashboardQueueTable');
      if (apts.data && apts.data.length > 0) {
        tableDiv.innerHTML = `
          <div class="table-responsive">
            <table class="data-table">
              <thead>
                <tr>
                  <th>Patient</th>
                  <th>Doctor</th>
                  <th>Time Slot</th>
                  <th>Type</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                ${apts.data.slice(0, 5).map(a => `
                  <tr>
                    <td><strong>${a.patientName}</strong></td>
                    <td>${a.doctorName}</td>
                    <td>${a.timeSlot}</td>
                    <td><span class="badge badge-blue">${a.type}</span></td>
                    <td><span class="badge badge-green">${a.status}</span></td>
                    <td>
                      <button class="btn btn-primary btn-sm" onclick="State.setPatient('${a.patientId}'); Router.navigate('ehr');">Open Chart</button>
                    </td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        `;
      } else {
        tableDiv.innerHTML = `<div style="padding: 1rem; color: var(--text-muted);">No appointments currently scheduled.</div>`;
      }

    } catch (err) {
      container.innerHTML = `<div style="padding: 2rem; color: var(--clinical-rose);">Failed loading dashboard: ${err.message}</div>`;
    }
  }
};
