import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiabilityAssetComponent } from './liability-asset.component';

describe('LiabilityAssetComponent', () => {
  let component: LiabilityAssetComponent;
  let fixture: ComponentFixture<LiabilityAssetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiabilityAssetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiabilityAssetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
