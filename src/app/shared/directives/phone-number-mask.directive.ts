import { Directive, HostListener, Input } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[appPhoneNumberMask]',
})
export class PhoneNumberMaskDirective {
  constructor(private NgControl: NgControl) {}

  @Input('appPhoneNumberMask') phoneType: string = '';
  @HostListener('ngModelChange', ['$event'])
  onModelChange(event: string) {
    if (this.phoneType == 'tel') this.maskAsTelephoneNum(event);
    else if (this.phoneType == 'mob') this.maskAsMobileNum(event);
    else this.NgControl.valueAccessor?.writeValue(event);
  }

  maskAsMobileNum(event: string) {
    if (event) {
      let inputVal = event.replace(/\D/g, '');
      inputVal = inputVal.substring(0, 10);
      if (inputVal.length === 0) {
        inputVal = '';
      } else if (inputVal.length <= 5) {
        inputVal = inputVal.replace(/^(\d{0,5})/, '$1');
      } else if (inputVal.length <= 10) {
        inputVal = inputVal.replace(/^(\d{0,5})(\d{0,5})/, '$1- $2');
      } else {
        inputVal = inputVal.replace(/^(\d{0,5})(\d{0,5})/, '$1- $2');
      }
      this.NgControl.valueAccessor?.writeValue(inputVal);
      // this.NgModel.control.setValue(inputVal);
    }
  }

  maskAsTelephoneNum(event: string) {
    if (event) {
      let inputVal = event.replace(/\D/g, '');
      inputVal = inputVal.substring(0, 10);
      if (inputVal.length === 0) {
        inputVal = '';
      } else if (inputVal.length <= 3) {
        inputVal = inputVal.replace(/^(\d{0,3})/, '($1)');
      } else if (inputVal.length <= 6) {
        inputVal = inputVal.replace(/^(\d{0,3})(\d{0,3})/, '($1) $2');
      } else if (inputVal.length <= 10) {
        inputVal = inputVal.replace(
          /^(\d{0,3})(\d{0,3})(\d{0,4})/,
          '($1) $2-$3'
        );
      } else {
        inputVal = inputVal.replace(
          /^(\d{0,3})(\d{0,3})(\d{0,4})/,
          '($1) $2-$3'
        );
      }
      this.NgControl.valueAccessor?.writeValue(inputVal);
    }
  }
}
