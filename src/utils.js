export function debounce(callBack, time) {
  let timeOut;
  return function (...args) {
    clearTimeout(timeOut);
    timeOut = setTimeout(() => {
      callBack(...args);
    }, time);
  };
}
