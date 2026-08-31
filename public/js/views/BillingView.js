/**
 * Medical Billing & Revenue Cycle Management (RCM) Controller
 */

const BillingView = {
  claimsList: [
    { id: 'clm-001', claimNumber: 'CLM-5501', patientName: 'Eleanor Vance', insurancePayer: 'Blue Cross Blue Shield', totalAmount: 485.00, allowedAmount: 412.00, patientCopay: 25.00, status: 'PAID', icdCodes: 'I10, E11.9' },
    { id: 'clm-002', claimNumber: 'CLM-5502', patientName: 'James Holloway', insurancePayer: 'Medicare Part B', totalAmount: 320.00, allowedAmount: 280.00, patientCopay: 20.00, status: 'SUBMITTED', icdCodes: 'I50.22' },
    { id: 'clm-003', claimNumber: 'CLM-5503', patientName: 'Aaliyah Mansour', insurancePayer: 'Aetna Health', totalAmount: 750.00, allowedAmount: 680.00, patientCopay: 40.00, status: 'SUBMITTED', icdCodes: 'J45.909' },
    { id: 'clm-004', claimNumber: 'CLM-5504', patientName: 'Robert Chen', insurancePayer: 'UnitedHealthcare', totalAmount: 215.00, allowedAmount: 195.00, patientCopay: 15.00, status: 'PAID', icdCodes: 'I10' }
  ],

  async render(container) {
    container.innerHTML = `
      <div class="page-header">
        <div>
          <h1 class="page-title"><span>💳</span> Medical Billing & Revenue Cycle Management</h1>
          <p class="page-subtitle">EDI 837P Claims Submissions, ICD-10 & CPT Superbill Adjudication</p>
        </div>
        <button class="btn btn-primary" id="newClaimBtn">+ Generate New Claim</button>
      </div>

      <div class="grid-cards">
        <div class="stat-card">
          <div class="stat-icon-wrapper" style="background: #ede9fe; color: #6d28d9;">💵</div>
          <div>
            <div class="stat-val">$142,850</div>
            <div class="stat-label">Gross Billed Charges</div>
          </div>
        </div>
        <div class="stat-card">
          <div class="stat-icon-wrapper" style="background: #d1fae5; color: #047857;">✅</div>
          <div>
            <div class="stat-val">$118,420</div>
            <div class="stat-label">Net Collections (82.9%)</div>
          </div>
        </div>
        <div class="stat-card">
          <div class="stat-icon-wrapper" style="background: #fef3c7; color: #b45309;">⏳</div>
          <div>
            <div class="stat-val">18.4 Days</div>
            <div class="stat-label">Days in A/R (Industry <35)</div>
          </div>
        </div>
        <div class="stat-card">
          <div class="stat-icon-wrapper" style="background: #dbeafe; color: #1d4ed8;">📑</div>
          <div>
            <div class="stat-val">97.2%</div>
            <div class="stat-label">First-Pass Clean Claim Rate</div>
          </div>
        </div>
      </div>

      <div class="panel">
        <div class="panel-header">
          <h3 class="panel-title"><span>🧾</span> Insurance Claims Roster</h3>
        </div>
        <div id="billingTableContainer"></div>
      </div>
    `;

    document.getElementById('newClaimBtn').addEventListener('click', () => this.showNewClaimModal());
    this.renderTable();
  },

  renderTable() {
    const div = document.getElementById('billingTableContainer');
    if (!div) return;

    div.innerHTML = `
      <div class="table-responsive">
        <table class="data-table">
          <thead>
            <tr>
              <th>Claim ID</th>
              <th>Patient</th>
              <th>Insurance Payer</th>
              <th>ICD-10 / CPT Codes</th>
              <th>Total Billed</th>
              <th>Copay</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            ${this.claimsList.map(c => `
              <tr>
                <td><code>${c.claimNumber}</code></td>
                <td><strong>${c.patientName}</strong></td>
                <td>${c.insurancePayer}</td>
                <td><small>${c.icdCodes}</small></td>
                <td><strong>$${c.totalAmount.toFixed(2)}</strong></td>
                <td>$${c.patientCopay.toFixed(2)}</td>
                <td><span class="badge ${c.status === 'PAID' ? 'badge-green' : 'badge-amber'}">${c.status}</span></td>
                <td>
                  ${c.status === 'SUBMITTED'
                    ? `<button class="btn btn-success btn-sm" onclick="BillingView.adjudicateClaim('${c.id}')">Adjudicate Claim</button>`
                    : `<button class="btn btn-secondary btn-sm" onclick="Toast.show('info', 'Claim ${c.claimNumber} is fully settled.')">View EOB</button>`}
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    `;
  },

  adjudicateClaim(id) {
    const c = this.claimsList.find(item => item.id === id);
    if (c) {
      c.status = 'PAID';
      this.renderTable();
      Toast.show('success', `Claim ${c.claimNumber} adjudicated & paid via EDI 835 remittance.`);
    }
  },

  showNewClaimModal() {
    Modal.open('Generate Insurance Claim (CMS-1500 / EDI 837P)', `
      <form id="newClaimForm" style="display: flex; flex-direction: column; gap: 1rem;">
        <div class="form-group">
          <label class="form-label">Patient</label>
          <select id="clmPatient" class="form-control">
            <option value="Eleanor Vance|Blue Cross Blue Shield">Eleanor Vance (Blue Cross Blue Shield)</option>
            <option value="James Holloway|Medicare Part B">James Holloway (Medicare Part B)</option>
          </select>
        </div>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
          <div class="form-group">
            <label class="form-label">ICD-10 Primary Code</label>
            <input type="text" id="clmIcd" class="form-control" required value="I10 (Essential Hypertension)">
          </div>
          <div class="form-group">
            <label class="form-label">CPT Procedure Code</label>
            <input type="text" id="clmCpt" class="form-control" required value="99214 (Established Office Visit Level 4)">
          </div>
        </div>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
          <div class="form-group">
            <label class="form-label">Billed Amount ($)</label>
            <input type="number" id="clmAmount" class="form-control" required value="325.00">
          </div>
          <div class="form-group">
            <label class="form-label">Copay ($)</label>
            <input type="number" id="clmCopay" class="form-control" required value="25.00">
          </div>
        </div>
        <button type="submit" class="btn btn-primary btn-block">Generate & Transmit Claim</button>
      </form>
    `);

    document.getElementById('newClaimForm').addEventListener('submit', (e) => {
      e.preventDefault();
      const patParts = document.getElementById('clmPatient').value.split('|');
      const icd = document.getElementById('clmIcd').value;
      const amt = parseFloat(document.getElementById('clmAmount').value) || 250;
      const copay = parseFloat(document.getElementById('clmCopay').value) || 20;

      const newClm = {
        id: `clm-00${this.claimsList.length + 1}`,
        claimNumber: `CLM-${5500 + this.claimsList.length + 1}`,
        patientName: patParts[0],
        insurancePayer: patParts[1],
        totalAmount: amt,
        allowedAmount: amt * 0.85,
        patientCopay: copay,
        status: 'SUBMITTED',
        icdCodes: icd
      };

      this.claimsList.unshift(newClm);
      this.renderTable();
      Modal.close();
      Toast.show('success', `Claim ${newClm.claimNumber} transmitted to ${patParts[1]}.`);
    });
  }
};
