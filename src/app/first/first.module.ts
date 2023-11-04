import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FirstRoutingModule } from './first-routing.module';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChildTwoComponent } from './components/child-two/child-two.component';
import { ParentTwoComponent } from './components/parent-two/parent-two.component';

import { FirstHeaderComponent } from './first-header/first-header.component';
import { FirstComponent } from './first/first.component';
import { ParentThreeComponent } from './components/parent-three/parent-three.component';
import { ChildThreeComponent } from './components/child-three/child-three.component';

@NgModule({
  declarations: [
    ParentComponent,
    ChildComponent,
    ChildTwoComponent,
    ParentTwoComponent,
    FirstComponent,
    FirstHeaderComponent,
    ParentThreeComponent,
    ChildThreeComponent,
  ],
  imports: [CommonModule, FirstRoutingModule, ReactiveFormsModule, FormsModule],
})
export class FirstModule {}
