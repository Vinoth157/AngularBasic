import { Injectable } from '@angular/core';
import { Report } from '../../classes/appConfig';

@Injectable({
  providedIn: 'root',
})
export class uiReport implements Report {
  constructor() {}
  pageReport() {
    console.log('UI report file');
  }
}

@Injectable({
  providedIn: 'root',
})
export class serviceReport implements Report {
  constructor() {}
  pageReport() {
    console.log('service report file');
  }
}
