import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconDoubleArrowLeftComponent } from './icon-double-arrow-left.component';

describe('IconDoubleArrowLeftComponent', () => {
  let component: IconDoubleArrowLeftComponent;
  let fixture: ComponentFixture<IconDoubleArrowLeftComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IconDoubleArrowLeftComponent]
    });
    fixture = TestBed.createComponent(IconDoubleArrowLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
