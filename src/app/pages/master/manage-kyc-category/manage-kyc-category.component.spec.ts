import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageKycCategoryComponent } from './manage-kyc-category.component';

describe('ManageKycCategoryComponent', () => {
  let component: ManageKycCategoryComponent;
  let fixture: ComponentFixture<ManageKycCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageKycCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageKycCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
