import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styles: [],
})
export class ChildComponent implements OnInit {
  @Input('empName')
  EName!: String;
  empAge!: number;
  @Output()
  empAgeEventEmit = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  onChildClick() {
    this.empAgeEventEmit.emit(this.empAge);
  }
}
