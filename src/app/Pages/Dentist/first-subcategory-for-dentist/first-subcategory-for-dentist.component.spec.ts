import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstSubcategoryForDentistComponent } from './first-subcategory-for-dentist.component';

describe('FirstSubcategoryForDentistComponent', () => {
  let component: FirstSubcategoryForDentistComponent;
  let fixture: ComponentFixture<FirstSubcategoryForDentistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstSubcategoryForDentistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstSubcategoryForDentistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
