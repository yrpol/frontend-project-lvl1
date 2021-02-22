/* eslint-disable no-console */
/* eslint-disable  import/extensions */
import * as cli from './cli.js';

const startGame = (gameName) => {
  const [condition, expression, check] = gameName();
  const name = cli.greeting();

  cli.submitCondition(condition);

  for (let i = 0; i < 3; i += 1) {
    const currentQuestion = expression();
    cli.makeQuestion(currentQuestion);
    const customerAnswer = cli.getAnswer();
    const [correctAnswer, checkResult] = check(currentQuestion, customerAnswer);
    if (!checkResult) {
      cli.wrongAnswer(customerAnswer, correctAnswer, name);
      return false;
    }
    cli.correct();
  }

  cli.congratulations(name);
  return true;
};

export default startGame;
