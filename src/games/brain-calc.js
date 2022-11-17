import commonGame from '../index.js';

import getRandomNumber from '../utils.js';

const description = 'What is the result of the expression?';

const rightAnswer = (num1, num2, symbol) => {
  switch (symbol) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      return null;
  }
};

const expression = (num1, num2, sign) => {
  const question = `${num1.toString()} ${sign} ${num2.toString()}`;
  return question;
};

/* const getRandomOperationSymbol = (symbols) => {
  const randomIndex = getRandomNumber(0, symbols.length);
  const randomSymbol = symbols[randomIndex];
  return randomSymbol;
}; */

const getRandomOperationSymbol = (arr) => arr[Math.floor(Math.random() * arr.length)];

const getAnswerAndQuestion = () => {
  const operations = ['+', '-', '*'];
  const numberOne = getRandomNumber(1, 300);
  const numberTwo = getRandomNumber(1, 300);
  const randomOperation = getRandomOperationSymbol(operations);
  const question = expression(numberOne, numberTwo, randomOperation);
  const correctAnswer = String(rightAnswer(numberOne, numberTwo, randomOperation));
  return [question, correctAnswer];
};

export default () => {
  commonGame(description, getAnswerAndQuestion);
};
