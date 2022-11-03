#!/usr/bin/env node

import readlineSync from 'readline-sync';

const game = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hi, ${userName}!`);
  for (let i = 0; i <= 2; i += 1) {
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    const randomNumber = Math.round(Math.random() * 100);
    console.log(`Question: ${randomNumber}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (randomNumber % 2 === 0) {
      const correctAnswer = 'yes';
      if (userAnswer === correctAnswer) {
        console.log('Correct!');
      } else {
        console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}. Let's try again, ${userName}!`);
        return;
      }
    } else if (randomNumber % 2 !== 0) {
      const correctAnswer = 'no';
      if (userAnswer === correctAnswer) {
        console.log('Correct!');
      } else {
        console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. Let's try again, ${userName}!`);
        return;
      }
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
game();
