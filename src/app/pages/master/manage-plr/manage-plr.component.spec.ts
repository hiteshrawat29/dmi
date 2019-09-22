import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagePlrComponent } from './manage-plr.component';

describe('ManagePlrComponent', () => {
  let component: ManagePlrComponent;
  let fixture: ComponentFixture<ManagePlrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagePlrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagePlrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
