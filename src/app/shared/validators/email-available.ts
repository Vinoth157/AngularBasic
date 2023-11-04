import { from, map, filter, defaultIfEmpty, merge, timer } from 'rxjs';
import { AbstractControl, AsyncValidatorFn } from '@angular/forms';
import { LoginRegisterService } from 'src/app/login-register/services/login-register.service';

export function ValidateEmail(logRegService: LoginRegisterService) {
  return (userEmail: AbstractControl): { [key: string]: any } | null => {
    return logRegService.filterUser(userEmail.value).pipe(
      map((email) => {
        return email ? { emailAvailable: true } : null;
      }),
      defaultIfEmpty(null)
    );
  };
}
