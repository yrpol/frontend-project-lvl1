/* eslint-disable no-console */
/* eslint-disable  import/extensions */
import readlineSync from 'readline-sync';
import greeting from './cli.js';

const startGame = (gameName) => {
  const [condition, expression, checkResult] = gameName();
  const name = greeting();

  console.log(condition);

  let customerAnswer = null;
  let correctAnswer = null;

  for (let i = 0; i < 3; i += 1) {
    const currentQuestion = expression();
    console.log(`Question: ${currentQuestion}`);
    correctAnswer = checkResult(currentQuestion);
    customerAnswer = Number(readlineSync.question('Your answer is: '));

    if (correctAnswer !== customerAnswer) {
      console.log(`'${customerAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
      console.log(`Let's try again, ${name}!`);
      return false;
    }
    console.log('Correct!');
  }

  console.log(`Congratulations, ${name}!`);
  return true;
};

export default startGame;
