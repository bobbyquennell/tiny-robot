import { Command, Robot } from './Robot';

export const isCommand = (input: string): input is Command => {
  return ['N', 'S', 'W', 'E'].includes(input);
};

export const executeCmds = (moveCommandList: string[], bot: Robot) => {
  console.log(`robot initial position: [${bot.position.x}, ${bot.position.y}]`);
  for (const cmd of moveCommandList) {
    const moves = cmd.split(' ');
    for (const singleMove of moves) {
      if (!isCommand(singleMove)) {
        console.log('skipped invalid cmd:', singleMove);
        break;
      }
      bot.move(singleMove);
    }
    console.log(
      `after commands: ${cmd}, robot stopped at: [${bot.position.x}, ${bot.position.y}]`,
    );
  }
};
