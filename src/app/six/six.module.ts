import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SixRoutingModule } from './six-routing.module';
import { SixComponent } from './six/six.component';
import { SixHeaderComponent } from './six-header/six-header.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { AddressComponent } from './components/child/address/address.component';
import { BgColourDirective } from './shared/directives/bg-colour.directive';


@NgModule({
  declarations: [
    SixComponent,
    SixHeaderComponent,
    UserFormComponent,
    AddressComponent,
    BgColourDirective
  ],
  imports: [
    CommonModule,
    SixRoutingModule
  ]
})
export class SixModule { }
