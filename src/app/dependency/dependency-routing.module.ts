import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DependencyComponent } from './dependency/dependency.component';
import { OptionalModifierComponent } from './components/DI/components/optional-modifier/optional-modifier.component';
import { SelfModifierComponent } from './components/DI/components/self-modifier/self-modifier.component';
import { SkipSelfModifierComponent } from './components/DI/components/skip-self-modifier/skip-self-modifier.component';
import { HostModifierComponent } from './components/DI/components/host-modifier/host-modifier.component';
import { UseClassComponent } from './components/DP/components/use-class.component';
import { UseExistingComponent } from './components/DP/components/use-existing.component';
import { UseValueComponent } from './components/DP/components/use-value.component';
import { UseInjectionTokenComponent } from './components/DP/components/use-injection-token.component';
import { UseFactoryComponent } from './components/DP/components/use-factory.component';
import { ResolutionModifierComponent } from './components/DI/resolution-modifier.component';
import { ResolutionDProviderComponent } from './components/DP/resolution-dprovider.component';
import { UseMultiOptionComponent } from './components/DP/components/multiOption/use-multi-option.component';
import { UseLibComponent } from './components/DP/components/use-lib.component';
import { OptionViewProviderMainComponent } from './components/DP/components/viewProviders/option-view-provider-main.component';

const routes: Routes = [
  {
    path: '',
    component: DependencyComponent,
    children: [
      {
        path: 'modifier',
        component: ResolutionModifierComponent,
        children: [
          {
            path: 'optional',
            component: OptionalModifierComponent,
          },
          {
            path: 'self',
            component: SelfModifierComponent,
          },
          {
            path: 'skipSelf',
            component: SkipSelfModifierComponent,
          },
          {
            path: 'host',
            component: HostModifierComponent,
          },
          {
            path: '**',
            redirectTo: 'optional',
            pathMatch: 'full',
          },
        ],
      },
      {
        path: 'provider',
        component: ResolutionDProviderComponent,
        children: [
          {
            path: 'useClass',
            component: UseClassComponent,
          },
          {
            path: 'useExisting',
            component: UseExistingComponent,
          },
          {
            path: 'useValue',
            component: UseValueComponent,
          },
          {
            path: 'useInjection',
            component: UseInjectionTokenComponent,
          },
          {
            path: 'useFactory',
            component: UseFactoryComponent,
          },
          {
            path: 'multiOption',
            component: UseMultiOptionComponent,
          },
          {
            path: 'lib',
            component: UseLibComponent,
          },
          {
            path: 'viewProvider',
            component: OptionViewProviderMainComponent,
          },
          {
            path: '**',
            redirectTo: 'lib',
            pathMatch: 'full',
          },
        ],
      },
      {
        path: '**',
        redirectTo: 'provider',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DependencyRoutingModule {}
