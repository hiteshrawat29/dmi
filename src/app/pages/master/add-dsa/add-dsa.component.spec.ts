import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDsaComponent } from './add-dsa.component';

describe('AddDsaComponent', () => {
  let component: AddDsaComponent;
  let fixture: ComponentFixture<AddDsaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDsaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDsaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
