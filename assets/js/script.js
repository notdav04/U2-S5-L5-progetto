let hero = document.getElementById("first-section");
let header = document.querySelector("header");
let headerButton = document.getElementById("last-nav-button");
const heroBottom = hero.offsetTop + hero.offsetHeight;
const headerHeight = header.offsetHeight;
const offset = 25;
window.onscroll = function () {
  if (window.scrollY >= heroBottom - headerHeight - offset) {
    header.style.backgroundColor = "white";
    headerButton.style.backgroundColor = "#1a8917";
    header.style.transition = "All 0.5s";
    headerButton;
  } else {
    header.style.backgroundColor = "#ffc017";
    headerButton.style.backgroundColor = "#191919";
  }
};
let alternate = false;
function modifyM() {
  const letterM = document.querySelectorAll("g path");

  let i = 0;
  while (i < 19) {
    let random_position = Math.floor(Math.random() * letterM.length);
    let opacityValue = window.getComputedStyle(
      letterM[random_position]
    ).opacity;
    if (opacityValue === "0") {
      letterM[random_position].style.opacity = "1";
    } else {
      letterM[random_position].style.opacity = "0";
    }
    i++;
  }
}

setInterval(modifyM, 300);
