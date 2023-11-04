import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styles: ['td{padding:10px;}'],
})
export class FilterComponent implements OnInit {
  constructor() {}
  object = { 2: 'foo', 1: 'bar' };
  mapValue = new Map([
    ['two', 2],
    ['one', 1],
    ['three', 3],
    ['four', 4],
  ]);

  currentDate = Date.now();

  sortOrder(old: any, nw: any) {
    if (old.value < nw.value) {
      return -1;
    } else {
      return 1;
    }
  }

  ngOnInit(): void {}
}
