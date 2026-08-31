/**
 * PulseCare Enterprise CareOS Client Application Orchestrator
 * Self-bootstrapping runner with fallback execution
 */

async function initPulseCareApp() {
  console.log('[PulseCare App] Starting CareOS client...');
  try {
    if (typeof Router !== 'undefined' && typeof Router.init === 'function') {
      Router.init();
    }
  } catch (err) {
    console.error('[PulseCare App] Router initialization failed:', err);
  }

  try {
    if (typeof Auth !== 'undefined' && typeof Auth.init === 'function') {
      await Auth.init();
    }
  } catch (err) {
    console.error('[PulseCare App] Auth initialization failed:', err);
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initPulseCareApp);
} else {
  // DOM already parsed, initialize immediately
  initPulseCareApp();
}
