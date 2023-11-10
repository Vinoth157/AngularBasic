import { Component, Optional } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-optional-modifier',
  templateUrl: './optional-modifier.component.html',
})
export class OptionalModifierComponent {
  constructor(@Optional() private _userService: UserService) {}
}
