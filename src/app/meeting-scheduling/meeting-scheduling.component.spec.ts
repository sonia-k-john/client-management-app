import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetingSchedulingComponent } from './meeting-scheduling.component';

describe('MeetingSchedulingComponent', () => {
  let component: MeetingSchedulingComponent;
  let fixture: ComponentFixture<MeetingSchedulingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MeetingSchedulingComponent]
    });
    fixture = TestBed.createComponent(MeetingSchedulingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
