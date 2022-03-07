import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSeriesGaleryComponent } from './admin-series-galery.component';

describe('AdminSeriesGaleryComponent', () => {
  let component: AdminSeriesGaleryComponent;
  let fixture: ComponentFixture<AdminSeriesGaleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminSeriesGaleryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSeriesGaleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
