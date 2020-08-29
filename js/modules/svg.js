import { getRandomNumber } from './helpers.js'

let allCircles = null;
let shapeBorders = null;
let addMispositioning = false;
let currentCircle = 0;
let circleColorInvisible = 'rgba(0,0,0,0)';
let orderIsRegular = true;
let autoModeEnabled = false;
let autoModeInterval = null;

let colorScheme = 'dark';
let redValue = 50;
let blueValue = 255;
let circleColor =  '';
let pathColor = '';

function asyncLoadShape(id) {
    updateCircleColor(blueValue);
    updatePathColor(redValue);

    return new Promise((resolve, reject) => {
        const shapeConfig = getShapeConfig(id);

        const object = document.getElementById('svg-object');
        object.setAttribute('data', shapeConfig.svgUrl);

        // TODO: stepping in multiple times here! Remove previous event listeners

        object.addEventListener('load', () => {
            const svg = object.contentDocument;
            const shape = svg.querySelector('svg');
            allCircles = shape.querySelectorAll('circle');
            shapeBorders = shape.querySelectorAll('path, line');

            resolve();
        });
    });
}

function getShapeConfig(id) {
    let config = {};

    if (id === '8-figure') {
        config = {
            svgUrl: 'img/shape.svg',
        };
    }
    else if (id === 'line-vertical') {
        config = {
            svgUrl: 'img/shape-vertical.svg',
        };
    }

    return config;
}

function showCircle(circleNumber) {
    circleNumber = circleNumber != undefined ? circleNumber : currentCircle;

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
    let circleNumber = orderIsRegular ? currentCircle + 1 : currentCircle - 1;

    if (circleNumber > allCircles.length -1) {
        circleNumber = 0;
    }

    if (circleNumber < 0) {
        circleNumber = allCircles.length -1;
    }

    showCircle(circleNumber);
}

function setColorScheme(id) {
    colorScheme = id;
    updateCircleColor();

    if (id === 'dark') {
        updatePathColor(50);
    }
    else if (id === 'bright') {
        updatePathColor(255);
    }


    showCircle();
    showPaths();
}

function updateCircleColor(newBlueValue) {
    blueValue = newBlueValue ? newBlueValue : blueValue;

    if (colorScheme === 'dark') {
        circleColor = `rgba(0,0,${blueValue},1)`;
    }
    else if (colorScheme === 'bright') {
        circleColor = `rgba(0,${blueValue},${blueValue},1)`;
    }
}

function updatePathColor(newRedValue) {
    redValue = newRedValue ? newRedValue : redValue;
    pathColor = `rgba(${redValue},0,0,1)`;
}

function getBlueValue() {
    return blueValue;
}

function getRedValue() {
    return redValue;
}

function updateOrder(isRegular) {
    orderIsRegular = isRegular;
}

function showPaths() {
    shapeBorders.forEach((border) => {
        border.setAttribute('stroke', pathColor);
    });
}

function getRandomCircle(allCircles) {
    const randomId = getRandomNumber(allCircles.length);
    return allCircles[randomId];
}

function addRandomTranslation(circleNode) {
    const maximumTranslation = 40;
    const minimumTranslation = 10;
    const randomX = getRandomNumber(maximumTranslation, minimumTranslation);
    const randomY = getRandomNumber(maximumTranslation, minimumTranslation);


    circleNode.setAttribute('transform', `translate(${randomX} ${randomY})`);
}

function toggleAutoMode(intervalTime = 1000) {
    autoModeEnabled = !autoModeEnabled;

    if (autoModeEnabled === false) {
        clearInterval(autoModeInterval);
        return;
    }

    showNextCircle();

    autoModeInterval = setInterval(function(){
        showNextCircle();
    }, intervalTime);
}
export { asyncLoadShape, showCircle, showNextCircle, showPaths, updateCircleColor, updatePathColor, updateOrder, toggleAutoMode, setColorScheme, getBlueValue, getRedValue };
