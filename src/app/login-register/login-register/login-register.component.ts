import { defaultIfEmpty, map, Subject, merge, from, timer, filter } from 'rxjs';
import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  NgControl,
  Validators,
} from '@angular/forms';
import { ValidateEmail } from 'src/app/shared/validators/email-available';
import { LoginComponent } from '../components/login/login.component';
import { RegisterComponent } from '../components/register/register.component';
import { LoginRegisterService } from '../services/login-register.service';

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.css'],
})
export class LoginRegisterComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private loginRegisterService: LoginRegisterService
  ) {}
  loginRegisterForm!: FormGroup;
  @ViewChild('loginReg', { read: ViewContainerRef, static: true })
  loginRegister!: ViewContainerRef;
  logRegSubject!: Subject<boolean>;

  get getUserEmail() {
    return this.loginRegisterForm.get('userEmail');
  }

  ngOnInit(): void {
    this.loginRegisterForm = this.fb.group({
      userEmail: [
        '',
        {
          validators: [Validators.required, Validators.email],
          asyncValidators: [ValidateEmail(this.loginRegisterService)],
          updateOn: 'blur',
        },
      ],
    });
  }

  isUserAvailable(user: HTMLInputElement) {
    if (!this.getUserEmail?.errors) {
      this.loginRegister.clear();
      this.loginRegisterService
        .filterUser(user.value)
        .pipe(defaultIfEmpty(null))
        .subscribe((val) => {
          this.loginRegister.clear();
          if (!!val) {
            this.loginRegister.createComponent(LoginComponent);
          } else {
            this.loginRegister.createComponent(RegisterComponent);
          }
        });
    }
  }
}
