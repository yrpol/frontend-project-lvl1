const stringToNumbersArr = (str) => {
  const numbers = [];
  let currentNum = '';
  for (let i = 0; i <= str.length; i += 1) {
    if (str[i] === ' ' || i === str.length) {
      numbers.push(Number(currentNum));
      currentNum = '';
    } else {
      currentNum += str[i];
    }
  }
  return numbers;
};

const gcd = (arr) => {
  const [a, b] = arr.sort((x, y) => y - x);
  if (a % b === 0) {
    return b;
  }
  return gcd([(a % b), b]);
};

const gcdGame = () => {
  const condition = 'Find the greatest common divisor of given numbers.';
  const expression = () => {
    const num1 = Math.floor(Math.random() * 100) + 1;
    const num2 = Math.floor(Math.random() * 100) + 1;
    return `${num1} ${num2}`;
  };
  const checkResult = (str) => gcd(stringToNumbersArr(str));
  return [condition, expression, checkResult];
};

export default gcdGame;
