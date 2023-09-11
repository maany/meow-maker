#!/usr/bin/env node
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

const icon = `
|\__/,|   ('\\    Meow Maker!
|o o  |__ _)\\     The teamplate generator for CATS
_.( T   )  '  /      (Clean Architecture TypeScript SDK)
((_ '^--' /_<  \
`
console.log(icon)

const argv = yargs(hideBin(process.argv))
  // Use the commands directory to scaffold.
  .commandDir('commands')
  // Enable strict mode.
  .strict()
  // Useful aliases.
  .alias({ h: 'help', l: 'list' })
  .argv;
