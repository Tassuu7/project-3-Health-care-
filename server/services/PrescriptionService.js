/**
 * Electronic Prescriptions (e-Rx) Management Service
 */

const { getStorage } = require('../database/storage');
const Prescription = require('../models/Prescription');
const { checkAllergyContraindications } = require('./DrugInteractionService');
const { logAudit } = require('./AuditService');

class PrescriptionService {
  static getPrescriptions(query = {}) {
    const store = getStorage();
    const { patientId, status, providerId } = query;

    return store.query('prescriptions', p => {
      if (patientId && p.patientId !== patientId) return false;
      if (status && p.status !== status) return false;
      if (providerId && p.providerId !== providerId) return false;
      return true;
    }, { sortBy: 'prescribedDate', sortOrder: 'desc' });
  }

  static createPrescription(rxData, user) {
    const store = getStorage();
    const patient = store.get('patients', rxData.patientId);
    if (!patient) throw new Error('Patient not found');

    // Run allergy check
    const allergyAlert = checkAllergyContraindications(rxData.drugName, patient.allergies);
    if (allergyAlert && !rxData.overrideAllergyAlert) {
      throw new Error(`Blocked by Clinical Decision Support: ${allergyAlert.message}`);
    }

    const prescription = new Prescription({
      ...rxData,
      patientName: `${patient.firstName} ${patient.lastName}`,
      providerId: user.id,
      providerName: user.fullName || user.username
    });

    const validation = prescription.validate();
    if (!validation.valid) {
      throw new Error(`Validation failed: ${validation.errors.join(', ')}`);
    }

    const created = store.insert('prescriptions', prescription.toJSON());

    // Update patient currentMedications
    const meds = patient.currentMedications || [];
    meds.push({
      drug: created.drugName,
      dose: created.strength,
      frequency: created.sig,
      startDate: created.prescribedDate
    });
    store.update('patients', patient.id, { currentMedications: meds });

    logAudit({
      action: 'PRESCRIPTION_CREATED',
      userId: user.id,
      resource: `/prescriptions/${created.id}`,
      details: `Prescribed ${created.drugName} ${created.strength} for ${patient.firstName} ${patient.lastName}`
    });

    return created;
  }

  static dispense(rxId, pharmacist) {
    const store = getStorage();
    const rx = store.get('prescriptions', rxId);
    if (!rx) throw new Error('Prescription not found');

    const instance = new Prescription(rx);
    instance.dispense(pharmacist);

    const updated = store.update('prescriptions', rxId, instance.toJSON());
    logAudit({
      action: 'PRESCRIPTION_DISPENSED',
      userId: pharmacist.id,
      resource: `/prescriptions/${rxId}`,
      details: `Pharmacist ${pharmacist.fullName} dispensed ${rx.drugName}`
    });

    return updated;
  }
}

module.exports = PrescriptionService;
