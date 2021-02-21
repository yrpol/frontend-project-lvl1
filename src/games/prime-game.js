const primeGame = () => {
  const condition = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  const expression = () => Math.floor(Math.random() * 100);

  const check = (expr, answer) => {
    const isPrime = (num) => {
      if (num < 1) {
        return false;
      }
      for (let i = 2; i < num; i += 1) {
        if (num % i === 0) {
          return false;
        }
      }
      return true;
    };
    const correctAnswer = isPrime(expr) ? 'yes' : 'no';
    const checkResult = correctAnswer === answer;
    return [correctAnswer, checkResult];
  };
  return [condition, expression, check];
};

export default primeGame;
