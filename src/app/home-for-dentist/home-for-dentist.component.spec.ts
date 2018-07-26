import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeForDentistComponent } from './home-for-dentist.component';

describe('HomeForDentistComponent', () => {
  let component: HomeForDentistComponent;
  let fixture: ComponentFixture<HomeForDentistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeForDentistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeForDentistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
