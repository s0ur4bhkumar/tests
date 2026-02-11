function capitalize(word) {
  let result;
  if (word.length === 0) {
    return "";
  } else {
    result = word[0].toUpperCase();
    for (let i = 1; i < word.length; i++) {
      result = result + word[i];
    }
    return result;
  }
}

export default capitalize;
