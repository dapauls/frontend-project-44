import commonGame from '../index.js';

import getRandomNumber from '../utils.js';

const description = 'Find the greatest common divisor of given numbers.';

const getGcd = (numOne, numTwo) => {
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
  const num1 = getRandomNumber(1, 100);
  const num2 = getRandomNumber(1, 100);
  const question = `${num1} ${num2}`;
  const correctAnswer = getGcd(num1, num2).toString();
  return [question, correctAnswer];
};

export default () => {
  commonGame(description, getRound);
};
