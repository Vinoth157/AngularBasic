import { Component } from '@angular/core';

@Component({
  selector: 'app-resolution-modifier-header',
  template: `
    <nav class="navbar navbar-expand-lg bg-light">
      <div class="container-fluid">
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a
                class="nav-link"
                aria-current="page"
                [routerLink]="['optional']"
                >Optional</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" aria-current="page" [routerLink]="['self']"
                >Self</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                aria-current="page"
                [routerLink]="['skipSelf']"
                >Skip Self</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" aria-current="page" [routerLink]="['host']"
                >Host</a
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  `,
})
export class ResolutionModifierHeaderComponent {}
