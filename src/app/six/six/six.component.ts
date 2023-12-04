import { Component, OnInit, SkipSelf } from '@angular/core';

@Component({
  selector: 'app-six',
  templateUrl: './six.component.html',
})
export class SixComponent implements OnInit {
  // constructor(@SkipSelf() private _userService: UserService) {
  //   if (!!this._userService) {
  //     this._userService.userName = 'Root ';
  //     this._userService.sayHi();
  //   }
  // }

  constructor() {}

  ngOnInit(): void {}
}
