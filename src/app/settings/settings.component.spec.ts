import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { DbService } from '../db.service';

import { SettingsComponent } from './settings.component';

describe('SettingsComponent', () => {
  let component: SettingsComponent;
  let fixture: ComponentFixture<SettingsComponent>;
  let DbServiceStub: Partial<DbService>;
  let DbServiceSpy: jasmine.SpyObj<DbService>;

  beforeEach(async () => {
    const spyDbService = jasmine.createSpyObj('DbService', ['loadList']);
    TestBed.configureTestingModule({
      declarations: [SettingsComponent],
      providers: [
        { provide: DbService, useValue: spyDbService }
      ]
    })
    DbServiceSpy = TestBed.inject(DbService) as jasmine.SpyObj<DbService>;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
