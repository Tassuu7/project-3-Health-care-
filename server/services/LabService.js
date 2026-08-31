/**
 * Laboratory Orders and Results Service
 */

const { getStorage } = require('../database/storage');
const LabOrder = require('../models/LabOrder');
const { logAudit } = require('./AuditService');

class LabService {
  static getLabOrders(query = {}) {
    const store = getStorage();
    const { patientId, status, priority } = query;

    return store.query('labOrders', l => {
      if (patientId && l.patientId !== patientId) return false;
      if (status && l.status !== status) return false;
      if (priority && l.priority !== priority) return false;
      return true;
    }, { sortBy: 'orderDate', sortOrder: 'desc' });
  }

  static createLabOrder(orderData, user) {
    const store = getStorage();
    const patient = store.get('patients', orderData.patientId);
    if (!patient) throw new Error('Patient not found');

    const labOrder = new LabOrder({
      ...orderData,
      patientName: `${patient.firstName} ${patient.lastName}`,
      providerId: user.id,
      providerName: user.fullName || user.username
    });

    const validation = labOrder.validate();
    if (!validation.valid) throw new Error(`Lab validation error: ${validation.errors.join(', ')}`);

    const created = store.insert('labOrders', labOrder.toJSON());
    logAudit({
      action: 'LAB_ORDER_CREATE',
      userId: user.id,
      resource: `/labs/${created.id}`,
      details: `Ordered ${created.panelName} for ${patient.firstName} ${patient.lastName}`
    });

    return created;
  }

  static enterResults(orderId, results, notes, technician) {
    const store = getStorage();
    const order = store.get('labOrders', orderId);
    if (!order) throw new Error('Lab order not found');

    const updated = store.update('labOrders', orderId, {
      results,
      pathologistNotes: notes,
      status: 'FINALIZED',
      verifiedBy: technician.fullName || technician.username,
      verifiedAt: new Date().toISOString()
    });

    logAudit({
      action: 'LAB_RESULTS_FINALIZED',
      userId: technician.id,
      resource: `/labs/${orderId}`,
      details: `Entered results for lab order #${orderId}`
    });

    return updated;
  }
}

module.exports = LabService;
