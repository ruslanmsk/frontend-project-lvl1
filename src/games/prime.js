import { cons } from '@hexlet/pairs';
import generateGame from '../index.js';
import generateRandomInteger from '../lib.js';

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

const generateData = () => {
  const number = generateRandomInteger();
  const question = number;

  const isNumberPrime = isPrime(number);
  const answer = isNumberPrime ? 'yes' : 'no';
  const pair = cons(String(question), answer);

  return pair;
};

export default () => generateGame(title, generateData);
