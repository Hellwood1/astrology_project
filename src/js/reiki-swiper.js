import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

let swiper;
const initSwiper = () => {
  swiper = new Swiper('.reiki-swiper-init', {
    loop: true,
    allowTouchMove: true,
    autoHeight: true,
    slidesPerView: 'auto',
    spaceBetween: 0,
    centeredSlides: true,
  });
};

const destroySwiper = () => {
  if (swiper) {
    swiper.destroy(true, true);
    swiper = null;
  }
};

const handleResize = () => {
  if (window.innerWidth >= 1440) {
    destroySwiper();
  } else {
    if (!swiper) {
      initSwiper();
    }
  }
};

window.addEventListener('resize', handleResize);

handleResize();