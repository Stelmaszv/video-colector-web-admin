import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesCoverLoopContentComponent } from './movies-cover-loop-content.component';

describe('MoviesCoverLoopContentComponent', () => {
  let component: MoviesCoverLoopContentComponent;
  let fixture: ComponentFixture<MoviesCoverLoopContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoviesCoverLoopContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesCoverLoopContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
