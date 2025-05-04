import { createFocusTrap } from 'focus-trap';

const refs = {
  openBtn: document.querySelector('.mobile-menu-btn'),
  closeBtn: document.querySelector('.close-menu-btn'),
  mobileMenu: document.querySelector('.mobile-menu-wrapper'),
};

let focusTrap = null;

function openMenu() {
  refs.mobileMenu?.classList.add('is-open');

  if (!focusTrap) {
    focusTrap = createFocusTrap(refs.mobileMenu, {
      escapeDeactivates: true,
      clickOutsideDeactivates: true,
      onActivate: () => {
        console.log('Focus trapped inside mobile menu');
      },
      onDeactivate: () => {
        console.log('Focus trap deactivated');
      },
    });
  }

  focusTrap.activate();
}

function closeMenu() {
  refs.mobileMenu?.classList.remove('is-open');
  focusTrap?.deactivate();
}

refs.openBtn?.addEventListener('click', openMenu);
refs.closeBtn?.addEventListener('click', closeMenu);