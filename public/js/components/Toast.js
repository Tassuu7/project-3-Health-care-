/**
 * Toast Notification System
 */

const Toast = {
  show(type, message, title = '') {
    const container = document.getElementById('toastContainer');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = 'toast';

    let icon = 'ℹ️';
    let borderColor = 'var(--primary-500)';

    if (type === 'success') {
      icon = '✅';
      borderColor = 'var(--clinical-emerald)';
    } else if (type === 'error') {
      icon = '⚠️';
      borderColor = 'var(--clinical-rose)';
    } else if (type === 'warning') {
      icon = '🔔';
      borderColor = 'var(--clinical-amber)';
    }

    toast.style.borderLeft = `4px solid ${borderColor}`;
    toast.innerHTML = `
      <div style="font-size: 1.25rem;">${icon}</div>
      <div style="flex: 1;">
        ${title ? `<div style="font-weight: 700; font-size: 0.875rem;">${title}</div>` : ''}
        <div style="font-size: 0.8125rem; color: var(--text-secondary);">${message}</div>
      </div>
    `;

    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transition = 'opacity 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 4000);
  }
};
