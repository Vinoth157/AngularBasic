import { Component, OnInit } from '@angular/core';
import {
  UntypedFormArray,
  UntypedFormBuilder,
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css'],
})
export class DataFormComponent implements OnInit {
  constructor(private fb: UntypedFormBuilder) {}
  memberData?: UntypedFormGroup;
  usrContact = [
    {
      device: 'mobile',
      availability: true,
    },
    {
      device: 'email',
      availability: false,
    },
    {
      device: 'mailAddress',
      availability: true,
    },
  ];

  ngOnInit(): void {
    this.memberData = this.fb.group({
      memberName: ['', Validators.required],
      // memberCities: this.fb.array([]),
      memberConnect: this.fb.array([]),
    });

    this.usrContact.forEach((val: any) => {
      this.memberConnects.push(new UntypedFormControl(val.availability));
    });
  }

  get memberConnects() {
    return this.memberData?.controls['memberConnect'] as UntypedFormArray;
  }

  addData() {
    this.memberConnects.push(new UntypedFormControl());
  }
  getData() {
    console.log(this.memberData?.value);

    const data = this.memberData?.value.memberConnect
      // .map((v: any, i: number) => (v ? this.usrContact[i].device : null))
      .map((v: any, i: number) => {
        return {
          device: this.usrContact[i].device,
          availability: v,
        };
      })
      .filter((v: null) => v !== null);
    console.log(data);
  }
}
