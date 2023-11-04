import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { validatePatterns } from '../../../../shared/validators/pattern-validator';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {}

  loginForm: FormGroup = this.formBuilder.group({
    username: ['', [Validators.required, validatePatterns(/^\[a-zA-Z0-9]/)]],
    password: [
      '',
      [
        Validators.required,
        Validators.minLength(5),
        validatePatterns(/^[a-zA-Z0-9@$#!&]/),
      ],
    ],
  });
  get passwordField() {
    return this.loginForm.get('password');
  }

  get userNameField() {
    return this.loginForm.get('username');
  }
  @Output()
  triggerRegister = new EventEmitter<string>();

  @Output()
  loginClose = new EventEmitter<string>();

  redirectToRegister(): void {
    console.log('teestt');
    this.triggerRegister.emit('register');
  }

  closeLogin(): void {
    this.loginClose.emit();
  }
}
