import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-encapsulation',
  templateUrl: './encapsulation.component.html',
  styles: [
    `
      .encaps {
        color: green;
      }
      .bgColor {
        background-color: red;
      }
      ::ng-deep.encapsStyle {
        font-style: italic;
      }
    `,
  ],
  encapsulation: ViewEncapsulation.Emulated,
})
export class EncapsulationComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
