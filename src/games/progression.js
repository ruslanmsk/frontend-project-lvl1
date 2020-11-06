import { cons } from '@hexlet/pairs';
import generateGame from '../index.js';

export default () => {
  const MIN_NUMBERS_COUNT = 5;
  const AVG_NUMBERS_COUNT = 10;
  const MAX_INITIAL_NUMBER_SIZE = 20;
  const MAX_STEP_SIZE = 10;

  const title = 'What number is missing in the progression?';

  const getGamePair = () => {
    const size = Math.floor(Math.random() * AVG_NUMBERS_COUNT) + MIN_NUMBERS_COUNT;
    const initialNumber = Math.floor(Math.random() * MAX_INITIAL_NUMBER_SIZE);
    const progressionStep = Math.floor(Math.random() * MAX_STEP_SIZE);

    const numbers = new Array(size).fill(0).map((_, i) => initialNumber + progressionStep * i);
    const missingNumberIndex = Math.floor(Math.random() * size);
    const questionSequence = numbers.map((number, index) => (index === missingNumberIndex ? '..' : number));

    const question = `Question: ${questionSequence.join(' ')}`;
    const answer = numbers[missingNumberIndex];
    const pair = cons(question, answer);

    return pair;
  };

  generateGame(title, getGamePair);
};
