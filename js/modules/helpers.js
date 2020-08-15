function getRandomNumber(maximum, minimum = 0) {
    return Math.floor(Math.random() * maximum) + minimum;
}

function debounce(callbackFunction, wait = 100) {
    let timeout;
    return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            callbackFunction.apply(this, args);
        }, wait);
    };
}

export { getRandomNumber, debounce };
