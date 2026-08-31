/**
 * Multi-Role Switcher & Login Controller
 */

const LoginView = {
  async render(container) {
    container.innerHTML = `
      <div style="max-width: 600px; margin: 3rem auto;">
        <div class="panel" style="padding: 2.5rem;">
          <div style="text-align: center; margin-bottom: 2rem;">
            <div style="font-size: 2.5rem; margin-bottom: 0.5rem;">🩺</div>
            <h2 style="font-size: 1.5rem; font-weight: 800;">PulseCare Role Selector</h2>
            <p style="color: var(--text-muted); font-size: 0.875rem;">Select any pre-configured clinical or administrative persona for instant access</p>
          </div>

          <div style="display: flex; flex-direction: column; gap: 0.75rem;">
            <button class="btn btn-primary btn-block" style="text-align: left; padding: 1rem; display: flex; justify-content: space-between; align-items: center;" onclick="LoginView.switchUser('dr.smith', 'PulseCare2026!')">
              <div>
                <div style="font-weight: 700;">🩺 Dr. Evelyn Smith, MD, FACC</div>
                <div style="font-size: 0.75rem; opacity: 0.85;">Attending Physician • Cardiology</div>
              </div>
              <span>→</span>
            </button>

            <button class="btn btn-secondary btn-block" style="text-align: left; padding: 1rem; display: flex; justify-content: space-between; align-items: center;" onclick="LoginView.switchUser('patient.eleanor', 'PulseCare2026!')">
              <div>
                <div style="font-weight: 700;">👤 Eleanor Vance (Patient)</div>
                <div style="font-size: 0.75rem; color: var(--text-muted);">Patient Portal • Self-Service Vitals & Refills</div>
              </div>
              <span>→</span>
            </button>

            <button class="btn btn-secondary btn-block" style="text-align: left; padding: 1rem; display: flex; justify-content: space-between; align-items: center;" onclick="LoginView.switchUser('nurse.jack', 'PulseCare2026!')">
              <div>
                <div style="font-weight: 700;">👩‍⚕️ Jack Miller, RN, BSN</div>
                <div style="font-size: 0.75rem; color: var(--text-muted);">Head Nurse • Inpatient Med-Surg & Triage</div>
              </div>
              <span>→</span>
            </button>

            <button class="btn btn-secondary btn-block" style="text-align: left; padding: 1rem; display: flex; justify-content: space-between; align-items: center;" onclick="LoginView.switchUser('pharm.sarah', 'PulseCare2026!')">
              <div>
                <div style="font-weight: 700;">💊 Sarah Jenkins, PharmD</div>
                <div style="font-size: 0.75rem; color: var(--text-muted);">Chief Pharmacist • Formulary & Dispensing</div>
              </div>
              <span>→</span>
            </button>

            <button class="btn btn-secondary btn-block" style="text-align: left; padding: 1rem; display: flex; justify-content: space-between; align-items: center;" onclick="LoginView.switchUser('admin.clara', 'PulseCare2026!')">
              <div>
                <div style="font-weight: 700;">💳 Clara Oswald</div>
                <div style="font-size: 0.75rem; color: var(--text-muted);">Billing Administrator • Revenue Cycle & Claims</div>
              </div>
              <span>→</span>
            </button>
          </div>
        </div>
      </div>
    `;
  },

  async switchUser(username, password) {
    const ok = await Auth.login(username, password);
    if (ok) {
      const isPatient = username.startsWith('patient');
      Router.navigate(isPatient ? 'portal' : 'dashboard');
    }
  }
};
