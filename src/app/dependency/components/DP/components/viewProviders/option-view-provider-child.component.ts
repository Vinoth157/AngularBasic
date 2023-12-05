import { Component } from '@angular/core';
import { OptionViewProviderService } from './option-view-provider.service';

@Component({
  selector: 'app-option-view-provider-child',
  template: ` <p>option-view-provider-child works!</p> `,
})
export class OptionViewProviderChildComponent {
  constructor(private _optionVPService: OptionViewProviderService) {
    console.log('view provider child');
    this._optionVPService.displayData();
  }
}
