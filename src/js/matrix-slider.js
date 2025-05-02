const slider = document.querySelector('.matrix-services-list');

let startX = 0;
let current = 0;
let previous = 0;
let dragging = false;
let animationFrame;

slider.addEventListener('touchstart', (e) => {
  dragging = true;
  startX = e.touches[0].clientX;
  slider.style.transition = 'none';
  animationFrame = requestAnimationFrame(updateSlider);
});

slider.addEventListener('touchmove', (e) => {
  if (!dragging) return;
  const x = e.touches[0].clientX;
  current = previous + (x - startX);
});

slider.addEventListener('touchend', () => {
  dragging = false;
  cancelAnimationFrame(animationFrame);

  const maxShift = slider.offsetWidth - slider.scrollWidth;
  current = Math.max(Math.min(0, current), maxShift);

  slider.style.transition = 'transform 250ms cubic-bezier(0.4, 0, 0.2, 1)';
  slider.style.transform = `translateX(${current}px)`;
  previous = current;
});

function updateSlider() {
  slider.style.transform = `translateX(${current}px)`;
  if (dragging) requestAnimationFrame(updateSlider);
}