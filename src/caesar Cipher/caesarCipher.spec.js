import caesarCipher from "./caesarCipher.js";

test('test for wrapping from z to a', () => {
  expect(caesarCipher('xyz',3)).toBe('abc')
})

test('test for case preservation', () => {
  expect(caesarCipher('heLLo',3)).toBe('khOOr')
})

test('punctuation,spaces and other non-alphabetical should remain unchanged', () => {
  expect(caesarCipher('Hell0, World!', 3)).toBe('Khoo0, Zruog!')
})

