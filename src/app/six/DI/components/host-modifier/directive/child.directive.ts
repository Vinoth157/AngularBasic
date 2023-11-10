import { Directive, Host } from '@angular/core';
import { UserService } from '../../../services/user.service';

@Directive({
  selector: '[appChild]',
})
export class ChildDirective {
  constructor(@Host() private _userService: UserService) {
    this._userService.sayHi();
  }
}
