import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SixRoutingModule } from './six-routing.module';
import { SixComponent } from './six/six.component';
import { SixHeaderComponent } from './six-header/six-header.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { AddressComponent } from './components/child/address/address.component';
import { BgColourDirective } from './shared/directives/bg-colour.directive';
import { FormFieldRecordComponent } from './components/form-field-record/form-field-record.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TemplateComponent } from './components/template/template.component';
import { TemplateChildComponent } from './components/template/template-child/template-child.component';
import { TemplateParentComponent } from './components/template/template-parent/template-parent.component';
import { TemplateOutletSampleComponent } from './components/template-outlet/template-outlet-sample.component';
import { TemplateOutletParentComponent } from './components/template-outlet/template-outlet-parent/template-outlet-parent.component';
import { TemplateOutletChildComponent } from './components/template-outlet/template-outlet-child/template-outlet-child.component';
import { DynamicOutletComponent } from './components/dynamic-outlet/dynamic-outlet.component';
import { UserComponent } from './components/dynamic-outlet/user/user.component';
import { AdminComponent } from './components/dynamic-outlet/admin/admin.component';
import { EncapsuleComponent } from './components/encapsule/encapsule.component';
import { EncapsuleEmulatedComponent } from './components/encapsule/encapsule-emulated.component';
import { EncapsuleShadowDomComponent } from './components/encapsule/encapsule-shadow-dom.component';
import { EncapsuleNoneComponent } from './components/encapsule/encapsule-none.component';

@NgModule({
  declarations: [
    SixComponent,
    SixHeaderComponent,
    UserFormComponent,
    AddressComponent,
    // BgColourDirective,
    FormFieldRecordComponent,
    TemplateComponent,
    TemplateChildComponent,
    TemplateParentComponent,
    TemplateOutletSampleComponent,
    TemplateOutletParentComponent,
    TemplateOutletChildComponent,
    DynamicOutletComponent,
    UserComponent,
    AdminComponent,
    EncapsuleComponent,
    EncapsuleEmulatedComponent,
    EncapsuleShadowDomComponent,
    EncapsuleNoneComponent,
  ],
  imports: [CommonModule, SixRoutingModule, ReactiveFormsModule],
  providers: [
    // UserService,
  ],
})
export class SixModule {
  // Below constructor for SkipSelf Resolution Modifiers
  // constructor(private _userService: UserService) {
  //   if (!!this._userService) {
  //     this._userService.userName = 'Model ';
  //     this._userService.sayHi();
  //   }
  // }

  constructor() {}
}
