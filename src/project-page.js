// document.addEventListener("DOMContentLoaded", function () {
//     new Swiper(".swiper", {
//         loop: true,
//         navigation: {
//             nextEl: ".swiper-button-next",
//             prevEl: ".swiper-button-prev",
//         },
//         pagination: {
//             el: ".swiper-pagination",
//             clickable: true,
//         },
//     });
// });

// initialize swiper carousel
// const swiper = new Swiper(".swiper", {
//   grabCursor: true,
//   centeredSlides: true,
//   initialSlide: 0,
//   speed: 600,
//   preventClicks: true,
//   slidesPerView: "auto",
//   pagination: {
//     el: ".swiper-pagination",
//   },
  // navigation: {
  //   nextEl: ".swiper-button-next",
  //   prevEl: ".swiper-button-prev",
  // },
// });

const swiper = new Swiper(".swiper", {
  // pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // navigation
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
})