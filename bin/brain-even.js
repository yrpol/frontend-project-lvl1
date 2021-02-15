#!/usr/bin/env node

/* eslint-disable  import/extensions */
import evenGame from '../src/even-game.js';
import greeting from '../src/cli.js';

const name = greeting();
evenGame(name);
