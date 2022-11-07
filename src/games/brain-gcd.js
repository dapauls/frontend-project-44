import commonGame from '../index.js';

const task = 'Find the greatest common divisor of given numbers.';

const rightAnswer = (numOne, numTwo) => {
  let nod;
  if (numOne === numTwo) {
    nod = numOne;
  } else {
    let min;
    if (numOne > numTwo) {
      min = numTwo;
    } else if (numTwo > numOne) {
      min = numOne;
    }
    for (let j = min; j >= 1; j -= 1) {
      if (numOne % j === 0 && numTwo % j === 0) {
        nod = j;
        return nod;
      }
    }
  }
  return nod;
};

const getRound = () => {
  const num1 = Math.round(Math.random() * 100);
  const num2 = Math.round(Math.random() * 100);
  const question = `${num1} ${num2}`;
  const correctAnswer = rightAnswer(num1, num2).toString();
  return [question, correctAnswer];
};

const game = () => {
  commonGame(task, getRound);
};

export default game;
