import commonGame from '../index.js';

import getRandomNumber from '../utils.js';

const randomIndex = () => getRandomNumber(0, 7);

const getProgression = () => {
  let firstNumber = Math.round(Math.random() * 100);
  const stepOfProgression = Math.round(Math.random() * 10);
  const lengthOfRowWithoutFirstNumber = 6;
  const numbers = [];
  numbers.push(firstNumber);
  for (let i = 0; i < lengthOfRowWithoutFirstNumber; i += 1) {
    const lastNumber = firstNumber + stepOfProgression;
    numbers.push(lastNumber);
    firstNumber = lastNumber;
  }
  return numbers;
};

const rightAnswer = (pro, num) => pro[num];

const getHiddenProgression = (array, randomHid) => {
  array[randomHid] = '.. ';
  return array;
};

const description = 'What number is missing in the progression?';

const getRound = () => {
  const hidden = randomIndex();
  const progression = getProgression();
  const progressionWithoutHidden = progression;
  const answer = rightAnswer(progressionWithoutHidden, hidden);
  const correctAnswer = toString(answer);
  const hiddenProgression = getHiddenProgression(progression, hidden);
  const question = hiddenProgression.join(', ');
  return [question, correctAnswer];
};

export default () => {
  commonGame(description, getRound);
};
