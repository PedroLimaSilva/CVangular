import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineBadgeComponent } from './timeline-badge.component';

describe('TimelineBadgeComponent', () => {
  let component: TimelineBadgeComponent;
  let fixture: ComponentFixture<TimelineBadgeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimelineBadgeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimelineBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
