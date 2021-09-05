import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { DbService } from '../db.service';
import { TranslateService } from '../translate.service';

import { RecentlyAddedComponent } from './recently-added.component';

describe('RecentlyAddedComponent', () => {
  let component: RecentlyAddedComponent;
  let fixture: ComponentFixture<RecentlyAddedComponent>;
  let getQuoteSpy: jasmine.Spy;
  let testQuote: string;

  beforeEach(async () => {
    testQuote = 'Test Quote';
    const DbServiceSpy = jasmine.createSpyObj('DbService', ['getQuote']);
    const TranslateServiceSpy = jasmine.createSpyObj('TranslateService', ['getQuote']);
    getQuoteSpy = DbServiceSpy.getQuote.and.returnValue(of(testQuote));

    TestBed.configureTestingModule({
      declarations: [RecentlyAddedComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [{ provide: DbService, useValue: DbServiceSpy }, { provide: TranslateService, useValue: TranslateServiceSpy }]
    });

    fixture = TestBed.createComponent(RecentlyAddedComponent);
    component = fixture.componentInstance;
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
