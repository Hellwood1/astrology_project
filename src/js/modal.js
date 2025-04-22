const refs = {
  openBtn: document.querySelector('.mobile-menu-btn'),
  closeBtn: document.querySelector('.close-menu-btn'),
  mobileMenu: document.querySelector('.mobile-menu-wrapper'),
};

function openMenu() {
  refs.mobileMenu?.classList.add('is-open');
}

function closeMenu() {
  refs.mobileMenu?.classList.remove('is-open');
}

refs.openBtn?.addEventListener('click', openMenu);
refs.closeBtn?.addEventListener('click', closeMenu);
