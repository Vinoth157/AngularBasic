import { Injectable } from '@angular/core';
import { Logger } from '../interfaces/logger';

@Injectable({ providedIn: 'root' })
export class OtherLoggerService implements Logger {
  constructor() {}
  logFile: string = 'other logger';
  printMessage(message: string) {
    console.log('File name is', this.logFile, 'and message is', message);
  }
}
