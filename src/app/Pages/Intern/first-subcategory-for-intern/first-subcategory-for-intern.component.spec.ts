import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstSubcategoryForInternComponent } from './first-subcategory-for-intern.component';

describe('FirstSubcategoryForInternComponent', () => {
  let component: FirstSubcategoryForInternComponent;
  let fixture: ComponentFixture<FirstSubcategoryForInternComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstSubcategoryForInternComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstSubcategoryForInternComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
