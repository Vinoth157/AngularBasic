import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { combineLatest, map, mergeMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserDataService {
  constructor(private httpClient: HttpClient) {}

  userData$ = this.httpClient
    .get<{ [key: string]: IUser }>(
      'https://spending-1593.firebaseio.com/students.json'
    )
    .pipe(
      map((users) => {
        let usersData: IUser[] = [];
        for (let id in users) {
          usersData.push({ ...users[id], id });
        }
        return usersData;
      })
    );
  addressData$ = this.httpClient
    .get<{ [key: string]: IAddress }>(
      'https://spending-1593.firebaseio.com/address.json'
    )
    .pipe(
      map((address) => {
        let addressData: IAddress[] = [];
        for (let id in address) {
          addressData.push({ ...address[id], id });
        }
        return addressData;
      })
    );

  userDataWithAddress$ = combineLatest([
    this.userData$,
    this.addressData$,
  ]).pipe(
    map(([users, addresses]) => {
      return users.map((user) => {
        return {
          ...user,
          city: addresses.find((address) => address.id === user.address)?.city,
        };
      });
    })
  );

  getUserData() {
    return this.httpClient
      .get<{ [key: string]: IUser }>(
        'https://spending-1593.firebaseio.com/students.json'
      )
      .pipe(
        map((users) => {
          let usersData: IUser[] = [];
          for (let user in users) {
            usersData.push(users[user]);
          }
          return usersData;
        })
      );
  }
}

export interface IUser {
  id?: string;
  name: string;
  age: number;
  gender: string;
  address?: string;
  city?: string;
}

export interface IAddress {
  id?: string;
  street: string;
  city: string;
}
