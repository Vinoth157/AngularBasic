import { Component, computed, input } from '@angular/core';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';

@Component({
  selector: 'app-dynamic-outlet',
  templateUrl: './dynamic-outlet.component.html',
  styles: ``,
})
export class DynamicOutletComponent {
  isAdmin = input(false);
  userTypeComponent = computed(() =>
    this.isAdmin() ? AdminComponent : UserComponent
  );
  //useComponent = this.isAdmin() ? AdminComponent : UserComponent;
}
