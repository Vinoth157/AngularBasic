import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-standalone-register',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './standalone-register.component.html',
})
export class StandaloneRegisterComponent implements OnInit {
  registerForm!: FormGroup;
  ngOnInit(): void {
    this.registerForm = this._fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required, Validators.email],
      password: ['', Validators.required],
    });
  }

  constructor(private _fb: FormBuilder) {}
}
