import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstSubcategoryForPatientComponent } from './first-subcategory-for-patient.component';

describe('FirstSubcategoryForPatientComponent', () => {
  let component: FirstSubcategoryForPatientComponent;
  let fixture: ComponentFixture<FirstSubcategoryForPatientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstSubcategoryForPatientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstSubcategoryForPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
