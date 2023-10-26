//nav mobile/desktop
const navBtn = document.querySelector(".hamburger");
const navView = document.querySelector(".nav__mobile");
const nav = document.querySelector(".nav");

//footer year
const footerYear = document.querySelector(".footer__year");

/* //scrolsspy nac
const menuItems = document.querySelectorAll(".nav__items");
const scrollSpySpection = document.querySelectorAll(".section"); */

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

const handleScrollSpy = () => {
  if (document.body.classList.contains("main-page")) {
    const sections = [];

    scrollSpySpection.forEach((section) => {
      /* wartosc scrolla o jaki przesunelismy */
      /*    console.log(window.scrollY); */

      /* odleglosc od gornej krawedzi przegladarki */
      /*  console.log(section.offsetTop); */

      /* wysokosc kazdej skecji */
      /*   console.log(section.offsetHeight); */

      if (window.scrollY <= section.offsetTop + section.offsetHeight - 88) {
        sections.push(section);
        console.log(sections);

        const activeSection = document.querySelector(`a[href="index.html#"]`);

        menuItems.forEach((item) => item.classList.remove("active"));
        activeSection.classList.add("active");
      }
    });
  }
};

navBtn.addEventListener("click", showMobileNav);
handleCurrentYear();
window.addEventListener("scroll", navShadow);
