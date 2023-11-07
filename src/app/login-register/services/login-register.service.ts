import { timer, filter, from, merge, Observable, defaultIfEmpty } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginRegisterService {
  constructor() {}

  listOfEmails = [
    'vinoth@gmail.com',
    'madhan@gmail.com',
    'niranjan@gmail.com',
    'dhivi@gmail.com',
  ];

  public filterUser(user: string): Observable<any> {
    return merge(from(this.listOfEmails), timer(500)).pipe(
      filter((em) => em == user)
    );
  }
}
