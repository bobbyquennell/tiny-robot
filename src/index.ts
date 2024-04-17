import fs from 'fs';
import path from 'path';
import { executeCmds } from './helper';
import { Robot } from './Robot';

const data = fs.readFileSync(path.resolve(__dirname, 'commands.txt'));

const cmds: string[] = data.toString().trim().split('\n');
const bot = new Robot({ dimensionX: 9, dimensionY: 9 }, { x: 0, y: 0 });

executeCmds(cmds, bot);
