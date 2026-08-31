/**
 * Telemetry & Vital Signs Record Model
 */

const BaseModel = require('./BaseModel');

class VitalSign extends BaseModel {
  constructor(data = {}) {
    super(data);
    this.patientId = data.patientId || null;
    this.bpSys = Number(data.bpSys) || null;
    this.bpDia = Number(data.bpDia) || null;
    this.hr = Number(data.hr) || null;
    this.rr = Number(data.rr) || null;
    this.tempC = Number(data.tempC) || null;
    this.spo2 = Number(data.spo2) || null;
    this.weightKg = Number(data.weightKg) || null;
    this.heightCm = Number(data.heightCm) || null;
    this.bmi = Number(data.bmi) || null;
    this.recordedBy = data.recordedBy || 'Automated Monitor';
    this.timestamp = data.timestamp || new Date().toISOString();
  }
}

module.exports = VitalSign;
