document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('clientModal');
  const continueClientBtn = document.getElementById('continueClientBtn');
  const openButtons = document.querySelectorAll('[data-open-client="true"]');
  const closeButtons = document.querySelectorAll('[data-close-modal="true"]');

  const clientUrl = 'https://xyz.com';

  function openModal() {
    if (!modal) return;
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
  }

  function closeModal() {
    if (!modal) return;
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
  }

  if (continueClientBtn) {
    continueClientBtn.setAttribute('href', clientUrl);
  }

  openButtons.forEach((button) => {
    button.addEventListener('click', openModal);
  });

  closeButtons.forEach((button) => {
    button.addEventListener('click', closeModal);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && modal && modal.classList.contains('open')) {
      closeModal();
    }
  });

  setTimeout(openModal, 600);
});
