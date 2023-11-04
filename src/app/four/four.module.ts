import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FourRoutingModule } from './four-routing.module';
import { FourComponent } from './four/four.component';
import { FourHeaderComponent } from './four-header/four-header.component';
import { DecoratorOneComponent } from './components/decorator-one/decorator-one.component';
import { ContentProjectParentComponent } from './components/content-project-parent/content-project-parent.component';
import { ContentProjectChildComponent } from './components/content-project-child/content-project-child.component';

@NgModule({
  declarations: [
    FourComponent,
    FourHeaderComponent,
    DecoratorOneComponent,
    ContentProjectParentComponent,
    ContentProjectChildComponent,
  ],
  imports: [CommonModule, FourRoutingModule],
})
export class FourModule {}
