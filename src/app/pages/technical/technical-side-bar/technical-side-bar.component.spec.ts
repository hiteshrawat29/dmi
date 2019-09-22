import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicalSideBarComponent } from './technical-side-bar.component';

describe('TechnicalSideBarComponent', () => {
  let component: TechnicalSideBarComponent;
  let fixture: ComponentFixture<TechnicalSideBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechnicalSideBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnicalSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
