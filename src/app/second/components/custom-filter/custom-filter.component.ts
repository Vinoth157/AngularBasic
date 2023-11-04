import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-filter',
  templateUrl: './custom-filter.component.html',
  styles: [],
})
export class CustomFilterComponent implements OnInit {
  constructor() {}
  phoneNum: string = '';
  ccode: string = '';

  ngOnInit(): void {}
}
