import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Users } from 'src/app/five/class/users';
import { UserInfoService } from 'src/app/five/service/user-info.service';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css'],
})
export class UserDataComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private userInfo: UserInfoService
  ) {}

  userData!: Users | void;
  ngOnInit(): void {
    this.route.params.subscribe((data) => {
      this.userData = this.userInfo.getUserDataWithID(data['id']);
    });
  }
}
