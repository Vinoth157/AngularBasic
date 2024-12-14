import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EightRoutingModule } from './eight-routing.module';
import { EightComponent } from './eight/eight.component';
import { EightHeaderComponent } from './eight-header/eight-header.component';
import { HostContextChildComponent } from './components/host-context/host-context-child/host-context-child.component';
import { HostContextComponent } from './components/host-context/host-context.component';

@NgModule({
  declarations: [
    EightComponent,
    EightHeaderComponent,
    HostContextComponent,
    HostContextChildComponent,
  ],
  imports: [CommonModule, EightRoutingModule],
})
export class EightModule {}
