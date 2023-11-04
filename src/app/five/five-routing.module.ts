import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FiveComponent } from './five/five.component';
import { DynamicRenderComponent } from './components/dynamic-render/dynamic-render.component';
import { LoginComponent } from './components/child/login/login.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { UsersInfoComponent } from './components/users-info/users-info.component';
import { UserDataComponent } from './components/child/user-data/user-data.component';
import { UserDisplayGuard } from './service/user-display.guard';
import { RegisterComponent } from './components/child/register/register.component';
import { DataFormComponent } from './components/child/data-form/data-form.component';
import { MultipleCheckComponent } from './components/child/multiple-check/multiple-check.component';

const routes: Routes = [
  {
    path: '',
    component: FiveComponent,
    children: [
      {
        path: 'dataForm',
        component: DataFormComponent,
      },
      {
        path: 'multipleCheck',
        component: MultipleCheckComponent,
      },
      {
        path: 'dynamicRender',
        component: DynamicRenderComponent,
        // children: [{ path: 'register', component: RegisterComponent }],
      },
      {
        path: 'userDetails',
        component: UserDetailsComponent,
        // canActivate: [UserDisplayGuard],
      },
      {
        path: 'userInfo',
        component: UsersInfoComponent,
        children: [
          {
            path: 'userData/:id',
            component: UserDataComponent,
          },
          // {
          //   path: '**',
          //   redirectTo: '',
          //   pathMatch: 'full',
          // },
        ],
      },
      // {
      //   path: 'userData',
      //   component: UserDataComponent,
      // },

      {
        path: '**',
        redirectTo: '',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FiveRoutingModule {}
