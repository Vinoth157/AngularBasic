import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-encapsule-none',
  template: ` <p class="encapsule">encapsule-none works!</p> `,
  styles: ['.encapsule{color:red;}'],
  encapsulation: ViewEncapsulation.None,
})
export class EncapsuleNoneComponent {}
