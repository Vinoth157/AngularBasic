import { CustomFilterComponent } from './../../../../second/components/custom-filter/custom-filter.component';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
  FormArray,
  Form,
} from '@angular/forms';
import { validatePatterns } from '../../../../shared/validators/pattern-validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {}
  cusData?: FormArray;
  registerForm: FormGroup = this.formBuilder.group({
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
  dataForm: FormGroup = this.formBuilder.group({
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
      this.cusData = this.dataForm.get('customData') as FormArray;
      this.cusData.push(new FormControl(val.device));
    });
  }

  addData() {
    this.cusData = this.dataForm.get('customData') as FormArray;
    console.log(this.registerForm.value);
    this.cusData.push(new FormControl());
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
