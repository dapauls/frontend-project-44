#!/usr/bin/env node

import greeting from '../src/cli.js';

const game = () => {
  console.log('Welcome to the Brain Games!');
  greeting();
};

game();
