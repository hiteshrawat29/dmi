import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPlrComponent } from './add-plr.component';

describe('AddPlrComponent', () => {
  let component: AddPlrComponent;
  let fixture: ComponentFixture<AddPlrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPlrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPlrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
