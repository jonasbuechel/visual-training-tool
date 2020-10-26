import * as SVG from "./modules/svg.js";
import * as Sidebar from "./modules/sidebar.js";
import * as Fullscreen from "./modules/fullscreen.js";
import * as Cursor from "./modules/cursor.js";

/* GET THE SVG */
window.addEventListener("load", async () => {
  Sidebar.show();
  await SVG.asyncLoadShape("8-figure");
  SVG.showCircle();
  SVG.showPaths();

  setTimeout(() => {
    Sidebar.hide();
    Cursor.autoHide();
  }, 2000);
});

document.addEventListener("keypress", (event) => {
  SVG.showNextCircle();
});

/* SETTINGS */
document
  .querySelector("#color-intensity-circle")
  .addEventListener("input", (event) => {
    SVG.updateCircleColor(event.currentTarget.value);
    SVG.showCircle();
  });

document
  .querySelector("#color-intensity-lines")
  .addEventListener("input", (event) => {
    SVG.updatePathColor(event.currentTarget.value);
    SVG.showPaths();
  });

/* FULLSCREEN */
document
  .querySelector(".js-button-toggle-fullscreen")
  .addEventListener("click", (event) => {
    event.currentTarget.blur();
    event.currentTarget.classList.toggle("button--state-active");
    Fullscreen.toggle();
  });

document
  .querySelector(".js-button-toggle-intervalmode")
  .addEventListener("click", (event) => {
    event.currentTarget.blur();
    event.currentTarget.classList.toggle("button--state-active");
    SVG.toggleAutoMode(5000);
  });

/* CIRCLE SEQUENCE ORDER */
document
  .querySelector(".js-settings__sequence-order")
  .addEventListener("click", (event) => {
    event.currentTarget.blur();
    SVG.updateOrder(!event.currentTarget.checked);
  });

/* LOAD SCENE */
document.querySelectorAll(".js-settings__shape").forEach((input) => {
  input.addEventListener("click", async (event) => {
    await SVG.asyncLoadShape(event.currentTarget.value);
    SVG.showCircle();
    SVG.showPaths();
  });
});

/* COLOR SCHEME */
document.querySelectorAll(".js-settings__color-scheme").forEach((input) => {
  input.addEventListener("click", async (event) => {
    const bodyNode = document.querySelector("body");

    if (event.currentTarget.value === "color-scheme-bright") {
      bodyNode.classList.add("theme-bright");
      SVG.setColorScheme("bright");
    } else {
      bodyNode.classList.remove("theme-bright");
      SVG.setColorScheme("dark");
    }

    /* update settings */
    document.getElementById(
      "color-intensity-circle"
    ).value = SVG.getCircleColorIntensity();
    document.getElementById(
      "color-intensity-lines"
    ).value = SVG.getPathColorIntensity();
  });
});
