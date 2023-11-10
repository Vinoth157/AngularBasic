import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormRecord,
  FormGroup,
  AbstractControl,
} from '@angular/forms';

@Component({
  selector: 'app-form-field-record',
  templateUrl: './form-field-record.component.html',
})
export class FormFieldRecordComponent implements OnInit {
  constructor(private fb: FormBuilder) {}
  dataForm!: FormRecord;
  loginForm!: FormGroup;
  userData = ['Vinoth', 'Niranjan', 'Madhan'];
  ngOnInit(): void {
    this.dataForm = this.fb.record(new FormControl<string | null>(''));
    this.loginForm = this.fb.group({ loginId: [''], password: [''] });

    this.userData.forEach((key, i) => {
      this.dataForm.addControl(key, new FormControl(key));
    });
  }
  saveData(eachUser: any) {
    // this.dataForm.value;
    console.log(this.dataForm.get(eachUser)?.value);
    console.log(this.dataForm.controls);
    console.log(this.dataForm.value);
    console.log(this.dataForm);
  }
  login() {
    console.log(this.loginForm.value);
  }
}
