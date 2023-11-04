import {
  AfterContentInit,
  AfterViewInit,
  Component,
  ContentChild,
  ElementRef,
  OnInit,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { ChildTwoComponent } from '../child-two/child-two.component';

@Component({
  selector: 'app-parent-two',
  templateUrl: './parent-two.component.html',
  styles: [],
  // encapsulation: ViewEncapsulation.None
})
export class ParentTwoComponent implements OnInit, AfterViewInit {
  @ViewChild('this')
  thisBtn!: ElementRef;

  @ViewChild('that')
  thatBtn!: ElementRef;

  @ViewChild('childTwo')
  childTwo!: ChildTwoComponent;

  constructor() {}

  ngOnInit(): void {
    console.log('ngOnInit');
  }
  ngAfterViewInit(): void {
    this.thisBtn.nativeElement.classList.add('btn-primary');
    console.log('ngAfterViewInit');
    console.log(this.childTwo.counter);
  }

  changeView(key: string) {
    if (key == 'this') {
      console.log(this.thisBtn.nativeElement.classList);
      this.thisBtn.nativeElement.classList.add('btn-primary');
      this.thatBtn.nativeElement.classList.remove('btn-primary');
    } else if (key == 'that') {
      this.thatBtn.nativeElement.classList.add('btn-primary');
      this.thisBtn.nativeElement.classList.remove('btn-primary');
    }
  }
  increment() {
    this.childTwo.inc();
  }

  decrement() {
    this.childTwo.dec();
  }
}
