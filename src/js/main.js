const navBtn = document.querySelector(".hamburger");
const navView = document.querySelector(".nav__mobile");
const footerYear = document.querySelector(".footer__year");

const showMobileNav = () => {
  navBtn.classList.toggle("is-active");
  navView.classList.toggle("nav__mobile--active");
  document.body.classList.toggle("sticky-body");
};

navBtn.addEventListener("click", showMobileNav);

const handleCurrentYear = () => {
  const year = new Date().getFullYear();
  footerYear.innerText = year;
};

handleCurrentYear();

