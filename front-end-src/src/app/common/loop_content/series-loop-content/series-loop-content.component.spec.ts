import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeriesLoopContentComponent } from './series-loop-content.component';

describe('SeriesLoopContentComponent', () => {
  let component: SeriesLoopContentComponent;
  let fixture: ComponentFixture<SeriesLoopContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeriesLoopContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeriesLoopContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
