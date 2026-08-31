/**
 * Clinic Schedule & Appointments View Controller
 */

const AppointmentsView = {
  appointmentsList: [
    { id: 'apt-001', patientName: 'Eleanor Vance', mrn: 'MRN-100492', doctorName: 'Dr. Evelyn Smith, MD', timeSlot: '09:00 AM', type: 'Cardiology Follow-up', status: 'Checked In' },
    { id: 'apt-002', patientName: 'James Holloway', mrn: 'MRN-100493', doctorName: 'Dr. Evelyn Smith, MD', timeSlot: '10:30 AM', type: 'Hypertension Review', status: 'Scheduled' },
    { id: 'apt-003', patientName: 'Aaliyah Mansour', mrn: 'MRN-100494', doctorName: 'Dr. Marcus Chen, MD', timeSlot: '11:15 AM', type: 'Pulmonology Consult', status: 'Scheduled' },
    { id: 'apt-004', patientName: 'Robert Chen', mrn: 'MRN-100495', doctorName: 'Dr. Evelyn Smith, MD', timeSlot: '02:00 PM', type: 'Post-Op Check', status: 'Scheduled' }
  ],

  async render(container) {
    container.innerHTML = `
      <div class="page-header">
        <div>
          <h1 class="page-title"><span>📅</span> Clinic Appointments & Master Schedule</h1>
          <p class="page-subtitle">Outpatient booking calendar, clinician queues & check-in management</p>
        </div>
        <button class="btn btn-primary" id="bookAptBtn">+ Book New Appointment</button>
      </div>

      <div class="panel">
        <div id="appointmentsTableContainer"></div>
      </div>
    `;

    document.getElementById('bookAptBtn').addEventListener('click', () => this.showBookModal());
    this.renderTable();
  },

  renderTable() {
    const div = document.getElementById('appointmentsTableContainer');
    if (!div) return;

    div.innerHTML = `
      <div class="table-responsive">
        <table class="data-table">
          <thead>
            <tr>
              <th>Time Slot</th>
              <th>Patient</th>
              <th>MRN</th>
              <th>Attending Clinician</th>
              <th>Visit Type</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            ${this.appointmentsList.map(a => `
              <tr>
                <td><strong>${a.timeSlot}</strong></td>
                <td><strong>${a.patientName}</strong></td>
                <td><code>${a.mrn}</code></td>
                <td>${a.doctorName}</td>
                <td><span class="badge badge-blue">${a.type}</span></td>
                <td><span class="badge ${a.status === 'Checked In' ? 'badge-green' : 'badge-amber'}">${a.status}</span></td>
                <td>
                  <button class="btn btn-primary btn-sm" onclick="State.setPatient('pat-001'); Router.navigate('ehr');">Open Chart</button>
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    `;
  },

  showBookModal() {
    Modal.open('Schedule New Clinic Visit', `
      <form id="bookAptForm" style="display: flex; flex-direction: column; gap: 1rem;">
        <div class="form-group">
          <label class="form-label">Patient</label>
          <select id="aptPatient" class="form-control">
            <option value="Eleanor Vance|MRN-100492">Eleanor Vance (MRN-100492)</option>
            <option value="James Holloway|MRN-100493">James Holloway (MRN-100493)</option>
            <option value="Aaliyah Mansour|MRN-100494">Aaliyah Mansour (MRN-100494)</option>
          </select>
        </div>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
          <div class="form-group">
            <label class="form-label">Physician</label>
            <select id="aptDoctor" class="form-control">
              <option value="Dr. Evelyn Smith, MD">Dr. Evelyn Smith, MD (Cardiology)</option>
              <option value="Dr. Marcus Chen, MD">Dr. Marcus Chen, MD (Pulmonology)</option>
            </select>
          </div>
          <div class="form-group">
            <label class="form-label">Time Slot</label>
            <input type="text" id="aptTime" class="form-control" required value="03:30 PM">
          </div>
        </div>
        <div class="form-group">
          <label class="form-label">Reason / Visit Type</label>
          <input type="text" id="aptType" class="form-control" required value="Routine Follow-up & Vitals">
        </div>
        <button type="submit" class="btn btn-primary btn-block">Confirm Appointment Booking</button>
      </form>
    `);

    document.getElementById('bookAptForm').addEventListener('submit', (e) => {
      e.preventDefault();
      const patParts = document.getElementById('aptPatient').value.split('|');
      const doc = document.getElementById('aptDoctor').value;
      const time = document.getElementById('aptTime').value;
      const type = document.getElementById('aptType').value;

      const newApt = {
        id: `apt-00${this.appointmentsList.length + 1}`,
        patientName: patParts[0],
        mrn: patParts[1],
        doctorName: doc,
        timeSlot: time,
        type: type,
        status: 'Scheduled'
      };

      this.appointmentsList.push(newApt);
      this.renderTable();
      Modal.close();
      Toast.show('success', `Appointment scheduled for ${patParts[0]} with ${doc}.`);
    });
  }
};
