import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EightComponent } from './eight/eight.component';
import { HostContextComponent } from './components/host-context/host-context.component';

const routes: Routes = [
  {
    path: '',
    component: EightComponent,
    children: [
      {
        path: 'first',
        component: HostContextComponent,
        title: 'host & host context',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EightRoutingModule {}
