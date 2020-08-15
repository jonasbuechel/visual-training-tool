function get(maximum, minimum = 0) {
    return Math.floor(Math.random() * maximum) + minimum;
}

export { get };
