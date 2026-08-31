/**
 * Patient Directory View Controller
 */

const PatientsView = {
  async render(container) {
    container.innerHTML = `
      <div class="page-header">
        <div>
          <h1 class="page-title">Patient Demographics & Medical Directory</h1>
          <p class="page-subtitle">Master Patient Index (MPI) with full clinical history and EHR records</p>
        </div>
        <button class="btn btn-primary" id="newPatientBtn">+ Register New Patient</button>
      </div>

      <div class="panel" style="margin-bottom: 1.5rem;">
        <div style="display: flex; gap: 1rem; align-items: center;">
          <input type="text" id="patientSearchField" class="form-control" placeholder="Search by name, MRN, phone..." style="max-width: 400px;">
          <select id="conditionFilter" class="form-control" style="max-width: 250px;">
            <option value="">All Chronic Conditions</option>
            <option value="Hypertension">Hypertension</option>
            <option value="Diabetes">Diabetes</option>
            <option value="Heart failure">Heart Failure</option>
            <option value="Asthma">Asthma</option>
          </select>
          <button class="btn btn-secondary" id="searchBtn">Filter</button>
        </div>
      </div>

      <div class="panel">
        <div id="patientListTable">Loading patients...</div>
      </div>
    `;

    document.getElementById('newPatientBtn').addEventListener('click', () => this.showRegisterModal());
    document.getElementById('searchBtn').addEventListener('click', () => this.loadPatients());
    document.getElementById('patientSearchField').addEventListener('keyup', (e) => {
      if (e.key === 'Enter') this.loadPatients();
    });

    this.loadPatients();
  },

  async loadPatients() {
    const search = document.getElementById('patientSearchField').value;
    const condition = document.getElementById('conditionFilter').value;
    const tableDiv = document.getElementById('patientListTable');

    try {
      const res = await API.get('/patients', { search, condition });
      const patients = res.data;

      tableDiv.innerHTML = `
        <div class="table-responsive">
          <table class="data-table">
            <thead>
              <tr>
                <th>MRN</th>
                <th>Patient Name</th>
                <th>DOB / Gender</th>
                <th>Contact</th>
                <th>Insurance</th>
                <th>Allergies</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              ${patients.map(p => `
                <tr>
                  <td><code>${p.mrn}</code></td>
                  <td><strong>${p.firstName} ${p.lastName}</strong></td>
                  <td>${p.dob} (${p.gender})</td>
                  <td>${p.phone}</td>
                  <td>${p.insurance.payerName}</td>
                  <td>
                    ${p.allergies.length > 0
                      ? p.allergies.map(a => `<span class="badge badge-red">${a.allergen}</span>`).join(' ')
                      : '<span class="badge badge-green">NKDA</span>'}
                  </td>
                  <td>
                    <button class="btn btn-primary btn-sm" onclick="State.setPatient('${p.id}'); Router.navigate('ehr');">EHR Chart</button>
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      `;
    } catch (err) {
      tableDiv.innerHTML = `<div style="padding: 1rem; color: var(--clinical-rose);">Error: ${err.message}</div>`;
    }
  },

  showRegisterModal() {
    const content = `
      <form id="regPatientForm">
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
          <div class="form-group">
            <label class="form-label">First Name</label>
            <input type="text" id="regFirstName" class="form-control" required placeholder="John">
          </div>
          <div class="form-group">
            <label class="form-label">Last Name</label>
            <input type="text" id="regLastName" class="form-control" required placeholder="Doe">
          </div>
        </div>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
          <div class="form-group">
            <label class="form-label">Date of Birth</label>
            <input type="date" id="regDOB" class="form-control" required>
          </div>
          <div class="form-group">
            <label class="form-label">Gender</label>
            <select id="regGender" class="form-control">
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
          <div class="form-group">
            <label class="form-label">Phone</label>
            <input type="tel" id="regPhone" class="form-control" required placeholder="+1 (555) 000-0000">
          </div>
          <div class="form-group">
            <label class="form-label">Email</label>
            <input type="email" id="regEmail" class="form-control" placeholder="john.doe@example.org">
          </div>
        </div>
        <div class="form-group">
          <label class="form-label">Insurance Payer</label>
          <input type="text" id="regInsurance" class="form-control" placeholder="Blue Cross Blue Shield">
        </div>
      </form>
    `;

    Modal.show('Register New Patient', content, [
      {
        label: 'Save & Create Patient',
        className: 'btn-primary',
        onClick: async (close) => {
          const body = {
            firstName: document.getElementById('regFirstName').value,
            lastName: document.getElementById('regLastName').value,
            dob: document.getElementById('regDOB').value,
            gender: document.getElementById('regGender').value,
            phone: document.getElementById('regPhone').value,
            email: document.getElementById('regEmail').value,
            insurance: { payerName: document.getElementById('regInsurance').value || 'Self Pay' }
          };

          try {
            await API.post('/patients', body);
            Toast.show('success', 'Patient registered successfully.');
            close();
            PatientsView.loadPatients();
          } catch (e) {
            Toast.show('error', e.message);
          }
        }
      }
    ]);
  }
};
