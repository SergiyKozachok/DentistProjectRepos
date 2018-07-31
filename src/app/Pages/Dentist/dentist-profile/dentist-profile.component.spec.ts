import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DentistProfileComponent } from './dentist-profile.component';

describe('DentistProfileComponent', () => {
  let component: DentistProfileComponent;
  let fixture: ComponentFixture<DentistProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DentistProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DentistProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
