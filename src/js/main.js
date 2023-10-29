//nav mobile/desktop
const navBtn = document.querySelector(".hamburger");
const navView = document.querySelector(".nav__mobile");
const nav = document.querySelector(".nav");

//footer year
const footerYear = document.querySelector(".footer__year");

//scroll-spy
let section = document.querySelectorAll(".section-scroll");
let navLinks = document.querySelectorAll(".nav__desktop-item");

//funcs
const showMobileNav = () => {
  navBtn.classList.toggle("is-active");
  navView.classList.toggle("nav__mobile--active");
  document.body.classList.toggle("sticky-body");
};

const handleCurrentYear = () => {
  const year = new Date().getFullYear();
  footerYear.innerText = year;
};

const navShadow = () => {
  if (window.scrollY >= 50) {
    nav.classList.add("shadow-bg");
  } else {
    nav.classList.remove("shadow-bg");
  }
};

navBtn.addEventListener("click", showMobileNav);
handleCurrentYear();
window.addEventListener("scroll", navShadow);
