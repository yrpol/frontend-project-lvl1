/* eslint-disable no-console */
import readlineSync from 'readline-sync';

const isEven = (num) => {
  if (num % 2 === 0) {
    return true;
  }
  return false;
};

const evenGame = (name) => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let customerAnswer = null;
  let correctAnswer = null;

  for (let i = 0; i < 3; i += 1) {
    const numb = Math.floor(Math.random() * 100);
    console.log(`Question: ${numb}`);
    correctAnswer = (isEven(numb)) ? 'yes' : 'no';
    customerAnswer = readlineSync.question('Yuur answer is: ');

    if (correctAnswer !== customerAnswer) {
      console.log(`'${customerAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
      console.log(`Let's try again, ${name}!`);
      return false;
    }

    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
  return 0;
};

export default evenGame;
