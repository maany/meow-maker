
import Config from '../config';

export const command = "config"
export const desc = `Print the current config`


export const handler = (): void => {
  console.log(Config)
  process.exit(0);
};
