var swiper = new Swiper(".mySwiper", {
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerGroup: 1,
    loop: false,
    effect: "fade",
    centeredSlides: true,
    watchOverflow: true,
    slideToClickedSlide: false,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });