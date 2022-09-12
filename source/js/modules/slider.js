import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const initSwiper = () => new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

export {initSwiper};
