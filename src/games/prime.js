import { cons } from '@hexlet/pairs';
import generateGame from '../index.js';
import generateRandomInteger from '../lib.js';

export default () => {
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

  const generateGamePair = () => {
    const number = generateRandomInteger();
    const question = `Question: ${number}`;

    const isNumberPrime = isPrime(number);
    const answer = isNumberPrime ? 'yes' : 'no';
    const pair = cons(question, answer);

    return pair;
  };

  generateGame(title, generateGamePair);
};
