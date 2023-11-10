import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
  userName!: string;
  constructor() {}

  sayHi() {
    const name = this.userName || 'unknown';
    console.log('Hi User ', name);
  }
}
