import { cons } from '@hexlet/pairs';
import generateGame from '../index.js';
import generateRandomInteger from '../lib.js';

const isEven = (number) => number % 2 === 0;
const title = 'Answer "yes" if the number is even, otherwise answer "no".';

const generateData = () => {
  const number = generateRandomInteger();
  const question = number;
  const answer = isEven(number) ? 'yes' : 'no';
  const pair = cons(String(question), answer);

  return pair;
};

export default async () => generateGame(title, generateData);
