import { cons } from '@hexlet/pairs';
import generateGame from '../index.js';
import generateRandomInteger from '../lib.js';

export default () => {
  const MIN_PROGRESSION_LENGTH = 5;
  const MAX_PROGRESSION_LENGTH = 15;
  const MAX_STEP_SIZE = 10;

  const title = 'What number is missing in the progression?';

  const generateGamePair = () => {
    const size = generateRandomInteger(MIN_PROGRESSION_LENGTH, MAX_PROGRESSION_LENGTH);
    const initialNumber = generateRandomInteger();
    const progressionStep = generateRandomInteger(0, MAX_STEP_SIZE);

    const numbers = new Array(size).fill(0).map((_, i) => initialNumber + progressionStep * i);
    const missingNumberIndex = generateRandomInteger(0, size - 1);
    const questionSequence = numbers.map((number, index) => (index === missingNumberIndex ? '..' : number));

    const question = `Question: ${questionSequence.join(' ')}`;
    const answer = numbers[missingNumberIndex];
    const pair = cons(question, answer);

    return pair;
  };

  generateGame(title, generateGamePair);
};
