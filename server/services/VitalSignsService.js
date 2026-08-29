/**
 * Vital Signs Telemetry and Trends Service
 */

const { getStorage } = require('../database/storage');

class VitalSignsService {
  static getPatientVitalsTrend(patientId) {
    const store = getStorage();
    const patient = store.get('patients', patientId);
    if (!patient) return [];
    return patient.vitalsHistory || [];
  }
}

module.exports = VitalSignsService;
