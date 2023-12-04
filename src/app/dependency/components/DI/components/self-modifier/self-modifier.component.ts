import { Component, Self } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-self-modifier',
  templateUrl: './self-modifier.component.html',
  providers: [UserService],
})
export class SelfModifierComponent {
  constructor(@Self() private _userService: UserService) {
    this._userService.sayHi();
  }
}
