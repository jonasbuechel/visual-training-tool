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
let pathColorIntensity = 50;
let circleColorIntensity = 255;
let circleColor =  '';
let pathColor = '';

function asyncLoadShape(id) {
    updateCircleColor(circleColorIntensity);
    updatePathColor(pathColorIntensity);

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

    switch (id) {
        case '8-figure':
            config = {
                svgUrl: 'img/shape.svg',
            };
            break;
        case 'line-vertical':
            config = {
                svgUrl: 'img/shape-vertical.svg',
            };
            break;
        case 'line-horizontal':
            config = {
                svgUrl: 'img/shape-horizontal.svg',
            };
            break;
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
    updatePathColor();
    showCircle();
    showPaths();
}

function updateCircleColor(newCircleColorIntensity) {
    circleColorIntensity = newCircleColorIntensity || circleColorIntensity;

    if (colorScheme === 'dark') {
        circleColor = `rgba(0,0,${circleColorIntensity},1)`;
    }
    else if (colorScheme === 'bright') {
        const circleYellowValue = 255 - circleColorIntensity;
        circleColor = `rgba(255,255,${circleYellowValue},1)`;
    }
}

function updatePathColor(newPathColorIntensity) {
    pathColorIntensity = newPathColorIntensity || pathColorIntensity;

    if (colorScheme === 'dark') {
        pathColor = `rgba(${pathColorIntensity},0,0,1)`;
    }
    else if (colorScheme === 'bright') {
        const pathRedValue = 255 - pathColorIntensity;
        pathColor = `rgba(${pathRedValue},255,255,1)`;
    }

}

function getCircleColorIntensity() {
    return circleColorIntensity;
}

function getPathColorIntensity() {
    return pathColorIntensity;
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
export { asyncLoadShape, showCircle, showNextCircle, showPaths, updateCircleColor, updatePathColor, updateOrder, toggleAutoMode, setColorScheme, getCircleColorIntensity, getPathColorIntensity };
