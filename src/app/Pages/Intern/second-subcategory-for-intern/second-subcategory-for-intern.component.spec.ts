import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondSubcategoryForInternComponent } from './second-subcategory-for-intern.component';

describe('SecondSubcategoryForInternComponent', () => {
  let component: SecondSubcategoryForInternComponent;
  let fixture: ComponentFixture<SecondSubcategoryForInternComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondSubcategoryForInternComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondSubcategoryForInternComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
