import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  // hostDirectives: []
})
export class AddressComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    console.log('test');
  }
}
