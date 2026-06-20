const menuToggle = document.getElementById("menu-toggle");
const navRight = document.getElementById("nav-right");
const bottomNavbar = document.getElementById("bottom-navbar");

menuToggle.addEventListener("click", () => {
  navRight.classList.toggle("active");
  bottomNavbar.classList.toggle("active");
});