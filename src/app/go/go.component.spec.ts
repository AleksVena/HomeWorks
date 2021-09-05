import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DbService } from '../db.service';

import { GoComponent } from './go.component';

describe('GoComponent', () => {
  let component: GoComponent;
  let fixture: ComponentFixture<GoComponent>;
  let DbServiceStub: Partial<DbService>;

  beforeEach(async () => {
    DbServiceStub = {};
    await TestBed.configureTestingModule({
      declarations: [ GoComponent ],
      providers: [
        { provide: DbService, useValue: DbServiceStub }
      ]
    })
    .compileComponents();
    TestBed.inject(DbService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
