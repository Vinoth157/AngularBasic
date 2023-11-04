import { Injectable } from '@angular/core';
import { Users } from '../class/users';

@Injectable({
  providedIn: 'root',
})
export class UserInfoService {
  constructor() {}
  userDetails: Users[] = [
    { id: '1', name: 'dd', age: 29, place: 'karur', isAlive: true },
    { id: '2', name: 'madhan', age: 25, place: 'karur', isAlive: true },
    { id: '3', name: 'ram', age: 89, place: 'london', isAlive: false },
  ];

  getAllUserDetails(): Users[] {
    return this.userDetails;
  }

  getUserDataWithID(id: string): Users | void {
    return this.userDetails.find((user) => user.id == id);
  }
}
