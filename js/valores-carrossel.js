export default function initValoresCarrossel() {
  const carrosselValores = new Swiper('.carrossel_valores', {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 0,
      modifier: 1,
      slideShadows: true,
    },
    loop: true, // Mantém o loop
    breakpoints: {
      900: {
        slidesPerView: 2.3,
        spaceBetween: 30,
      },
      800: {
        slidesPerView: 1.28,
        spaceBetween: 30,
      },
      600: {
        slidesPerView: 1.28,
        spaceBetween: 15,
      },
      450: {
        slidesPerView: 1.28,
        spaceBetween: 15,
      },
      300: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
    },
  });
}
