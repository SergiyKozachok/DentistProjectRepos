import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeForPatientComponent } from './home-for-patient.component';

describe('HomeForPatientComponent', () => {
  let component: HomeForPatientComponent;
  let fixture: ComponentFixture<HomeForPatientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeForPatientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeForPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
