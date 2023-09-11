#!/usr/bin/env node
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

console.log("Welcome to Meow Maker")
const argv = yargs(hideBin(process.argv))
  // Use the commands directory to scaffold.
  .commandDir('commands')
  // Enable strict mode.
  .strict()
  // Useful aliases.
  .alias({ h: 'help', l: 'list' })
  .argv;
