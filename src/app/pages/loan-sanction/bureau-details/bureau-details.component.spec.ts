import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BureauDetailsComponent } from './bureau-details.component';

describe('BureauDetailsComponent', () => {
  let component: BureauDetailsComponent;
  let fixture: ComponentFixture<BureauDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BureauDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BureauDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
