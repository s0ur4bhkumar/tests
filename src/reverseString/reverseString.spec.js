import reverseString from "./reverseString.js";

test('revrse for "hello world!"', () => {
  expect(reverseString('hello world!')).toBe('!dlrow olleh')
})

test('reverse for the word "hello"', () => {
  expect(reverseString('hello')).toBe('olleh')
})

test('reverse for the word "mam"', () => {
  expect(reverseString('mam')).toBe('mam')
})

test('reverse for empty string should be returned empty string', () => {
  expect(reverseString('')).toBe('')
})

test('reverse for non alphanumeric string', () => {
  expect(reverseString('!,.@#%^')).toBe('^%#@.,!')
})
