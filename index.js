// ============ showcase the navbar =================
const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");
const navLink = document.querySelectorAll(".nav__link");

navToggle.addEventListener("click", () => {
  navMenu.classList.add("showcase");
});

navClose.addEventListener("click", () => {
  navMenu.classList.remove("showcase");
});

navLink.forEach((n) =>
  n.addEventListener("click", () => {
    navMenu.classList.remove("showcase");
  })
);

// ============== showcase the header =============
// =============================== scroll up
const scrollBar = () => {
  const scrollup = document.getElementById("scroll-up");
  const header = document.getElementById("header");
  if (this.scrollY >= 50) {
    header.classList.add("scroll-active");
    scrollup.classList.add("scroll-show");
  } else {
    header.classList.remove("scroll-active");
    scrollup.classList.remove("scroll-show");
  }
};
/* note idk man why when scrollBar is working and scrollBar() is not */
window.addEventListener("scroll", scrollBar);

// ======== link featured
const linkFeatured = document.querySelectorAll(".technology-item");
function activeFeatured() {
  linkFeatured.forEach((n) => n.classList.remove("active-featured"));
  this.classList.add("active-featured");
}
linkFeatured.forEach((l) => l.addEventListener("click", activeFeatured));

// ============================================= mixitup js
let mixerFeatured = mixitup(".technology-content", {
  selectors: {
    target: ".technology-content-card",
  },
  animation: {
    duration: 300,
  },
});
// scroll reveal 
const sr = ScrollReveal ({
  origin: "bottom",
  distance: "60px",
  delay: 400,
    duration: 2500,
    // reset: true
})
sr.reveal(`.home_title`)