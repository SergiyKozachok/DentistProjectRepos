import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondSubcategoryForDentistComponent } from './second-subcategory-for-dentist.component';

describe('SecondSubcategoryForDentistComponent', () => {
  let component: SecondSubcategoryForDentistComponent;
  let fixture: ComponentFixture<SecondSubcategoryForDentistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondSubcategoryForDentistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondSubcategoryForDentistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
