/* eslint-disable no-console */

const isEven = (num) => {
  if (num % 2 === 0) {
    return true;
  }
  return false;
};

const evenGame = () => {
  const condition = 'Answer "yes" if the number is even, otherwise answer "no".';
  const expression = () => Math.floor(Math.random() * 100);
  const checkResult = (numb) => {
    if (isEven(numb)) {
      return 'yes';
    }
    return 'no';
  };

  return [condition, expression, checkResult];
};

export default evenGame;
