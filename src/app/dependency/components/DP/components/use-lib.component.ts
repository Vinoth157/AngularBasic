import { Component } from '@angular/core';

@Component({
  selector: 'app-use-lib',
  template: `
    <lib-userForm>
      <!-- <lib-userAddress class="uAddress" #usrAddress></lib-userAddress> -->
      <div #usrCountry class="uCountry">
        <label for="country">Country</label>
        <input type="text" name="uCountry" id="country" />
      </div>
    </lib-userForm>
  `,
})
export class UseLibComponent {}
