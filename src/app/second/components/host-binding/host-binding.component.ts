import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-host-binding',
  templateUrl: './host-binding.component.html',
  styleUrls: ['./host-binding.component.css'],
})
export class HostBindingComponent implements OnInit {
  constructor() {}
  phoneNum: Number = 0;
  phoneType: string = '';
  // test: string = '';

  ngOnInit(): void {}
}
