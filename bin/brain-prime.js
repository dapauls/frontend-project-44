#!/usr/bin/env node

import readlineSync from 'readline-sync';

const getRandomNumber = (min, max) => {
  const minNum = Math.ceil(min);
  const maxNum = Math.floor(max);
  return Math.floor(Math.random() * (maxNum - minNum + 1) + minNum);
};

const isPrime = (num) => {
  const result = [];
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      result.push(1);
    }
  }
  let answer;
  if (result.length > 0) {
    answer = 'no';
  } else if (result.length === 0) {
    answer = 'yes';
  }
  return answer;
};

const game = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hi, ${userName}!`);
  for (let i = 0; i <= 2; i += 1) {
    console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
    const randomNumber = getRandomNumber(2, 100);
    console.log(`Question: ${randomNumber}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = isPrime(randomNumber);
    if (correctAnswer === userAnswer) {
      console.log('Correct!');
    } else {
      console.log(`Question: ${randomNumber}`);
      console.log(`Your answer: ${userAnswer}`);
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
game();
