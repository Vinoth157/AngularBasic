import { Component, Host } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-host-modifier',
  template: `
    <div appParent>
      <div appChild></div>
    </div>
  `,
})

// not-complete
export class HostModifierComponent {
  constructor(@Host() private _userService: UserService) {
    if (!!this._userService) {
      this._userService.userName = 'Host';
      this._userService.sayHi();
    }
  }
}
