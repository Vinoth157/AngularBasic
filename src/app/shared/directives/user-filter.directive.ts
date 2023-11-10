import {
  Directive,
  Input,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  selector: '[appUserFilter]',
})
export class UserFilterDirective implements OnInit {
  constructor(
    private templateRef: TemplateRef<any>,
    private vcr: ViewContainerRef
  ) {}
  ngOnInit(): void {
    this.templateDisplay();
  }
  private context = new appUserFilterContext();

  @Input('appUserFilter')
  set _timer(timeValue: number) {
    this.context.appUserFilter = timeValue / 1000;
  }
  @Input('appUserFilterThen')
  userData!: TemplateRef<any>;

  templateDisplay() {
    setInterval(() => {
      if (this.context.appUserFilter > 0) {
        this.vcr.clear();
        this.context.appUserFilter--;
        this.vcr.createEmbeddedView(this.templateRef, this.context);
      }
    }, 1000);

    setTimeout(() => {
      this.vcr.clear();
      this.vcr.createEmbeddedView(this.userData);
      // this.vcr.createEmbeddedView(this.templateRef, this.context, 1);
    }, this.context.appUserFilter * 1000);
  }
}

class appUserFilterContext {
  appUserFilter = 0;
}
