#!/usr/bin/env node

import readlineSync from 'readline-sync';

const getProgression = () => {
  let firstNumber = Math.round(Math.random() * 100);
  const stepOfProgression = Math.round(Math.random() * 10);
  const lengthOfRowWithoutFirstBumber = 6;
  const numbers = [];
  numbers.push(firstNumber);
  for (let i = 0; i < lengthOfRowWithoutFirstBumber; i += 1) {
    const lastNumber = firstNumber + stepOfProgression;
    numbers.push(lastNumber);
    firstNumber = lastNumber;
  }
  return numbers;
};

const getHiddenProgression = (numbers) => {
  let index;
  for (let i = 0; !numbers.includes(index); i += 1) {
    index = Math.round(Math.random() * 10);
  }
  const hiddenNumber = numbers[index];
  numbers[index] = '..';
  return numbers;
};

const game = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hi, ${userName}!`);
  for (let i = 0; i <= 2; i += 1) {
    
  }
};
game();
