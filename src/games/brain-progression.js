import commonGame from '../index.js';

import getRandomNumber from '../utils.js';

const getProgression = (firstNumber, stepOfProgression, lengthOfProgression) => {
  const progression = [];
  for (let i = 0; i < lengthOfProgression; i += 1) {
    progression.push(firstNumber + stepOfProgression * i);
  }
  return progression;
};

const description = 'What number is missing in the progression?';

const getAnswerAndQuestion = () => {
  const lengthOfProgression = getRandomNumber(5, 10);
  const stepOfProgression = getRandomNumber(1, 10);
  const firstNumber = getRandomNumber(1, 100);
  const progression = getProgression(firstNumber, stepOfProgression, lengthOfProgression);
  const randomIndex = getRandomNumber(0, lengthOfProgression);
  const correctAnswer = String(progression[randomIndex]);
  progression[randomIndex] = '..';
  const question = progression.join(' ');
  return [question, correctAnswer];
};

export default () => {
  commonGame(description, getAnswerAndQuestion);
};
