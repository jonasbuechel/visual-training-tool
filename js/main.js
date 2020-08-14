/* CONFIGURATION */
let circleColor = 'rgba(0,0,255,1)';
let circleColorInvisible = 'rgba(0,0,0,0)';
let pathColor = 'rgba(50,0,0,1)';
let addMispositioning = false;
let currentCircle = 0;
let allCircles = null;
let allPaths = null;

/* GET THE SVG */
window.addEventListener("load", () => {
  showRightPanel();
  loadShape('shape');
  showCircle(currentCircle);
  showPaths();

  setTimeout(() => {
    hideRightPanel();
  }, 2000)
});

function loadShape(id) {
  const svgObject = document.getElementById('svg-object').contentDocument;
  const shape = svgObject.getElementById(id);
  allCircles = shape.querySelectorAll('circle');
  allPaths = shape.querySelectorAll('path');
}


function showCircle(circleNumber) {
  const oldCircle = allCircles[currentCircle];
  const newCircle = allCircles[circleNumber];

  oldCircle.setAttribute('fill', circleColorInvisible);
  newCircle.setAttribute('fill', circleColor);

  if (addMispositioning === true) {
    addRandomTranslation(newCircle);
  }

  currentCircle = circleNumber;
}

function showPaths() {
  allPaths.forEach((path) => {
    path.setAttribute('stroke', pathColor);
  });
}

function getRandomCircle(allCircles) {
  const randomId = getRandomNumber(allCircles.length);
  return allCircles[randomId];
}

function addRandomTranslation(circleNode) {
  const maximumTranslation = 40;
  const minimumTranslation = 10;
debugger;
  const randomX = getRandomNumber(maximumTranslation, minimumTranslation);
  const randomY = getRandomNumber(maximumTranslation, minimumTranslation);


  circleNode.setAttribute('transform', `translate(${randomX} ${randomY})`);
}

function getRandomNumber(maximum, minimum = 0) {
  return Math.floor(Math.random() * maximum) + minimum;
}

document.addEventListener('keypress', () => {
  let circleNumber = currentCircle + 1;

  if (circleNumber > allCircles.length -1) {
    circleNumber = 0;
  }

  showCircle(circleNumber);
});

function showRightPanel() {
  document.querySelector('.right').classList.add('right--fullopacity');
}

function hideRightPanel() {
  document.querySelector('.right').classList.remove('right--fullopacity');
}

/* SETTINGS */
document.querySelector('#color-intensity-blue').addEventListener('input', (event) => {
  updateCircleColor(event.currentTarget.value);
});

document.querySelector('#color-intensity-red').addEventListener('input', (event) => {
  updatePathColor(event.currentTarget.value);
});

function updateCircleColor(blueValue) {
  circleColor = `rgba(0,0,${blueValue},1)`;
  showCircle(currentCircle);
}

function updatePathColor(redValue) {
  pathColor = `rgba(${redValue},0,0,1)`;
  showPaths();
}

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