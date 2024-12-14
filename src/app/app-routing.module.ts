import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'first',
    loadChildren: () =>
      import('./first/first.module').then((m) => m.FirstModule),
    title: 'firsstt', // Angular new upgrade
  },
  {
    path: 'second',
    loadChildren: () =>
      import('./second/second.module').then((m) => m.SecondModule),
    title: 'second',
  },
  {
    path: 'third',
    loadChildren: () =>
      import('./third/third.module').then((m) => m.ThirdModule),
    title: 'third',
  },
  {
    path: 'four',
    loadChildren: () => import('./four/four.module').then((m) => m.FourModule),
    title: 'four',
  },
  {
    path: 'five',
    loadChildren: () => import('./five/five.module').then((m) => m.FiveModule),
    title: 'five',
  },
  {
    path: 'loginRegister',
    loadChildren: () =>
      import('./login-register/login-register.module').then(
        (m) => m.LoginRegisterModule
      ),
    title: 'loginRegister',
  },
  {
    path: 'six',
    loadChildren: () => import('./six/six.module').then((m) => m.SixModule),
    title: 'six',
  },
  {
    path: 'dependency',
    loadChildren: () =>
      import('./dependency/dependency.module').then((m) => m.DependencyModule),
    title: 'dependency',
  },
  {
    path: 'seven',
    loadChildren: () =>
      import('./declartive/declartive.module').then((m) => m.DeclartiveModule),
    title: 'seven',
  },
  {
    path: 'eight',
    loadChildren: () =>
      import('./eight/eight.module').then((m) => m.EightModule),
    title: 'eight',
  },
  {
    path: '**',
    redirectTo: 'eight',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
