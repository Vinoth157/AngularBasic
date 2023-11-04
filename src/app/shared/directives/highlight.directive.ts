import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  constructor() {}

  @HostBinding('style.color') color = 'red';

  @HostListener('mouseover') mouseOver() {
    this.color = 'blue';
  }

  @HostListener('mouseleave') mouseLeave() {
    this.color = 'red';
  }
}
