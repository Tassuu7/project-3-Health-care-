/**
 * Global App State Store
 */

const State = {
  currentPatientId: 'pat-001',
  selectedEncounterId: null,
  activeTelehealthRoom: null,

  setPatient(id) {
    this.currentPatientId = id;
  }
};
