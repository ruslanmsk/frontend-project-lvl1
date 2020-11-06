import { car, cdr } from '@hexlet/pairs';
import promptly from 'promptly';
import askName from './cli.js';

const GAME_ROUND_COUNT = 3;

export default async function generateGame(title, getGamePair) {
  const name = await askName();

  console.log(title);

  for (let i = 0; i < GAME_ROUND_COUNT; i += 1) {
    const pair = getGamePair();
    const question = car(pair);
    const answer = String(cdr(pair));

    console.log(question);

    const userAnswer = await promptly.prompt('Your answer: ');
    const isAnswerRight = userAnswer === answer;

    if (isAnswerRight) {
      console.log('Correct!');
    } else {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`,
      );
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
}
