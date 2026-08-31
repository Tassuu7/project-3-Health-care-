/**
 * Single Page Application (SPA) Client Router with Error Boundary & Nav Synchronization
 */

const Router = {
  routes: {
    dashboard: typeof DashboardView !== 'undefined' ? DashboardView : null,
    portal: typeof PatientPortalView !== 'undefined' ? PatientPortalView : null,
    login: typeof LoginView !== 'undefined' ? LoginView : null,
    patients: typeof PatientsView !== 'undefined' ? PatientsView : null,
    ehr: typeof EHRClinicalView !== 'undefined' ? EHRClinicalView : null,
    appointments: typeof AppointmentsView !== 'undefined' ? AppointmentsView : null,
    prescriptions: typeof PrescriptionsView !== 'undefined' ? PrescriptionsView : null,
    labs: typeof LabsView !== 'undefined' ? LabsView : null,
    billing: typeof BillingView !== 'undefined' ? BillingView : null,
    pharmacy: typeof PharmacyView !== 'undefined' ? PharmacyView : null,
    triage: typeof TriageBedView !== 'undefined' ? TriageBedView : null,
    analytics: typeof AnalyticsView !== 'undefined' ? AnalyticsView : null,
    audit: typeof AuditView !== 'undefined' ? AuditView : null,
    settings: typeof SettingsView !== 'undefined' ? SettingsView : null
  },

  init() {
    // Re-resolve route references in case scripts executed out of order
    this.routes = {
      dashboard: DashboardView,
      portal: PatientPortalView,
      login: LoginView,
      patients: PatientsView,
      ehr: EHRClinicalView,
      appointments: AppointmentsView,
      prescriptions: PrescriptionsView,
      labs: LabsView,
      billing: BillingView,
      pharmacy: PharmacyView,
      triage: TriageBedView,
      analytics: AnalyticsView,
      audit: AuditView,
      settings: SettingsView
    };

    window.addEventListener('hashchange', () => this.handleRoute());
    
    // Bind click events on all sidebar nav links for immediate response
    document.querySelectorAll('.sidebar-nav .nav-link').forEach(link => {
      link.addEventListener('click', (e) => {
        const route = link.getAttribute('data-route');
        if (route) {
          window.location.hash = route;
        }
      });
    });

    this.handleRoute();
  },

  navigate(route) {
    window.location.hash = route;
  },

  handleRoute() {
    const rawHash = window.location.hash.replace('#', '') || 'dashboard';
    const hash = rawHash.split('?')[0];
    const view = this.routes[hash] || this.routes.dashboard;

    // Update active nav link
    document.querySelectorAll('.sidebar-nav .nav-link').forEach(link => {
      if (link.getAttribute('data-route') === hash) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });

    const container = document.getElementById('contentContainer');
    if (!container) return;

    try {
      if (view && typeof view.render === 'function') {
        view.render(container);
      } else {
        container.innerHTML = `
          <div class="panel" style="padding: 2.5rem; text-align: center;">
            <h2>Clinical Module Not Found</h2>
            <p style="color: var(--text-secondary); margin: 0.75rem 0 1.5rem;">The requested view '#${hash}' could not be located.</p>
            <button class="btn btn-primary" onclick="Router.navigate('dashboard')">Return to Clinical Dashboard</button>
          </div>
        `;
      }
    } catch (err) {
      console.error(`[Router Error] View '${hash}' render exception:`, err);
      container.innerHTML = `
        <div class="panel" style="padding: 2.5rem; text-align: center; border-color: var(--clinical-rose);">
          <h2 style="color: var(--clinical-rose);">Module Rendering Exception</h2>
          <p style="margin: 0.75rem 0 1.5rem; color: var(--text-secondary);">${err.message}</p>
          <button class="btn btn-primary" onclick="Router.handleRoute()">Retry Module</button>
        </div>
      `;
    }
  }
};
