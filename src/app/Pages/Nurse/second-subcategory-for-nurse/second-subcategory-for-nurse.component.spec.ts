import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondSubcategoryForNurseComponent } from './second-subcategory-for-nurse.component';

describe('SecondSubcategoryForNurseComponent', () => {
  let component: SecondSubcategoryForNurseComponent;
  let fixture: ComponentFixture<SecondSubcategoryForNurseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondSubcategoryForNurseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondSubcategoryForNurseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
