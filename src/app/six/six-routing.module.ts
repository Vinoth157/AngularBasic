import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SixComponent } from './six/six.component';
import { UserFormComponent } from './components/user-form/user-form.component';

const routes: Routes = [
  {
    path: '',
    component: SixComponent,
    children: [
      {
        path: 'userForm',
        component: UserFormComponent,
      },
      {
        path: '**',
        redirectTo: 'userForm',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SixRoutingModule {}
