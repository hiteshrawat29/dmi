import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLTVLCRINSRFOIRComponent } from './add-ltv-lcr-insr-foir.component';

describe('AddLTVLCRINSRFOIRComponent', () => {
  let component: AddLTVLCRINSRFOIRComponent;
  let fixture: ComponentFixture<AddLTVLCRINSRFOIRComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddLTVLCRINSRFOIRComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddLTVLCRINSRFOIRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
