import { Directive, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appDynHighlight]',
})
export class DynHighlightDirective {
  constructor(
    public viewContainerRef: ViewContainerRef,
    private templateRef: TemplateRef<any>
  ) {}

  // this.ViewContainerRef.createEmbeddedView(this.templateRef);
  test() {
    console.log('test');
  }
}
