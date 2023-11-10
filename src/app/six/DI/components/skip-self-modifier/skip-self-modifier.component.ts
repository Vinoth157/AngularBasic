import { Component, SkipSelf, Optional } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-skip-self-modifier',
  templateUrl: './skip-self-modifier.component.html',
  providers: [UserService],
})
export class SkipSelfModifierComponent {
  constructor(@SkipSelf() private _userService: UserService) {
    if (!!this._userService) {
      this._userService.userName = 'Main ';
      this._userService.sayHi();
    }
  }
}
