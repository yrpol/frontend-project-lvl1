/* eslint-disable no-console */
import _ from 'lodash';

const condition = 'What is the result of the expression?';
const expression = () => {
  const operands = ['+', '-', '*'];
  const num1 = Math.floor(Math.random() * 100);
  const num2 = Math.floor(Math.random() * 100);
  const operand = _.sample(operands);
  return `${num1} ${operand} ${num2}`;
};
const check = (exrp, answer) => {
  const evaluate = (str) => {
    const symbols = str.split(' ');
    const [first, sign, last] = symbols;

    const recognizer = (operator, x, y) => {
      if (operator === '+') {
        return x + y;
      }
      if (operator === '-') {
        return x - y;
      }
      if (operator === '*') {
        return x * y;
      }
      return null;
    };
    return recognizer(sign, Number(first), Number(last));
  };
  const correctAnswer = evaluate(exrp);
  const checkResult = correctAnswer === Number(answer);
  return [correctAnswer, checkResult];
};

const calcGame = () => [condition, expression, check];

export default calcGame;
