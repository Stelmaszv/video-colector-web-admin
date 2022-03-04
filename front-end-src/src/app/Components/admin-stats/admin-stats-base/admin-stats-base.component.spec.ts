import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminStatsBaseComponent } from './admin-stats-base.component';

describe('AdminStatsBaseComponent', () => {
  let component: AdminStatsBaseComponent;
  let fixture: ComponentFixture<AdminStatsBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminStatsBaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminStatsBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
