// Hamburger
document
  .querySelector(".header__hamburger")
  .addEventListener("click", function () {
    document.querySelector(".ham1").classList.toggle("active");
    document.querySelector(".nav").classList.toggle("active");
    // document.querySelector(".nav").classList.toggle("animate__animated");
    // document.querySelector(".nav").classList.toggle(" animate__bounce");
  });
