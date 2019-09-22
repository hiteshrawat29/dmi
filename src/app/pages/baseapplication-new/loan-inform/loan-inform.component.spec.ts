import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanInformComponent } from './loan-inform.component';

describe('LoanInformComponent', () => {
  let component: LoanInformComponent;
  let fixture: ComponentFixture<LoanInformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanInformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanInformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
