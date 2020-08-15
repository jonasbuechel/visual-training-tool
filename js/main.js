import * as SVG from './modules/svg.js';

/* GET THE SVG */
window.addEventListener("load", () => {
  showRightPanel();
  SVG.loadShape('shape');
  SVG.showCircle();
  SVG.showPaths();

  setTimeout(() => {
    hideRightPanel();
  }, 2000)
});

document.addEventListener('keypress', () => {
  SVG.showNextCircle();
});

function showRightPanel() {
  document.querySelector('.right').classList.add('right--fullopacity');
}

function hideRightPanel() {
  document.querySelector('.right').classList.remove('right--fullopacity');
}

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
document.querySelector('.js-button-toggle-fullscreen').addEventListener('click', () => {
  toggleFullScreen();
});


function toggleFullScreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
}