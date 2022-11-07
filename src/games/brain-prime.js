import commonGame from '../index.js';

const getRandomNumber = (min, max) => {
  const minNum = Math.ceil(min);
  const maxNum = Math.floor(max);
  return Math.floor(Math.random() * (maxNum - minNum + 1) + minNum);
};

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

const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getRound = () => {
  const randomNumber = getRandomNumber(2, 100);
  const question = randomNumber;
  const rightAnswer = isPrime(randomNumber) ? 'yes' : 'no';
  const correctAnswer = rightAnswer;
  return [question, correctAnswer];
};

const game = () => {
  commonGame(task, getRound);
};

export default game();
