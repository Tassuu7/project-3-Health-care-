/**
 * Dynamic Modal Dialog Manager
 */

const Modal = {
  show(title, contentHtml, buttons = []) {
    const container = document.getElementById('modalContainer');
    if (!container) return;

    const modalId = `modal-${Date.now()}`;
    const backdrop = document.createElement('div');
    backdrop.className = 'modal-backdrop active';
    backdrop.id = modalId;

    let buttonHtml = '';
    for (let i = 0; i < buttons.length; i++) {
      const b = buttons[i];
      buttonHtml += `<button class="btn ${b.className || 'btn-secondary'}" id="${modalId}-btn-${i}">${b.label}</button>`;
    }

    backdrop.innerHTML = `
      <div class="modal-box">
        <div class="modal-header">
          <h3 class="panel-title">${title}</h3>
          <button class="btn btn-secondary btn-sm" id="${modalId}-close">✕</button>
        </div>
        <div class="modal-body">${contentHtml}</div>
        <div class="modal-footer">${buttonHtml}</div>
      </div>
    `;

    container.appendChild(backdrop);

    // Close trigger
    const closeBtn = document.getElementById(`${modalId}-close`);
    if (closeBtn) {
      closeBtn.addEventListener('click', () => backdrop.remove());
    }

    // Button event listeners
    buttons.forEach((b, i) => {
      const btn = document.getElementById(`${modalId}-btn-${i}`);
      if (btn && b.onClick) {
        btn.addEventListener('click', () => {
          b.onClick(() => backdrop.remove());
        });
      }
    });

    return backdrop;
  }
};
