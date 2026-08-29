/**
 * Appointment Scheduling and Queue Management Service
 */

const { getStorage } = require('../database/storage');
const Appointment = require('../models/Appointment');
const { logAudit } = require('./AuditService');

class AppointmentService {
  static getAppointments(query = {}) {
    const store = getStorage();
    const { doctorId, patientId, date, status } = query;

    return store.query('appointments', a => {
      if (doctorId && a.doctorId !== doctorId) return false;
      if (patientId && a.patientId !== patientId) return false;
      if (date && a.appointmentDate !== date) return false;
      if (status && a.status !== status) return false;
      return true;
    }, { sortBy: 'appointmentDate', sortOrder: 'asc' });
  }

  static schedule(appointmentData, user) {
    const store = getStorage();
    const patient = store.get('patients', appointmentData.patientId);
    if (!patient) throw new Error('Patient not found');

    const doctor = store.get('users', appointmentData.doctorId);
    if (!doctor) throw new Error('Doctor not found');

    const apt = new Appointment({
      ...appointmentData,
      patientName: `${patient.firstName} ${patient.lastName}`,
      doctorName: doctor.fullName || doctor.username
    });

    const validation = apt.validate();
    if (!validation.valid) throw new Error(`Validation failed: ${validation.errors.join(', ')}`);

    const created = store.insert('appointments', apt.toJSON());
    logAudit({
      action: 'APPOINTMENT_SCHEDULED',
      userId: user.id,
      resource: `/appointments/${created.id}`,
      details: `Scheduled ${apt.type} with ${apt.doctorName} on ${apt.appointmentDate} (${apt.timeSlot})`
    });

    return created;
  }

  static updateStatus(id, newStatus, user) {
    const store = getStorage();
    const updated = store.update('appointments', id, { status: newStatus });
    if (!updated) throw new Error('Appointment not found');
    return updated;
  }
}

module.exports = AppointmentService;
