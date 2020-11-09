const DEFAULT_MIN_NUMBER = 0;
const DEFAULT_MAX_NUMBER = 200;

const generateRandomInteger = (start = DEFAULT_MIN_NUMBER, end = DEFAULT_MAX_NUMBER) => {
  const numbersCount = end - start;
  const result = Math.random() * numbersCount + start;
  return Math.round(result);
};

export default generateRandomInteger;
