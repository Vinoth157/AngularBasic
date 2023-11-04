import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-encapsulation-child-style',
  templateUrl: './encapsulation-child-style.component.html',
  styles: [
    `
      :host-context {
        color: darkblue;
      }
    `,
  ],
})
export class EncapsulationChildStyleComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
