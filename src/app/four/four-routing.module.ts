import { ContentProjectParentComponent } from './components/content-project-parent/content-project-parent.component';
import { DecoratorOneComponent } from './components/decorator-one/decorator-one.component';

import { FourComponent } from './four/four.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: FourComponent,
    children: [
      {
        path: 'first',
        component: DecoratorOneComponent,
      },
      {
        path: 'second',
        component: ContentProjectParentComponent,
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
export class FourRoutingModule {}
