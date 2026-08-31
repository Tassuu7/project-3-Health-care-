const assert = require('assert');
const PatientService = require('../../server/services/PatientService');

describe('Patient Service & Master Patient Index', () => {
  test('retrieves patient list with search query', () => {
    const patients = PatientService.getPatients({ search: 'Eleanor' });
    assert.ok(patients.length >= 1);
    assert.strictEqual(patients[0].firstName, 'Eleanor');
  });

  test('creates new patient record with validation', () => {
    const newPat = {
      firstName: 'Jonathan',
      lastName: 'Harkers',
      dob: '1985-05-12',
      gender: 'Male',
      phone: '+1 (555) 777-8888',
      email: 'jonathan.h@example.org'
    };
    const created = PatientService.createPatient(newPat);
    assert.ok(created.id);
    assert.strictEqual(created.firstName, 'Jonathan');
  });

  test('adds vitals record and computes BMI correctly', () => {
    const vitals = PatientService.addVitals('pat-001', {
      bpSys: 120,
      bpDia: 80,
      hr: 70,
      rr: 16,
      tempC: 37.0,
      spo2: 99,
      weightKg: 70,
      heightCm: 175
    });
    assert.strictEqual(vitals.bmi, 22.9);
    assert.strictEqual(vitals.bmiCategory, 'Normal weight');
  });
});
