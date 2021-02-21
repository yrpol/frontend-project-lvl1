/* eslint-disable no-console */
const condition = 'Answer "yes" if the number is even, otherwise answer "no".';

const expression = () => Math.floor(Math.random() * 100);

const check = (expr, answer) => {
  const isEven = (num) => (num % 2 === 0);
  const correctAnswer = (isEven(expr)) ? 'yes' : 'no';
  const checkResult = correctAnswer === answer;
  return [correctAnswer, checkResult];
};

const evenGame = () => [condition, expression, check];

export default evenGame;
