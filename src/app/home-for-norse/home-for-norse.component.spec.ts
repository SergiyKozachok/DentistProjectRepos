import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeForNorseComponent } from './home-for-norse.component';

describe('HomeForNorseComponent', () => {
  let component: HomeForNorseComponent;
  let fixture: ComponentFixture<HomeForNorseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeForNorseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeForNorseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
