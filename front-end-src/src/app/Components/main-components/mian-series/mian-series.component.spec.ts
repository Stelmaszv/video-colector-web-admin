import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MianSeriesComponent } from './mian-series.component';

describe('MianSeriesComponent', () => {
  let component: MianSeriesComponent;
  let fixture: ComponentFixture<MianSeriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MianSeriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MianSeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
