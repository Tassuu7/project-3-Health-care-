/**
 * Inpatient Hospital Bed & Ward Allocation Model
 */

const BaseModel = require('./BaseModel');

class BedAllocation extends BaseModel {
  constructor(data = {}) {
    super(data);
    this.ward = data.ward || 'ICU'; // ICU, CCU, Med-Surg, Pediatrics, Maternity, ER
    this.roomNumber = data.roomNumber || '101';
    this.bedCode = data.bedCode || 'BED-101-A';
    this.isOccupied = data.isOccupied || false;
    this.patientId = data.patientId || null;
    this.patientName = data.patientName || null;
    this.admissionDate = data.admissionDate || null;
    this.attendingPhysician = data.attendingPhysician || null;
  }
}

module.exports = BedAllocation;
