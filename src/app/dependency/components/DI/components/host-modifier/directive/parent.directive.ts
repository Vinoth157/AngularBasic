import { Directive, Host } from '@angular/core';
import { UserService } from '../../../services/user.service';

@Directive({
  selector: '[appParent]',
})
export class ParentDirective {
  constructor(private _userService: UserService) {
    this._userService.userName = 'parent';
    this._userService.sayHi();
  }
}
