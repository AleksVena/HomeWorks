import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DbService } from '../db.service';
import { TranslateService } from '../translate.service';

import { RecentlyAddedComponent } from './recently-added.component';

describe('RecentlyAddedComponent', () => {
  let component: RecentlyAddedComponent;
  let fixture: ComponentFixture<RecentlyAddedComponent>; 
  let DbServiceStub: Partial<DbService>;
  let TranslateServiceStub: Partial<TranslateService>;  

  beforeEach(async () => {
    DbServiceStub = {};
    TranslateServiceStub = {};
    await TestBed.configureTestingModule({
      declarations: [ RecentlyAddedComponent ],
      providers: [
        { provide: TranslateService, useValue: TranslateServiceStub },
        { provide: DbService, useValue: DbServiceStub }
      ]
    })
    .compileComponents();
    TestBed.inject(TranslateService);
    TestBed.inject(DbService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentlyAddedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
