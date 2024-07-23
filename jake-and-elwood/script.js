const closeButton = document.querySelector(".close-btn");
const openButton = document.querySelector(".open-btn");
const nav = document.querySelector(".navbar");

closeButton.addEventListener("click", () => {
  nav.classList.remove("navbar-open");
});

openButton.addEventListener("click", () => {
  nav.classList.add("navbar-open");
});
