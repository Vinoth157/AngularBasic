import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StandaloneRegisterComponent } from '../standalone-register/standalone-register.component';

@Component({
  selector: 'app-add-user-data',
  standalone: true,
  imports: [CommonModule, StandaloneRegisterComponent],
  templateUrl: './add-user-data.component.html',
  styleUrls: ['./add-user-data.component.css'],
})
export class AddUserDataComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  constructor() {}
}
