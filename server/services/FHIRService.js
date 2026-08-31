/**
 * HL7 FHIR (Fast Healthcare Interoperability Resources) R4 Exporter
 */

const { getStorage } = require('../database/storage');

class FHIRService {
  static getPatientResource(patientId) {
    const store = getStorage();
    const pat = store.get('patients', patientId);
    if (!pat) return null;

    return {
      resourceType: 'Patient',
      id: pat.id,
      identifier: [
        {
          use: 'official',
          type: { coding: [{ system: 'http://terminology.hl7.org/CodeSystem/v2-0203', code: 'MR' }] },
          value: pat.mrn
        }
      ],
      active: pat.status === 'ACTIVE',
      name: [
        {
          use: 'official',
          family: pat.lastName,
          given: [pat.firstName]
        }
      ],
      telecom: [
        { system: 'phone', value: pat.phone, use: 'mobile' },
        { system: 'email', value: pat.email, use: 'home' }
      ],
      gender: (pat.gender || '').toLowerCase(),
      birthDate: pat.dob,
      address: [
        {
          use: 'home',
          line: [pat.address.street],
          city: pat.address.city,
          state: pat.address.state,
          postalCode: pat.address.postalCode,
          country: 'USA'
        }
      ]
    };
  }
}

module.exports = FHIRService;
