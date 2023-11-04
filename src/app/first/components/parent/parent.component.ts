import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styles: [],
})
export class ParentComponent implements OnInit {
  empName: string = '';
  empAge!: number;
  constructor() {}

  ngOnInit(): void {}
  employeeAge(event: any) {
    console.log(event);
    this.empAge = event;
  }
}
