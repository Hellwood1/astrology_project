import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const swiper = new Swiper('.vedic-swiper', {
  loop: true,
  navigation: {
    nextEl: '.vedic-right-swiper-btn',
    prevEl: '.vedic-left-swiper-btn',
  },
  allowTouchMove: true,
  autoHeight: true,
});

document.querySelectorAll('.vedic-left-swiper-btn, .vedic-right-swiper-btn ')
  .forEach(btn => {
    btn.addEventListener('click', () => {
      btn.blur();
    });
  });