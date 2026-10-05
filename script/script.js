(function () {
  "use strict";

  const menuToggle = document.getElementById("menu-toggle");
  const primaryNav = document.getElementById("nav");
  const navLinks = document.querySelectorAll(".header-link");
  const mobileCta = document.querySelector(".header-mobile-cta");

  function openMenu() {
    if (!primaryNav || !menuToggle) return;
    primaryNav.classList.add("is-open");
    menuToggle.classList.add("is-open");
    menuToggle.setAttribute("aria-expanded", "true");
    document.body.classList.add("menu-open");
  }

  function closeMenu() {
    if (!primaryNav || !menuToggle) return;
    primaryNav.classList.remove("is-open");
    menuToggle.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
    document.body.classList.remove("menu-open");
  }

  if (menuToggle && primaryNav) {
    menuToggle.addEventListener("click", function () {
      if (primaryNav.classList.contains("is-open")) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    navLinks.forEach(function (link) {
      link.addEventListener("click", closeMenu);
    });

    if (mobileCta) {
      mobileCta.addEventListener("click", closeMenu);
    }
  }

  // Highlight active nav link on scroll
  const sections = document.querySelectorAll("section[id]");

  function setActiveLink() {
    const scrollY = window.scrollY + 120;

    sections.forEach(function (section) {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute("id");
      const link = document.querySelector('.header-link[href="#' + id + '"]');

      if (!link) return;

      if (scrollY >= top && scrollY < top + height) {
        link.classList.add("is-active");
      } else {
        link.classList.remove("is-active");
      }
    });
  }

  window.addEventListener("scroll", setActiveLink, { passive: true });
  setActiveLink();
})();
