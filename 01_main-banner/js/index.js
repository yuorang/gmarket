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


const globalButton = document.querySelector('.button__dropdown-title');
const langOption = document.querySelector('.list__lang-option');

globalButton.addEventListener('click', (event) => {
  event.stopPropagation();

  globalButton.classList.toggle('is-active');
  langOption.classList.toggle('is-active');
});

document.addEventListener('click', () => {
  globalButton.classList.remove('is-active');
  langOption.classList.remove('is-active');
});