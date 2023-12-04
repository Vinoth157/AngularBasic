import { REPORTER_CONFIG } from './../../classes/appConfig';
import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-use-multi-option',
  template: `
    <p>use-multi-option works!</p>
    <span>Check console</span>
  `,
})
export class UseMultiOptionComponent {
  constructor(@Inject(REPORTER_CONFIG) private report: ReadonlyArray<Report>) {
    console.log(this.report); // gets both service instance
  }
}
