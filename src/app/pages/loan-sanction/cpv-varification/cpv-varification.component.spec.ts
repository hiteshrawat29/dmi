import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CpvVarificationComponent } from './cpv-varification.component';

describe('CpvVarificationComponent', () => {
  let component: CpvVarificationComponent;
  let fixture: ComponentFixture<CpvVarificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CpvVarificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CpvVarificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
