import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeclartiveComponent } from './declartive.component';

describe('DeclartiveComponent', () => {
  let component: DeclartiveComponent;
  let fixture: ComponentFixture<DeclartiveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeclartiveComponent]
    });
    fixture = TestBed.createComponent(DeclartiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
