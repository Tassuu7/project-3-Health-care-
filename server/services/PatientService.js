/**
 * Patient Information and Medical Record Management Service
 */

const { getStorage } = require('../database/storage');
const Patient = require('../models/Patient');
const { calculateBMI } = require('../utils/clinicalCalculators');
const { logAudit } = require('./AuditService');

class PatientService {
  static getPatients(query = {}) {
    const store = getStorage();
    const { search, gender, condition, limit = 50, offset = 0 } = query;

    return store.query('patients', (p) => {
      if (search) {
        const s = search.toLowerCase();
        const matchesName = `${p.firstName} ${p.lastName}`.toLowerCase().includes(s);
        const matchesMRN = (p.mrn || '').toLowerCase().includes(s);
        const matchesPhone = (p.phone || '').includes(s);
        if (!matchesName && !matchesMRN && !matchesPhone) return false;
      }
      if (gender && p.gender.toLowerCase() !== gender.toLowerCase()) return false;
      if (condition) {
        const hasCond = (p.chronicConditions || []).some(c => c.name.toLowerCase().includes(condition.toLowerCase()) || c.code.toLowerCase() === condition.toLowerCase());
        if (!hasCond) return false;
      }
      return true;
    }, {
      limit: parseInt(limit, 10),
      offset: parseInt(offset, 10),
      sortBy: 'lastName',
      sortOrder: 'asc'
    });
  }

  static getPatientById(id) {
    const store = getStorage();
    const patient = store.get('patients', id);
    if (!patient) return null;

    // Attach related clinical records
    const encounters = store.query('encounters', e => e.patientId === id, { sortBy: 'date', sortOrder: 'desc' });
    const prescriptions = store.query('prescriptions', p => p.patientId === id, { sortBy: 'prescribedDate', sortOrder: 'desc' });
    const labOrders = store.query('labOrders', l => l.patientId === id, { sortBy: 'orderDate', sortOrder: 'desc' });
    const appointments = store.query('appointments', a => a.patientId === id, { sortBy: 'appointmentDate', sortOrder: 'desc' });
    const claims = store.query('claims', c => c.patientId === id, { sortBy: 'serviceDate', sortOrder: 'desc' });

    return {
      ...patient,
      encounters,
      prescriptions,
      labOrders,
      appointments,
      claims
    };
  }

  static createPatient(patientData, user = null) {
    const store = getStorage();
    const patient = new Patient(patientData);
    const validation = patient.validate();

    if (!validation.valid) {
      throw new Error(`Validation failed: ${validation.errors.join(', ')}`);
    }

    const created = store.insert('patients', patient.toJSON());
    logAudit({
      action: 'PATIENT_CREATE',
      userId: user ? user.id : 'system',
      resource: `/patients/${created.id}`,
      details: `Created patient ${created.firstName} ${created.lastName} (${created.mrn})`
    });

    return created;
  }

  static updatePatient(id, updates, user = null) {
    const store = getStorage();
    const existing = store.get('patients', id);
    if (!existing) throw new Error('Patient not found');

    const updated = store.update('patients', id, updates);
    logAudit({
      action: 'PATIENT_UPDATE',
      userId: user ? user.id : 'system',
      resource: `/patients/${id}`,
      details: `Updated patient details for ${updated.firstName} ${updated.lastName}`
    });

    return updated;
  }

  static addVitals(patientId, vitalsData, user = null) {
    const store = getStorage();
    const patient = store.get('patients', patientId);
    if (!patient) throw new Error('Patient not found');

    const bmiCalc = calculateBMI(vitalsData.weightKg, vitalsData.heightCm);
    const newRecord = {
      timestamp: new Date().toISOString(),
      bpSys: Number(vitalsData.bpSys) || null,
      bpDia: Number(vitalsData.bpDia) || null,
      hr: Number(vitalsData.hr) || null,
      rr: Number(vitalsData.rr) || null,
      tempC: Number(vitalsData.tempC) || null,
      spo2: Number(vitalsData.spo2) || null,
      weightKg: Number(vitalsData.weightKg) || null,
      heightCm: Number(vitalsData.heightCm) || null,
      bmi: bmiCalc.bmi,
      bmiCategory: bmiCalc.category,
      recordedBy: user ? (user.fullName || user.username) : 'Clinical Triage'
    };

    const history = patient.vitalsHistory || [];
    history.push(newRecord);

    store.update('patients', patientId, { vitalsHistory: history });
    return newRecord;
  }
}

module.exports = PatientService;
