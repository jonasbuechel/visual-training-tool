import * as SVG from './modules/svg.js';
import * as Sidebar from './modules/sidebar.js';
import * as Fullscreen from './modules/fullscreen.js';
import * as Cursor from './modules/cursor.js';

/* GET THE SVG */
window.addEventListener("load", () => {
  Sidebar.show();
  SVG.loadShape('shape');
  SVG.showCircle();
  SVG.showPaths();

  setTimeout(() => {
    Sidebar.hide();
    Cursor.autoHide();
  }, 2000)
});

document.addEventListener('keypress', (event) => {
  SVG.showNextCircle();
});

/* SETTINGS */
document.querySelector('#color-intensity-blue').addEventListener('input', (event) => {
  SVG.updateCircleColor(event.currentTarget.value);
  SVG.showCircle();
});

document.querySelector('#color-intensity-red').addEventListener('input', (event) => {
  SVG.updatePathColor(event.currentTarget.value);
  SVG.showPaths();
});

/* FULLSCREEN */
document.querySelector('.js-button-toggle-fullscreen').addEventListener('click', (event) => {
  event.currentTarget.blur();
  Fullscreen.toggle();
});

