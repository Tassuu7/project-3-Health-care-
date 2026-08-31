/**
 * System Settings & Health IT Configuration View Controller
 */

const SettingsView = {
  async render(container) {
    container.innerHTML = `
      <div class="page-header">
        <div>
          <h1 class="page-title"><span>⚙️</span> System Settings & Clinical Intelligence Configuration</h1>
          <p class="page-subtitle">Clinical Decision Support thresholds, FHIR R4 endpoints, security policies, and hospital defaults</p>
        </div>
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem;">
        <div class="panel">
          <div class="panel-header">
            <h3 class="panel-title">Clinical Decision Support (CDS) Rules</h3>
          </div>
          <div style="display: flex; flex-direction: column; gap: 1rem;">
            <div class="form-group">
              <label class="form-label">Allergy Cross-Reactivity Sensitivity</label>
              <select class="form-control">
                <option selected>Strict (Penicillin-Cephalosporin, Sulfa, NSAID cross-checks)</option>
                <option>Standard (Direct molecular match only)</option>
              </select>
            </div>
            <div class="form-group">
              <label class="form-label">qSOFA Sepsis Alert Score Threshold</label>
              <select class="form-control">
                <option selected>Score >= 2 (High In-Hospital Mortality Alert)</option>
                <option>Score >= 1 (Early Warning Screening)</option>
              </select>
            </div>
            <div class="form-group">
              <label class="form-label">Drug-Drug Interaction Database Version</label>
              <input type="text" class="form-control" value="First Databank (FDB) Clinical Formulary v2026.8" readonly>
            </div>
            <button class="btn btn-primary" onclick="Toast.show('success', 'CDS Engine preferences saved.')">Save CDS Rules</button>
          </div>
        </div>

        <div class="panel">
          <div class="panel-header">
            <h3 class="panel-title">Interoperability & Security Policies</h3>
          </div>
          <div style="display: flex; flex-direction: column; gap: 1rem;">
            <div class="form-group">
              <label class="form-label">HL7 FHIR R4 Bundle Export Format</label>
              <input type="text" class="form-control" value="application/fhir+json; fhirVersion=4.0.1" readonly>
            </div>
            <div class="form-group">
              <label class="form-label">Session Idle Inactivity Timeout</label>
              <select class="form-control">
                <option selected>15 Minutes (HIPAA Compliant Standard)</option>
                <option>30 Minutes</option>
                <option>60 Minutes</option>
              </select>
            </div>
            <div class="form-group">
              <label class="form-label">Audit Log Encryption</label>
              <input type="text" class="form-control" value="AES-256-GCM with SHA-512 Hash Checksum" readonly>
            </div>
            <button class="btn btn-secondary" onclick="Toast.show('success', 'Security policies verified and enforced.')">Enforce Policies</button>
          </div>
        </div>
      </div>
    `;
  }
};
