import * as RandomNumber from './randomnumber.js'

let allCircles = null;
let allPaths = null;
let addMispositioning = false;
let currentCircle = 0;
let circleColor = 'rgba(0,0,255,1)';
let circleColorInvisible = 'rgba(0,0,0,0)';
let pathColor = 'rgba(50,0,0,1)';

function loadShape(id) {
    const svgObject = document.getElementById('svg-object').contentDocument;
    const shape = svgObject.getElementById(id);
    allCircles = shape.querySelectorAll('circle');
    allPaths = shape.querySelectorAll('path');
}

function showCircle(circleNumber) {
    circleNumber = circleNumber || currentCircle;

    const oldCircle = allCircles[currentCircle];
    const newCircle = allCircles[circleNumber];

    oldCircle.setAttribute('fill', circleColorInvisible);
    newCircle.setAttribute('fill', circleColor);

    if (addMispositioning === true) {
        addRandomTranslation(newCircle);
    }

    currentCircle = circleNumber;
}

function showNextCircle() {
    let circleNumber = currentCircle + 1;

    if (circleNumber > allCircles.length -1) {
        circleNumber = 0;
    }

    showCircle(circleNumber);
}

function updateCircleColor(blueValue) {
    circleColor = `rgba(0,0,${blueValue},1)`;
}

function updatePathColor(redValue) {
    pathColor = `rgba(${redValue},0,0,1)`;
}

function showPaths() {
    allPaths.forEach((path) => {
        path.setAttribute('stroke', pathColor);
    });
}

function getRandomCircle(allCircles) {
    const randomId = RandomNumber.get(allCircles.length);
    return allCircles[randomId];
}

function addRandomTranslation(circleNode) {
    const maximumTranslation = 40;
    const minimumTranslation = 10;
    const randomX = RandomNumber.get(maximumTranslation, minimumTranslation);
    const randomY = RandomNumber.get(maximumTranslation, minimumTranslation);


    circleNode.setAttribute('transform', `translate(${randomX} ${randomY})`);
}

export { loadShape, showCircle, showNextCircle, showPaths, updateCircleColor, updatePathColor };
