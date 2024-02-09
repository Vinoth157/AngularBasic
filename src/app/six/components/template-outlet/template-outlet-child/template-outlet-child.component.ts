import { Component, Input, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-template-outlet-child',
  templateUrl: './template-outlet-child.component.html',
})
export class TemplateOutletChildComponent {
  @Input()
  sampleParent!: TemplateRef<any>;
}
