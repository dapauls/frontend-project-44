import commonGame from '../index.js';

import { getRandomArrIndex } from '../utils.js';

const description = 'What is the result of the expression?';

const getRound = () => {
  const numberOne = Math.round(Math.random() * 100);
  const numberTwo = Math.round(Math.random() * 100);
  const operations = ['+', '-', '*'];
  const randomOperation = getRandomArrIndex(operations);
  const question = `${numberOne.toString()} ${randomOperation} ${numberTwo.toString()}`;
  const rightAnswer = (num1, num2) => {
    let result;
    if (randomOperation === '+') {
      result = num1 + num2;
    } else if (randomOperation === '-') {
      result = num1 - num2;
    } else if (randomOperation === '*') {
      result = num1 * num2;
    }
    return result.toString();
  };
  const correctAnswer = rightAnswer(numberOne, numberTwo);
  return [question, correctAnswer];
};

export default () => {
  commonGame(description, getRound);
};
