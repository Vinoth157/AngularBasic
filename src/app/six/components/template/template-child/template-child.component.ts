import { NgTemplateOutlet } from '@angular/common';
import { Component, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-template-child',
  templateUrl: './template-child.component.html',
  // imports: [NgTemplateOutlet],
})
export class TemplateChildComponent {
  @Input('parentCont')
  parentCont!: TemplateRef<any>;

  @Input('userCont')
  userCont!: TemplateRef<any>;

  member = {
    name: 'vinoth',
    age: 30,
    city: 'karur',
  };
}
