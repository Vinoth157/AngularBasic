import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThirdRoutingModule } from './third-routing.module';
import { DynamicComponent } from './components/dynamic/dynamic.component';
import { ThirdHeaderComponent } from './third-header/third-header.component';
import { ThirdComponent } from './third/third.component';
import { DynHighlightDirective } from './directive/dyn-highlight.directive';
import { DynamicOneComponent } from './components/dynamic/child/dynamic-one/dynamic-one.component';
import { DynamicTwoComponent } from './components/dynamic/child/dynamic-two/dynamic-two.component';
import { AlertDesignComponent } from './components/alert-design/alert-design.component';
import { AlertWithCloseComponent } from './shared/components/alert-with-close/alert-with-close.component';
// import { MatLegacySliderModule as MatSliderModule } from '@angular/material/MatLegacySliderModule';

@NgModule({
  declarations: [
    DynamicComponent,
    ThirdHeaderComponent,
    ThirdComponent,
    DynHighlightDirective,
    DynamicOneComponent,
    DynamicTwoComponent,
    AlertDesignComponent,
    AlertWithCloseComponent,
  ],
  imports: [CommonModule, ThirdRoutingModule],
})
export class ThirdModule {}
