import { Component } from '@angular/core';
import { UserService } from '../components/DI/services/user.service';

@Component({
  selector: 'app-dependency',
  templateUrl: './dependency.component.html',
})
export class DependencyComponent {
  constructor(private _userService: UserService) {
    if (!!this._userService) {
      this._userService.userName = 'Dependency Component';
      this._userService.sayHi();
    }
  }
}
