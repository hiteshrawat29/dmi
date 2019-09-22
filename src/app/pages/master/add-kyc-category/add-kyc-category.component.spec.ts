import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddKycCategoryComponent } from './add-kyc-category.component';

describe('AddKycCategoryComponent', () => {
  let component: AddKycCategoryComponent;
  let fixture: ComponentFixture<AddKycCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddKycCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddKycCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
