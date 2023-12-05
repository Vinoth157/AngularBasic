import { Inject, Injectable } from '@angular/core';

interface VPData {
  displayData: () => void;
}

@Injectable({
  providedIn: 'root',
})
export class OptionViewProviderService implements VPData {
  constructor() {}
  displayData() {
    console.log('Option View Provider Service');
  }
}

@Injectable({
  providedIn: 'root',
})
export class OptionViewProviderActualService implements VPData {
  constructor() {}
  displayData() {
    console.log('Option View Provider Actual Service');
  }
}
