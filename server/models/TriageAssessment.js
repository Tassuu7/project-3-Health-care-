/**
 * Emergency Department Triage Assessment Model
 */

const BaseModel = require('./BaseModel');

class TriageAssessment extends BaseModel {
  constructor(data = {}) {
    super(data);
    this.patientId = data.patientId || null;
    this.patientName = data.patientName || '';
    this.esiLevel = Number(data.esiLevel) || 3; // 1 to 5
    this.chiefComplaint = data.chiefComplaint || '';
    this.vitals = data.vitals || {};
    this.painScore = Number(data.painScore) || 0; // 0 to 10
    this.allergies = data.allergies || [];
    this.assignedNurseId = data.assignedNurseId || null;
    this.assignedBed = data.assignedBed || null;
    this.priorityScore = Number(data.priorityScore) || 50;
    this.status = data.status || 'WAITING_BED';
  }
}

module.exports = TriageAssessment;
