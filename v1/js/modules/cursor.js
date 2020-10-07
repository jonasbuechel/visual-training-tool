import { debounce } from './helpers.js'

const htmlNode = document.querySelector('html');
let isVisible;

function show() {
    if (isVisible) {
        return;
    }

    htmlNode.style.cursor = 'default';
    isVisible = true;
}

function hide() {
    if (!isVisible) {
        return;
    }

    htmlNode.style.cursor = 'none';
    isVisible = false;
}

function autoHide() {
    hide();

    document.addEventListener('mousemove', show);
    document.addEventListener('mousemove', debounce(hide, 300));

}

export { autoHide }