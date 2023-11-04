import { Component, OnInit } from '@angular/core';
import { Users } from '../../class/users';
import { UserInfoService } from '../../service/user-info.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users-info',
  templateUrl: './users-info.component.html',
  styleUrls: ['./users-info.component.css'],
})
export class UsersInfoComponent implements OnInit {
  constructor(private userInfo: UserInfoService) {}
  userDetails!: Users[];

  ngOnInit(): void {
    this.userDetails = this.userInfo.getAllUserDetails();
  }
}
