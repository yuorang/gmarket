
const toggleBtn = document.querySelector('.button__toggle');
const swiper = new Swiper('.swiper', {
  slidesPerView: 'auto',
  centeredSlides: true,
  loop: true,

  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
