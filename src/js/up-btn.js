const scrollBtn = document.querySelector('.scroll-to-top');
const triggerEl = document.querySelector('#start');

window.addEventListener('scroll', () => {
  const triggerPosition = triggerEl.getBoundingClientRect().top;

  if (triggerPosition <= 0) {
    scrollBtn.classList.add('show');
  } else {
    scrollBtn.classList.remove('show');
  }
});

scrollBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});