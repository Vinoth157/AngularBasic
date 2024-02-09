import { Observable } from 'rxjs';
import { IUser, UserDataService } from './../../services/user-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-firebase-data',
  templateUrl: './display-firebase-data.component.html',
})
export class DisplayFirebaseDataComponent implements OnInit {
  userData!: IUser[];
  userDataObs$!: Observable<IUser[]>;
  userDataWithAddress$!: Observable<IUser[]>;

  constructor(private userDataSer: UserDataService) {}
  ngOnInit(): void {
    this.userDataObs$ = this.userDataSer.userData$;
    this.userDataWithAddress$ = this.userDataSer.userDataWithAddress$;
    // this.userDataSer.getUserData().subscribe((data) => {
    //   this.userData = data;
    // });
  }
}
