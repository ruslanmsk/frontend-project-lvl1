import { cons } from '@hexlet/pairs';
import generateGame from '../index.js';
import generateRandomInteger from '../lib.js';

export default () => {
  const title = 'What is the result of the expression?';
  const sign2Expression = {
    '*': (n1, n2) => n1 * n2,
    '+': (n1, n2) => n1 + n2,
    '-': (n1, n2) => n1 - n2,
  };

  const generateGamePair = () => {
    const firstNumber = generateRandomInteger();
    const secondNumber = generateRandomInteger();

    const signs = Object.keys(sign2Expression);
    const randomSignsIndex = generateRandomInteger(0, signs.length - 1);
    const randomSign = signs[randomSignsIndex];

    const question = `Question: ${firstNumber} ${randomSign} ${secondNumber}`;
    const answer = sign2Expression[randomSign](firstNumber, secondNumber);
    const pair = cons(question, answer);

    return pair;
  };

  generateGame(title, generateGamePair);
};
