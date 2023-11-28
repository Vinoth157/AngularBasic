import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css'],
})
export class DataFormComponent implements OnInit {
  constructor(private fb: FormBuilder) {}
  memberData: FormGroup = this.fb.group({});
  usrContact = [
    {
      device: 'mobile',
      displayName: 'Mobile Phone',
    },
    {
      device: 'email',
      displayName: 'Email ID',
    },
    {
      device: 'mailAddress',
      displayName: 'Mail Address',
    },
  ];
  usrDetail = ['one', 'two', 'three', 'four'];

  ngOnInit(): void {
    this.memberData = this.fb.group({
      memberName: ['', Validators.required],
      // memberCities: this.fb.array([]),
      memberConnect: this.fb.array([]),
    });

    this.usrDetail.forEach((val: any) => {
      this.memberConnects.push(new FormControl(false));
    });
  }

  get memberConnects() {
    return this.memberData?.controls['memberConnect'] as FormArray;
  }

  addData() {
    this.memberConnects.push(new FormControl());
  }
  getData() {
    console.log(this.memberData?.value);

    const data = this.memberData?.value.memberConnect
      // .map((v: any, i: number) => (v ? this.usrContact[i].device : null))
      .map((v: any, i: number) => {
        return {
          device: this.usrDetail[i],
          opted: v,
        };
      })
      .filter((v: any) => v.opted == true);
    console.log(data);
  }
}
