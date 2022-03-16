import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesPosterLoopContentComponent } from './movies-poster-loop-content.component';

describe('MoviesPosterLoopContentComponent', () => {
  let component: MoviesPosterLoopContentComponent;
  let fixture: ComponentFixture<MoviesPosterLoopContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoviesPosterLoopContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesPosterLoopContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
