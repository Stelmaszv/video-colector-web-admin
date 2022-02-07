import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProducentSeriesComponent } from './producent-series.component';

describe('ProducentSeriesComponent', () => {
  let component: ProducentSeriesComponent;
  let fixture: ComponentFixture<ProducentSeriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProducentSeriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProducentSeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
