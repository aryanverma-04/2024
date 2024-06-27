const preloader = document.querySelector("[data-preloader]");
window.addEventListener("load", () =>{
    preloader.classList.add("remove");
})
const navToggleBtns = document.querySelectorAll("[data-nav-toggler]");
const navbar = document.querySelector("[data-navbar]");
const overlay = document.querySelector("[data-overlay]");

navToggleBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
  });
});

const header = document.querySelector("[data-header]");
window.addEventListener("scroll", function(){
    header.classList[window.scrollY > 100 ? "add" : "remove"]("active")
})