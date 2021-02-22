/* eslint-disable no-console */
import readlineSync from 'readline-sync';

export const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${name}!`);
  return name;
};

export const makeQuestion = (question) => {
  console.log(`Question: ${question}`);
  return 0;
};

export const getAnswer = () => readlineSync.question('Your answer is: ');

export const wrongAnswer = (customerAnswer, correctAnswer, name) => {
  console.log(`'${customerAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
  console.log(`Let's try again, ${name}!`);
  return 0;
};

export const correct = () => {
  console.log('Correct!');
};

export const congratulations = (name) => {
  console.log(`Congratulations, ${name}!`);
  return 0;
};

export const submitCondition = (condition) => {
  console.log(condition);
  return 0;
};
