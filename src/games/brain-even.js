import commonGame from '../index.js';

const task = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (number) => number % 2 === 0;

const getRound = () => {
  const question = Math.round(Math.random() * 100);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const game = () => {
  commonGame(task, getRound);
};

export default game;
