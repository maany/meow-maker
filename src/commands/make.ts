
import { config, type Arguments, type CommandBuilder } from 'yargs';
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

export const command = "choice <step>"
export const desc = `Execute a <step>. It is one of: \n${stepsList.join(", ")}`

export const builder: CommandBuilder<Options, Options> = (yargs) =>
  yargs
    .options({
      write: { type: 'boolean', alias: 'w' },
    })
    .choices('step', steps);

export const handler = (argv: Arguments<Options>): void => {
  const { step, write } = argv;
  execute(step, Config, write)
  process.exit(0);
};
