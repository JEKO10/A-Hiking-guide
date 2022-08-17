AOS.init();

const progress = document.querySelector(".progress div");
const start = document.querySelector("[data-num='start']");
const first = document.querySelector("[data-num='1']");
const second = document.querySelector("[data-num='2']");
const third = document.querySelector("[data-num='3']");

start.addEventListener("click", () => {
  progress.style.top = "0%";
});

first.addEventListener("click", () => {
  progress.style.top = "20%";
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
