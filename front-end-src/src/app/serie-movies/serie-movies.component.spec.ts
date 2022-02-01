import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SerieMoviesComponent } from './serie-movies.component';

describe('SerieMoviesComponent', () => {
  let component: SerieMoviesComponent;
  let fixture: ComponentFixture<SerieMoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SerieMoviesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SerieMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
