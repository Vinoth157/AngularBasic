import { APP_CONFIG, appConfig } from './../classes/appConfig';
import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-use-injection-token',
  template: ` <p>use-injection-token works!</p>
    <span>Check console</span>`,
})
export class UseInjectionTokenComponent {
  constructor(@Inject(APP_CONFIG) private config: appConfig) {
    console.log('Message from use injection token component');
    console.log(this.config.pi);
  }
}
