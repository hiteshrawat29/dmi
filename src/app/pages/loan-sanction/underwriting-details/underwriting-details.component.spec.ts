import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnderwritingDetailsComponent } from './underwriting-details.component';

describe('UnderwritingDetailsComponent', () => {
  let component: UnderwritingDetailsComponent;
  let fixture: ComponentFixture<UnderwritingDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnderwritingDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnderwritingDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
