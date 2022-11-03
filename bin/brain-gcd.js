#!/usr/bin/env node

import readlineSync from 'readline-sync';

const game = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hi, ${userName}!`);
  for (let i = 0; i <= 2; i += 1) {
    console.log('Find the greatest common divisor of given numbers.');
    const num1 = Math.round(Math.random() * 100);
    const num2 = Math.round(Math.random() * 100);
    const question = `${num1} ${num2}`;
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = (numOne, numTwo) => {
      let nod;
      if (numOne === numTwo) {
        nod = numOne;
      } else {
        let min;
        if (numOne > numTwo) {
          min = numTwo;
        } else if (numTwo > numOne) {
          min = numOne;
        }
        for (let j = min; j >= 1; j -= 1) {
          if (numOne % j === 0 && numTwo % j === 0) {
            nod = j;
            return nod;
          }
        }
      }
      return nod;
    };
    if (userAnswer === correctAnswer(num1, num2).toString()) {
      console.log('Correct!');
    } else {
      console.log(`Question: ${question}`);
      console.log(`Your answer: ${userAnswer}`);
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer(num1, num2)}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
game();
