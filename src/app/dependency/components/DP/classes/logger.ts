import { Logger } from '../interfaces/logger';

export const LoggerVal: Logger = {
  logFile: 'Logger Class',
  printMessage(message: string) {
    console.log('File name is', this.logFile, 'and message is', message);
  },
};
