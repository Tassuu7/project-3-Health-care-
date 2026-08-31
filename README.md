# PulseCare Enterprise Health & Clinical Intelligence System (CareOS)

> **PulseCare EHR** is a next-generation, production-grade Electronic Health Record (EHR), Clinical Decision Support (CDS), Telehealth Consultation, and Healthcare Information Management Platform.

---

## 🌟 Executive Overview & Domain Breadth

PulseCare provides a unified hospital and outpatient clinical workflow engine designed for healthcare providers, clinical researchers, and health systems.

### Core Clinical Subsystems:
1. **Master Patient Index (MPI) & EHR**: Comprehensive longitudinal patient record with demographics, vitals history, allergy registries, and chronic disease tracking.
2. **Clinical Station & SOAP Documentation**: Interactive physician station with Subjective, Objective, Assessment, and Plan (SOAP) clinical authoring and electronic signature locking.
3. **Clinical Decision Support (CDS) Rules Engine**: Real-time alerting for drug-drug interactions, drug-allergy contraindications, Sepsis qSOFA scores, hypertensive crisis detection, and critical lab values.
4. **Electronic Prescribing (e-Rx)**: Formulary integration, medication sig authoring, refill tracking, and pharmacy dispensing.
5. **Diagnostic Pathology & Lab Information System (LIS)**: Standardized test panels (CMP, CBC, Lipids, Cardiac biomarkers), normal ranges, critical panic thresholds, and result verification.
6. **Appointment Scheduling & Queue Engine**: Multi-specialty outpatient scheduling, time-slot management, and triage status tracking.
7. **Encrypted Telehealth Virtual Examination Room**: Simulated WebRTC signaling, live chat, consultation notes overlay, and video consultation workflow.
8. **Medical Billing & Insurance Claims (RCM)**: ICD-10-CM diagnostic coding, CPT-4 procedure coding, claim scrubbing, copay accounting, and adjudication.
9. **Emergency Triage & Bed Allocation**: Emergency Severity Index (ESI 1 to 5) triage decision matrix, inpatient ward and ICU bed tracking.
10. **HIPAA Security & Audit Logging**: Immutable chronological audit logging of patient record access, authentication events, and data mutations.
11. **HL7 FHIR R4 Interoperability**: FHIR JSON resource generation for patient health records.
12. **Evidence-Based Clinical Calculators**: Validated algorithms including CKD-EPI 2021 eGFR, WHO BMI, qSOFA Sepsis, CHA2DS2-VASc stroke risk, Mean Arterial Pressure (MAP), and Pediatric dosing formulas.

---

## Installation

### Prerequisites:
- Node.js (v18.0.0 or higher)
- Python (v3.8 or higher)
- Git (v2.0 or higher)

### Setup Instructions:
```bash
# 1. Clone or extract the repository archive
git clone https://github.com/Tassuu7/project-3-Health-care-.git
cd project-3-Health-care-

# 2. Install Node.js dependencies
npm install

# 3. Setup Python virtual environment (optional for analytics & LOC verification)
python -m venv venv
# On Windows:
.\venv\Scripts\activate
# On Unix/macOS:
source venv/bin/activate
pip install -r requirements.txt
```

---

## Dependencies

- **Node.js**: Express (`^4.19.2`), Cors (`^2.8.5`)
- **Python**: pytest (`>=8.0.0`), requests (`>=2.31.0`), tabulate (`>=0.9.0`)
- **Lockfiles**: `package-lock.json` included in repository root

---

## Build

PulseCare is architected with zero build-step overhead for immediate native runtime execution:

```bash
# Run build validation
npm run build
```

---

## Run

