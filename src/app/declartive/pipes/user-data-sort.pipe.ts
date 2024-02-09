import { Pipe, PipeTransform } from '@angular/core';
import { IUser } from '../services/user-data.service';

@Pipe({
  name: 'userDataSort',
})
export class UserDataSortPipe implements PipeTransform {
  transform(value: IUser[], ...args: unknown[]): unknown {
    return value.sort(this.sorting);
  }

  sorting(a: IUser, b: IUser) {
    if (a.age < b.age) {
      return -1;
    }
    if (a.age > b.age) {
      return 1;
    }
    return 0;
  }
}
