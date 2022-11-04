#!/usr/bin/env node

import readlineSync from 'readline-sync';

const randomNumber = (min, max) => {
  const r = Math.random() * (max - min) + min;
  return Math.floor(r);
};

const randomIndex = () => randomNumber(0, 7);

const getProgression = () => {
  let firstNumber = Math.round(Math.random() * 100);
  const stepOfProgression = Math.round(Math.random() * 10);
  const lengthOfRowWithoutFirstNumber = 6;
  const numbers = [];
  numbers.push(firstNumber);
  for (let i = 0; i < lengthOfRowWithoutFirstNumber; i += 1) {
    const lastNumber = firstNumber + stepOfProgression;
    numbers.push(lastNumber);
    firstNumber = lastNumber;
  }
  return numbers;
};

const rightAnswer = (pro, num) => pro[num];

const getHiddenProgression = (array, randomHid) => {
  array[randomHid] = '.. ';
  return array;
};

const game = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hi, ${userName}!`);
  for (let i = 0; i <= 2; i += 1) {
    const hidden = randomIndex();
    const progression = getProgression();
    const progressionWithoutHidden = progression;
    const correctAnswer = rightAnswer(progressionWithoutHidden, hidden);
    const hiddenProgression = getHiddenProgression(progression, hidden);
    const question = `Question: ${hiddenProgression.join(', ')}`;
    console.log(question);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === correctAnswer.toString()) {
      console.log('Correct!');
    } else {
      console.log(question);
      console.log(`Your answer: ${userAnswer}`);
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
game();
