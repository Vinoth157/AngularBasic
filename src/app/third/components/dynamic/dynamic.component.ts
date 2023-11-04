import { DynHighlightDirective } from './../../directive/dyn-highlight.directive';
import { DynamicOneComponent } from './child/dynamic-one/dynamic-one.component';
import { DynamicTwoComponent } from './child/dynamic-two/dynamic-two.component';
import {
  Component,
  ComponentFactoryResolver,
  OnInit,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  styles: [],
})
export class DynamicComponent implements OnInit {
  constructor(private factory: ComponentFactoryResolver) {}

  @ViewChild('appDynHigh')
  dynamicDirective!: DynHighlightDirective;
  componentList = [DynamicOneComponent, DynamicTwoComponent];

  ngOnInit(): void {}

  loadComponent() {
    console.log(this.dynamicDirective);
    console.log(this.dynamicDirective.viewContainerRef);
    // this.dynamicDirective.viewRef.clear();
    // this.dynamicDirective.viewRef.createComponent(DynamicOneComponent);
  }
}
