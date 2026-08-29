/**
 * Comprehensive Healthcare Dataset Seeder
 * Generates realistic clinical profiles, doctors, nurses, encounters, prescriptions,
 * lab test results, appointment schedules, claims, inventory, and HIPAA audit trails.
 */

const { hashPassword } = require('../utils/cryptoUtils');

function seedAllData(store) {
  console.log('[PulseCare Seeder] Seeding comprehensive clinical database...');

  // 1. System Users (Clinicians, Admins, Nurses, Pharmacists, Patients)
  const defaultPasswordHash = hashPassword('PulseCare2026!');

  const users = [
    {
      id: 'usr-001',
      username: 'dr.smith',
      passwordHash: defaultPasswordHash,
      fullName: 'Dr. Evelyn Smith, MD, FACC',
      email: 'evelyn.smith@pulsecare.internal',
      role: 'ATTENDING_PHYSICIAN',
      specialty: 'Cardiology',
      department: 'Cardiovascular Institute',
      licenseNumber: 'MD-8842109',
      npiNumber: '1942857102',
      phone: '+1 (555) 234-5678',
      status: 'ACTIVE'
    },
    {
      id: 'usr-002',
      username: 'dr.chen',
      passwordHash: defaultPasswordHash,
      fullName: 'Dr. Marcus Chen, MD, FCCP',
      email: 'marcus.chen@pulsecare.internal',
      role: 'ATTENDING_PHYSICIAN',
      specialty: 'Pulmonology & Critical Care',
      department: 'Pulmonary Medicine',
      licenseNumber: 'MD-9214711',
      npiNumber: '1853749201',
      phone: '+1 (555) 345-6789',
      status: 'ACTIVE'
    },
    {
      id: 'usr-003',
      username: 'dr.rodriguez',
      passwordHash: defaultPasswordHash,
      fullName: 'Dr. Sofia Rodriguez, MD',
      email: 'sofia.rodriguez@pulsecare.internal',
      role: 'RESIDENT_DOCTOR',
      specialty: 'Internal Medicine',
      department: 'General Inpatient Care',
      licenseNumber: 'MD-4102948',
      npiNumber: '1738291045',
      phone: '+1 (555) 456-7890',
      status: 'ACTIVE'
    },
    {
      id: 'usr-004',
      username: 'nurse.sarah',
      passwordHash: defaultPasswordHash,
      fullName: 'Sarah Jenkins, RN, BSN',
      email: 'sarah.jenkins@pulsecare.internal',
      role: 'REGISTERED_NURSE',
      specialty: 'Emergency Triage & Critical Care',
      department: 'Emergency Department',
      licenseNumber: 'RN-7719203',
      phone: '+1 (555) 567-8901',
      status: 'ACTIVE'
    },
    {
      id: 'usr-005',
      username: 'lab.tech.alex',
      passwordHash: defaultPasswordHash,
      fullName: 'Alex Vance, MLS (ASCP)',
      email: 'alex.vance@pulsecare.internal',
      role: 'LAB_TECHNICIAN',
      specialty: 'Clinical Pathology & Hematology',
      department: 'Central Laboratory',
      licenseNumber: 'MLS-330192',
      phone: '+1 (555) 678-9012',
      status: 'ACTIVE'
    },
    {
      id: 'usr-006',
      username: 'pharm.david',
      passwordHash: defaultPasswordHash,
      fullName: 'Dr. David Kim, PharmD, BCPS',
      email: 'david.kim@pulsecare.internal',
      role: 'PHARMACIST',
      specialty: 'Clinical Pharmacokinetics & Formulary',
      department: 'Inpatient Pharmacy',
      licenseNumber: 'RPH-664910',
      phone: '+1 (555) 789-0123',
      status: 'ACTIVE'
    },
    {
      id: 'usr-007',
      username: 'billing.linda',
      passwordHash: defaultPasswordHash,
      fullName: 'Linda Taylor, CPC, CPMA',
      email: 'linda.taylor@pulsecare.internal',
      role: 'BILLING_SPECIALIST',
      specialty: 'Revenue Cycle & Claims Adjudication',
      department: 'Finance & Medical Billing',
      phone: '+1 (555) 890-1234',
      status: 'ACTIVE'
    },
    {
      id: 'usr-008',
      username: 'admin.cmo',
      passwordHash: defaultPasswordHash,
      fullName: 'Dr. Arthur Sterling, MD, MBA',
      email: 'arthur.sterling@pulsecare.internal',
      role: 'CHIEF_MEDICAL_OFFICER',
      specialty: 'Hospital Administration & Clinical Quality',
      department: 'Executive Leadership',
      licenseNumber: 'MD-1002934',
      phone: '+1 (555) 901-2345',
      status: 'ACTIVE'
    },
    {
      id: 'usr-009',
      username: 'admin.system',
      passwordHash: defaultPasswordHash,
      fullName: 'System Administrator',
      email: 'sysadmin@pulsecare.internal',
      role: 'SUPER_ADMIN',
      specialty: 'Health Informatics & Security',
      department: 'IT & Security Infrastructure',
      phone: '+1 (555) 012-3456',
      status: 'ACTIVE'
    },
    {
      id: 'usr-010',
      username: 'patient.eleanor',
      passwordHash: defaultPasswordHash,
      fullName: 'Eleanor Vance (Patient)',
      email: 'eleanor.vance@example.org',
      role: 'PATIENT',
      patientId: 'pat-001',
      mrn: 'MRN-100492',
      department: 'Patient Portal',
      phone: '+1 (555) 912-3401',
      status: 'ACTIVE'
    },
    {
      id: 'usr-011',
      username: 'patient.james',
      passwordHash: defaultPasswordHash,
      fullName: 'James Holloway (Patient)',
      email: 'james.holloway@example.org',
      role: 'PATIENT',
      patientId: 'pat-002',
      mrn: 'MRN-100493',
      department: 'Patient Portal',
      phone: '+1 (555) 823-4712',
      status: 'ACTIVE'
    }
  ];

  for (const user of users) {
    store.insert('users', user);
  }

  // 2. Realistic Clinical Patient Profiles (25 detailed archetypes)
  const patientProfiles = [
    {
      id: 'pat-001',
      mrn: 'MRN-100492',
      firstName: 'Eleanor',
      lastName: 'Vance',
      dob: '1962-04-18',
      gender: 'Female',
      bloodGroup: 'A+',
      ssnMasked: '***-**-4921',
      phone: '+1 (555) 912-3401',
      email: 'eleanor.vance@example.org',
      address: { street: '742 Evergreen Terrace', city: 'Springfield', state: 'IL', postalCode: '62704' },
      emergencyContact: { name: 'Thomas Vance (Spouse)', phone: '+1 (555) 912-3402', relation: 'Spouse' },
      insurance: { payerName: 'Blue Cross Blue Shield Platinum', policyNumber: 'BCBS-8842190-A', groupNumber: 'GRP-9920', copay: 25.00 },
      allergies: [
        { allergen: 'Penicillin', reaction: 'Anaphylaxis / Severe Bronchospasm', severity: 'SEVERE' },
        { allergen: 'Sulfa Drugs', reaction: 'Diffuse Maculopapular Rash', severity: 'MODERATE' }
      ],
      chronicConditions: [
        { code: 'I10', name: 'Essential (primary) hypertension', onsetDate: '2015-08-12' },
        { code: 'E11.9', name: 'Type 2 diabetes mellitus without complications', onsetDate: '2018-03-20' },
        { code: 'E78.5', name: 'Hyperlipidemia, unspecified', onsetDate: '2016-11-04' }
      ],
      currentMedications: [
        { drug: 'Lisinopril', dose: '20mg', frequency: 'Once daily PO', startDate: '2020-01-15' },
        { drug: 'Metformin', dose: '1000mg', frequency: 'Twice daily PO with meals', startDate: '2018-04-01' },
        { drug: 'Atorvastatin', dose: '40mg', frequency: 'Once daily PO at bedtime', startDate: '2016-11-10' }
      ],
      vitalsHistory: [
        { timestamp: '2026-08-20T10:15:00Z', bpSys: 138, bpDia: 84, hr: 72, rr: 16, tempC: 36.8, spo2: 98, bmi: 28.4, weightKg: 78.5, heightCm: 166 },
        { timestamp: '2026-07-15T09:30:00Z', bpSys: 142, bpDia: 88, hr: 76, rr: 18, tempC: 36.9, spo2: 97, bmi: 28.7, weightKg: 79.2, heightCm: 166 }
      ],
      careTeam: { pcpId: 'usr-001', pcpName: 'Dr. Evelyn Smith, MD' },
      status: 'ACTIVE'
    },
    {
      id: 'pat-002',
      mrn: 'MRN-100493',
      firstName: 'James',
      lastName: 'Holloway',
      dob: '1954-11-09',
      gender: 'Male',
      bloodGroup: 'O+',
      ssnMasked: '***-**-8120',
      phone: '+1 (555) 823-4712',
      email: 'james.holloway@example.org',
      address: { street: '1240 Oak Ridge Road', city: 'Peoria', state: 'IL', postalCode: '61614' },
      emergencyContact: { name: 'Margaret Holloway', phone: '+1 (555) 823-4713', relation: 'Spouse' },
      insurance: { payerName: 'Medicare Part B + United Healthcare Supplement', policyNumber: 'MED-994102-H', groupNumber: 'GRP-1044', copay: 15.00 },
      allergies: [
        { allergen: 'Aspirin / NSAIDs', reaction: 'Gastric hemorrhage / Bronchospasm', severity: 'SEVERE' }
      ],
      chronicConditions: [
        { code: 'I50.22', name: 'Chronic systolic (congestive) heart failure (EF 35%)', onsetDate: '2021-02-14' },
        { code: 'I48.0', name: 'Paroxysmal atrial fibrillation', onsetDate: '2020-06-18' },
        { code: 'N18.30', name: 'Chronic kidney disease, stage 3', onsetDate: '2022-09-01' }
      ],
      currentMedications: [
        { drug: 'Carvedilol', dose: '12.5mg', frequency: 'Twice daily PO', startDate: '2021-03-01' },
        { drug: 'Furosemide', dose: '40mg', frequency: 'Every morning PO', startDate: '2021-02-20' },
        { drug: 'Apixaban', dose: '5mg', frequency: 'Twice daily PO', startDate: '2020-07-01' },
        { drug: 'Spironolactone', dose: '25mg', frequency: 'Once daily PO', startDate: '2021-04-10' }
      ],
      vitalsHistory: [
        { timestamp: '2026-08-25T14:20:00Z', bpSys: 118, bpDia: 72, hr: 68, rr: 18, tempC: 36.7, spo2: 96, bmi: 26.2, weightKg: 82.0, heightCm: 177 }
      ],
      careTeam: { pcpId: 'usr-001', pcpName: 'Dr. Evelyn Smith, MD' },
      status: 'ACTIVE'
    },
    {
      id: 'pat-003',
      mrn: 'MRN-100494',
      firstName: 'Aaliyah',
      lastName: 'Mansour',
      dob: '1988-07-22',
      gender: 'Female',
      bloodGroup: 'B+',
      ssnMasked: '***-**-3391',
      phone: '+1 (555) 734-9182',
      email: 'aaliyah.m@example.org',
      address: { street: '350 Michigan Ave Apt 14B', city: 'Chicago', state: 'IL', postalCode: '60601' },
      emergencyContact: { name: 'Tariq Mansour (Brother)', phone: '+1 (555) 734-9183', relation: 'Sibling' },
      insurance: { payerName: 'Aetna Open Choice PPO', policyNumber: 'AET-7710294-M', groupNumber: 'GRP-5510', copay: 30.00 },
      allergies: [
        { allergen: 'Latex', reaction: 'Contact dermatitis and urticaria', severity: 'MODERATE' },
        { allergen: 'Peanuts', reaction: 'Severe anaphylaxis', severity: 'SEVERE' }
      ],
      chronicConditions: [
        { code: 'J45.909', name: 'Unspecified asthma, uncomplicated', onsetDate: '2005-04-10' },
        { code: 'G43.909', name: 'Migraine, unspecified, not intractable', onsetDate: '2014-09-12' }
      ],
      currentMedications: [
        { drug: 'Budesonide/Formoterol', dose: '160/4.5mcg', frequency: '2 puffs twice daily inhalation', startDate: '2023-01-10' },
        { drug: 'Albuterol HFA', dose: '90mcg', frequency: '1-2 puffs q4-6h PRN bronchospasm', startDate: '2010-05-15' },
        { drug: 'Sumatriptan', dose: '50mg', frequency: '1 tab PO at migraine onset PRN', startDate: '2015-02-01' }
      ],
      vitalsHistory: [
        { timestamp: '2026-08-28T11:00:00Z', bpSys: 112, bpDia: 70, hr: 74, rr: 15, tempC: 36.6, spo2: 99, bmi: 22.1, weightKg: 58.0, heightCm: 162 }
      ],
      careTeam: { pcpId: 'usr-002', pcpName: 'Dr. Marcus Chen, MD' },
      status: 'ACTIVE'
    },
    {
      id: 'pat-004',
      mrn: 'MRN-100495',
      firstName: 'Robert',
      lastName: 'Sterling',
      dob: '1970-03-14',
      gender: 'Male',
      bloodGroup: 'AB-',
      ssnMasked: '***-**-7712',
      phone: '+1 (555) 645-8291',
      email: 'robert.sterling@example.org',
      address: { street: '512 Lakeview Blvd', city: 'Evanston', state: 'IL', postalCode: '60201' },
      emergencyContact: { name: 'Claire Sterling', phone: '+1 (555) 645-8292', relation: 'Spouse' },
      insurance: { payerName: 'Cigna Health and Life', policyNumber: 'CIG-99104-S', groupNumber: 'GRP-2290', copay: 20.00 },
      allergies: [],
      chronicConditions: [
        { code: 'K21.9', name: 'Gastro-esophageal reflux disease without esophagitis', onsetDate: '2019-01-15' },
        { code: 'E78.5', name: 'Hyperlipidemia', onsetDate: '2021-05-20' }
      ],
      currentMedications: [
        { drug: 'Omeprazole', dose: '20mg', frequency: 'Once daily PO before breakfast', startDate: '2019-02-01' },
        { drug: 'Rosuvastatin', dose: '10mg', frequency: 'Once daily PO at bedtime', startDate: '2021-06-01' }
      ],
      vitalsHistory: [
        { timestamp: '2026-08-27T15:45:00Z', bpSys: 126, bpDia: 78, hr: 70, rr: 16, tempC: 36.7, spo2: 98, bmi: 25.8, weightKg: 81.5, heightCm: 178 }
      ],
      careTeam: { pcpId: 'usr-003', pcpName: 'Dr. Sofia Rodriguez, MD' },
      status: 'ACTIVE'
    },
    {
      id: 'pat-005',
      mrn: 'MRN-100496',
      firstName: 'Maria',
      lastName: 'Guerrero',
      dob: '1948-12-05',
      gender: 'Female',
      bloodGroup: 'O-',
      ssnMasked: '***-**-1928',
      phone: '+1 (555) 556-9201',
      email: 'maria.guerrero@example.org',
      address: { street: '890 S Racine Ave', city: 'Chicago', state: 'IL', postalCode: '60608' },
      emergencyContact: { name: 'Carlos Guerrero (Son)', phone: '+1 (555) 556-9202', relation: 'Child' },
      insurance: { payerName: 'Medicare Complete Humana Choice', policyNumber: 'HUM-449102-G', groupNumber: 'GRP-3301', copay: 10.00 },
      allergies: [
        { allergen: 'Codeine', reaction: 'Severe nausea, vomiting, dizziness', severity: 'MODERATE' }
      ],
      chronicConditions: [
        { code: 'M17.11', name: 'Primary osteoarthritis, right knee', onsetDate: '2016-04-12' },
        { code: 'M81.0', name: 'Age-related osteoporosis without current fracture', onsetDate: '2017-09-22' },
        { code: 'I10', name: 'Essential hypertension', onsetDate: '2010-03-10' }
      ],
      currentMedications: [
        { drug: 'Amlodipine', dose: '5mg', frequency: 'Once daily PO', startDate: '2012-04-01' },
        { drug: 'Alendronate Sodium', dose: '70mg', frequency: 'Once weekly PO with water on empty stomach', startDate: '2017-10-01' },
        { drug: 'Acetaminophen ER', dose: '650mg', frequency: 'Twice daily PRN joint pain', startDate: '2016-05-01' }
      ],
      vitalsHistory: [
        { timestamp: '2026-08-26T09:10:00Z', bpSys: 130, bpDia: 80, hr: 66, rr: 16, tempC: 36.6, spo2: 97, bmi: 24.1, weightKg: 60.0, heightCm: 158 }
      ],
      careTeam: { pcpId: 'usr-001', pcpName: 'Dr. Evelyn Smith, MD' },
      status: 'ACTIVE'
    }
  ];

  // Dynamically generate 20 more realistic clinical patient profiles
  const firstNames = ["Lucas", "Chloe", "Benjamin", "Hannah", "Gabriel", "Victoria", "Samuel", "Grace", "Oliver", "Zoe", "Daniel", "Maya", "Henry", "Emily", "Alexander", "Samantha", "William", "Natalie", "Joseph", "Ava"];
  const lastNames = ["Kowalski", "Patel", "Washington", "Dubois", "Nakamura", "O'Connor", "Santos", "Novak", "Fischer", "Rossi", "Kim", "Larsson", "Bauer", "Popov", "Al-Mansoor", "Goldman", "Murphy", "Castillo", "Lindqvist", "Zhang"];
  
  for (let i = 0; i < 20; i++) {
    const fn = firstNames[i];
    const ln = lastNames[i];
    const patId = `pat-${(i + 6).toString().padStart(3, '0')}`;
    const mrn = `MRN-1005${(i + 6).toString().padStart(2, '0')}`;
    const birthYear = 1950 + (i * 2) % 50;
    const gender = i % 2 === 0 ? "Male" : "Female";
    const bg = ["A+", "O+", "B+", "AB+", "A-", "O-"][i % 6];
    
    patientProfiles.push({
      id: patId,
      mrn: mrn,
      firstName: fn,
      lastName: ln,
      dob: `${birthYear}-0${(i % 9) + 1}-15`,
      gender: gender,
      bloodGroup: bg,
      ssnMasked: `***-**-${4000 + i}`,
      phone: `+1 (555) ${300 + i}-${1000 + i}`,
      email: `${fn.toLowerCase()}.${ln.toLowerCase()}@example.org`,
      address: { street: `${100 + i * 25} Health Parkway`, city: 'Springfield', state: 'IL', postalCode: '62701' },
      emergencyContact: { name: `Emergency Contact for ${fn}`, phone: `+1 (555) 999-${1000 + i}`, relation: 'Family' },
      insurance: { payerName: i % 2 === 0 ? 'Blue Cross Blue Shield' : 'UnitedHealthcare Choice', policyNumber: `POL-${700000 + i}`, groupNumber: 'GRP-100', copay: 25.00 },
      allergies: i % 3 === 0 ? [{ allergen: 'Sulfa Drugs', reaction: 'Mild Rash', severity: 'MILD' }] : [],
      chronicConditions: [
        { code: 'I10', name: 'Essential (primary) hypertension', onsetDate: '2020-01-10' }
      ],
      currentMedications: [
        { drug: 'Lisinopril', dose: '10mg', frequency: 'Once daily PO', startDate: '2020-02-01' }
      ],
      vitalsHistory: [
        { timestamp: '2026-08-25T10:00:00Z', bpSys: 124, bpDia: 78, hr: 72, rr: 16, tempC: 36.8, spo2: 98, bmi: 24.5, weightKg: 72.0, heightCm: 171 }
      ],
      careTeam: { pcpId: 'usr-001', pcpName: 'Dr. Evelyn Smith, MD' },
      status: 'ACTIVE'
    });
  }

  for (const pat of patientProfiles) {
    store.insert('patients', pat);
  }

  // 3. Clinical Encounters & SOAP Notes
  const encounters = [
    {
      id: 'enc-001',
      patientId: 'pat-001',
      patientName: 'Eleanor Vance',
      mrn: 'MRN-100492',
      providerId: 'usr-001',
      providerName: 'Dr. Evelyn Smith, MD',
      encounterType: 'OUTPATIENT_VISIT',
      status: 'COMPLETED',
      date: '2026-08-20T10:00:00Z',
      department: 'Cardiology Clinic',
      chiefComplaint: 'Follow-up for hypertension and glycemic monitoring. Mild occasional ankle edema.',
      soapNote: {
        subjective: 'Patient reports taking Lisinopril 20mg and Metformin 1000mg BID regularly. Denies chest pain, palpitations, or orthopnea. Notes slight bilateral ankle puffiness towards end of day after standing.',
        objective: 'Vitals: BP 138/84 mmHg, HR 72 bpm regular, RR 16/min, Temp 36.8 C, SpO2 98% on room air. Lungs clear to auscultation bilaterally. Heart: Regular rate and rhythm, normal S1/S2, no murmurs/gallops. Extremities: Trace bilateral lower extremity non-pitting edema.',
        assessment: '1. Essential hypertension (ICD-10 I10) - Moderately controlled on current ACE inhibitor.\n2. Type 2 Diabetes Mellitus (ICD-10 E11.9) - Stable; awaiting latest HbA1c lab result.\n3. Mild peripheral fluid retention, benign.',
        plan: '1. Continue Lisinopril 20mg PO daily and Metformin 1000mg PO BID.\n2. Order Comprehensive Metabolic Panel (CMP) and HbA1c.\n3. Advise low sodium diet (< 2000mg/day) and 30 minutes daily walking.\n4. Return to clinic in 3 months.'
      },
      diagnoses: [
        { code: 'I10', description: 'Essential (primary) hypertension', isPrimary: true },
        { code: 'E11.9', description: 'Type 2 diabetes mellitus without complications', isPrimary: false }
      ],
      billingCodes: [
        { code: '99214', fee: 170.00, units: 1 }
      ]
    },
    {
      id: 'enc-002',
      patientId: 'pat-002',
      patientName: 'James Holloway',
      mrn: 'MRN-100493',
      providerId: 'usr-001',
      providerName: 'Dr. Evelyn Smith, MD',
      encounterType: 'OUTPATIENT_VISIT',
      status: 'COMPLETED',
      date: '2026-08-25T14:00:00Z',
      department: 'Cardiovascular Institute',
      chiefComplaint: 'Heart failure and atrial fibrillation management. Weight stable.',
      soapNote: {
        subjective: 'Patient feels well, walking 20 minutes daily. Denies paroxysmal nocturnal dyspnea or acute weight gain. Adhering to fluid restriction (< 2L/day) and taking Apixaban without bleeding issues.',
        objective: 'Vitals: BP 118/72 mmHg, HR 68 bpm (irregularly irregular baseline rhythm), RR 18/min, SpO2 96%. JVP normal. Lungs clear at bases. Abdomen soft, non-tender. Trace ankle edema.',
        assessment: '1. Chronic systolic heart failure, NYHA Class II (ICD-10 I50.22) - Euvolemic, stable on Carvedilol and Furosemide.\n2. Chronic atrial fibrillation on oral anticoagulation (ICD-10 I48.2).\n3. Stage 3 CKD (ICD-10 N18.30).',
        plan: '1. Maintain Carvedilol 12.5mg BID, Furosemide 40mg daily, Apixaban 5mg BID, Spironolactone 25mg daily.\n2. Check serum electrolytes and creatinine next week.\n3. Follow up in 6 weeks.'
      },
      diagnoses: [
        { code: 'I50.22', description: 'Chronic systolic (congestive) heart failure', isPrimary: true },
        { code: 'I48.2', description: 'Chronic atrial fibrillation', isPrimary: false },
        { code: 'N18.30', description: 'Chronic kidney disease, stage 3', isPrimary: false }
      ],
      billingCodes: [
        { code: '99215', fee: 235.00, units: 1 },
        { code: '93000', fee: 65.00, units: 1 }
      ]
    },
    {
      id: 'enc-003',
      patientId: 'pat-003',
      patientName: 'Aaliyah Mansour',
      mrn: 'MRN-100494',
      providerId: 'usr-002',
      providerName: 'Dr. Marcus Chen, MD',
      encounterType: 'TELEHEALTH_CONSULTATION',
      status: 'COMPLETED',
      date: '2026-08-28T11:00:00Z',
      department: 'Telehealth Pulmonary Center',
      chiefComplaint: 'Asthma review and prescription renewal via video consultation.',
      soapNote: {
        subjective: 'Patient reports well controlled asthma. Uses Symbicort twice daily with zero nighttime awakenings. Albuterol rescue inhaler used only once in past month prior to vigorous cycling.',
        objective: 'Video exam: Conversing in full sentences without respiratory effort or audible wheezing. Resting comfortably at home. Patient reports home pulse oximeter SpO2 99%.',
        assessment: 'Mild persistent asthma, well-controlled on combination ICS/LABA therapy (ICD-10 J45.909).',
        plan: '1. Refill Symbicort 160/4.5mcg (1 inhaler, 3 refills) and Albuterol HFA.\n2. Review Asthma Action Plan.\n3. Follow-up in 6 months or sooner if exacerbation occurs.'
      },
      diagnoses: [
        { code: 'J45.909', description: 'Unspecified asthma, uncomplicated', isPrimary: true }
      ],
      billingCodes: [
        { code: '99442', fee: 95.00, units: 1 }
      ]
    }
  ];

  for (const enc of encounters) {
    store.insert('encounters', enc);
  }

  // 4. Electronic Prescriptions (e-Rx)
  const prescriptions = [
    {
      id: 'rx-001',
      patientId: 'pat-001',
      patientName: 'Eleanor Vance',
      providerId: 'usr-001',
      providerName: 'Dr. Evelyn Smith, MD',
      drugId: 'drg-001',
      drugName: 'Lisinopril',
      strength: '20mg',
      form: 'Tablet',
      sig: 'Take 1 tablet by mouth once daily every morning',
      quantity: 90,
      refillsRemaining: 3,
      prescribedDate: '2026-08-20',
      status: 'ACTIVE',
      pharmacyNote: 'Dispense 90-day supply per insurance benefit.'
    },
    {
      id: 'rx-002',
      patientId: 'pat-001',
      patientName: 'Eleanor Vance',
      providerId: 'usr-001',
      providerName: 'Dr. Evelyn Smith, MD',
      drugId: 'drg-002',
      drugName: 'Metformin Hydrochloride',
      strength: '1000mg',
      form: 'Tablet',
      sig: 'Take 1 tablet by mouth twice daily with morning and evening meals',
      quantity: 180,
      refillsRemaining: 3,
      prescribedDate: '2026-08-20',
      status: 'ACTIVE',
      pharmacyNote: 'Take with food to minimize gastrointestinal upset.'
    },
    {
      id: 'rx-003',
      patientId: 'pat-002',
      patientName: 'James Holloway',
      providerId: 'usr-001',
      providerName: 'Dr. Evelyn Smith, MD',
      drugId: 'drg-010',
      drugName: 'Furosemide',
      strength: '40mg',
      form: 'Tablet',
      sig: 'Take 1 tablet by mouth every morning upon waking',
      quantity: 90,
      refillsRemaining: 2,
      prescribedDate: '2026-08-25',
      status: 'ACTIVE',
      pharmacyNote: 'Monitor weight daily.'
    },
    {
      id: 'rx-004',
      patientId: 'pat-003',
      patientName: 'Aaliyah Mansour',
      providerId: 'usr-002',
      providerName: 'Dr. Marcus Chen, MD',
      drugId: 'drg-027',
      drugName: 'Budesonide/Formoterol (Symbicort)',
      strength: '160/4.5mcg',
      form: 'Inhaler',
      sig: 'Inhale 2 puffs by mouth twice daily morning and night. Rinse mouth with water after inhalation.',
      quantity: 1,
      refillsRemaining: 3,
      prescribedDate: '2026-08-28',
      status: 'ACTIVE',
      pharmacyNote: 'Rinse mouth after each dose.'
    }
  ];

  for (const rx of prescriptions) {
    store.insert('prescriptions', rx);
  }

  // 5. Diagnostic Lab Orders & Results
  const labOrders = [
    {
      id: 'lab-001',
      patientId: 'pat-001',
      patientName: 'Eleanor Vance',
      providerId: 'usr-001',
      providerName: 'Dr. Evelyn Smith, MD',
      orderDate: '2026-08-20T10:30:00Z',
      panelName: 'Comprehensive Metabolic Panel (CMP)',
      panelCode: 'CMP-001',
      status: 'FINALIZED',
      priority: 'ROUTINE',
      results: [
        { test: 'Sodium', value: 140, unit: 'mEq/L', range: '135-145', flag: 'NORMAL' },
        { test: 'Potassium', value: 4.4, unit: 'mEq/L', range: '3.5-5.0', flag: 'NORMAL' },
        { test: 'Chloride', value: 102, unit: 'mEq/L', range: '96-106', flag: 'NORMAL' },
        { test: 'CO2 (Bicarbonate)', value: 25, unit: 'mEq/L', range: '22-29', flag: 'NORMAL' },
        { test: 'BUN', value: 16, unit: 'mg/dL', range: '7-20', flag: 'NORMAL' },
        { test: 'Serum Creatinine', value: 0.95, unit: 'mg/dL', range: '0.6-1.2', flag: 'NORMAL' },
        { test: 'eGFR', value: 78, unit: 'mL/min/1.73m2', range: '>60', flag: 'NORMAL' },
        { test: 'Fasting Glucose', value: 118, unit: 'mg/dL', range: '70-99', flag: 'HIGH' },
        { test: 'Calcium', value: 9.4, unit: 'mg/dL', range: '8.5-10.2', flag: 'NORMAL' },
        { test: 'Total Bilirubin', value: 0.7, unit: 'mg/dL', range: '0.2-1.2', flag: 'NORMAL' },
        { test: 'ALT', value: 24, unit: 'U/L', range: '7-56', flag: 'NORMAL' },
        { test: 'AST', value: 21, unit: 'U/L', range: '10-40', flag: 'NORMAL' }
      ],
      pathologistNotes: 'Glucose mildly elevated consistent with known Type 2 Diabetes. Renal indices and electrolytes are within normal limits.'
    },
    {
      id: 'lab-002',
      patientId: 'pat-001',
      patientName: 'Eleanor Vance',
      providerId: 'usr-001',
      providerName: 'Dr. Evelyn Smith, MD',
      orderDate: '2026-08-20T10:30:00Z',
      panelName: 'Hemoglobin A1c Glycated Protein Assay',
      panelCode: 'ENDO-001',
      status: 'FINALIZED',
      priority: 'ROUTINE',
      results: [
        { test: 'Hemoglobin A1c', value: 6.8, unit: '%', range: '<5.7 (Normal), 5.7-6.4 (Prediabetes), >=6.5 (Diabetes)', flag: 'HIGH' }
      ],
      pathologistNotes: 'A1c reflects adequate glycemic control (target < 7.0% met).'
    },
    {
      id: 'lab-003',
      patientId: 'pat-002',
      patientName: 'James Holloway',
      providerId: 'usr-001',
      providerName: 'Dr. Evelyn Smith, MD',
      orderDate: '2026-08-25T14:30:00Z',
      panelName: 'Cardiac Biomarkers & BNP',
      panelCode: 'CARD-001',
      status: 'FINALIZED',
      priority: 'URGENT',
      results: [
        { test: 'BNP (B-Type Natriuretic Peptide)', value: 145, unit: 'pg/mL', range: '<100', flag: 'HIGH' },
        { test: 'High-Sensitivity Troponin I', value: 8, unit: 'ng/L', range: '<14', flag: 'NORMAL' },
        { test: 'Potassium', value: 4.2, unit: 'mEq/L', range: '3.5-5.0', flag: 'NORMAL' }
      ],
      pathologistNotes: 'BNP baseline compensated for NYHA II heart failure. Troponin negative for acute myocardial injury.'
    }
  ];

  for (const lab of labOrders) {
    store.insert('labOrders', lab);
  }

  // 6. Appointments & Clinical Schedule
  const appointments = [
    {
      id: 'apt-001',
      patientId: 'pat-001',
      patientName: 'Eleanor Vance',
      doctorId: 'usr-001',
      doctorName: 'Dr. Evelyn Smith, MD',
      appointmentDate: '2026-09-15',
      timeSlot: '10:00 AM - 10:30 AM',
      type: 'IN_PERSON_CLINIC',
      specialty: 'Cardiology',
      reason: '3-Month Hypertension and Diabetic Care Checkup',
      status: 'CONFIRMED',
      room: 'Exam Room 3B'
    },
    {
      id: 'apt-002',
      patientId: 'pat-003',
      patientName: 'Aaliyah Mansour',
      doctorId: 'usr-002',
      doctorName: 'Dr. Marcus Chen, MD',
      appointmentDate: '2026-09-18',
      timeSlot: '02:00 PM - 02:30 PM',
      type: 'TELEHEALTH_VIDEO',
      specialty: 'Pulmonology',
      reason: 'Seasonal Asthma Management Check',
      status: 'CONFIRMED',
      room: 'Virtual Room #104'
    },
    {
      id: 'apt-003',
      patientId: 'pat-004',
      patientName: 'Robert Sterling',
      doctorId: 'usr-003',
      doctorName: 'Dr. Sofia Rodriguez, MD',
      appointmentDate: '2026-09-10',
      timeSlot: '11:15 AM - 11:45 AM',
      type: 'IN_PERSON_CLINIC',
      specialty: 'Internal Medicine',
      reason: 'Annual Wellness Examination and Blood Pressure Check',
      status: 'CONFIRMED',
      room: 'Exam Room 1A'
    }
  ];

  for (const apt of appointments) {
    store.insert('appointments', apt);
  }

  // 7. Medical Billing Claims & Invoices
  const claims = [
    {
      id: 'clm-001',
      patientId: 'pat-001',
      patientName: 'Eleanor Vance',
      payerName: 'Blue Cross Blue Shield Platinum',
      policyNumber: 'BCBS-8842190-A',
      encounterId: 'enc-001',
      serviceDate: '2026-08-20',
      totalBilled: 218.00,
      patientCopay: 25.00,
      insuranceExpected: 193.00,
      status: 'PAID_IN_FULL',
      lineItems: [
        { cpt: '99214', description: 'Established Patient Moderate Complexity Visit', amount: 170.00 },
        { cpt: '80053', description: 'Comprehensive Metabolic Panel', amount: 48.00 }
      ],
      adjudicationDate: '2026-08-23',
      reimbursementAmount: 185.50
    },
    {
      id: 'clm-002',
      patientId: 'pat-002',
      patientName: 'James Holloway',
      payerName: 'Medicare Part B',
      policyNumber: 'MED-994102-H',
      encounterId: 'enc-002',
      serviceDate: '2026-08-25',
      totalBilled: 300.00,
      patientCopay: 15.00,
      insuranceExpected: 285.00,
      status: 'CLAIM_SUBMITTED',
      lineItems: [
        { cpt: '99215', description: 'Established Patient High Complexity Visit', amount: 235.00 },
        { cpt: '93000', description: '12-Lead Electrocardiogram', amount: 65.00 }
      ]
    }
  ];

  for (const clm of claims) {
    store.insert('claims', clm);
  }

  // 8. Pharmacy Inventory & Stock
  const inventoryItems = [
    { id: 'inv-001', drugId: 'drg-001', name: 'Lisinopril 20mg Tablets', batchNumber: 'LOT-99210-A', manufacturer: 'Apotex Pharmaceuticals', stockQuantity: 2450, unitCost: 0.12, reorderLevel: 500, expiryDate: '2028-06-30' },
    { id: 'inv-002', drugId: 'drg-002', name: 'Metformin 1000mg Tablets', batchNumber: 'LOT-88314-B', manufacturer: 'Teva Pharmaceuticals', stockQuantity: 3800, unitCost: 0.08, reorderLevel: 800, expiryDate: '2028-11-30' },
    { id: 'inv-003', drugId: 'drg-003', name: 'Atorvastatin 40mg Tablets', batchNumber: 'LOT-77412-C', manufacturer: 'Pfizer Generics', stockQuantity: 1950, unitCost: 0.18, reorderLevel: 400, expiryDate: '2027-12-31' },
    { id: 'inv-004', drugId: 'drg-004', name: 'Warfarin 5mg Tablets', batchNumber: 'LOT-66519-D', manufacturer: 'Bristol Myers Squibb', stockQuantity: 920, unitCost: 0.22, reorderLevel: 250, expiryDate: '2028-03-31' },
    { id: 'inv-005', drugId: 'drg-005', name: 'Amlodipine 5mg Tablets', batchNumber: 'LOT-55102-E', manufacturer: 'Mylan Pharmaceuticals', stockQuantity: 3100, unitCost: 0.09, reorderLevel: 600, expiryDate: '2028-09-30' },
    { id: 'inv-006', drugId: 'drg-006', name: 'Augmentin 875/125mg Tablets', batchNumber: 'LOT-44291-F', manufacturer: 'GSK Healthcare', stockQuantity: 650, unitCost: 0.85, reorderLevel: 200, expiryDate: '2027-08-31' },
    { id: 'inv-007', drugId: 'drg-010', name: 'Furosemide 40mg Tablets', batchNumber: 'LOT-33104-G', manufacturer: 'Sanofi Aventis', stockQuantity: 2200, unitCost: 0.11, reorderLevel: 500, expiryDate: '2028-05-31' },
    { id: 'inv-008', drugId: 'drg-027', name: 'Symbicort 160/4.5mcg Inhalers', batchNumber: 'LOT-22904-H', manufacturer: 'AstraZeneca', stockQuantity: 145, unitCost: 82.00, reorderLevel: 50, expiryDate: '2027-10-31' }
  ];

  for (const item of inventoryItems) {
    store.insert('inventory', item);
  }

  // 9. Initial HIPAA Audit Logs
  const auditLogs = [
    {
      id: 'aud-001',
      action: 'SYSTEM_BOOT',
      userId: 'usr-009',
      userRole: 'SUPER_ADMIN',
      resource: '/server/system',
      statusCode: 200,
      details: 'PulseCare Enterprise Health System engine initialized with zero critical errors.',
      timestamp: new Date().toISOString()
    },
    {
      id: 'aud-002',
      action: 'USER_LOGIN_SUCCESS',
      userId: 'usr-001',
      userRole: 'ATTENDING_PHYSICIAN',
      resource: '/api/auth/login',
      statusCode: 200,
      ipAddress: '192.168.1.105',
      details: 'Physician authenticated successfully.',
      timestamp: new Date(Date.now() - 3600000).toISOString()
    }
  ];

  for (const aud of auditLogs) {
    store.insert('auditLogs', aud);
  }

  store.saveAllSnapshots();
  console.log('[PulseCare Seeder] Clinical database seeding finished successfully.');
}

module.exports = { seedAllData };

if (require.main === module) {
  const { getStorage } = require('./storage');
  seedAllData(getStorage());
}
