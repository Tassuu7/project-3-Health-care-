/**
 * PulseCare Role-Based Login & Authentication Controller
 * Provides 1-click credential auto-fill for Doctors, Patients, Nurses, Pharmacists, and Admins.
 */

const LoginView = {
  async render(container) {
    container.innerHTML = `
      <div style="min-height: calc(100vh - 120px); display: flex; align-items: center; justify-content: center; padding: 1.5rem;">
        <div class="panel" style="max-width: 520px; width: 100%; box-shadow: var(--shadow-xl); border: 1px solid var(--border-glow);">
          <div style="text-align: center; margin-bottom: 1.5rem;">
            <div style="width: 54px; height: 54px; background: linear-gradient(135deg, var(--primary-600), var(--clinical-teal)); border-radius: var(--radius-xl); display: inline-flex; align-items: center; justify-content: center; font-size: 1.75rem; color: white; font-weight: 900; margin-bottom: 0.75rem; box-shadow: var(--shadow-glow);">P+</div>
            <h2 style="font-size: 1.6rem; font-weight: 800;">PulseCare CareOS Login</h2>
            <p style="font-size: 0.875rem; color: var(--text-secondary); margin-top: 0.25rem;">Enterprise Health & Clinical Intelligence Platform</p>
          </div>

          <form id="mainLoginForm" style="display: flex; flex-direction: column; gap: 1rem;">
            <div class="form-group">
              <label class="form-label">Username / Provider ID</label>
              <input type="text" id="loginUsername" class="form-control" placeholder="Enter username (e.g. dr.smith, patient.eleanor)" required value="dr.smith">
            </div>
            <div class="form-group">
              <label class="form-label">Security Password</label>
              <input type="password" id="loginPassword" class="form-control" placeholder="••••••••••••" required value="PulseCare2026!">
            </div>

            <button type="submit" class="btn btn-primary btn-block" style="padding: 0.75rem; font-size: 1rem; font-weight: 700; margin-top: 0.5rem;">
              Secure HIPAA Sign In
            </button>
          </form>

          <div style="margin-top: 1.5rem; padding-top: 1.25rem; border-top: 1px solid var(--border-color);">
            <div style="font-size: 0.8rem; font-weight: 700; color: var(--text-secondary); text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 0.75rem; text-align: center;">
              ⚡ Quick 1-Click Role Switcher:
            </div>
            <div class="quick-login-grid">
              <div class="role-login-chip" onclick="LoginView.quickFill('dr.smith', 'PulseCare2026!')">
                <span>🩺</span>
                <div>
                  <div>Doctor (Cardiology)</div>
                  <small style="color: var(--text-muted);">Dr. Evelyn Smith</small>
                </div>
              </div>
              <div class="role-login-chip" onclick="LoginView.quickFill('dr.chen', 'PulseCare2026!')">
                <span>🫁</span>
                <div>
                  <div>Doctor (Pulmonology)</div>
                  <small style="color: var(--text-muted);">Dr. Marcus Chen</small>
                </div>
              </div>
              <div class="role-login-chip" onclick="LoginView.quickFill('patient.eleanor', 'PulseCare2026!')">
                <span>👤</span>
                <div>
                  <div>Patient (Eleanor)</div>
                  <small style="color: var(--text-muted);">MRN-100492</small>
                </div>
              </div>
              <div class="role-login-chip" onclick="LoginView.quickFill('patient.james', 'PulseCare2026!')">
                <span>👤</span>
                <div>
                  <div>Patient (James)</div>
                  <small style="color: var(--text-muted);">MRN-100493</small>
                </div>
              </div>
              <div class="role-login-chip" onclick="LoginView.quickFill('nurse.sarah', 'PulseCare2026!')">
                <span>👩‍⚕️</span>
                <div>
                  <div>Emergency Nurse</div>
                  <small style="color: var(--text-muted);">Sarah Jenkins, RN</small>
                </div>
              </div>
              <div class="role-login-chip" onclick="LoginView.quickFill('admin.system', 'PulseCare2026!')">
                <span>🛡️</span>
                <div>
                  <div>System Admin</div>
                  <small style="color: var(--text-muted);">CareOS Admin</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

    document.getElementById('mainLoginForm').addEventListener('submit', async (e) => {
      e.preventDefault();
      const u = document.getElementById('loginUsername').value.trim();
      const p = document.getElementById('loginPassword').value;
      const success = await Auth.login(u, p);
      if (success) {
        if (Auth.currentUser && Auth.currentUser.role === 'PATIENT') {
          Router.navigate('portal');
        } else {
          Router.navigate('dashboard');
        }
      }
    });
  },

  async quickFill(username, password) {
    document.getElementById('loginUsername').value = username;
    document.getElementById('loginPassword').value = password;
    const success = await Auth.login(username, password);
    if (success) {
      if (Auth.currentUser && Auth.currentUser.role === 'PATIENT') {
        Router.navigate('portal');
      } else {
        Router.navigate('dashboard');
      }
    }
  }
};
