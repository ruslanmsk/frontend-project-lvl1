import { cons } from '@hexlet/pairs';
import generateGame from '../index.js';
import generateRandomInteger from '../lib.js';

export default async () => {
  const isEven = (number) => number % 2 === 0;
  const title = 'Answer "yes" if the number is even, otherwise answer "no".';

  const generateGamePair = () => {
    const number = generateRandomInteger();
    const question = `Question: ${number}`;
    const answer = isEven(number) ? 'yes' : 'no';
    const pair = cons(question, answer);

    return pair;
  };

  generateGame(title, generateGamePair);
};
