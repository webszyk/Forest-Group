const navBtn = document.querySelector(".hamburger");
const navView = document.querySelector(".nav__mobile");
const nav = document.querySelector(".nav");
const footerYear = document.querySelector(".footer__year");

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
