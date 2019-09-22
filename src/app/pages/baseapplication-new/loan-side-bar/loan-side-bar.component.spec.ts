import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanSideBarComponent } from './loan-side-bar.component';

describe('LoanSideBarComponent', () => {
  let component: LoanSideBarComponent;
  let fixture: ComponentFixture<LoanSideBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanSideBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
