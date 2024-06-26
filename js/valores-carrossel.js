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
      1000: {
        slidesPerView: 2.5,
        spaceBetween: 12,
      },
      800: {
        slidesPerView: 2,
        spaceBetween: 12,
      },
      600: {
        slidesPerView: 1.5,
        spaceBetween: 12.
      },
      
      300: {
        slidesPerView: 1.3,
        spaceBetween: 12,
      }
    },
    slidesPerView: 3,
    spaceBetween: 20,
    slidesPerGroup: 1,
  });
}
