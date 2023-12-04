import { Component, Injector } from '@angular/core';
import { LoggerService } from '../services/logger.service';
import { APP_CONFIG, appConfig } from '../classes/appConfig';
import { OtherLoggerService } from '../services/other-logger.service';

@Component({
  selector: 'app-use-factory',
  template: `
    <p>use-factory works!</p>
    <span>Check console</span>
  `,
  providers: [
    {
      provide: LoggerService,
      useFactory: (injector: Injector) => {
        return injector.get(APP_CONFIG).pi == '3.14'
          ? injector.get(OtherLoggerService)
          : injector.get(LoggerService);
      },
      deps: [Injector],
    },
  ],
})
export class UseFactoryComponent {
  constructor(private _logger: LoggerService) {
    console.log(this._logger.printMessage('Use Factory Component'));
  }
}
