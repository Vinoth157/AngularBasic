import { Component } from '@angular/core';
import { LoggerService } from '../services/logger.service';
import { OtherLoggerService } from '../services/other-logger.service';

@Component({
  selector: 'app-use-existing',
  template: `
    <p>use-existing works!</p>
    <span>Check console</span>
  `,
  providers: [{ provide: LoggerService, useExisting: OtherLoggerService }],
})
export class UseExistingComponent {
  constructor(
    private logger: LoggerService,
    private otherLogger: OtherLoggerService
  ) {
    this.logger.printMessage('use Existing Component');
    // LoggerService instance and OtherLoggerService instance are SAME since it is created using "UseExisting provider"
    console.log('is both instance are same ?', this.logger == this.otherLogger);
  }
}
