import { NgControl } from '@angular/forms';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phoneNumber',
})
export class PhoneNumberPipe implements PipeTransform {
  constructor() {}
  transform(value: string, ...args: unknown[]): string {
    console.log('pipe called');
    let phoneNum: string = value;
    if (phoneNum) {
      let inputVal = phoneNum?.replace(/\D/g, '');
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
      // this.NgControl.valueAccessor?.writeValue(inputVal);
      return inputVal;
    }
    return '';
  }
}
