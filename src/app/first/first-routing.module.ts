import { ParentThreeComponent } from './components/parent-three/parent-three.component';
import { ParentTwoComponent } from './components/parent-two/parent-two.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParentComponent } from './components/parent/parent.component';
import { FirstComponent } from './first/first.component';

const routes: Routes = [
  {
    path: '',
    component: FirstComponent,
    children: [
      {
        path: 'first',
        component: ParentComponent,
      },
      {
        path: 'second',
        component: ParentTwoComponent,
      },
      {
        path: 'third',
        component: ParentThreeComponent,
      },
      {
        path: '**',
        redirectTo: 'first',
        pathMatch: 'full',
      },
    ],
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FirstRoutingModule {}
