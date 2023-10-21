import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconCalendarTodayComponent } from './icon-calendar-today.component';

describe('IconCalendarTodayComponent', () => {
  let component: IconCalendarTodayComponent;
  let fixture: ComponentFixture<IconCalendarTodayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IconCalendarTodayComponent]
    });
    fixture = TestBed.createComponent(IconCalendarTodayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
