import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const swiper = new Swiper(' .matrix-swiper-init, .vedic-swiper', {
  loop: true,
  navigation: {
    nextEl: ' .matrix-right-swiper-btn, .vedic-right-swiper-btn',
    prevEl: ' .matrix-left-swiper-btn, .vedic-left-swiper-btn',
  },
  allowTouchMove: true,
  slidesPerView: 'auto',
  spaceBetween: 0,
  centeredSlides: true,
});

document.querySelectorAll('.matrix-left-swiper-btn, .matrix-right-swiper-btn, .vedic-left-swiper-btn, .vedic-right-swiper-btn')
  .forEach(btn => {
    btn.addEventListener('click', () => {
      btn.blur();
    });
  });