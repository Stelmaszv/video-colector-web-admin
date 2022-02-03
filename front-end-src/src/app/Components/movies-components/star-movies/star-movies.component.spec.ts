import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarMoviesComponent } from './star-movies.component';

describe('StarMoviesComponent', () => {
  let component: StarMoviesComponent;
  let fixture: ComponentFixture<StarMoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StarMoviesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StarMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
