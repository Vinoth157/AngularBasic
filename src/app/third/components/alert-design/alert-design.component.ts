import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert-design',
  templateUrl: './alert-design.component.html',
  styleUrls: ['./alert-design.component.css'],
})
export class AlertDesignComponent implements OnInit {
  constructor() {}

  displayAlert: boolean = true;

  ngOnInit(): void {}

  toggleAlert() {
    this.displayAlert = !this.displayAlert;
  }
}
