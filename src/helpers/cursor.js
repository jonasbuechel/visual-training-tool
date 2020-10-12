import { debounce } from "./debounce.js";

const htmlNode = document.querySelector("html");
let isVisible = true;

function show() {
  if (isVisible) {
    return;
  }

  htmlNode.style.cursor = "default";
  isVisible = true;
}

function hide() {
  if (!isVisible) {
    return;
  }

  htmlNode.style.cursor = "none";
  isVisible = false;
}

function autoHide(latency = 300) {
  hide();

  document.addEventListener("mousemove", show);
  document.addEventListener("mousemove", debounce(hide, latency));
}

export default { autoHide };
