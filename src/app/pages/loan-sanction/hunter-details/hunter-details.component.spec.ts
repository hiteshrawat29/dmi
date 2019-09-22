import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HunterDetailsComponent } from './hunter-details.component';

describe('HunterDetailsComponent', () => {
  let component: HunterDetailsComponent;
  let fixture: ComponentFixture<HunterDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HunterDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HunterDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
