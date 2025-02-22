import aliases from './aliases.json';
import fs from 'fs';
import path from 'path';

export const installBashAliases = (shell: string) => {
  if (shell.endsWith('/bin/bash')) {
    console.log('\x1b[32mBash shell detected\x1b[0m');

    let bashAliasCategroy = '';

    aliases.forEach(alias => {
      const isAliasCategory = (alias.startsWith('#') || alias === '');
      const splitAlias = alias.split('=');
      let bashAlias = '';

      if (isAliasCategory) {
        bashAlias = `\n${alias}\n`;
        bashAliasCategroy = alias.substring(2);
      } else {
        bashAlias = `alias ${splitAlias[0]}='${splitAlias[1]}'\n`;

        console.log(`Installing ${bashAliasCategroy} alias: ${splitAlias[0]}='${splitAlias[1]}'`);
      }

      fs.writeFileSync(
        path.join(process.env.HOME, '.bash_aliases'),
        bashAlias,
        {
          encoding: 'utf8',
          flag: 'a'
        }
      );

      if (!isAliasCategory) console.log(`\x1b[32m${bashAliasCategroy} alias installed\x1b[0m`);
    });

    console.log(
      '\n\x1b[1m\x1b[43m' +
      '                                                                \n' +
      '  (Optional) Refresh your terminal to apply the aliases using:  \n' +
      '  > source ~/.bashrc                                            \n' +
      '                                                                \n' +
      '\x1b[0m'
    );

    process.exit(0);
  }
};
