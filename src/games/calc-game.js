/* eslint-disable no-console */
import _ from 'lodash';
import { evaluate } from 'mathjs';

const calcGame = () => {
  const condition = 'What is the result of the expression?';
  const expression = () => {
    const operands = ['+', '-', '*'];
    const num1 = Math.floor(Math.random() * 100);
    const num2 = Math.floor(Math.random() * 100);
    const operand = _.sample(operands);
    return `${num1} ${operand} ${num2}`;
  };
  const checkResult = (str) => evaluate(str);

  return [condition, expression, checkResult];
};

export default calcGame;
