import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginFeeComponent } from './login-fee.component';

describe('LoginFeeComponent', () => {
  let component: LoginFeeComponent;
  let fixture: ComponentFixture<LoginFeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginFeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginFeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
