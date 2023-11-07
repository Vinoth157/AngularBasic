import { UserDataComponent } from './../../../../five/components/child/user-data/user-data.component';
import { Component, Input, OnInit } from '@angular/core';
import { BgColourDirective } from 'src/app/six/shared/directives/bg-colour.directive';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  hostDirectives: [
    {
      directive: BgColourDirective,
    },
  ],
})
export class AddressComponent implements OnInit {
  constructor() {}

  @Input()
  usrData!: String;
  bColorCheck = true;
  ngOnInit(): void {
    console.log('test');
    console.log(this.usrData);
  }
}
