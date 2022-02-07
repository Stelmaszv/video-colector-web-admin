import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeriesStarsComponent } from './series-stars.component';

describe('SeriesStarsComponent', () => {
  let component: SeriesStarsComponent;
  let fixture: ComponentFixture<SeriesStarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeriesStarsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeriesStarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
