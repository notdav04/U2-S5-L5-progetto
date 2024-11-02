let hero = document.getElementById("first-section");
let header = document.querySelector("header");
let headerButton = document.getElementById("last-nav-button");
const heroBottom = hero.offsetTop + hero.offsetHeight;
const headerHeight = header.offsetHeight;
const offset = 5;
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
  const letterM = document.querySelectorAll("g");
  let ctrl = true;

  if (alternate === false) {
    console.log("if");
    alternate = true;
    let random_position = Math.floor(Math.random() * letterM.length);
    // console.log(letterM[random_position].style.opacity);
    letterM[random_position].style.opacity = "1";
  } else {
    console.log("else");
    alternate = false;
    let random_position = Math.floor(Math.random() * letterM.length);
    if (random_position > 5) {
      letterM[random_position].style.opacity = "0";
    }
  }
  // console.log(letterM[random_position].style.opacity);
}

setInterval(modifyM, 200);
