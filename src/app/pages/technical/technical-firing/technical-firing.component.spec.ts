import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicalFiringComponent } from './technical-firing.component';

describe('TechnicalFiringComponent', () => {
  let component: TechnicalFiringComponent;
  let fixture: ComponentFixture<TechnicalFiringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechnicalFiringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnicalFiringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
