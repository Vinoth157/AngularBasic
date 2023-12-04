import { Injectable } from '@angular/core';
import { OtherLoggerService } from './other-logger.service';
import { Logger } from '../interfaces/logger';

@Injectable({
  providedIn: 'root',
  // useClass: OtherLoggerService,
})
export class LoggerService implements Logger {
  constructor() {}
  logFile: string = 'Logger';
  printMessage(message: string) {
    console.log('File name is', this.logFile, 'and message is', message);
  }
}
