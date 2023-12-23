const swiper = new Swiper('.swiper', {

    speed: 1500,
    // loop: true,
    // spaceBetween: 100,
    parallax: true,
    effect: 'slide', // fade - другой эффект

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },

    pagination:{
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
        type: "progressbar" 
    },

    breakpoints:{
        720: {
            slidesPerView: 1,
        }
    },

    autoplay: {
        delay: 1500,
        // stopOnLastSlide: true,
        disableOnInteraction: false
    }

  });
