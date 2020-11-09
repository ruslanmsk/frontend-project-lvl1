import { cons } from '@hexlet/pairs';
import generateGame from '../index.js';
import generateRandomInteger from '../lib.js';

export default () => {
  const title = 'Find the greatest common divisor of given numbers.';

  const getGcd = (n1, n2) => (n2 ? getGcd(n2, n1 % n2) : n1);

  const generateGamePair = () => {
    const firstNumber = generateRandomInteger(1);
    const secondNumber = generateRandomInteger(1);

    const question = `Question: ${firstNumber} ${secondNumber}`;
    const answer = getGcd(firstNumber, secondNumber);
    const pair = cons(question, answer);

    return pair;
  };

  generateGame(title, generateGamePair);
};
