const menuToggle = document.getElementById("menu-toggle");
const navRight = document.getElementById("nav-right");

menuToggle.addEventListener("click", () => {
  navRight.classList.toggle("show");
});