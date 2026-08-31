/**
 * Resilient Authentication and Multi-Role Session Manager
 */

const Auth = {
  currentUser: {
    id: 'usr-001',
    username: 'dr.smith',
    fullName: 'Dr. Evelyn Smith, MD, FACC',
    role: 'ATTENDING_PHYSICIAN',
    department: 'Cardiovascular Medicine'
  },

  async init() {
    const token = localStorage.getItem('pulsecare_token');
    if (token) {
      try {
        const res = await API.get('/auth/me');
        if (res && res.success && res.user) {
          this.currentUser = res.user;
        }
      } catch (e) {
        console.warn('Session check fallback.');
        localStorage.removeItem('pulsecare_token');
      }
    }

    this.renderUserProfile();
    this.updateSidebarForRole();
  },

  async login(username, password) {
    try {
      const res = await API.post('/auth/login', { username, password });
      if (res && res.success) {
        localStorage.setItem('pulsecare_token', res.token);
        this.currentUser = res.user;
        this.renderUserProfile();
        this.updateSidebarForRole();
        Toast.show('success', `Logged in as ${res.user.fullName} (${res.user.role})`);
        return true;
      }
    } catch (err) {
      // Local demo fallback if backend is unreachable
      const roles = {
        'dr.smith': { id: 'usr-001', username: 'dr.smith', fullName: 'Dr. Evelyn Smith, MD, FACC', role: 'ATTENDING_PHYSICIAN', department: 'Cardiology' },
        'patient.eleanor': { id: 'pat-001', username: 'patient.eleanor', fullName: 'Eleanor Vance', role: 'PATIENT', department: 'Patient Health' },
        'nurse.jack': { id: 'usr-002', username: 'nurse.jack', fullName: 'Jack Miller, RN, BSN', role: 'HEAD_NURSE', department: 'Inpatient Med-Surg' },
        'pharm.sarah': { id: 'usr-003', username: 'pharm.sarah', fullName: 'Sarah Jenkins, PharmD', role: 'CHIEF_PHARMACIST', department: 'Central Pharmacy' },
        'admin.clara': { id: 'usr-004', username: 'admin.clara', fullName: 'Clara Oswald', role: 'BILLING_ADMIN', department: 'Hospital Administration' }
      };

      if (roles[username]) {
        this.currentUser = roles[username];
        this.renderUserProfile();
        this.updateSidebarForRole();
        Toast.show('success', `Logged in as ${this.currentUser.fullName} (${this.currentUser.role})`);
        return true;
      }

      Toast.show('error', err.message || 'Login failed');
      return false;
    }
  },

  logout() {
    localStorage.removeItem('pulsecare_token');
    this.currentUser = null;
    Toast.show('info', 'Logged out successfully');
    Router.navigate('login');
    this.renderUserProfile();
  },

  updateSidebarForRole() {
    const isPatient = this.currentUser && this.currentUser.role === 'PATIENT';
    const patientPortalLink = document.getElementById('navPatientPortalLink');
    if (patientPortalLink) {
      patientPortalLink.style.display = isPatient ? 'flex' : 'none';
    }
  },

  renderUserProfile() {
    const container = document.getElementById('authStatusContainer');
    if (!container) return;

    if (this.currentUser) {
      const isPatient = this.currentUser.role === 'PATIENT';
      container.innerHTML = `
        <div style="display: flex; align-items: center; gap: 0.75rem;">
          <div class="user-avatar" style="background: ${isPatient ? 'var(--clinical-emerald)' : 'var(--primary-600)'};">
            ${isPatient ? '👤' : '🩺'}
          </div>
          <div>
            <div style="font-size: 0.875rem; font-weight: 700;">${this.currentUser.fullName}</div>
            <div style="font-size: 0.75rem; color: var(--text-muted);">${this.currentUser.role}</div>
          </div>
          <button id="switchRoleNavBtn" class="btn btn-secondary btn-sm" style="margin-left: 0.5rem;" title="Switch Role">Switch User</button>
          <button id="logoutNavBtn" class="btn btn-secondary btn-sm">Logout</button>
        </div>
      `;

      document.getElementById('switchRoleNavBtn').addEventListener('click', () => Router.navigate('login'));
      document.getElementById('logoutNavBtn').addEventListener('click', () => this.logout());
    } else {
      container.innerHTML = `<button class="btn btn-primary btn-sm" onclick="Router.navigate('login')">Sign In</button>`;
    }
  }
};
