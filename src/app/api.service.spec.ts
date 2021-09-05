import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { ApiService } from './api.service';

describe('ApiService', () => {
  let service: ApiService;
  let httpClient: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
    const spyHttpClient = jasmine.createSpyObj('HttpClient', ['retrieve']);
    TestBed.configureTestingModule({
      providers: [
        ApiService,
        { provide: HttpClient, useValue: spyHttpClient }
      ]
    });
    service = TestBed.inject(ApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
