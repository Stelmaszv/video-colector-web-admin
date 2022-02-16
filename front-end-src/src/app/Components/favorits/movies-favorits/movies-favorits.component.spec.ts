import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesFavoritsComponent } from './movies-favorits.component';

describe('MoviesFavoritsComponent', () => {
  let component: MoviesFavoritsComponent;
  let fixture: ComponentFixture<MoviesFavoritsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoviesFavoritsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesFavoritsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
