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
import { OptionalModifierComponent } from './DI/components/optional-modifier/optional-modifier.component';
import { SelfModifierComponent } from './DI/components/self-modifier/self-modifier.component';
import { SkipSelfModifierComponent } from './DI/components/skip-self-modifier/skip-self-modifier.component';
import { UserService } from './DI/services/user.service';
import { HostModifierComponent } from './DI/components/host-modifier/host-modifier.component';
import { ParentDirective } from './DI/components/host-modifier/directive/parent.directive';
import { ChildDirective } from './DI/components/host-modifier/directive/child.directive';

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
    OptionalModifierComponent,
    SelfModifierComponent,
    SkipSelfModifierComponent,
    HostModifierComponent,
    ParentDirective,
    ChildDirective,
  ],
  imports: [CommonModule, SixRoutingModule, ReactiveFormsModule],
  providers: [UserService],
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
