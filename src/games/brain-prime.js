import commonGame from '../index.js';

import { getRandomNumberRange } from '../utils.js';

const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num < 2) {
      return false;
    }
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getRound = () => {
  const randomNumber = getRandomNumberRange(2, 100);
  const question = randomNumber;
  const rightAnswer = isPrime(randomNumber) ? 'yes' : 'no';
  const correctAnswer = rightAnswer;
  return [question, correctAnswer];
};

export default () => {
  commonGame(description, getRound);
};
