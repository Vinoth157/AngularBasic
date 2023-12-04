import { Component, Self } from '@angular/core';
import { LoggerService } from '../services/logger.service';
import { OtherLoggerService } from '../services/other-logger.service';

@Component({
  selector: 'app-use-class',
  template: `
    <p>use-class works!</p>
    <span>Check console</span>
  `,
  providers: [{ provide: LoggerService, useClass: OtherLoggerService }],
  // providers: [LoggerService],
})
export class UseClassComponent {
  constructor(
    private logger: LoggerService,
    private otherLogger: OtherLoggerService
  ) {
    this.logger.printMessage('use Class Component');
    // LoggerService instance and OtherLoggerService instance aren't same since it is created using "UseClass provider"
    console.log('is both instance are same ?', this.logger == this.otherLogger);
  }
}
