export default function initValoresCarrossel() {
    const carrossel = new Swiper('.carrossel', {
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: false,
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 0,
        modifier: 0,
        slideShadows: true,
        scale : 0,
      },
      breakpoints: {
          
        1000: {
          slidesPerView: 2.5,
          spaceBetween: 10
        },
        800: {
          slidesPerView: 2,
          spaceBetween: 10
        },
        600: {
          slidesPerView: 1.5,
          spaceBetween: 10
        },
        450: {
          slidesPerView: 1.1,
          spaceBetween: 10
        },
        300: {
          slidesPerView: 1,
          spaceBetween: 10
        }
      },
      
        direction: 'horizontal',
        loop: true,
        slidesPerView: 3,
        spaceBetween: 20,
        slidesPerGroup: 1,

      
      });
}   