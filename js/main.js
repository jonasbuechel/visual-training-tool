const circleColorVisible = 'rgba(0,0,255,1)';
const circleColorInvisible = 'rgba(0,0,0,0)';
const shape = document.querySelector('#shape');
const allCircles = shape.querySelectorAll('circle');
let addMispositioning = false;
let currentCircle = 0;

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

showCircle(currentCircle);

document.addEventListener('keypress', () => {
  let circleNumber = currentCircle + 1;

  if (circleNumber > allCircles.length -1) {
    circleNumber = 0;
  }

  showCircle(circleNumber);
});
