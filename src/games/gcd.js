import { cons } from '@hexlet/pairs';
import generateGame from '../index.js';

export default () => {
  const MAX_NUMBER_SIZE = 200;
  const title = 'Find the greatest common divisor of given numbers.';

  const getGcd = (n1, n2) => (n2 ? getGcd(n2, n1 % n2) : n1);

  const getGamePair = () => {
    const firstNumber = Math.floor(Math.random() * MAX_NUMBER_SIZE);
    const secondNumber = Math.floor(Math.random() * MAX_NUMBER_SIZE);

    const question = `Question: ${firstNumber} ${secondNumber}`;
    const answer = getGcd(firstNumber, secondNumber);
    const pair = cons(question, answer);

    return pair;
  };

  generateGame(title, getGamePair);
};
