import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeForInternComponent } from './home-for-intern.component';

describe('HomeForInternComponent', () => {
  let component: HomeForInternComponent;
  let fixture: ComponentFixture<HomeForInternComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeForInternComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeForInternComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
