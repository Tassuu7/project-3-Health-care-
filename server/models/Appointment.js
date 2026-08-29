/**
 * Appointment Entity Model
 */

const BaseModel = require('./BaseModel');

class Appointment extends BaseModel {
  constructor(data = {}) {
    super(data);
    this.patientId = data.patientId || null;
    this.patientName = data.patientName || '';
    this.doctorId = data.doctorId || null;
    this.doctorName = data.doctorName || '';
    this.appointmentDate = data.appointmentDate || '';
    this.timeSlot = data.timeSlot || '';
    this.type = data.type || 'IN_PERSON_CLINIC';
    this.specialty = data.specialty || 'General Practice';
    this.reason = data.reason || '';
    this.status = data.status || 'CONFIRMED';
    this.room = data.room || 'Exam Room 1';
  }

  validate() {
    const errors = [];
    if (!this.patientId) errors.push('Patient ID is required.');
    if (!this.doctorId) errors.push('Doctor ID is required.');
    if (!this.appointmentDate) errors.push('Appointment date is required.');
    if (!this.timeSlot) errors.push('Time slot is required.');
    return {
      valid: errors.length === 0,
      errors
    };
  }
}

module.exports = Appointment;
