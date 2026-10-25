const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

menuOpenButton.addEventListener("click", () => {
  // Toggle mobile menu visibility
  document.body.classList.toggle("show-mobile-menu");
});

// Close menu when the close button is clicked
menuCloseButton.addEventListener("click", () => menuOpenButton.click());

// Initialize Swiper for NeonPulse Testimonials
const swiper = new Swiper('.slider-container', {
  loop: true,
  grabCursor: true,
  spaceBetween: 30,

  // Enable the dynamic dots (smaller/bigger dots)
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true, 
  },

  // Enable navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // Breakpoints to match your 3 screenshots
  breakpoints: {
    // Mobile mode (Photo 1)
    0: {
      slidesPerView: 1,
    },
    // Tablet mode (Photo 2)
    768: {
      slidesPerView: 2,
    },
    // Desktop mode (Photo 3)
    1024: {
      slidesPerView: 3,
    }
  }
});
