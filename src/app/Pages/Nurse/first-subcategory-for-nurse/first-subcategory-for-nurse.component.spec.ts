import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstSubcategoryForNurseComponent } from './first-subcategory-for-nurse.component';

describe('FirstSubcategoryForNurseComponent', () => {
  let component: FirstSubcategoryForNurseComponent;
  let fixture: ComponentFixture<FirstSubcategoryForNurseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstSubcategoryForNurseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstSubcategoryForNurseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
