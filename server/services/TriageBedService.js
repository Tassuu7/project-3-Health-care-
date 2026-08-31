/**
 * Emergency Triage and Hospital Bed Allocation Service
 */

const { getStorage } = require('../database/storage');
const TriageAssessment = require('../models/TriageAssessment');
const BedAllocation = require('../models/BedAllocation');
const { logAudit } = require('./AuditService');

class TriageBedService {
  static getTriageQueue() {
    const store = getStorage();
    return store.query('triageAssessments', null, { sortBy: 'esiLevel', sortOrder: 'asc' });
  }

  static getBeds() {
    const store = getStorage();
    return store.getAll('bedAllocations');
  }

  static createTriageAssessment(data, nurse) {
    const store = getStorage();
    const assessment = new TriageAssessment({
      ...data,
      assignedNurseId: nurse.id
    });

    const created = store.insert('triageAssessments', assessment.toJSON());
    logAudit({
      action: 'TRIAGE_ASSESSMENT_CREATED',
      userId: nurse.id,
      resource: `/triage/${created.id}`,
      details: `Emergency triage ESI Level ${created.esiLevel} for ${created.patientName}`
    });

    return created;
  }

  static allocateBed(bedId, patientId, physicianName) {
    const store = getStorage();
    const bed = store.get('bedAllocations', bedId);
    if (!bed) throw new Error('Bed not found');
    const patient = store.get('patients', patientId);

    const updated = store.update('bedAllocations', bedId, {
      isOccupied: true,
      patientId,
      patientName: patient ? `${patient.firstName} ${patient.lastName}` : 'Admitted Patient',
      admissionDate: new Date().toISOString(),
      attendingPhysician: physicianName
    });

    return updated;
  }
}

module.exports = TriageBedService;
