const addBehaviour = () => ({
  add: (a, b) => parseInt(a) + parseInt(b),
});

const subtractBehaviour = () => ({
  subtract: (a, b) => parseInt(a) - parseInt(b),
});

const multiplyBehaviour = () => ({
  multiply: (a, b) => parseInt(a) * parseInt(b),
});

const divideBehaviour = () => ({
  divide: (a, b) => parseInt(a) / parseInt(b),
});

const createCalculator = () => {
  return {
    ...addBehaviour(),
    ...subtractBehaviour(),
    ...multiplyBehaviour(),
    ...divideBehaviour(),
  };
};

const calculator = createCalculator();

export default calculator;
