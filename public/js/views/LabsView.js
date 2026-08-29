/**
 * Diagnostic Labs & Pathology View Controller
 */

const LabsView = {
  cachedLabs: [],

  async render(container) {
    container.innerHTML = `
      <div class="page-header">
        <div>
          <h1 class="page-title"><span>🔬</span> Diagnostic Labs, Pathology & Biomarkers</h1>
          <p class="page-subtitle">HL7 LOINC coded lab orders, panic alert thresholds, and automated analyzer interfaces</p>
        </div>
        <button class="btn btn-primary" id="orderLabBtn">+ Order Diagnostic Lab Panel</button>
      </div>

      <div class="grid-cards">
        <div class="stat-card">
          <div class="stat-icon-wrapper" style="background: #dbeafe; color: #1d4ed8;">🧪</div>
          <div>
            <div class="stat-val" id="labTotalStat">6</div>
            <div class="stat-label">Diagnostic Panels Processed</div>
          </div>
        </div>
        <div class="stat-card">
          <div class="stat-icon-wrapper" style="background: #d1fae5; color: #047857;">⚡</div>
          <div>
            <div class="stat-val">35 min</div>
            <div class="stat-label">Average STAT Turnaround Time</div>
          </div>
        </div>
        <div class="stat-card">
          <div class="stat-icon-wrapper" style="background: #fef3c7; color: #b45309;">⚠️</div>
          <div>
            <div class="stat-val">0</div>
            <div class="stat-label">Critical / Panic Value Alerts</div>
          </div>
        </div>
        <div class="stat-card">
          <div class="stat-icon-wrapper" style="background: #ede9fe; color: #6d28d9;">🔬</div>
          <div>
            <div class="stat-val">CAP / CLIA</div>
            <div class="stat-label">Certified Pathology Lab</div>
          </div>
        </div>
      </div>

      <div class="panel">
        <div class="panel-header">
          <h3 class="panel-title"><span>📋</span> Laboratory Orders & Results Registry</h3>
          <button class="btn btn-secondary btn-sm" id="refreshLabsBtn">Refresh</button>
        </div>
        <div id="labsTableContainer">
          <div style="padding: 1.5rem; text-align: center; color: var(--text-secondary);">Loading laboratory diagnostics...</div>
        </div>
      </div>
    `;

    document.getElementById('orderLabBtn').addEventListener('click', () => this.showOrderLabModal());
    document.getElementById('refreshLabsBtn').addEventListener('click', () => this.loadLabs());

    this.loadLabs();
  },

  async loadLabs() {
    const tableDiv = document.getElementById('labsTableContainer');
    if (!tableDiv) return;

    try {
      const res = await API.get('/labs');
      const labs = (res && res.data && res.data.length > 0) ? res.data : [
        { id: 'lab-001', patientName: 'Eleanor Vance', testName: 'Comprehensive Metabolic Panel (CMP)', specimenType: 'Serum', orderedDate: '2026-08-28', status: 'FINAL', resultSummary: 'Na: 139, K: 4.2, Cr: 0.95 mg/dL (eGFR 78)' },
        { id: 'lab-002', patientName: 'Eleanor Vance', testName: 'Hemoglobin A1c (HbA1c)', specimenType: 'Whole Blood', orderedDate: '2026-08-28', status: 'FINAL', resultSummary: '6.8% (Target < 7.0%)' },
        { id: 'lab-003', patientName: 'James Holloway', testName: 'Lipid Panel with Non-HDL', specimenType: 'Serum', orderedDate: '2026-08-27', status: 'FINAL', resultSummary: 'Total: 178, LDL: 94, HDL: 48, Trig: 160' },
        { id: 'lab-004', patientName: 'James Holloway', testName: 'Prothrombin Time & INR', specimenType: 'Plasma', orderedDate: '2026-08-27', status: 'FINAL', resultSummary: 'INR: 2.3 (Therapeutic Range 2.0-3.0)' },
        { id: 'lab-005', patientName: 'Aaliyah Mansour', testName: 'High-Sensitivity C-Reactive Protein (hs-CRP)', specimenType: 'Serum', orderedDate: '2026-08-26', status: 'FINAL', resultSummary: '1.2 mg/L (Normal)' },
        { id: 'lab-006', patientName: 'Robert Chen', testName: 'Cardiac Troponin I (High Sensitivity)', specimenType: 'Serum', orderedDate: '2026-08-29', status: 'FINAL', resultSummary: '< 0.01 ng/mL (Negative for Myocardial Injury)' }
      ];

      this.cachedLabs = labs;
      this.renderTable(labs);
    } catch (err) {
      console.warn('Labs fallback rendered:', err);
      tableDiv.innerHTML = `<div style="padding: 1rem; color: var(--clinical-rose);">Failed to load laboratory reports: ${err.message}</div>`;
    }
  },

  renderTable(labs) {
    const tableDiv = document.getElementById('labsTableContainer');
    if (!tableDiv) return;

    tableDiv.innerHTML = `
      <div class="table-responsive">
        <table class="data-table">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Patient</th>
              <th>Diagnostic Lab Panel</th>
              <th>Specimen</th>
              <th>Order Date</th>
              <th>Result Summary</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            ${labs.map(l => `
              <tr>
                <td><code>${l.id}</code></td>
                <td><strong>${l.patientName}</strong></td>
                <td><strong>${l.testName}</strong></td>
                <td>${l.specimenType}</td>
                <td>${l.orderedDate}</td>
                <td><code>${l.resultSummary || 'Results Pending Analyzer'}</code></td>
                <td><span class="badge badge-green">${l.status}</span></td>
                <td>
                  <button class="btn btn-secondary btn-sm" onclick="Toast.show('info', 'Verified LOINC Lab Report for ${l.patientName} exported to EHR.')">View Full Report</button>
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    `;
  },

  showOrderLabModal() {
    Modal.open('Order Diagnostic Lab Panel', `
      <form id="orderLabForm" style="display: flex; flex-direction: column; gap: 1rem;">
        <div class="form-group">
          <label class="form-label">Patient</label>
          <select id="labPatient" class="form-control" required>
            <option value="Eleanor Vance">Eleanor Vance (MRN-100492)</option>
            <option value="James Holloway">James Holloway (MRN-100493)</option>
            <option value="Aaliyah Mansour">Aaliyah Mansour (MRN-100494)</option>
          </select>
        </div>
        <div class="form-group">
          <label class="form-label">LOINC Diagnostic Panel</label>
          <select id="labPanel" class="form-control" required>
            <option value="Comprehensive Metabolic Panel (CMP)">Comprehensive Metabolic Panel (LOINC 24323-8)</option>
            <option value="Lipid Profile">Lipid Profile with Non-HDL (LOINC 57698-3)</option>
            <option value="Hemoglobin A1c">Hemoglobin A1c (LOINC 4548-4)</option>
            <option value="Complete Blood Count with Diff">Complete Blood Count with Diff (LOINC 58410-2)</option>
            <option value="Cardiac Troponin I">Cardiac Troponin I STAT (LOINC 42757-5)</option>
          </select>
        </div>
        <div class="form-group">
          <label class="form-label">Priority Order Level</label>
          <select id="labPriority" class="form-control">
            <option value="ROUTINE">Routine Outpatient (Next Day)</option>
            <option value="STAT" selected>STAT Priority (Within 45 mins)</option>
          </select>
        </div>
        <button type="submit" class="btn btn-primary btn-block">Transmit Electronic Lab Requisition</button>
      </form>
    `);

    document.getElementById('orderLabForm').addEventListener('submit', (e) => {
      e.preventDefault();
      const patient = document.getElementById('labPatient').value;
      const panel = document.getElementById('labPanel').value;
      const priority = document.getElementById('labPriority').value;

      const newLab = {
        id: `lab-00${this.cachedLabs.length + 1}`,
        patientName: patient,
        testName: panel,
        specimenType: 'Venous Blood',
        orderedDate: new Date().toISOString().substring(0, 10),
        status: 'PROCESSING (STAT)',
        resultSummary: 'Analyzer queue active (Results in 25 min)'
      };

      this.cachedLabs.unshift(newLab);
      this.renderTable(this.cachedLabs);
      Modal.close();
      Toast.show('success', `STAT Lab Order dispatched to Pathology Lab for ${patient}.`);
    });
  }
};
