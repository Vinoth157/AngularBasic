import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecondRoutingModule } from './second-routing.module';
import { SecondHeaderComponent } from './second-header/second-header.component';
import { FilterComponent } from './components/filter/filter.component';
import { SecondComponent } from './second/second.component';
import { CustomFilterComponent } from './components/custom-filter/custom-filter.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HostBindingComponent } from './components/host-binding/host-binding.component';
import { EncapsulationComponent } from './components/encapsulation/encapsulation.component';
import { EncapsulationChildComponent } from './components/encapsulation-child/encapsulation-child.component';
import { EncapsulationChildStyleComponent } from './components/encapsulation-child-style/encapsulation-child-style.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    SecondHeaderComponent,
    FilterComponent,
    SecondComponent,
    CustomFilterComponent,
    HostBindingComponent,
    EncapsulationComponent,
    EncapsulationChildComponent,
    EncapsulationChildStyleComponent,
  ],
  imports: [
    CommonModule,
    SecondRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
  ],
})
export class SecondModule {}
