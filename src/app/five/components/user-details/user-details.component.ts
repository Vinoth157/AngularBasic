import { Component, OnInit } from '@angular/core';
import { Users } from '../../class/users';
import { of, timer, concatMap } from 'rxjs';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
})
export class UserDetailsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  userDetails: Users[] = [
    { id: '1', name: 'vinoth', age: 29, place: 'karur', isAlive: true },
    { id: '2', name: 'madhan', age: 25, place: 'karur', isAlive: true },
    { id: '3', name: 'ram', age: 89, place: 'london', isAlive: false },
  ];
}
