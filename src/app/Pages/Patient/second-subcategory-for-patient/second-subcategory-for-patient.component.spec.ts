import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondSubcategoryForPatientComponent } from './second-subcategory-for-patient.component';

describe('SecondSubcategoryForPatientComponent', () => {
  let component: SecondSubcategoryForPatientComponent;
  let fixture: ComponentFixture<SecondSubcategoryForPatientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondSubcategoryForPatientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondSubcategoryForPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
