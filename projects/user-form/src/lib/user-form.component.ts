import { AfterViewInit, Component, ContentChild } from '@angular/core';
import { UserAddressComponent } from './user-address/user-address.component';

@Component({
  selector: 'lib-userForm',
  templateUrl: './user-form.component.html',
  styles: [],
})
export class UserFormComponent implements AfterViewInit {
  constructor() {}
  ngAfterViewInit(): void {
    console.log('Testing');
  }

  @ContentChild('usrAddress')
  usrAddress!: UserAddressComponent;
}
