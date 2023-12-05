import { Component } from '@angular/core';

@Component({
  selector: 'app-resolution-dprovider-header',
  template: `
    <nav class="navbar navbar-expand-lg bg-light">
      <div class="container-fluid">
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a
                class="nav-link"
                aria-current="page"
                [routerLink]="['useClass']"
                >UseClass</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                aria-current="page"
                [routerLink]="['useExisting']"
                >UseExisting</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                aria-current="page"
                [routerLink]="['useValue']"
                >UseValue</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                aria-current="page"
                [routerLink]="['useInjection']"
                >InjectionToken</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                aria-current="page"
                [routerLink]="['useFactory']"
                >UseFactory</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                aria-current="page"
                [routerLink]="['multiOption']"
                >Multi-Option</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" aria-current="page" [routerLink]="['lib']"
                >Use-Library</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                aria-current="page"
                [routerLink]="['viewProvider']"
                >Option - View Provider</a
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  `,
})
export class ResolutionDProviderHeaderComponent {}
