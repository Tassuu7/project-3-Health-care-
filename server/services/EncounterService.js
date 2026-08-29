/**
 * Clinical Encounter and SOAP Note Service
 */

const { getStorage } = require('../database/storage');
const Encounter = require('../models/Encounter');
const { logAudit } = require('./AuditService');
const { runClinicalDecisionSupport } = require('./ClinicalDecisionSupportService');

class EncounterService {
  static getEncounters(query = {}) {
    const store = getStorage();
    const { patientId, providerId, status, limit = 50 } = query;

    return store.query('encounters', e => {
      if (patientId && e.patientId !== patientId) return false;
      if (providerId && e.providerId !== providerId) return false;
      if (status && e.status !== status) return false;
      return true;
    }, { sortBy: 'date', sortOrder: 'desc', limit: parseInt(limit, 10) });
  }

  static getEncounterById(id) {
    const store = getStorage();
    return store.get('encounters', id);
  }

  static createEncounter(encounterData, user = null) {
    const store = getStorage();
    const encounter = new Encounter(encounterData);

    if (user && !encounter.providerId) {
      encounter.providerId = user.id;
      encounter.providerName = user.fullName || user.username;
    }

    const validation = encounter.validate();
    if (!validation.valid) {
      throw new Error(`Encounter validation failed: ${validation.errors.join(', ')}`);
    }

    const created = store.insert('encounters', encounter.toJSON());
    logAudit({
      action: 'ENCOUNTER_CREATE',
      userId: user ? user.id : 'system',
      resource: `/encounters/${created.id}`,
      details: `Created encounter for patient ${created.patientName}`
    });

    return created;
  }

  static updateSOAPNote(id, soapData, user = null) {
    const store = getStorage();
    const encounter = store.get('encounters', id);
    if (!encounter) throw new Error('Encounter not found');

    const updated = store.update('encounters', id, {
      soapNote: {
        ...encounter.soapNote,
        ...soapData
      }
    });

    return updated;
  }

  static signAndFinalize(id, user) {
    const store = getStorage();
    const encounter = store.get('encounters', id);
    if (!encounter) throw new Error('Encounter not found');

    const instance = new Encounter(encounter);
    instance.signEncounter(user);

    const updated = store.update('encounters', id, instance.toJSON());
    logAudit({
      action: 'ENCOUNTER_SIGN_FINALIZE',
      userId: user.id,
      resource: `/encounters/${id}`,
      details: `Physician ${user.fullName} electronically signed encounter #${id}`
    });

    return updated;
  }
}

module.exports = EncounterService;
