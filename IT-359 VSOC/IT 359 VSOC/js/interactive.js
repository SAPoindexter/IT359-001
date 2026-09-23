(function () {
  function byId(id) {
    return document.getElementById(id);
  }

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

  const enclaveGuideButton = byId('openEnclaveGuide');
  if (enclaveGuideButton) {
    enclaveGuideButton.addEventListener('click', () => {
      const modal = byId('enclaveGuideModal');
      if (modal) modal.showModal();
    });
  }

  const bridgeButton = byId('openBridge');
  if (bridgeButton) {
    bridgeButton.addEventListener('click', () => {
      const modal = byId('bridgeModal');
      if (modal) modal.showModal();
    });
  }

  const runbookButton = byId('openRunbook');
  if (runbookButton) {
    runbookButton.addEventListener('click', () => {
      const modal = byId('runbookModal');
      if (modal) modal.showModal();
    });
  }

  document.querySelectorAll('[data-close-dialog]').forEach((button) => {
    button.addEventListener('click', () => {
      const dialog = byId(button.dataset.closeDialog);
      if (dialog) dialog.close();
    });
  });

  document.querySelectorAll('dialog').forEach((dialog) => {
    dialog.addEventListener('click', (event) => {
      if (event.target === dialog) dialog.close();
    });
  });
})();
