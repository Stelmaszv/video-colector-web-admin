import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMoviesStatsComponent } from './admin-movies-stats.component';

describe('AdminMoviesStatsComponent', () => {
  let component: AdminMoviesStatsComponent;
  let fixture: ComponentFixture<AdminMoviesStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminMoviesStatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminMoviesStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
