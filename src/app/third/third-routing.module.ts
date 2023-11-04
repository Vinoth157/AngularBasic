import { AlertDesignComponent } from './components/alert-design/alert-design.component';
import { DynamicComponent } from './components/dynamic/dynamic.component';
import { ThirdComponent } from './third/third.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ThirdComponent,
    children: [
      {
        path: 'first',
        component: DynamicComponent,
      },
      {
        path: 'second',
        component: AlertDesignComponent,
      },
      {
        path: '**',
        redirectTo: 'first',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ThirdRoutingModule {}
