import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProducenrStatsComponent } from './admin-producenr-stats.component';

describe('AdminProducenrStatsComponent', () => {
  let component: AdminProducenrStatsComponent;
  let fixture: ComponentFixture<AdminProducenrStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminProducenrStatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminProducenrStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
