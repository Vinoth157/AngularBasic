import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { LoginComponent } from '../child/login/login.component';
import { RegisterComponent } from '../child/register/register.component';

@Component({
  selector: 'app-dynamic-render',
  templateUrl: './dynamic-render.component.html',
})
export class DynamicRenderComponent implements OnInit {
  @ViewChild('dynamic', { read: ViewContainerRef, static: true })
  dynamic!: ViewContainerRef;
  constructor() {}

  ngOnInit(): void {}
  login(): void {
    this.dynamic.clear();
    const loginComp = this.dynamic.createComponent(LoginComponent);
    loginComp.instance.triggerRegister.subscribe(() => {
      this.register();
    });
    loginComp.instance.loginClose.subscribe(() => {
      this.dynamic.clear();
    });
  }
  register(): void {
    this.dynamic.clear();
    const registerComp = this.dynamic.createComponent(RegisterComponent);
    registerComp.instance.triggerLogin.subscribe(() => {
      this.login();
    });
    registerComp.instance.registerClose.subscribe(() => {
      this.dynamic.clear();
    });
  }
}
