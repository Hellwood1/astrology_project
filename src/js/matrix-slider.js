const slider = document.querySelector('.matrix-services-list');
const items = document.querySelectorAll('.matrix-services-list-item');
const prevBtn = document.querySelector('.arrow-btn.prev');
const nextBtn = document.querySelector('.arrow-btn.next');

let startX = 0;
let current = 0;
let previous = 0;
let dragging = false;
let animationFrame;

const cardWidth = items[0].offsetWidth + 30;

// -------------------- Свайпер --------------------
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
  handleLimitScroll();
});

function updateSlider() {
  slider.style.transform = `translateX(${current}px)`;
  if (dragging) requestAnimationFrame(updateSlider);
}

// -------------------- Карусель для ПК версії --------------------
if (prevBtn && nextBtn) {
  prevBtn.addEventListener('click', (e) => {
    current += cardWidth;
    handleLimitScroll('left');
    animateVisibleCards('left');
    e.currentTarget.blur();
  });

  nextBtn.addEventListener('click', (e) => {
    current -= cardWidth;
    handleLimitScroll('right');
    animateVisibleCards('right');
    e.currentTarget.blur();
  });
}

// -------------------- Реалізовано обмеження прокруту, струс та зникання кнопки --------------------
function handleLimitScroll(direction = '') {
  const maxShift = slider.offsetWidth - slider.scrollWidth;

  const prev = current;
  current = Math.max(Math.min(0, current), maxShift);

  slider.style.transition = 'transform var(--timing-function)';
  slider.style.transform = `translateX(${current}px)`;
  previous = current;

  toggleArrowButtons(current, maxShift);

  if (current === 0 && direction === 'left') {
    shakeCard('first');
  } else if (current === maxShift && direction === 'right') {
    shakeCard('last');
  }
}

// -------------------- Реалізовано анімування карток --------------------
function animateVisibleCards(direction) {
  const visibleCard = getVisibleCard();
  if (visibleCard) {
    visibleCard.classList.remove('slide-in-left', 'slide-in-right');
    requestAnimationFrame(() => {
      visibleCard.classList.add(direction === 'left' ? 'slide-in-left' : 'slide-in-right');
    });
  }
}

function getVisibleCard() {
  return [...items].find((item) => {
    const rect = item.getBoundingClientRect();
    const parentRect = slider.getBoundingClientRect();
    return rect.left >= parentRect.left && rect.right <= parentRect.right;
  });
}

// -------------------- Реалізовано візуал для показу останньої картки в списку --------------------
function shakeCard(position) {
  let target;
  if (position === 'first') {
    target = items[0];
  } else if (position === 'last') {
    target = items[items.length - 1];
  }

  if (target) {
    target.classList.add('shake');
    target.addEventListener('animationend', () => {
      target.classList.remove('shake');
    }, { once: true });
  }
}

// -------------------- Зникання лівої та правої кнопки за умови останнього елементу в каруселі --------------------
function toggleArrowButtons(current, maxShift) {
  if (current === 0) {
    prevBtn.style.opacity = '0';
    prevBtn.style.pointerEvents = 'none';
  } else {
    prevBtn.style.opacity = '1';
    prevBtn.style.pointerEvents = 'auto';
  }

  if (current === maxShift) {
    nextBtn.style.opacity = '0';
    nextBtn.style.pointerEvents = 'none';
  } else {
    nextBtn.style.opacity = '1';
    nextBtn.style.pointerEvents = 'auto';
  }
}
