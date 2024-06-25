/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ListStageComponent } from './ListStage.component';

describe('ListStageComponent', () => {
  let component: ListStageComponent;
  let fixture: ComponentFixture<ListStageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListStageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListStageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
