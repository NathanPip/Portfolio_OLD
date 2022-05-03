export const stringContains = (string, wordArray) => {
  for (let word of wordArray) {
    if (string.includes(word)) {
        return true;
    }
  }
  return false;
};

export function isVisibleEvent(element, callback) {
  var options = {
    root: document.documentElement,
  };

  var observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      callback(entry.intersectionRatio > 0, observer);
    });
  }, options);

  observer.observe(element);
}