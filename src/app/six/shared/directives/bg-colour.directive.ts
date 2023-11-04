import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appBgColour]',
})
export class BgColourDirective {
  constructor() {}

  @HostBinding('style.color') color = 'red';

  @HostListener('mouseover') mouseOver() {
    this.color = 'blue';
  }

  @HostListener('mouseleave') mouseLeave() {
    this.color = 'red';
  }
}
