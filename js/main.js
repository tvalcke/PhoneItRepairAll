document.addEventListener('DOMContentLoaded', () => {
  const year = new Date().getFullYear();
  const footerNote = document.querySelector('.site-footer p');

  if (footerNote) {
    footerNote.textContent = `© ${year} PHONE-IT REPAIR ALL. Tous droits réservés.`;
  }
});
