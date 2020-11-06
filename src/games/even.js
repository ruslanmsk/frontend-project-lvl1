import { cons } from '@hexlet/pairs';
import generateGame from '../index.js';

export default async () => {
  const isEven = (number) => number % 2 === 0;
  const title = 'Answer "yes" if the number is even, otherwise answer "no".';

  const getGamePair = () => {
    const number = Math.floor(Math.random() * 200);
    const question = `Question: ${number}`;
    const answer = isEven(number) ? 'yes' : 'no';
    const pair = cons(question, answer);

    return pair;
  };

  generateGame(title, getGamePair);
};
