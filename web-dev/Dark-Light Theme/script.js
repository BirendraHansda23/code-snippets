const SWITCH = document.querySelector(".switch");
const container = document.querySelector(".container");

const dark = {
  main: `var(--secondary)`,
  accent: `var(--primary)`,
};

let lightMode = true;

function darkMode() {
  if (lightMode) {
    container.style.backgroundColor = dark.main;
    container.style.color = dark.accent;
  } else {
    container.style.backgroundColor = dark.accent;
    container.style.color = dark.main;
  }

  container.classList.toggle("dark-theme");
  SWITCH.classList.toggle("dark-switch");
  lightMode = !lightMode;
}

SWITCH.onclick = darkMode;
