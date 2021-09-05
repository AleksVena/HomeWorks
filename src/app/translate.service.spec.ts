import { TestBed } from '@angular/core/testing';
import { ApiService } from './api.service';
import { DbService } from './db.service';

import { TranslateService } from './translate.service';

describe('TranslateService', () => {
  let service: TranslateService;
  let ApiServiceSpy: jasmine.SpyObj<ApiService>;
  let DbServiceSpy: jasmine.SpyObj<DbService>;

  beforeEach(() => {
    const spyApiService = jasmine.createSpyObj('ApiService', ['getTranslated']);
    const spyDbService = jasmine.createSpyObj('DbService', ['loadList']);
    TestBed.configureTestingModule({
      providers: [
        TranslateService,
        { provide: ApiService, useValue: spyApiService },
        { provide: DbService, useValue: spyDbService }
      ]
    });
    service = TestBed.inject(TranslateService);
    ApiServiceSpy = TestBed.inject(ApiService) as jasmine.SpyObj<ApiService>;
    DbServiceSpy = TestBed.inject(DbService) as jasmine.SpyObj<DbService>;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
