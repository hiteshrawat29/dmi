import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AplicationQueueComponent } from './aplication-queue.component';

describe('AplicationQueueComponent', () => {
  let component: AplicationQueueComponent;
  let fixture: ComponentFixture<AplicationQueueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AplicationQueueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AplicationQueueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
