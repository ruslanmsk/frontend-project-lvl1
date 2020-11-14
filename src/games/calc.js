import { cons } from '@hexlet/pairs';
import generateGame from '../index.js';
import generateRandomInteger from '../lib.js';

const title = 'What is the result of the expression?';
const operationsBySigns = {
  '*': (n1, n2) => n1 * n2,
  '+': (n1, n2) => n1 + n2,
  '-': (n1, n2) => n1 - n2,
};

const generateData = () => {
  const firstNumber = generateRandomInteger();
  const secondNumber = generateRandomInteger();

  const signs = Object.keys(operationsBySigns);
  const randomSignsIndex = generateRandomInteger(0, signs.length - 1);
  const randomSign = signs[randomSignsIndex];

  const question = `${firstNumber} ${randomSign} ${secondNumber}`;
  const answer = operationsBySigns[randomSign](firstNumber, secondNumber);
  const pair = cons(question, String(answer));

  return pair;
};

export default () => generateGame(title, generateData);
