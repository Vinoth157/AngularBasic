import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IUser, UserDataService } from '../../services/user-data.service';
import { timer } from 'rxjs';

@Component({
  selector: 'app-display-user-data-with-sort',
  templateUrl: './display-user-data-with-sort.component.html',
})
export class DisplayUserDataWithSortComponent implements OnInit {
  constructor(private _fb: FormBuilder, private userData: UserDataService) {}

  allUserData!: IUser[];
  userInfo: FormGroup = this._fb.group({
    name: ['', Validators.required],
    age: [0, Validators.required],
    gender: ['', Validators.required],
    city: ['', Validators.required],
  });

  ngOnInit(): void {
    this.userData.userDataWithAddress$.subscribe(
      (data) => (this.allUserData = data)
    );
  }

  loadData(): void {
    console.log(this.allUserData);
    console.log(this.userInfo.value);
    this.allUserData.push(this.userInfo.value);
    timer(1000).subscribe((data) => console.log(this.allUserData));
  }
}
