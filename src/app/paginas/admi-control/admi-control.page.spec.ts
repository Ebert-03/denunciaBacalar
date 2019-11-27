import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmiControlPage } from './admi-control.page';

describe('AdmiControlPage', () => {
  let component: AdmiControlPage;
  let fixture: ComponentFixture<AdmiControlPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmiControlPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmiControlPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
