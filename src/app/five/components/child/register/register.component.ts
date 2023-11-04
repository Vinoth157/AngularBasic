import { CustomFilterComponent } from './../../../../second/components/custom-filter/custom-filter.component';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  UntypedFormGroup,
  UntypedFormBuilder,
  Validators,
  UntypedFormControl,
  UntypedFormArray,
} from '@angular/forms';
import { validatePatterns } from '../../../../shared/validators/pattern-validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  constructor(private formBuilder: UntypedFormBuilder) {}

  ngOnInit(): void {}
  registerForm: UntypedFormGroup = this.formBuilder.group({
    userName: ['', [Validators.required, validatePatterns(/^[a-zA-Z0-9]/)]],
    password: [
      '',
      [
        Validators.required,
        Validators.minLength(5),
        validatePatterns(/^[a-zA-Z0-9@$#!&]/),
      ],
    ],
    email: ['', Validators.required],
  });
  dataForm: UntypedFormGroup = this.formBuilder.group({
    customData: this.formBuilder.array([
      // new FormControl('one'),
      // new FormControl('two'),
    ]),
  });

  loadData() {
    const data = [
      {
        device: 'mobile',
        availability: false,
      },
      {
        device: 'email',
        availability: true,
      },
    ];
    data.forEach((val: any) => {
      console.log(val.availability);
      let cusData = this.dataForm.get('customData') as UntypedFormArray;
      cusData.push(new UntypedFormControl(val.device));
    });
  }

  addData() {
    let cusData = this.dataForm.get('customData') as UntypedFormArray;
    cusData.push(new UntypedFormControl());
  }

  get passwordField() {
    return this.registerForm.get('password');
  }

  get userNameField() {
    return this.registerForm.get('userName');
  }

  get emailField() {
    return this.registerForm.get('email');
  }
  @Output()
  triggerLogin = new EventEmitter<string>();
  redirectToLogin() {
    this.triggerLogin.emit('login');
  }

  @Output()
  registerClose = new EventEmitter<string>();
  closeRegister() {
    this.registerClose.emit();
  }
}
