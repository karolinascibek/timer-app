import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconDoubleArrowRightComponent } from './icon-double-arrow-right.component';

describe('IconDoubleArrowRightComponent', () => {
  let component: IconDoubleArrowRightComponent;
  let fixture: ComponentFixture<IconDoubleArrowRightComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IconDoubleArrowRightComponent]
    });
    fixture = TestBed.createComponent(IconDoubleArrowRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
