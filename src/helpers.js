export const stringContains = (string, wordArray) => {
  for (let word of wordArray) {
    if (string.includes(word)) {
        return true;
    }
  }
  return false;
};

