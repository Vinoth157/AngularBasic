import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
})
export class UserFormComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Input()
  addressData: string = 'vinoth';
}
