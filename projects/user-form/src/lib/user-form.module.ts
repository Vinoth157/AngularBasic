import { NgModule } from '@angular/core';
import { UserFormComponent } from './user-form.component';
import { UserAddressComponent } from './user-address/user-address.component';

@NgModule({
  declarations: [UserFormComponent, UserAddressComponent],
  imports: [],
  exports: [UserFormComponent, UserAddressComponent],
})
export class UserFormModule {}
