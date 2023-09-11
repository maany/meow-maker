
import {type Arguments, type CommandBuilder } from 'yargs';
import { steps, ACTION, execute } from '../lib/api';
import Config from '../config';

type Options = {
    step: ACTION,
    write: boolean | undefined
}

const stepsList: string[] = [];
steps.forEach((step, idx) => {
    stepsList.push(`${idx} - ${step}`)
})

export const command = "make <step>"
export const desc = `Execute a <step>. It is one of: \n${stepsList.join(", ")}`

export const builder: CommandBuilder<Options, Options> = (yargs) =>
  yargs
    .options({
      write: { type: 'boolean', alias: 'w' },
    })
    .choices('step', steps);

export const handler = (argv: Arguments<Options>): void => {
  const { step, write } = argv;
  const feature = Config.feature.kebab_case
  console.log(`Generating ${step} for feature: ${feature}`)
  const output = execute(step, Config, write)
  console.log(output)
  process.exit(0);
};
