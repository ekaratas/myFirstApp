import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetayPage } from './detay.page';

describe('DetayPage', () => {
  let component: DetayPage;
  let fixture: ComponentFixture<DetayPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetayPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetayPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
