import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { EncapsuleEmulatedComponent } from './encapsule-emulated.component';
import { EncapsuleNoneComponent } from './encapsule-none.component';
import { EncapsuleShadowDomComponent } from './encapsule-shadow-dom.component';

@Component({
  selector: 'app-encapsule',
  templateUrl: './encapsule.component.html',
  styles: ``,
})
export class EncapsuleComponent {
  @ViewChild('viewComp', { read: ViewContainerRef, static: true })
  private viewComp!: ViewContainerRef;

  test(val: string) {
    this.viewComp.clear();
    if (val == 'emulated') {
      this.viewComp.createComponent(EncapsuleEmulatedComponent);
    } else if (val == 'none') {
      this.viewComp.createComponent(EncapsuleNoneComponent);
    } else if (val == 'shadowDom') {
      this.viewComp.createComponent(EncapsuleShadowDomComponent);
    }
  }
}
