import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeForNurseComponent } from './home-for-nurse.component';

describe('HomeForNorseComponent', () => {
  let component: HomeForNurseComponent;
  let fixture: ComponentFixture<HomeForNurseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeForNurseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeForNurseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
