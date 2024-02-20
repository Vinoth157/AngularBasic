import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { DeclartiveRoutingModule } from './declartive-routing.module';
import { DeclartiveComponent } from './declarative/declartive.component';
import { DeclartiveHeaderComponent } from './declartive-header/declartive-header.component';
import { DisplayFirebaseDataComponent } from './components/display-firebase-data/display-firebase-data.component';
import { DisplayUserDataWithSortComponent } from './components/display-user-data-with-sort/display-user-data-with-sort.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserDataSortPipe } from './pipes/user-data-sort.pipe';
import { StandaloneRegisterComponent } from './components/standalone/standalone-register/standalone-register.component';
import { AddUserDataComponent } from './components/standalone/add-user-data/add-user-data.component';

@NgModule({
  declarations: [
    DeclartiveComponent,
    DeclartiveHeaderComponent,
    DisplayFirebaseDataComponent,
    DisplayUserDataWithSortComponent,
    UserDataSortPipe,
  ],
  imports: [
    CommonModule,
    DeclartiveRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    StandaloneRegisterComponent,
  ],
})
export class DeclartiveModule {}
