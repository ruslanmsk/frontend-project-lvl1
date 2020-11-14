import { car, cdr } from '@hexlet/pairs';
import promptly from 'promptly';

const GAME_ROUNDS_COUNT = 3;

export default async function generateGame(title, generateData) {
  console.log('Welcome to the Brain Games!');
  const userName = await promptly.prompt('May I have your name?');
  console.log(`Hello, ${userName}!`);

  console.log(title);

  for (let i = 0; i < GAME_ROUNDS_COUNT; i += 1) {
    const gameData = generateData();
    const question = car(gameData);
    const answer = cdr(gameData);

    console.log(`Question: ${question}`);

    const userAnswer = await promptly.prompt('Your answer: ');

    if (userAnswer === answer) {
      console.log('Correct!');
    } else {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`,
      );
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
}
