/**
 * Authentication and Multi-Role Session Manager
 */

const Auth = {
  currentUser: null,

  async init() {
    const token = localStorage.getItem('pulsecare_token');
    if (token) {
      try {
        const res = await API.get('/auth/me');
        if (res.success && res.user) {
          this.currentUser = res.user;
        }
      } catch (e) {
        console.warn('Session expired.');
      }
    }

    if (!this.currentUser) {
      // Default initial login as Dr. Evelyn Smith
      await this.login('dr.smith', 'PulseCare2026!');
    }

    this.renderUserProfile();
  },

  async login(username, password) {
    try {
      const res = await API.post('/auth/login', { username, password });
      if (res.success) {
        localStorage.setItem('pulsecare_token', res.token);
        this.currentUser = res.user;
        this.renderUserProfile();
        this.updateSidebarForRole();
        Toast.show('success', `Logged in as ${res.user.fullName} (${res.user.role})`);
        return true;
      }
    } catch (err) {
      Toast.show('error', err.message);
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
