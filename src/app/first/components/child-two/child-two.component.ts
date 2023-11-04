import {
  AfterContentInit,
  Component,
  ContentChild,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-child-two',
  templateUrl: './child-two.component.html',
  styles: [],
})
export class ChildTwoComponent implements OnInit {
  counter: number = 0;
  constructor() {}

  ngOnInit(): void {}
  inc() {
    this.counter++;
  }

  dec() {
    this.counter--;
  }
}
