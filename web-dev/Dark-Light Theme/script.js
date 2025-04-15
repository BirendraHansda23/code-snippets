const SWITCH = document.querySelector(".switch");
const container = document.querySelector(".container");

const dark = {
  primary: "#12204a",
  secondary: "#FFFFEA",
};

let lightMode = true;

function darkMode() {
  if (lightMode) {
    container.style.backgroundColor = dark.primary;
    container.style.color = dark.secondary;
  } else {
    container.style.backgroundColor = dark.secondary;
    container.style.color = dark.primary;
  }

  lightMode = !lightMode;
}

SWITCH.onclick = darkMode;
