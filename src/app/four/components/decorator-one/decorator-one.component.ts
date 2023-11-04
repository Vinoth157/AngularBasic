import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { testDecorator } from '../../class/class.decorator';
import { consoleLog, triggerEvent } from '../../class/method.decorator';

@Component({
  selector: 'app-decorator-one',
  templateUrl: './decorator-one.component.html',
  styles: ['p{color:red;}; h1{color:green;}'],
})
@testDecorator('<h2>ttt</h2>', 'app')
export class DecoratorOneComponent implements OnInit {
  constructor() {}
  userName: string = 'vinoth';
  private _userAge: number = 2;

  setUserAge(userAge: number) {
    this._userAge = userAge;
  }
  getUserAge() {
    return this._userAge;
  }
  @consoleLog('Button Click')
  clickBtn(userData: string): void {
    console.log(userData);
  }

  @triggerEvent('click')
  mousePoints(event: MouseEvent) {
    console.log('Gets mouse point coordination on each click');
    console.log(event.screenX);
    console.log(event.screenY);
  }

  ngOnInit(): void {}
}
let test = new DecoratorOneComponent();
console.log(test.userName);
console.log(test);
