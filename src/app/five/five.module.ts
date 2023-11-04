import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FiveRoutingModule } from './five-routing.module';
import { FiveComponent } from './five/five.component';
import { FiveHeaderComponent } from './five-header/five-header.component';
import { DynamicRenderComponent } from './components/dynamic-render/dynamic-render.component';
import { LoginComponent } from './components/child/login/login.component';
import { RegisterComponent } from './components/child/register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { LoopingDirective } from './directives/looping.directive';
import { UsersInfoComponent } from './components/users-info/users-info.component';
import { UserDataComponent } from './components/child/user-data/user-data.component';
import { SharedModule } from '../shared/shared.module';
import { DataFormComponent } from './components/child/data-form/data-form.component';
import { MultipleCheckComponent } from './components/child/multiple-check/multiple-check.component';
@NgModule({
  declarations: [
    FiveComponent,
    FiveHeaderComponent,
    DynamicRenderComponent,
    LoginComponent,
    RegisterComponent,
    UserDetailsComponent,
    LoopingDirective,
    UsersInfoComponent,
    UserDataComponent,
    DataFormComponent,
    MultipleCheckComponent,
  ],
  imports: [CommonModule, FiveRoutingModule, ReactiveFormsModule, SharedModule],
})
export class FiveModule {}
