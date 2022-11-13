import commonGame from '../index.js';

import getRandomNumber from '../utils.js';

const getProgression = (length) => {
  let firstNumber = getRandomNumber(1, 100);
  const stepOfProgression = getRandomNumber(1, 10);
  const numbers = [];
  numbers.push(firstNumber);
  for (let i = 0; i < length; i += 1) {
    const lastNumber = firstNumber + stepOfProgression;
    numbers.push(lastNumber);
    firstNumber = lastNumber;
  }
  return numbers;
};

const description = 'What number is missing in the progression?';

const getRound = () => {
  const length = getRandomNumber(5, 10);
  const progression = getProgression(length);
  const randomIndex = getRandomNumber(0, length);
  const correctAnswer = String(progression[randomIndex]);
  progression[randomIndex] = '..';
  const question = progression.join(' ');
  return [question, correctAnswer];
};

export default () => {
  commonGame(description, getRound);
};
