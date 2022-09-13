import Swiper, {Navigation} from 'swiper';

const initSwiper = () => new Swiper('.swiper', {
  modules: Navigation,
  direction: 'horizontal',
  loop: true,
  slidesPerView: 4,
  spaceBetween: 30,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

export {initSwiper};
