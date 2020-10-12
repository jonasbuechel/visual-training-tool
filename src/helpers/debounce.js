function debounce(callbackFunction, wait = 100) {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      callbackFunction.apply(this, args);
    }, wait);
  };
}

export { debounce };
