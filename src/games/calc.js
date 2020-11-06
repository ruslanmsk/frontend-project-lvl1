import { cons } from '@hexlet/pairs';
import generateGame from '../index.js';

export default () => {
  const MAX_NUMBER_SIZE = 200;
  const title = 'What is the result of the expression?';
  const sign2Expression = {
    '*': (n1, n2) => n1 * n2,
    '+': (n1, n2) => n1 + n2,
    '-': (n1, n2) => n1 - n2,
  };

  const getGamePair = () => {
    const firstNumber = Math.floor(Math.random() * MAX_NUMBER_SIZE);
    const secondNumber = Math.floor(Math.random() * MAX_NUMBER_SIZE);

    const signs = Object.keys(sign2Expression);
    const randomSign = signs[Math.floor(Math.random() * signs.length)];

    const question = `Question: ${firstNumber} ${randomSign} ${secondNumber}`;
    const answer = sign2Expression[randomSign](firstNumber, secondNumber);
    const pair = cons(question, answer);

    return pair;
  };

  generateGame(title, getGamePair);
};
