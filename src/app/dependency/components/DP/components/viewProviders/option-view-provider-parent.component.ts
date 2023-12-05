import { OptionViewProviderService } from './option-view-provider.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-option-view-provider-parent',
  template: `
    <h1>View Provider Parent Component</h1>
    <app-option-view-provider-child></app-option-view-provider-child>
    <hr />
    <ng-content></ng-content>
  `,
  viewProviders: [OptionViewProviderService],
})
export class OptionViewProviderParentComponent {
  constructor(private _optionVPService: OptionViewProviderService) {
    this._optionVPService.displayData();
  }
}
