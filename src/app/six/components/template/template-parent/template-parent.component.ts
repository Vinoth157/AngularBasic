import { Component, TemplateRef, Input } from '@angular/core';

@Component({
  selector: 'app-template-parent',
  templateUrl: './template-parent.component.html',
})
export class TemplateParentComponent {
  memb = {
    name: 'niranjan',
    age: 1,
    city: 'karur',
  };
}
