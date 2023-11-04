import {
  Component,
  ContentChild,
  OnInit,
  ElementRef,
  AfterContentInit,
} from '@angular/core';

@Component({
  selector: 'app-child-three',
  templateUrl: './child-three.component.html',
  styles: [],
})
export class ChildThreeComponent implements OnInit, AfterContentInit {
  @ContentChild('cContentOne') contentOne!: ElementRef;
  @ContentChild('cContentTwo') contentTwo!: ElementRef;

  constructor() {}
  ngAfterContentInit(): void {
    this.contentOne.nativeElement.style.color = 'red';
    this.contentTwo.nativeElement.setAttribute(
      'style',
      'background-color:green'
    );
  }

  ngOnInit(): void {}
}
