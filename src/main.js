//typing effect for the header

const words = [
  "creamos",
  "innovamos",
  "hacemos visible",
  "somos profesionales"
];

const typingText = document.getElementById("typing-text");

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {
  const currentWord = words[wordIndex];

  if (!deleting) {
    typingText.textContent =
      " " + currentWord.substring(0, charIndex + 1);

    charIndex++;

    if (charIndex === currentWord.length) {
      deleting = true;
      setTimeout(typeEffect, 1500);
      return;
    }
  } else {
    typingText.textContent =
    " " + currentWord.substring(0, charIndex - 1);

    charIndex--;

    if (charIndex === 0) {
      deleting = false;
      wordIndex = (wordIndex + 1) % words.length;
    }
  }

  setTimeout(typeEffect, deleting ? 50 : 100);
}

typeEffect();

//service cards effects

const serviceCards = document.querySelectorAll(".service-card");

const observer = new IntersectionObserver(
  (entries) => {

    entries.forEach((entry) => {

      if (entry.isIntersecting) {

        entry.target.classList.add("active");

        // SOLO MOBILE
        if (window.innerWidth < 1024) {
          entry.target.classList.add("in-view");
        }

      } else {

        entry.target.classList.remove("in-view");

      }

    });

  },
  {
    threshold: 0.45
  }
);

serviceCards.forEach((card) => {
  observer.observe(card);
});

//mobile menu

const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

menuBtn.addEventListener("click", () => {

  mobileMenu.classList.toggle("hidden");
  mobileMenu.classList.toggle("flex");

});

const mobileLinks = mobileMenu.querySelectorAll("a");

mobileLinks.forEach((link) => {

  link.addEventListener("click", () => {

    mobileMenu.classList.add("hidden");
    mobileMenu.classList.remove("flex");

  });

});