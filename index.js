const hamburgerIcon = document.querySelector(".hamburger-icon");
const closeIcon = document.getElementById("close");
const menu = document.querySelector(".menu");

// add an event listener to both the hamburger and close btns
hamburgerIcon.addEventListener("click", () => menu.style.transform = "translateX(0%)");
closeIcon.addEventListener("click", () => menu.style.transform = "translateX(-100%)");
