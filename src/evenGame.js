import promptly from 'promptly';

export default async () => {
  const questionNumbers = [15, 6, 7];
  const isEven = (number) => number % 2 === 0;

  console.log('Welcome to the Brain Games!');
  const name = await promptly.prompt('May I have your name?');
  console.log(`Hello, ${name}!`);

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < questionNumbers.length; i += 1) {
    const number = questionNumbers[i];
    console.log(`Question: ${number}`);

    const answer = (await promptly.prompt('Your answer: ')).toLowerCase();
    const isNumberEven = isEven(number);
    const correctAnswer = isNumberEven ? 'yes' : 'no';
    const isAnswerRight = answer === correctAnswer;

    if (isAnswerRight) {
      console.log('Correct!');
    } else {
      console.log(
        `'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`,
      );
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};
