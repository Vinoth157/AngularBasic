import { EncapsulationComponent } from './components/encapsulation/encapsulation.component';
import { HostBindingComponent } from './components/host-binding/host-binding.component';
import { FilterComponent } from './components/filter/filter.component';
import { SecondComponent } from './second/second.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomFilterComponent } from './components/custom-filter/custom-filter.component';

const routes: Routes = [
  {
    path: '',
    component: SecondComponent,
    children: [
      {
        path: 'first',
        component: FilterComponent,
      },
      {
        path: 'second',
        component: CustomFilterComponent,
      },
      {
        path: 'third',
        component: HostBindingComponent,
      },
      {
        path: 'four',
        component: EncapsulationComponent,
      },
      {
        path: '**',
        redirectTo: 'four',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SecondRoutingModule {}
