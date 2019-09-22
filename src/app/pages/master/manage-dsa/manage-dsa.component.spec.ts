import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageDsaComponent } from './manage-dsa.component';

describe('ManageDsaComponent', () => {
  let component: ManageDsaComponent;
  let fixture: ComponentFixture<ManageDsaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageDsaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageDsaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
