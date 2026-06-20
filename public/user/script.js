const menuToggle = document.getElementById("menu-toggle");
const navRight = document.getElementById("nav-right");

if (menuToggle && navRight) {
  menuToggle.addEventListener("click", () => {
    navRight.classList.toggle("show");
  });
}