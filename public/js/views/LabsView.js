/**
 * Diagnostic Labs & Pathology View Controller
 */

const LabsView = {
  labsList: [
    { id: 'lab-001', orderNumber: 'LAB-99201', patientName: 'Eleanor Vance', panelName: 'Comprehensive Metabolic Panel (CMP)', orderDate: '2026-08-30', priority: 'ROUTINE', status: 'Completed', results: 'Glucose 104, Creatinine 0.9, eGFR >60, K+ 4.2' },
    { id: 'lab-002', orderNumber: 'LAB-99202', patientName: 'Eleanor Vance', panelName: 'Hemoglobin A1c (Glycated Hb)', orderDate: '2026-08-30', priority: 'ROUTINE', status: 'Completed', results: 'HbA1c: 6.8% (Good Control)' },
    { id: 'lab-003', orderNumber: 'LAB-99203', patientName: 'James Holloway', panelName: 'Lipid Cardiovascular Panel', orderDate: '2026-08-31', priority: 'ROUTINE', status: 'In Process', results: 'Pending Laboratory Analysis' },
    { id: 'lab-004', orderNumber: 'LAB-99204', patientName: 'Aaliyah Mansour', panelName: 'High-Sensitivity Troponin I (STAT)', orderDate: '2026-08-31', priority: 'STAT', status: 'In Process', results: 'Processing in STAT Lab' }
  ],

  async render(container) {
    container.innerHTML = `
      <div class="page-header">
        <div>
          <h1 class="page-title"><span>🔬</span> Diagnostic Labs & Pathology Services</h1>
          <p class="page-subtitle">LOINC-standardized pathology orders, specimen telemetry & automated reporting</p>
        </div>
        <button class="btn btn-primary" id="newLabOrderBtn">+ Order Diagnostic Lab</button>
      </div>

      <div class="panel">
        <div id="labsTableContainer"></div>
      </div>
    `;

    document.getElementById('newLabOrderBtn').addEventListener('click', () => this.showOrderModal());
    this.renderTable();
  },

  renderTable() {
    const div = document.getElementById('labsTableContainer');
    if (!div) return;

    div.innerHTML = `
      <div class="table-responsive">
        <table class="data-table">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Patient</th>
              <th>Diagnostic Panel</th>
              <th>Order Date</th>
              <th>Priority</th>
              <th>Status</th>
              <th>Results / Values</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            ${this.labsList.map(lab => `
              <tr>
                <td><code>${lab.orderNumber}</code></td>
                <td><strong>${lab.patientName}</strong></td>
                <td>🔬 <strong>${lab.panelName}</strong></td>
                <td>${lab.orderDate}</td>
                <td><span class="badge ${lab.priority === 'STAT' ? 'badge-red' : 'badge-blue'}">${lab.priority}</span></td>
                <td><span class="badge ${lab.status === 'Completed' ? 'badge-green' : 'badge-amber'}">${lab.status}</span></td>
                <td><small>${lab.results}</small></td>
                <td>
                  <button class="btn btn-secondary btn-sm" onclick="Toast.show('info', 'Viewing raw LOINC report for ${lab.orderNumber}')">View Report</button>
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    `;
  },

  showOrderModal() {
    Modal.open('Order Diagnostic Lab Panel', `
      <form id="newLabForm" style="display: flex; flex-direction: column; gap: 1rem;">
        <div class="form-group">
          <label class="form-label">Patient</label>
          <select id="labPatientSelect" class="form-control">
            <option value="pat-001">Eleanor Vance (MRN-100492)</option>
            <option value="pat-002">James Holloway (MRN-100493)</option>
            <option value="pat-003">Aaliyah Mansour (MRN-100494)</option>
          </select>
        </div>
        <div class="form-group">
          <label class="form-label">Diagnostic Panel</label>
          <select id="labPanelSelect" class="form-control">
            <option value="Complete Blood Count (CBC) with Diff">Complete Blood Count (CBC) with Diff</option>
            <option value="Comprehensive Metabolic Panel (CMP)">Comprehensive Metabolic Panel (CMP)</option>
            <option value="Lipid Cardiovascular Panel">Lipid Cardiovascular Panel</option>
            <option value="Hemoglobin A1c">Hemoglobin A1c</option>
            <option value="High-Sensitivity Troponin I (STAT)">High-Sensitivity Troponin I (STAT)</option>
          </select>
        </div>
        <div class="form-group">
          <label class="form-label">Priority</label>
          <select id="labPrioritySelect" class="form-control">
            <option value="ROUTINE">Routine (Same Day)</option>
            <option value="STAT">STAT (Under 60 Mins)</option>
          </select>
        </div>
        <button type="submit" class="btn btn-primary btn-block">Authorize & Send Lab Order</button>
      </form>
    `);

    document.getElementById('newLabForm').addEventListener('submit', (e) => {
      e.preventDefault();
      const sel = document.getElementById('labPatientSelect');
      const patName = sel.options[sel.selectedIndex].text.split('(')[0].trim();
      const panel = document.getElementById('labPanelSelect').value;
      const priority = document.getElementById('labPrioritySelect').value;

      const newOrder = {
        id: `lab-00${this.labsList.length + 1}`,
        orderNumber: `LAB-${99200 + this.labsList.length + 1}`,
        patientName: patName,
        panelName: panel,
        orderDate: new Date().toISOString().split('T')[0],
        priority: priority,
        status: 'In Process',
        results: 'Specimen in transit to central lab'
      };

      this.labsList.unshift(newOrder);
      this.renderTable();
      Modal.close();
      Toast.show('success', `Diagnostic lab order for ${panel} created for ${patName}.`);
    });
  }
};
