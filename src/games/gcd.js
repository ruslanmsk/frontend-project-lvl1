import { cons } from '@hexlet/pairs';
import generateGame from '../index.js';
import generateRandomInteger from '../lib.js';

const MIN_NUMBER = 1;
const MAX_NUMBER = 200;
const title = 'Find the greatest common divisor of given numbers.';

const getGcd = (n1, n2) => (n2 ? getGcd(n2, n1 % n2) : n1);

const generateData = () => {
  const firstNumber = generateRandomInteger(MIN_NUMBER, MAX_NUMBER);
  const secondNumber = generateRandomInteger(MIN_NUMBER, MAX_NUMBER);

  const question = `${firstNumber} ${secondNumber}`;
  const answer = getGcd(firstNumber, secondNumber);
  const pair = cons(question, String(answer));

  return pair;
};

export default () => generateGame(title, generateData);
