import commonGame from '../index.js';

import getRandomNumber from '../utils.js';

const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getAnswerAndQuestion = () => {
  const randomNumber = getRandomNumber(2, 100);
  const question = randomNumber;
  const correctAnswer = isPrime(randomNumber) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default () => {
  commonGame(description, getAnswerAndQuestion);
};
