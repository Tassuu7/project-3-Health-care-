/**
 * Master REST API Router Dispatcher
 * Dispatches incoming HTTP requests to corresponding clinical controllers and methods.
 */

const { authenticate } = require('../middleware/authMiddleware');
const AuthController = require('../controllers/AuthController');
const PatientController = require('../controllers/PatientController');
const EncounterController = require('../controllers/EncounterController');
const CDSController = require('../controllers/CDSController');
const PrescriptionController = require('../controllers/PrescriptionController');
const LabController = require('../controllers/LabController');
const AppointmentController = require('../controllers/AppointmentController');
const TelehealthController = require('../controllers/TelehealthController');
const BillingController = require('../controllers/BillingController');
const PharmacyController = require('../controllers/PharmacyController');
const TriageBedController = require('../controllers/TriageBedController');
const AnalyticsController = require('../controllers/AnalyticsController');
const AuditController = require('../controllers/AuditController');
const DictionaryController = require('../controllers/DictionaryController');

async function dispatch(req, res) {
  const method = req.method;
  const path = req.pathname;

  // Authenticate user context for all endpoints
  authenticate(req, res);

  // Health check endpoint
  if (path === '/api/health' && method === 'GET') {
    return res.json({
      status: 'UP',
      service: 'PulseCare Enterprise Clinical Engine',
      version: '2.4.0',
      timestamp: new Date().toISOString()
    });
  }

  // --- Auth Routes ---
  if (path === '/api/auth/login' && method === 'POST') return AuthController.login(req, res);
  if (path === '/api/auth/me' && method === 'GET') return AuthController.getMe(req, res);

  // --- Patient Routes ---
  if (path === '/api/patients' && method === 'GET') return PatientController.list(req, res);
  if (path === '/api/patients' && method === 'POST') return PatientController.create(req, res);

  let match = path.match(/^\/api\/patients\/([^\/]+)$/);
  if (match) {
    const id = match[1];
    if (method === 'GET') return PatientController.getById(req, res, id);
    if (method === 'PUT' || method === 'PATCH') return PatientController.update(req, res, id);
  }

  match = path.match(/^\/api\/patients\/([^\/]+)\/vitals$/);
  if (match && method === 'POST') {
    return PatientController.addVitals(req, res, match[1]);
  }

  match = path.match(/^\/api\/patients\/([^\/]+)\/cds$/);
  if (match && method === 'GET') {
    return CDSController.evaluate(req, res, match[1]);
  }

  // --- Encounter Routes ---
  if (path === '/api/encounters' && method === 'GET') return EncounterController.list(req, res);
  if (path === '/api/encounters' && method === 'POST') return EncounterController.create(req, res);

  match = path.match(/^\/api\/encounters\/([^\/]+)$/);
  if (match && method === 'GET') return EncounterController.getById(req, res, match[1]);

  match = path.match(/^\/api\/encounters\/([^\/]+)\/soap$/);
  if (match && method === 'PUT') return EncounterController.updateSOAP(req, res, match[1]);

  match = path.match(/^\/api\/encounters\/([^\/]+)\/sign$/);
  if (match && method === 'POST') return EncounterController.sign(req, res, match[1]);

  // --- Prescription Routes ---
  if (path === '/api/prescriptions' && method === 'GET') return PrescriptionController.list(req, res);
  if (path === '/api/prescriptions' && method === 'POST') return PrescriptionController.create(req, res);

  match = path.match(/^\/api\/prescriptions\/([^\/]+)\/dispense$/);
  if (match && method === 'POST') return PrescriptionController.dispense(req, res, match[1]);

  // --- Lab Routes ---
  if (path === '/api/labs' && method === 'GET') return LabController.list(req, res);
  if (path === '/api/labs' && method === 'POST') return LabController.create(req, res);

  match = path.match(/^\/api\/labs\/([^\/]+)\/results$/);
  if (match && method === 'POST') return LabController.enterResults(req, res, match[1]);

  // --- Appointment Routes ---
  if (path === '/api/appointments' && method === 'GET') return AppointmentController.list(req, res);
  if (path === '/api/appointments' && method === 'POST') return AppointmentController.create(req, res);

  match = path.match(/^\/api\/appointments\/([^\/]+)\/status$/);
  if (match && method === 'PATCH') return AppointmentController.updateStatus(req, res, match[1]);

  // --- Telehealth Routes ---
  if (path === '/api/telehealth' && method === 'GET') return TelehealthController.list(req, res);
  if (path === '/api/telehealth' && method === 'POST') return TelehealthController.create(req, res);

  match = path.match(/^\/api\/telehealth\/([^\/]+)\/join$/);
  if (match && method === 'POST') return TelehealthController.join(req, res, match[1]);

  match = path.match(/^\/api\/telehealth\/([^\/]+)\/chat$/);
  if (match && method === 'POST') return TelehealthController.chat(req, res, match[1]);

  match = path.match(/^\/api\/telehealth\/([^\/]+)\/end$/);
  if (match && method === 'POST') return TelehealthController.end(req, res, match[1]);

  // --- Billing Routes ---
  if (path === '/api/billing' && method === 'GET') return BillingController.list(req, res);
  if (path === '/api/billing' && method === 'POST') return BillingController.create(req, res);

  match = path.match(/^\/api\/billing\/([^\/]+)\/adjudicate$/);
  if (match && method === 'POST') return BillingController.adjudicate(req, res, match[1]);

  // --- Pharmacy Routes ---
  if (path === '/api/pharmacy' && method === 'GET') return PharmacyController.list(req, res);

  match = path.match(/^\/api\/pharmacy\/([^\/]+)\/stock$/);
  if (match && method === 'PATCH') return PharmacyController.updateStock(req, res, match[1]);

  // --- Triage & Bed Routes ---
  if (path === '/api/triage' && method === 'GET') return TriageBedController.getQueue(req, res);
  if (path === '/api/triage' && method === 'POST') return TriageBedController.createTriage(req, res);
  if (path === '/api/beds' && method === 'GET') return TriageBedController.getBeds(req, res);

  match = path.match(/^\/api\/beds\/([^\/]+)\/allocate$/);
  if (match && method === 'POST') return TriageBedController.allocateBed(req, res, match[1]);

  // --- Analytics & Audit Routes ---
  if (path === '/api/analytics/dashboard' && method === 'GET') return AnalyticsController.getDashboard(req, res);
  if (path === '/api/audit' && method === 'GET') return AuditController.list(req, res);

  // --- Dictionaries ---
  if (path === '/api/dictionaries/icd10' && method === 'GET') return DictionaryController.getICD10(req, res);
  if (path === '/api/dictionaries/cpt' && method === 'GET') return DictionaryController.getCPT(req, res);
  if (path === '/api/dictionaries/drugs' && method === 'GET') return DictionaryController.getDrugs(req, res);
  if (path === '/api/dictionaries/labs' && method === 'GET') return DictionaryController.getLabReference(req, res);

  return false;
}

module.exports = { dispatch };
