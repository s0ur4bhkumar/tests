import calculator from "./calculator.js";

test("addition of two numbers", () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test("addition of one number and one string", () => {
  expect(calculator.add("1", 2)).toBe(3);
});

test("addition of two strings", () => {
  expect(calculator.add("1", "2")).toBe(3);
});

test("subtraction of two numbers", () => {
  expect(calculator.subtract(1, 2)).toBe(-1);
});

test("subtraction of one number and one string", () => {
  expect(calculator.subtract("1", 2)).toBe(-1);
});

test("subtraction of two strings", () => {
  expect(calculator.subtract("1", "2")).toBe(-1);
});

test("multiplication of two numbers", () => {
  expect(calculator.multiply(1, 2)).toBe(2);
});

test("multiplication of one number and one string", () => {
  expect(calculator.multiply("1", 2)).toBe(2);
});

test("multiplication of two strings", () => {
  expect(calculator.multiply("1", "2")).toBe(2);
});

test("division of two numbers", () => {
  expect(calculator.divide(1, 2)).toBe(0.5);
});

test("division of one number and one string", () => {
  expect(calculator.divide("1", 2)).toBe(0.5);
});

test("division of two strings", () => {
  expect(calculator.divide("1", "2")).toBe(0.5);
});

test("division by zero", () => {
  expect(calculator.divide(1, 0)).toBe(Infinity);
});

test("division by zero", () => {
  expect(calculator.divide("1", 0)).toBe(Infinity);
});

test("division by zero", () => {
  expect(calculator.divide("1", "0")).toBe(Infinity);
});

test("division of zero", () => {
  expect(calculator.divide(0, 1)).toBe(0);
});

test("division of zero", () => {
  expect(calculator.divide(0, "1")).toBe(0);
});

test("division of zero", () => {
  expect(calculator.divide("0", "1")).toBe(0);
});
