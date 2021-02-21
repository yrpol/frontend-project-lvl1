const condition = 'Find the greatest common divisor of given numbers.';

const expression = () => {
  const num1 = Math.floor(Math.random() * (100 - 1) + 1);
  const num2 = Math.floor(Math.random() * (100 - 1) + 1);
  return `${num1} ${num2}`;
};

const gcd = (arr) => {
  const [a, b] = arr.sort((x, y) => y - x);
  if (a % b === 0) {
    return b;
  }
  return gcd([(a % b), b]);
};

const check = (expr, answer) => {
  const numbers = expr.split(' ').map(Number);
  const correctAnswer = gcd(numbers);
  const checkResult = correctAnswer === Number(answer);
  return [correctAnswer, checkResult];
};

const gcdGame = () => [condition, expression, check];

export default gcdGame;
