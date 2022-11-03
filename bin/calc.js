#!/usr/bin/env node

import readlineSync from 'readline-sync';

const randomArrIndex = (array) => array[Math.floor(Math.random() * array.length)];

const game = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hi, ${userName}!`);
  for (let i = 0; i <= 2; i += 1) {
    console.log('What is the result of the expression?');
    const numberOne = Math.round(Math.random() * 100);
    const numberTwo = Math.round(Math.random() * 100);
    const operations = ['+', '-', '*'];
    const randomOperation = randomArrIndex(operations);
    const expressionToString = `${numberOne.toString()} ${randomOperation} ${numberTwo.toString()}`;
    console.log(`Question: ${expressionToString}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = (num1, num2) => {
      let expression;
      if (randomOperation === '+') {
        expression = num1 + num2;
      } else if (randomOperation === '-') {
        expression = num1 - num2;
      } else if (randomOperation === '*') {
        expression = num1 * num2;
      }
      return expression;
    };
    if (userAnswer === correctAnswer(numberOne, numberTwo).toString()) {
      console.log('Correct!');
    } else {
      console.log(`Question: ${expressionToString}`);
      console.log(`Your answer: ${userAnswer}`);
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer(numberOne, numberTwo)}'.`);
      console.log(`Let's try again, ${userName}`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
game();
