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
const scrollBar = () => {
  const header = document.getElementById("header");
  if (this.scrollY >= 50) header.classList.add('scroll-active'); else header.classList.remove('scroll-active')
}
/* note idk man why when scrollBar is working and scrollBar() is not */
window.addEventListener('scroll', scrollBar)