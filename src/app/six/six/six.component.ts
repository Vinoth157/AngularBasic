import { Component, OnInit, SkipSelf } from '@angular/core';
import { UserService } from '../DI/services/user.service';

@Component({
  selector: 'app-six',
  templateUrl: './six.component.html',
  providers: [UserService],
})
export class SixComponent implements OnInit {
  // constructor(@SkipSelf() private _userService: UserService) {
  //   if (!!this._userService) {
  //     this._userService.userName = 'Root ';
  //     this._userService.sayHi();
  //   }
  // }

  constructor(private _userService: UserService) {
    if (!!this._userService) {
      this._userService.userName = 'Root ';
      this._userService.sayHi();
    }
  }

  ngOnInit(): void {}
}
