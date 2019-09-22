import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeDupeVerficationComponent } from './de-dupe-verfication.component';

describe('DeDupeVerficationComponent', () => {
  let component: DeDupeVerficationComponent;
  let fixture: ComponentFixture<DeDupeVerficationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeDupeVerficationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeDupeVerficationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
