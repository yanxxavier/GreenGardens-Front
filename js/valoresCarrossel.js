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
      
        direction: 'horizontal',
        loop: true,
        slidesPerView: 3,
        spaceBetween: 10,
        slidesPerGroup: 1,
      
      });
}   