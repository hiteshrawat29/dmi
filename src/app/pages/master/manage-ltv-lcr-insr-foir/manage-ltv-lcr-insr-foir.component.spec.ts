import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageLTVLCRINSRFOIRComponent } from './manage-ltv-lcr-insr-foir.component';

describe('ManageLTVLCRINSRFOIRComponent', () => {
  let component: ManageLTVLCRINSRFOIRComponent;
  let fixture: ComponentFixture<ManageLTVLCRINSRFOIRComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageLTVLCRINSRFOIRComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageLTVLCRINSRFOIRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
