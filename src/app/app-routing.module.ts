import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'first',
    loadChildren: () =>
      import('./first/first.module').then((m) => m.FirstModule),
  },
  {
    path: 'second',
    loadChildren: () =>
      import('./second/second.module').then((m) => m.SecondModule),
  },
  {
    path: 'third',
    loadChildren: () =>
      import('./third/third.module').then((m) => m.ThirdModule),
  },
  {
    path: 'four',
    loadChildren: () => import('./four/four.module').then((m) => m.FourModule),
  },
  {
    path: 'five',
    loadChildren: () => import('./five/five.module').then((m) => m.FiveModule),
  },
  {
    path: 'loginRegister',
    loadChildren: () =>
      import('./login-register/login-register.module').then(
        (m) => m.LoginRegisterModule
      ),
  },
  {
    path: 'six',
    loadChildren: () => import('./six/six.module').then((m) => m.SixModule),
  },
  {
    path: '**',
    redirectTo: 'six',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
