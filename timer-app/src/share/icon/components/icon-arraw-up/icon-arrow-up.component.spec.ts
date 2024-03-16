import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconArrowUpComponent } from './icon-arrow-up.component';

describe('IconArrowUpComponent', () => {
  let component: IconArrowUpComponent;
  let fixture: ComponentFixture<IconArrowUpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IconArrowUpComponent]
    });
    fixture = TestBed.createComponent(IconArrowUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
