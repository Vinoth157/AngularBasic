import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appBgColour]',
  standalone: true,
})
export class BgColourDirective {
  constructor() {}
  @Input()
  bColorCheck!: boolean;

  @HostBinding('style.color') color = this.bColorCheck ? 'red' : 'green';

  @HostListener('mouseover') mouseOver() {
    this.color = 'blue';
  }

  @HostListener('mouseleave') mouseLeave() {
    this.color = 'red';
  }
}
