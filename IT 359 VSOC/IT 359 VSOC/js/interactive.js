// Shared interaction behavior for all three VSOC dashboard pages.
(function () {
  // Convenience helper for retrieving an element by its HTML id.
  function byId(id) {
    return document.getElementById(id);
  }

  // Open the reusable Learn More modal and fill it with guidance stored on the clicked button.
  document.querySelectorAll('.guide-trigger').forEach((button) => {
    button.addEventListener('click', () => {
      const modal = byId('guideModal');
      if (!modal) return;
      byId('guideTitle').textContent = button.dataset.guideTitle || 'Dashboard Guide';
      byId('guideWhat').textContent = button.dataset.guideWhat || 'This section summarizes relevant dashboard information.';
      byId('guideWhy').textContent = button.dataset.guideWhy || 'It supports a clear operational decision.';
      modal.showModal();
    });
  });

  // Open the Operations Overview enclave-status reference when that page contains the button.
  const enclaveGuideButton = byId('openEnclaveGuide');
  if (enclaveGuideButton) {
    enclaveGuideButton.addEventListener('click', () => {
      const modal = byId('enclaveGuideModal');
      if (modal) modal.showModal();
    });
  }

  // Open the incident coordination bridge demonstration modal when available.
  const bridgeButton = byId('openBridge');
  if (bridgeButton) {
    bridgeButton.addEventListener('click', () => {
      const modal = byId('bridgeModal');
      if (modal) modal.showModal();
    });
  }

  // Open the incident runbook demonstration modal when available.
  const runbookButton = byId('openRunbook');
  if (runbookButton) {
    runbookButton.addEventListener('click', () => {
      const modal = byId('runbookModal');
      if (modal) modal.showModal();
    });
  }

  // Close a dialog when one of its explicit Close buttons is selected.
  document.querySelectorAll('[data-close-dialog]').forEach((button) => {
    button.addEventListener('click', () => {
      const dialog = byId(button.dataset.closeDialog);
      if (dialog) dialog.close();
    });
  });

  // Also close any modal when the user clicks the backdrop outside the modal box.
  document.querySelectorAll('dialog').forEach((dialog) => {
    dialog.addEventListener('click', (event) => {
      if (event.target === dialog) dialog.close();
    });
  });
})();
