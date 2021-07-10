$(document).ready(function () {
    $(".slider").slick({
      arrows: false,
      dots: true,
      appendDots: ".slider-dots",
      dotsCLass: "dots",
    });
  
    var typed = new Typed(".typing", {
      strings: ["Student", "Developer", "Designer", "Freelancer"],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true,
    });
  
    var typed = new Typed(".typing-2", {
      strings: ["Student", "Developer", "Designer", "Freelancer"],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true,
    });
  
    let hamberger = document.querySelector(".hamberger");
    let times = document.querySelector(".times");
    let mobileNav = document.querySelector(".mobile-nav");
  
    hamberger.addEventListener("click", function () {
      mobileNav.classList.add("open");
    });
  
    times.addEventListener("click", function () {
      mobileNav.classList.remove("open");
    });
  });
  