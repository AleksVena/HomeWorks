import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { DbService } from '../db.service';

import { SettingsComponent } from './settings.component';

describe('SettingsComponent', () => {
  let component: SettingsComponent;
  let fixture: ComponentFixture<SettingsComponent>;
  let getQuoteSpy: jasmine.Spy;
  let testQuote: string;

  beforeEach(async () => {
    testQuote = 'Test Quote';
    const DbServiceSpy = jasmine.createSpyObj('DbService', ['getQuote']);
    getQuoteSpy = DbServiceSpy.getQuote.and.returnValue(of(testQuote));

    TestBed.configureTestingModule({
      declarations: [SettingsComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [{ provide: DbService, useValue: DbServiceSpy }]
    });

    fixture = TestBed.createComponent(SettingsComponent);
    component = fixture.componentInstance;

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
