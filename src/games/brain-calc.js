import commonGame from '../index.js';

const randomArrIndex = (array) => array[Math.floor(Math.random() * array.length)];

const task = 'What is the result of the expression?';

const getRound = () => {
  const numberOne = Math.round(Math.random() * 100);
  const numberTwo = Math.round(Math.random() * 100);
  const operations = ['+', '-', '*'];
  const randomOperation = randomArrIndex(operations);
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

const game = () => {
  commonGame(task, getRound);
};
export default game;
