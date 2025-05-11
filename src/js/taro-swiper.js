import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const swiper = new Swiper('.taro-swiper-init', {
  loop: false,
  navigation: {
    nextEl: '.taro-right-swiper-btn',
    prevEl: '.taro-left-swiper-btn',
  },
  allowTouchMove: true,
  autoHeight: true,
  slidesPerView: 'auto',
  spaceBetween: 0,
  centeredSlides: true,
});

document.querySelectorAll('.taro-left-swiper-btn, .taro-right-swiper-btn')
  .forEach(btn => {
    btn.addEventListener('click', () => {
      btn.blur();
    });
  });