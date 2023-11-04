import { from, map, filter } from 'rxjs';
import { AbstractControl, AsyncValidatorFn, ValidatorFn } from '@angular/forms';

export function validatePatterns(regex: RegExp): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const pattern = regex.test('' + control.value);
    return !pattern ? { patternValid: { value: control.value } } : null;
  };
}
