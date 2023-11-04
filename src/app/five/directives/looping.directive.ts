import {
  Directive,
  TemplateRef,
  ViewContainerRef,
  OnInit,
  Input,
} from '@angular/core';
import { Users } from '../class/users';

@Directive({
  selector: '[appLooping]',
})
// incomplete
export class LoopingDirective implements OnInit {
  constructor(
    private templateRef: TemplateRef<any>,
    private vcr: ViewContainerRef
  ) {}
  ngOnInit(): void {
    this.displayData();
  }

  contextValue = new loopContext();
  @Input('appLooping')
  set _appLooping(users: Users[]) {
    this.contextValue.userDetails = users[0];
  }

  displayData() {
    this.vcr.clear();
    console.log(this.contextValue);
    this.vcr.createEmbeddedView(this.templateRef, this.contextValue);
  }
}

class loopContext {
  userDetails!: Users;
}
