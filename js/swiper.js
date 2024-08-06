var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".pular-slide-banner",
      prevEl: ".voltar-slide-banner",
    },
});
var swiper = new Swiper(".mySwiper-releases", {
    slidesPerView: 4,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".pular-slide",
      prevEl: ".voltar-slide",
    },
    breakpoints: {
      0: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
      1320: {
        slidesPerView: 4,
      }
    }
});