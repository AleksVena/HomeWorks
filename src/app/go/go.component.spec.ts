import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { DbService } from '../db.service';

import { GoComponent } from './go.component';

describe('GoComponent', () => {
  let component: GoComponent;
  let fixture: ComponentFixture<GoComponent>;
  let getQuoteSpy: jasmine.Spy;
  let testQuote: string;

  beforeEach(async () => {
    testQuote = 'Test Quote';
    const DbServiceSpy = jasmine.createSpyObj('DbService', ['getQuote']);
    getQuoteSpy = DbServiceSpy.getQuote.and.returnValue(of(testQuote));

    TestBed.configureTestingModule({
      declarations: [GoComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [{ provide: DbService, useValue: DbServiceSpy }]
    });

    fixture = TestBed.createComponent(GoComponent);
    component = fixture.componentInstance;

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
