import { cons } from '@hexlet/pairs';
import generateGame from '../index.js';

export default () => {
  const MAX_NUMBER_SIZE = 200;
  const title = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  const isPrime = (n) => {
    if (n === 0 || n === 1) return false;

    for (let i = 2; i <= Math.sqrt(n); i += 1) {
      if (n % i === 0) {
        return false;
      }
    }

    return true;
  };

  const getGamePair = () => {
    const number = Math.floor(Math.random() * MAX_NUMBER_SIZE);
    const question = `Question: ${number}`;

    const isNumberPrime = isPrime(number);
    const answer = isNumberPrime ? 'yes' : 'no';
    const pair = cons(question, answer);

    return pair;
  };

  generateGame(title, getGamePair);
};
