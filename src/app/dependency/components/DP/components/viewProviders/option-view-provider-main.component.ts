import { Component } from '@angular/core';

@Component({
  selector: 'app-option-view-provider-main',
  template: `
    <app-option-view-provider-parent>
      <app-option-view-provider-child></app-option-view-provider-child>
    </app-option-view-provider-parent>
  `,
})
export class OptionViewProviderMainComponent {}
