import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadInformBarComponent } from './lead-inform-bar.component';

describe('LeadInformBarComponent', () => {
  let component: LeadInformBarComponent;
  let fixture: ComponentFixture<LeadInformBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeadInformBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeadInformBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
