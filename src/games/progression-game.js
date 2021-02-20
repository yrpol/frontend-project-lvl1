const progressionGame = () => {
  const condition = 'What number is missing in the progression?';

  const expression = () => {
    const indexOfHiddenNumber = Math.floor(Math.random() * (9 - 1) + 1); // index range: 1 - 8
    const progressionStep = Math.floor(Math.random() * (10 - 1) + 1); // step range: 1 - 9

    let nextNumberOfProgression = Math.floor(Math.random() * 20);
    let result = `${nextNumberOfProgression} `; // <= first iteration

    for (let i = 1; i < 10; i += 1) { // <= rest 9 iterations
      nextNumberOfProgression += progressionStep;
      result += (i === indexOfHiddenNumber) ? '.. ' : `${nextNumberOfProgression} `;
    }

    return result;
  };

  const check = (expr, answer) => {
    const stepSize = (arr) => {
      const len = arr.length;
      const firstItem = Number(arr[0]);
      const lastItem = Number(arr[len - 1]);
      const step = (lastItem - firstItem) / (len - 1);
      return step;
    };

    const findIndexOfHidenNumber = (sequence) => {
      for (let i = 0; i < sequence.length; i += 1) {
        if (sequence[i] === '..') {
          return i;
        }
      }
      return false;
    };

    const progression = expr.trim().split(' ');
    const indexOfHidenNumber = findIndexOfHidenNumber(progression);
    const step = stepSize(progression);

    const correctAnswer = Number(progression[indexOfHidenNumber - 1]) + step;
    const checkResult = (correctAnswer === Number(answer));
    return [correctAnswer, checkResult];
  };

  return [condition, expression, check];
};

export default progressionGame;
