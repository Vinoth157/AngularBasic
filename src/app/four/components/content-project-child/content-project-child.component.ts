import {
  Component,
  OnInit,
  ElementRef,
  ContentChild,
  AfterContentInit,
  ViewChild,
  AfterViewInit,
  ViewChildren,
  QueryList,
  ContentChildren,
  Renderer2,
} from '@angular/core';

@Component({
  selector: 'app-content-project-child',
  templateUrl: './content-project-child.component.html',
  styleUrls: [],
})
export class ContentProjectChildComponent
  implements OnInit, AfterContentInit, AfterViewInit
{
  @ContentChild('childHeader') childHeader!: ElementRef;
  @ViewChild('childContent') viewContent!: ElementRef;
  @ViewChild('fullContent') fullContent!: ElementRef;
  @ViewChildren('childrenView') viewChildContents!: QueryList<ElementRef>;
  @ContentChildren('childrenContent') contentChildren!: QueryList<ElementRef>;

  constructor(private render: Renderer2) {}
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
    this.viewContent.nativeElement.style.color = 'green';
    this.viewChildContents.forEach(
      (val: any) => (val.nativeElement.style.color = 'red')
    );
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
    this.childHeader.nativeElement.style.backgroundColor = 'green';
    this.contentChildren.forEach(
      (val: any) => (val.nativeElement.style.color = 'blue')
    );
  }

  ngOnInit(): void {
    console.log('ngOnInit');
  }
}