### Launching the Application:
```bash
# Start the HTTP server
npm start
```
Or directly with Node:
```bash
node server.js
```
The server will bind to port **3050** (or `PORT` environment variable if specified) and display:
```
================================================================
 PULSECARE ENTERPRISE CLINICAL HEALTH PLATFORM
================================================================
 Server active at: http://localhost:3050
 Environment    : development
 Clinical EHR   : http://localhost:3050/#ehr
 Telehealth Room: http://localhost:3050/#telehealth
 Lab & Pathology: http://localhost:3050/#labs
 Medical Billing: http://localhost:3050/#billing
 Health Status  : http://localhost:3050/api/health
================================================================
```

---

## Usage

Access the live clinical portal in any modern web browser at:
- **Clinical Dashboard**: `http://localhost:3050/#dashboard`
- **Master Patient Directory**: `http://localhost:3050/#patients`
- **Physician Clinical Station (EHR)**: `http://localhost:3050/#ehr`
- **Telehealth Video Room**: `http://localhost:3050/#telehealth`
- **e-Prescriptions**: `http://localhost:3050/#prescriptions`
- **Diagnostic Labs & Pathology**: `http://localhost:3050/#labs`
- **Medical Billing & Claims**: `http://localhost:3050/#billing`
- **Pharmacy Formulary Inventory**: `http://localhost:3050/#pharmacy`
- **Emergency Triage & Bed Census**: `http://localhost:3050/#triage`
- **HIPAA Audit Log**: `http://localhost:3050/#audit`
- **System Settings**: `http://localhost:3050/#settings`

### Default Clinician Logins:
- **Attending Physician**: `dr.smith` / `PulseCare2026!`
- **Pulmonologist**: `dr.chen` / `PulseCare2026!`
- **Emergency Nurse**: `nurse.sarah` / `PulseCare2026!`
- **Pharmacist**: `pharm.david` / `PulseCare2026!`
- **Super Administrator**: `admin.system` / `PulseCare2026!`

---

## Test

### Automated Clinical Verification:
```bash
# Run all unit and integration test suites
npm test
```
Or with Node directly:
```bash
node tests/run-tests.js
```

### Production Lines of Code (LOC) Audit:
```bash
npm run measure
```
Or with Python:
```bash
python measure.py
```

---

## Architecture & Directory Layout

```
project-3/
├── server.js                          # Core HTTP server and router dispatcher
├── package.json                       # Project configuration and scripts
├── package-lock.json                  # Deterministic dependency lockfile
├── requirements.txt                   # Python dependencies
├── .gitignore                         # Security rules excluding secrets/logs
├── example.env                        # Safe environment configuration template
├── measure.py                         # Production LOC measurement script
├── README.md                          # Technical documentation and user guide
├── server/
│   ├── clinical/                      # 25 Specialty Clinical Decision Engines
│   ├── config/                        # Roles, constants, and server settings
│   ├── database/                      # In-memory & snapshot store, migrations, seeder
│   ├── dictionaries/                  # Pure JS ICD-10, CPT, formulary, lab reference
│   ├── models/                        # Domain models with validation
│   ├── services/                      # Clinical business logic & CDS engine
│   ├── controllers/                   # REST API request handlers
│   ├── routes/                        # Express API route dispatcher
│   ├── middleware/                    # Auth, RBAC, HIPAA audit logging, validation
│   └── utils/                         # Evidence-based calculators and cryptos
├── public/                            # Web portal Single Page Application (SPA)
│   ├── index.html                     # Application entry point
│   ├── css/                           # Modular clinical stylesheets
│   └── js/                            # Modular frontend views, components, and router
└── tests/                             # Automated test suites
    ├── run-tests.js                   # Test suite orchestrator
    ├── unit/                          # Unit tests for services and algorithms
    └── integration/                   # API endpoint integration tests
```

---

## 🔒 Security & HIPAA Compliance
- **No Sensitive Data**: Zero hardcoded secrets, private keys, or API credentials.
- **Role-Based Access Control (RBAC)**: Granular permission matrix across 7 healthcare roles.
- **Audit Logging**: Every patient access event is recorded with timestamp, user ID, role, and action.
