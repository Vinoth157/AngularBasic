import { DisplayFirebaseDataComponent } from './components/display-firebase-data/display-firebase-data.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeclartiveComponent } from './declarative/declartive.component';
import { DisplayUserDataWithSortComponent } from './components/display-user-data-with-sort/display-user-data-with-sort.component';

const routes: Routes = [
  {
    path: '',
    component: DeclartiveComponent,
    children: [
      {
        path: 'usingAsync',
        component: DisplayFirebaseDataComponent,
      },
      {
        path: 'impurePipe',
        component: DisplayUserDataWithSortComponent,
      },
      {
        path: '**',
        redirectTo: 'impurePipe',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeclartiveRoutingModule {}
