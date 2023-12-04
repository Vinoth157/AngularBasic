import { NgTemplateOutlet } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-resolution-modifier',
  template: `
    <app-resolution-modifier-header></app-resolution-modifier-header>
    <router-outlet></router-outlet>
  `,
})
export class ResolutionModifierComponent {}
