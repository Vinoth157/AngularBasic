import { PhoneNumberMaskDirective } from './directives/phone-number-mask.directive';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhoneNumberPipe } from './pipes/phone-number.pipe';
import { HighlightDirective } from './directives/highlight.directive';
import { UserFilterDirective } from './directives/user-filter.directive';

@NgModule({
  declarations: [
    PhoneNumberPipe,
    HighlightDirective,
    PhoneNumberMaskDirective,
    UserFilterDirective,
  ],
  imports: [CommonModule],
  exports: [
    PhoneNumberPipe,
    HighlightDirective,
    PhoneNumberMaskDirective,
    UserFilterDirective,
  ],
})
export class SharedModule {}
