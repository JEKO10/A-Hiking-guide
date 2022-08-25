AOS.init();

const progress = document.querySelector(".progress div");
const start = document.querySelector("[data-num='start']");
const first = document.querySelectorAll("#scroll");
const second = document.querySelector("[data-num='2']");
const third = document.querySelector("[data-num='3']");

start.addEventListener("click", () => {
  progress.style.top = "0%";
});

first.forEach((item) => {
  item.addEventListener("click", () => {
    progress.style.top = "20%";
  });
});

second.addEventListener("click", () => {
  progress.style.top = "50%";
});

third.addEventListener("click", () => {
  progress.style.top = "75%";
});

window.onload = () => {
  document.documentElement.scrollTop = 0;
};
