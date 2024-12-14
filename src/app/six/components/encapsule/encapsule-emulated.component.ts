import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-encapsule-emulated',
  template: `
    <p class="encapsule">encapsule-emulated works!</p>
    <p>For above template tag,</p>
  `,
  styles: ['.encapsule{color:red;}'],
  encapsulation: ViewEncapsulation.Emulated, //default
})
export class EncapsuleEmulatedComponent {}
