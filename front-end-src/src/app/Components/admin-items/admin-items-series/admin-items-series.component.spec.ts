import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminItemsSeriesComponent } from './admin-items-series.component';

describe('AdminItemsSeriesComponent', () => {
  let component: AdminItemsSeriesComponent;
  let fixture: ComponentFixture<AdminItemsSeriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminItemsSeriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminItemsSeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
