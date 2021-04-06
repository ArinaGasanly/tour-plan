const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.slider-img--next',
    prevEl: '.slider-img--prev',
  },
  effect: "cube",
});