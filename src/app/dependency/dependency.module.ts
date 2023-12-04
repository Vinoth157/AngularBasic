import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DependencyRoutingModule } from './dependency-routing.module';
import { DependencyComponent } from './dependency/dependency.component';
import { DependencyHeaderComponent } from './dependency-header/dependency-header.component';
import { UserService } from './components/DI/services/user.service';
import { UseInjectionTokenComponent } from './components/DP/components/use-injection-token.component';
import { UseFactoryComponent } from './components/DP/components/use-factory.component';
import { ResolutionModifierComponent } from './components/DI/resolution-modifier.component';
import { ResolutionModifierHeaderComponent } from './components/DI/resolution-modifier-header.component';
import { ResolutionDProviderComponent } from './components/DP/resolution-dprovider.component';
import { ResolutionDProviderHeaderComponent } from './components/DP/resolution-dprovider-header.component';
import { UseMultiOptionComponent } from './components/DP/components/multiOption/use-multi-option.component';
import { REPORTER_CONFIG } from './components/DP/classes/appConfig';
import {
  serviceReport,
  uiReport,
} from './components/DP/components/multiOption/reporter.service';

@NgModule({
  declarations: [
    DependencyComponent,
    DependencyHeaderComponent,
    UseInjectionTokenComponent,
    UseFactoryComponent,
    ResolutionModifierComponent,
    ResolutionModifierHeaderComponent,
    ResolutionDProviderComponent,
    ResolutionDProviderHeaderComponent,
    UseMultiOptionComponent,
  ],
  imports: [CommonModule, DependencyRoutingModule],
  providers: [
    UserService,
    {
      provide: REPORTER_CONFIG,
      useClass: uiReport,
      multi: true,
    },
    {
      provide: REPORTER_CONFIG,
      useClass: serviceReport,
      multi: true,
    },
  ],
})
export class DependencyModule {
  // constructor(private _userService: UserService) {
  //   if (!!this._userService) {
  //     this._userService.userName = 'Dependency Module';
  //     this._userService.sayHi();
  //   }
  // }
}
