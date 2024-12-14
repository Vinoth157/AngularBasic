import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-encapsule-shadow-dom',
  template: ` <p class="encapsule">encapsule-shadow-dom works!</p> `,
  styles: ['.encapsule{color:red;}'],
  encapsulation: ViewEncapsulation.ShadowDom, //default
})
export class EncapsuleShadowDomComponent {}
