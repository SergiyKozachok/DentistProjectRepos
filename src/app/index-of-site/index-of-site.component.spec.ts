import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexOfSiteComponent } from './index-of-site.component';

describe('IndexOfSiteComponent', () => {
  let component: IndexOfSiteComponent;
  let fixture: ComponentFixture<IndexOfSiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexOfSiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexOfSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
