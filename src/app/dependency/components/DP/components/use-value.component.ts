import { Component } from '@angular/core';
import { LoggerService } from '../services/logger.service';
import { LoggerVal } from '../classes/logger';

@Component({
  selector: 'app-use-value',
  template: ` <p>use-value works!</p>
    <span>Check console</span>`,
  providers: [
    {
      provide: LoggerService,
      useValue: LoggerVal,
    },
  ],
})
export class UseValueComponent {
  constructor(private logger: LoggerService) {
    this.logger.printMessage('use Value Component');
  }
}
