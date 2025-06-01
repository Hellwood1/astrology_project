import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const swiper = new Swiper('.taro-swiper-init, .matrix-swiper-init, .vedic-swiper', {
  loop: true,
  navigation: {
    nextEl: '.taro-right-swiper-btn, .matrix-right-swiper-btn, .vedic-right-swiper-btn',
    prevEl: '.taro-left-swiper-btn, .matrix-left-swiper-btn, .vedic-left-swiper-btn',
  },
  allowTouchMove: true,
  autoHeight: true,
  slidesPerView: 'auto',
  spaceBetween: 0,
  centeredSlides: true,
});

document.querySelectorAll('.taro-left-swiper-btn, .taro-right-swiper-btn, .matrix-left-swiper-btn, .matrix-right-swiper-btn, .vedic-left-swiper-btn, .vedic-right-swiper-btn')
  .forEach(btn => {
    btn.addEventListener('click', () => {
      btn.blur();
    });
  });