import { installBashAliases } from './bash-aliases'

export const installShellAliases = () => {
  const shell = process.env.COMSPEC || process.env.SHELL
  
  installBashAliases(shell)
  
  console.log('\x1b[31mUnsupported shell detected\x1b[0m\n') }
