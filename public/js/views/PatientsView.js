/**
 * Patient Directory (Master Patient Index) Controller
 */

const PatientsView = {
  cachedPatients: [
    { id: 'pat-001', mrn: 'MRN-100492', firstName: 'Eleanor', lastName: 'Vance', dob: '1961-04-12', gender: 'Female', phone: '(555) 234-5678', insurance: { payerName: 'Blue Cross Blue Shield' }, allergies: [{ allergen: 'Penicillin' }] },
    { id: 'pat-002', mrn: 'MRN-100493', firstName: 'James', lastName: 'Holloway', dob: '1954-08-23', gender: 'Male', phone: '(555) 345-6789', insurance: { payerName: 'Medicare Part B' }, allergies: [{ allergen: 'Sulfa Drugs' }] },
    { id: 'pat-003', mrn: 'MRN-100494', firstName: 'Aaliyah', lastName: 'Mansour', dob: '1988-11-05', gender: 'Female', phone: '(555) 456-7890', insurance: { payerName: 'Aetna Health' }, allergies: [] },
    { id: 'pat-004', mrn: 'MRN-100495', firstName: 'Robert', lastName: 'Chen', dob: '1972-02-17', gender: 'Male', phone: '(555) 567-8901', insurance: { payerName: 'UnitedHealthcare' }, allergies: [{ allergen: 'Aspirin' }] }
  ],

  async render(container) {
    container.innerHTML = `
      <div class="page-header">
        <div>
          <h1 class="page-title"><span>👥</span> Patient Demographics & Medical Directory</h1>
          <p class="page-subtitle">Master Patient Index (MPI) with full clinical history and EHR records</p>
        </div>
        <button class="btn btn-primary" id="newPatientBtn">+ Register New Patient</button>
      </div>

      <div class="panel" style="margin-bottom: 1.5rem;">
        <div style="display: flex; gap: 1rem; align-items: center;">
          <input type="text" id="patientSearchField" class="form-control" placeholder="Search by name, MRN, phone..." style="max-width: 400px;">
          <button class="btn btn-secondary" id="searchBtn">Search Directory</button>
        </div>
      </div>

      <div class="panel">
        <div id="patientListTable"></div>
      </div>
    `;

    document.getElementById('newPatientBtn').addEventListener('click', () => this.showRegisterModal());
    document.getElementById('searchBtn').addEventListener('click', () => this.filterPatients());
    document.getElementById('patientSearchField').addEventListener('input', () => this.filterPatients());

    this.renderTable(this.cachedPatients);
    this.fetchLivePatients();
  },

  async fetchLivePatients() {
    try {
      const res = await API.get('/patients');
      if (res && res.data && res.data.length > 0) {
        this.cachedPatients = res.data;
        this.renderTable(this.cachedPatients);
      }
    } catch (e) {
      console.warn('Using cached patient directory.');
    }
  },

  filterPatients() {
    const q = (document.getElementById('patientSearchField')?.value || '').toLowerCase();
    const filtered = this.cachedPatients.filter(p => 
      `${p.firstName} ${p.lastName}`.toLowerCase().includes(q) ||
      (p.mrn && p.mrn.toLowerCase().includes(q)) ||
      (p.phone && p.phone.includes(q))
    );
    this.renderTable(filtered);
  },

  renderTable(patients) {
    const tableDiv = document.getElementById('patientListTable');
    if (!tableDiv) return;

    tableDiv.innerHTML = `
      <div class="table-responsive">
        <table class="data-table">
          <thead>
            <tr>
              <th>MRN</th>
              <th>Patient Name</th>
              <th>DOB / Gender</th>
              <th>Contact Phone</th>
              <th>Primary Insurance</th>
              <th>Documented Allergies</th>
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
                <td>${p.insurance?.payerName || 'Self-Pay / Commercial'}</td>
                <td>
                  ${(p.allergies && p.allergies.length > 0)
                    ? p.allergies.map(a => `<span class="badge badge-red">${a.allergen || a}</span>`).join(' ')
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
  },

  showRegisterModal() {
    Modal.open('Register New Patient Record', `
      <form id="regPatientForm" style="display: flex; flex-direction: column; gap: 1rem;">
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
          <div class="form-group">
            <label class="form-label">First Name</label>
            <input type="text" id="regFirstName" class="form-control" required value="Marcus">
          </div>
          <div class="form-group">
            <label class="form-label">Last Name</label>
            <input type="text" id="regLastName" class="form-control" required value="Vance">
          </div>
        </div>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
          <div class="form-group">
            <label class="form-label">Date of Birth</label>
            <input type="date" id="regDob" class="form-control" required value="1985-06-15">
          </div>
          <div class="form-group">
            <label class="form-label">Gender</label>
            <select id="regGender" class="form-control">
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
        </div>
        <div class="form-group">
          <label class="form-label">Phone</label>
          <input type="text" id="regPhone" class="form-control" required value="(555) 789-0123">
        </div>
        <button type="submit" class="btn btn-primary btn-block">Complete Registration</button>
      </form>
    `);

    document.getElementById('regPatientForm').addEventListener('submit', (e) => {
      e.preventDefault();
      const fn = document.getElementById('regFirstName').value;
      const ln = document.getElementById('regLastName').value;
      const dob = document.getElementById('regDob').value;
      const gender = document.getElementById('regGender').value;
      const phone = document.getElementById('regPhone').value;

      const newPat = {
        id: `pat-00${this.cachedPatients.length + 1}`,
        mrn: `MRN-${100490 + this.cachedPatients.length + 1}`,
        firstName: fn,
        lastName: ln,
        dob: dob,
        gender: gender,
        phone: phone,
        insurance: { payerName: 'Blue Cross Blue Shield' },
        allergies: []
      };

      this.cachedPatients.unshift(newPat);
      this.renderTable(this.cachedPatients);
      Modal.close();
      Toast.show('success', `Patient ${fn} ${ln} registered successfully with MRN ${newPat.mrn}.`);
    });
  }
};
