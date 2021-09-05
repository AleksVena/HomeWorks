import { TestBed } from '@angular/core/testing';
import { LocalStorageService } from 'ngx-webstorage';

import { DbService } from './db.service';

describe('DbService', () => {
  let service: DbService;
  let storage: jasmine.SpyObj<LocalStorageService>;

  beforeEach(() => {
    const spyLocalStorageService = jasmine.createSpyObj('LocalStorageService', ['retrieve']);
    TestBed.configureTestingModule({
      providers: [
        DbService,
        { provide: LocalStorageService, useValue: spyLocalStorageService }
      ]
    });
    service = TestBed.inject(DbService);
    storage = TestBed.inject(LocalStorageService )as jasmine.SpyObj<LocalStorageService>;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
