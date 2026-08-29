/**
 * Clinical Data Export (JSON/CSV) Service
 */

const { getStorage } = require('../database/storage');

class ExportReportService {
  static exportPatientsCSV() {
    const store = getStorage();
    const patients = store.getAll('patients');

    const headers = ['MRN', 'First Name', 'Last Name', 'DOB', 'Gender', 'Phone', 'Email', 'Status'];
    const rows = patients.map(p => [
      p.mrn,
      `"${p.firstName}"`,
      `"${p.lastName}"`,
      p.dob,
      p.gender,
      `"${p.phone}"`,
      `"${p.email}"`,
      p.status
    ]);

    return [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
  }
}

module.exports = ExportReportService;
