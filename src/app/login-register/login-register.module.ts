import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRegisterRoutingModule } from './login-register-routing.module';
import { LoginRegisterComponent } from './login-register/login-register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

@NgModule({
  declarations: [LoginRegisterComponent, LoginComponent, RegisterComponent],
  imports: [CommonModule, LoginRegisterRoutingModule, ReactiveFormsModule],
})
export class LoginRegisterModule {}
