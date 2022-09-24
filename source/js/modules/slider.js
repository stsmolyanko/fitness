import Swiper, {Navigation} from 'swiper';

const initCoachesSwiper = () => new Swiper('.coaches__slider', {
  modules: [Navigation],
  direction: 'horizontal',
  loop: 'true',

  breakpoints: {
    1200: {
      slidesPerView: 4,
      spaceBetween: 40,
    },

    860: {
      slidesPerView: 3,
      spaceBetween: 25,
    },

    475: {
      slidesPerView: 2,
      spaceBetween: 25,
    },

    320: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const initReviewsSwiper = () => new Swiper('.reviews__slider', {
  modules: [Navigation],
  direction: 'horizontal',

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const initAllSwipers = () => {
  initCoachesSwiper();
  initReviewsSwiper();
};

export {initAllSwipers};
