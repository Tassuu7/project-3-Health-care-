/**
 * Appointments & Clinical Scheduling View Controller
 */

const AppointmentsView = {
  cachedApts: [],

  async render(container) {
    container.innerHTML = `
      <div class="page-header">
        <div>
          <h1 class="page-title"><span>📅</span> Clinical Encounters & Appointments Schedule</h1>
          <p class="page-subtitle">Outpatient clinic queues, specialty consultations, check-in kiosk, and provider calendars</p>
        </div>
        <button class="btn btn-primary" id="bookAptBtn">+ Book New Appointment</button>
      </div>

      <div class="grid-cards">
        <div class="stat-card">
          <div class="stat-icon-wrapper" style="background: #dbeafe; color: #1d4ed8;">📅</div>
          <div>
            <div class="stat-val" id="todayAptCount">5</div>
            <div class="stat-label">Scheduled Visits Today</div>
          </div>
        </div>
        <div class="stat-card">
          <div class="stat-icon-wrapper" style="background: #d1fae5; color: #047857;">🩺</div>
          <div>
            <div class="stat-val">3 Completed</div>
            <div class="stat-label">SOAP Documentation Complete</div>
          </div>
        </div>
        <div class="stat-card">
          <div class="stat-icon-wrapper" style="background: #fef3c7; color: #b45309;">⏳</div>
          <div>
            <div class="stat-val">12 min</div>
            <div class="stat-label">Average Patient Wait Time</div>
          </div>
        </div>
        <div class="stat-card">
          <div class="stat-icon-wrapper" style="background: #ede9fe; color: #6d28d9;">⭐</div>
          <div>
            <div class="stat-val">98.5%</div>
            <div class="stat-label">Patient Satisfaction Rating</div>
          </div>
        </div>
      </div>

      <div class="panel">
        <div class="panel-header">
          <h3 class="panel-title"><span>📋</span> Master Clinical Appointment Queue</h3>
          <div style="display: flex; gap: 0.5rem;">
            <button class="btn btn-secondary btn-sm" id="filterAllBtn">All</button>
            <button class="btn btn-secondary btn-sm" id="filterScheduledBtn">Scheduled</button>
            <button class="btn btn-secondary btn-sm" id="refreshAptsBtn">Refresh</button>
          </div>
        </div>
        <div id="appointmentsTableContainer">
          <div style="padding: 1.5rem; text-align: center; color: var(--text-secondary);">Loading appointment schedule...</div>
        </div>
      </div>
    `;

    document.getElementById('bookAptBtn').addEventListener('click', () => this.showBookAptModal());
    document.getElementById('refreshAptsBtn').addEventListener('click', () => this.loadAppointments());
    document.getElementById('filterAllBtn').addEventListener('click', () => this.renderTable(this.cachedApts));
    document.getElementById('filterScheduledBtn').addEventListener('click', () => {
      this.renderTable(this.cachedApts.filter(a => a.status === 'SCHEDULED' || a.status === 'CONFIRMED'));
    });

    this.loadAppointments();
  },

  async loadAppointments() {
    const tableDiv = document.getElementById('appointmentsTableContainer');
    if (!tableDiv) return;

    try {
      const res = await API.get('/appointments');
      const apts = (res && res.data && res.data.length > 0) ? res.data : [
        { id: 'apt-001', patientName: 'Eleanor Vance', providerName: 'Dr. Evelyn Smith, MD', specialty: 'Cardiology', scheduledTime: '09:00 AM', reason: 'Post-MI Follow-up & Titration', status: 'CONFIRMED' },
        { id: 'apt-002', patientName: 'James Holloway', providerName: 'Dr. Evelyn Smith, MD', specialty: 'Cardiology', scheduledTime: '10:30 AM', reason: 'Hypertension & Lipid Review', status: 'SCHEDULED' },
        { id: 'apt-003', patientName: 'Aaliyah Mansour', providerName: 'Dr. Marcus Chen, MD', specialty: 'Pulmonology', scheduledTime: '11:15 AM', reason: 'Refractory Asthma Assessment', status: 'SCHEDULED' },
        { id: 'apt-004', patientName: 'Robert Chen', providerName: 'Dr. Evelyn Smith, MD', specialty: 'Cardiology', scheduledTime: '02:00 PM', reason: 'Echocardiogram Review', status: 'SCHEDULED' },
        { id: 'apt-005', patientName: 'Margaret Davies', providerName: 'Dr. Evelyn Smith, MD', specialty: 'Cardiology', scheduledTime: '03:30 PM', reason: 'Palpitations & Holter Sync', status: 'COMPLETED' }
      ];

      this.cachedApts = apts;
      this.renderTable(apts);
    } catch (err) {
      console.warn('Appointments fallback rendered:', err);
      tableDiv.innerHTML = `<div style="padding: 1rem; color: var(--clinical-rose);">Failed to load appointments: ${err.message}</div>`;
    }
  },

  renderTable(apts) {
    const tableDiv = document.getElementById('appointmentsTableContainer');
    if (!tableDiv) return;

    if (!apts || apts.length === 0) {
      tableDiv.innerHTML = `<div style="padding: 1.5rem; text-align: center; color: var(--text-muted);">No appointments found.</div>`;
      return;
    }

    tableDiv.innerHTML = `
      <div class="table-responsive">
        <table class="data-table">
          <thead>
            <tr>
              <th>Appt ID</th>
              <th>Patient Name</th>
              <th>Scheduled Time</th>
              <th>Provider & Specialty</th>
              <th>Chief Complaint / Reason</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            ${apts.map(a => `
              <tr>
                <td><code>${a.id}</code></td>
                <td><strong>${a.patientName}</strong></td>
                <td><strong>${a.scheduledTime || a.appointmentDate || 'Today'}</strong></td>
                <td>${a.providerName} <small style="color:var(--text-muted);">(${a.specialty || 'General'})</small></td>
                <td>${a.reason || a.chiefComplaint}</td>
                <td>
                  <span class="badge ${a.status === 'COMPLETED' ? 'badge-green' : (a.status === 'CONFIRMED' ? 'badge-blue' : 'badge-amber')}">${a.status}</span>
                </td>
                <td>
                  <button class="btn btn-primary btn-sm" onclick="Router.navigate('ehr')">Open EHR SOAP</button>
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    `;
  },

  showBookAptModal() {
    Modal.open('Schedule New Outpatient Appointment', `
      <form id="bookAptForm" style="display: flex; flex-direction: column; gap: 1rem;">
        <div class="form-group">
          <label class="form-label">Patient</label>
          <select id="bookAptPatient" class="form-control" required>
            <option value="Eleanor Vance">Eleanor Vance (MRN-100492)</option>
            <option value="James Holloway">James Holloway (MRN-100493)</option>
            <option value="Aaliyah Mansour">Aaliyah Mansour (MRN-100494)</option>
          </select>
        </div>
        <div class="form-group">
          <label class="form-label">Attending Provider</label>
          <select id="bookAptProvider" class="form-control" required>
            <option value="Dr. Evelyn Smith, MD (Cardiology)">Dr. Evelyn Smith, MD (Cardiology)</option>
            <option value="Dr. Marcus Chen, MD (Pulmonology)">Dr. Marcus Chen, MD (Pulmonology)</option>
          </select>
        </div>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
          <div class="form-group">
            <label class="form-label">Date</label>
            <input type="date" id="bookAptDate" class="form-control" value="${new Date().toISOString().substring(0, 10)}" required>
          </div>
          <div class="form-group">
            <label class="form-label">Time Slot</label>
            <input type="time" id="bookAptTime" class="form-control" value="14:00" required>
          </div>
        </div>
        <div class="form-group">
          <label class="form-label">Chief Complaint / Reason for Visit</label>
          <input type="text" id="bookAptReason" class="form-control" placeholder="e.g. Routine hypertension review" required>
        </div>
        <button type="submit" class="btn btn-primary btn-block">Confirm Appointment Booking</button>
      </form>
    `);

    document.getElementById('bookAptForm').addEventListener('submit', (e) => {
      e.preventDefault();
      const patient = document.getElementById('bookAptPatient').value;
      const provider = document.getElementById('bookAptProvider').value;
      const time = document.getElementById('bookAptTime').value;
      const reason = document.getElementById('bookAptReason').value;

      const newApt = {
        id: `apt-00${this.cachedApts.length + 1}`,
        patientName: patient,
        providerName: provider.split('(')[0].trim(),
        specialty: provider.includes('Cardiology') ? 'Cardiology' : 'Pulmonology',
        scheduledTime: time,
        reason: reason,
        status: 'CONFIRMED'
      };

      this.cachedApts.unshift(newApt);
      this.renderTable(this.cachedApts);
      Modal.close();
      Toast.show('success', `Appointment booked for ${patient} at ${time}.`);
    });
  }
};
