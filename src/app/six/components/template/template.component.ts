import {
  AfterViewInit,
  Component,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
})
export class TemplateComponent implements AfterViewInit {
  @ViewChild('viewContent', { read: ViewContainerRef })
  viewCont!: ViewContainerRef;

  @ViewChild('templateContent')
  templateCont!: TemplateRef<any>;

  ngAfterViewInit(): void {
    this.viewCont.createEmbeddedView(this.templateCont);
  }
}
