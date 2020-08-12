/* CONFIGURATION */
const circleColorVisible = 'rgba(0,0,255,1)';
const circleColorInvisible = 'rgba(0,0,0,0)';
let addMispositioning = false;
let currentCircle = 0;
let allCircles = null;

/* GET THE SVG */
window.addEventListener("load", () => {
  loadShape('shape');
  showCircle(currentCircle);
});

function loadShape(id) {
  const svgObject = document.getElementById('svg-object').contentDocument;
  const shape = svgObject.getElementById(id);
  allCircles = shape.querySelectorAll('circle');
}


function showCircle(circleNumber) {
  const oldCircle = allCircles[currentCircle];
  const newCircle = allCircles[circleNumber];

  oldCircle.setAttribute('fill', circleColorInvisible);
  newCircle.setAttribute('fill', circleColorVisible);

  if (addMispositioning === true) {
    addRandomTranslation(newCircle);
  }

  currentCircle = circleNumber;
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
