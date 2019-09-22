import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SenctionSideBarComponent } from './senction-side-bar.component';

describe('SenctionSideBarComponent', () => {
  let component: SenctionSideBarComponent;
  let fixture: ComponentFixture<SenctionSideBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SenctionSideBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SenctionSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
