import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSeriesStatasComponent } from './admin-series-statas.component';

describe('AdminSeriesStatasComponent', () => {
  let component: AdminSeriesStatasComponent;
  let fixture: ComponentFixture<AdminSeriesStatasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminSeriesStatasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSeriesStatasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
