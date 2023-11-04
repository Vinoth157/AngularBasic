import { Injectable, Type } from '@angular/core';
import { LoginComponent } from '../components/child/login/login.component';
import { RegisterComponent } from '../components/child/register/register.component';

@Injectable({
  providedIn: 'root',
})
export class DynamicService {
  private componentIdMap: Map<string, Type<unknown>> = new Map();

  constructor() {
    this.componentIdMap.set('1', LoginComponent);
    this.componentIdMap.set('2', RegisterComponent);
  }
  getComponentById(key: string) {
    return this.componentIdMap.get(key);
  }
}
