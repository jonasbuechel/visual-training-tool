function show() {
    document.querySelector('.right').classList.add('right--fullopacity');
}

function hide() {
    document.querySelector('.right').classList.remove('right--fullopacity');
}

export { show, hide }