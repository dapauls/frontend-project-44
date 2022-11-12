import commonGame from '../index.js';

import getRandomNumber from '../utils.js';

const description = 'What is the result of the expression?';

const rightAnswer = (num1, num2, sign) => {
  let result;
  if (sign === '+') {
    result = num1 + num2;
  } else if (sign === '-') {
    result = num1 - num2;
  } else if (sign === '*') {
    result = num1 * num2;
  }
  return result.toString();
};

const expression = (num1, num2, sign) => {
  const question = `${num1.toString()} ${sign} ${num2.toString()}`;
  return question;
};

const getRandomArrIndex = (array) => array[Math.floor(Math.random() * array.length)];

const getRound = () => {
  const operations = ['+', '-', '*'];
  const numberOne = getRandomNumber(1, 300);
  const numberTwo = getRandomNumber(1, 300);
  const randomOperation = getRandomArrIndex(operations);
  const question = expression(numberOne, numberTwo, randomOperation);
  const correctAnswer = rightAnswer(numberOne, numberTwo, randomOperation);
  return [question, correctAnswer];
};

export default () => {
  commonGame(description, getRound);
};
