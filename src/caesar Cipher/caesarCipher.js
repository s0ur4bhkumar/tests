function nonAlphabeticalCheck(string) {
  const pattern = /[^a-zA-Z]/;
  return pattern.test(string);
}

function shiftCharacter(letter, step) {
  if (!nonAlphabeticalCheck(letter)) {
    const code = letter.charCodeAt(0);
    if (letter === letter.toUpperCase()) {
      if (code + step > 90) {
        return String.fromCharCode(code + step - 90 + 65 - 1);
      } else {
        return String.fromCharCode(code + step);
      }
    } else if (letter === letter.toLowerCase()) {
      if (code + step > 122) {
        return String.fromCharCode(code + step - 122 + 97 - 1);
      } else {
        return String.fromCharCode(code + step);
      }
    }
  } else {
    return letter;
  }
}

// console.log(shiftCharacter("z", 3));
// console.log(String.fromCharCode(97))
// console.log('Z'.charCodeAt(0))

function caesarCipher(word, step) {
  let result = "";
  for (chr of word) {
    result += shiftCharacter(chr, step);
  }
  return result;
}

export default caesarCipher;
