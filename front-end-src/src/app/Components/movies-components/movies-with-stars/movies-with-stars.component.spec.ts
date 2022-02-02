import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesWithStarsComponent } from './movies-with-stars.component';

describe('MoviesWithStarsComponent', () => {
  let component: MoviesWithStarsComponent;
  let fixture: ComponentFixture<MoviesWithStarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoviesWithStarsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesWithStarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
