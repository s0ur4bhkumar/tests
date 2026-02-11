import capitalize from "./capitalize.js";

test("capitalze the first letter of hello", () => {
  expect(capitalize('hello')).toBe("Hello");
});

test("return the word as it is if first letter is already capital", () => {
  expect(capitalize('Hello')).toBe("Hello");
});

test("return the word as it is if the first letters are numeric", () => {
  expect(capitalize('1234')).toBe('1234')
})

test("return the word as it is if the first letter is numeric followed by alphabests", () => {
  expect(capitalize('1hello')).toBe('1hello')
})

test("return an empty string if the the word is an empty string", () => {
  expect(capitalize('')).toBe('')
})

test("return the word as it is if the first letter is a punctuation mark", () => {
  expect(capitalize('!hello')).toBe('!hello')
})