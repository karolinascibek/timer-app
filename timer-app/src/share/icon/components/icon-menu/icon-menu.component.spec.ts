import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconMenuComponent } from './icon-menu.component';

describe('IconMenuComponent', () => {
  let component: IconMenuComponent;
  let fixture: ComponentFixture<IconMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IconMenuComponent]
    });
    fixture = TestBed.createComponent(IconMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
