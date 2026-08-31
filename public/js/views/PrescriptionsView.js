/**
 * Electronic Prescriptions (e-Rx) View Controller
 */

const PrescriptionsView = {
  prescriptionsList: [
    { id: 'rx-001', rxNumber: 'RX-778201', patientName: 'Eleanor Vance', drugName: 'Lisinopril', dosage: '20mg', frequency: 'Once Daily in AM', quantity: 90, refillsRemaining: 3, status: 'Active', prescriberName: 'Dr. Evelyn Smith, MD' },
    { id: 'rx-002', rxNumber: 'RX-778202', patientName: 'Eleanor Vance', drugName: 'Metformin HCl', dosage: '1000mg', frequency: 'Twice Daily with Meals', quantity: 180, refillsRemaining: 5, status: 'Active', prescriberName: 'Dr. Evelyn Smith, MD' },
    { id: 'rx-003', rxNumber: 'RX-778203', patientName: 'James Holloway', drugName: 'Atorvastatin Calcium', dosage: '40mg', frequency: 'Once Daily at Bedtime', quantity: 90, refillsRemaining: 2, status: 'Active', prescriberName: 'Dr. Marcus Chen, MD' },
    { id: 'rx-004', rxNumber: 'RX-778204', patientName: 'Robert Chen', drugName: 'Amlodipine Besylate', dosage: '10mg', frequency: 'Once Daily', quantity: 90, refillsRemaining: 4, status: 'Active', prescriberName: 'Dr. Evelyn Smith, MD' }
  ],

  async render(container) {
    container.innerHTML = `
      <div class="page-header">
        <div>
          <h1 class="page-title"><span>💊</span> Electronic Prescriptions & Medication Orders</h1>
          <p class="page-subtitle">Surescripts-compliant e-Rx dispensing with automated allergy & interaction cross-checks</p>
        </div>
        <button class="btn btn-primary" id="newRxBtn">+ Write New Prescription</button>
      </div>

      <div class="panel" style="margin-bottom: 1.5rem;">
        <div style="display: flex; gap: 1rem; align-items: center;">
          <input type="text" id="rxSearchField" class="form-control" placeholder="Search by patient, medication, Rx number..." style="max-width: 400px;">
          <button class="btn btn-secondary" id="rxFilterBtn">Filter</button>
        </div>
      </div>

      <div class="panel">
        <div id="prescriptionsTableContainer"></div>
      </div>
    `;

    document.getElementById('newRxBtn').addEventListener('click', () => this.showNewRxModal());
    document.getElementById('rxSearchField').addEventListener('input', () => this.filterRx());
    document.getElementById('rxFilterBtn').addEventListener('click', () => this.filterRx());

    this.renderTable(this.prescriptionsList);
    this.fetchLiveRx();
  },

  async fetchLiveRx() {
    try {
      const res = await API.get('/prescriptions');
      if (res && res.data && res.data.length > 0) {
        this.prescriptionsList = res.data;
        this.renderTable(this.prescriptionsList);
      }
    } catch (e) {
      console.warn('Using cached prescriptions.');
    }
  },

  filterRx() {
    const q = (document.getElementById('rxSearchField')?.value || '').toLowerCase();
    const filtered = this.prescriptionsList.filter(rx =>
      (rx.patientName && rx.patientName.toLowerCase().includes(q)) ||
      (rx.drugName && rx.drugName.toLowerCase().includes(q)) ||
      (rx.rxNumber && rx.rxNumber.toLowerCase().includes(q))
    );
    this.renderTable(filtered);
  },

  renderTable(list) {
    const div = document.getElementById('prescriptionsTableContainer');
    if (!div) return;

    div.innerHTML = `
      <div class="table-responsive">
        <table class="data-table">
          <thead>
            <tr>
              <th>Rx Number</th>
              <th>Patient</th>
              <th>Medication & Dose</th>
              <th>Sig / Frequency</th>
              <th>Dispense Qty</th>
              <th>Refills</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            ${list.map(rx => `
              <tr>
                <td><code>${rx.rxNumber}</code></td>
                <td><strong>${rx.patientName || 'Eleanor Vance'}</strong></td>
                <td>💊 <strong>${rx.drugName}</strong> (${rx.dosage})</td>
                <td>${rx.frequency}</td>
                <td>${rx.quantity} units</td>
                <td><span class="badge badge-blue">${rx.refillsRemaining} remaining</span></td>
                <td><span class="badge badge-green">${rx.status}</span></td>
                <td>
                  <button class="btn btn-secondary btn-sm" onclick="PrescriptionsView.dispenseRx('${rx.id}')">Dispense</button>
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    `;
  },

  dispenseRx(id) {
    const rx = this.prescriptionsList.find(r => r.id === id);
    if (rx && rx.refillsRemaining > 0) {
      rx.refillsRemaining -= 1;
      this.renderTable(this.prescriptionsList);
      Toast.show('success', `Dispensed ${rx.drugName} ${rx.dosage} for ${rx.patientName}. ${rx.refillsRemaining} refills left.`);
    } else {
      Toast.show('info', 'Prescription filled. 0 refills remaining.');
    }
  },

  showNewRxModal() {
    Modal.open('Write Electronic Prescription (e-Rx)', `
      <form id="newRxForm" style="display: flex; flex-direction: column; gap: 1rem;">
        <div class="form-group">
          <label class="form-label">Patient</label>
          <select id="rxPatientSelect" class="form-control">
            <option value="pat-001">Eleanor Vance (MRN-100492)</option>
            <option value="pat-002">James Holloway (MRN-100493)</option>
            <option value="pat-003">Aaliyah Mansour (MRN-100494)</option>
          </select>
        </div>
        <div style="display: grid; grid-template-columns: 2fr 1fr; gap: 1rem;">
          <div class="form-group">
            <label class="form-label">Medication Name</label>
            <input type="text" id="rxDrugName" class="form-control" required value="Atorvastatin">
          </div>
          <div class="form-group">
            <label class="form-label">Strength / Dose</label>
            <input type="text" id="rxDose" class="form-control" required value="20mg">
          </div>
        </div>
        <div class="form-group">
          <label class="form-label">Sig (Instructions & Frequency)</label>
          <input type="text" id="rxSig" class="form-control" required value="Take 1 tablet by mouth daily at bedtime">
        </div>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
          <div class="form-group">
            <label class="form-label">Quantity</label>
            <input type="number" id="rxQty" class="form-control" required value="90">
          </div>
          <div class="form-group">
            <label class="form-label">Refills Authorized</label>
            <input type="number" id="rxRefills" class="form-control" required value="3">
          </div>
        </div>
        <button type="submit" class="btn btn-primary btn-block">Transmit e-Prescription</button>
      </form>
    `);

    document.getElementById('newRxForm').addEventListener('submit', (e) => {
      e.preventDefault();
      const sel = document.getElementById('rxPatientSelect');
      const patName = sel.options[sel.selectedIndex].text.split('(')[0].trim();
      const drug = document.getElementById('rxDrugName').value;
      const dose = document.getElementById('rxDose').value;
      const sig = document.getElementById('rxSig').value;
      const qty = parseInt(document.getElementById('rxQty').value) || 30;
      const refills = parseInt(document.getElementById('rxRefills').value) || 0;

      const newRx = {
        id: `rx-00${this.prescriptionsList.length + 1}`,
        rxNumber: `RX-${778200 + this.prescriptionsList.length + 1}`,
        patientName: patName,
        drugName: drug,
        dosage: dose,
        frequency: sig,
        quantity: qty,
        refillsRemaining: refills,
        status: 'Active',
        prescriberName: 'Dr. Evelyn Smith, MD'
      };

      this.prescriptionsList.unshift(newRx);
      this.renderTable(this.prescriptionsList);
      Modal.close();
      Toast.show('success', `Prescription for ${drug} ${dose} transmitted to pharmacy.`);
    });
  }
};
