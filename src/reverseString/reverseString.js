function reverseString(string) {
  let result = "";
  if (string.length === 0) {
    return "";
  } else {
    for (let i = string.length - 1; i >= 0; i--) {
      result += string[i];
    }
    return result;
  }
}

export default reverseString;
