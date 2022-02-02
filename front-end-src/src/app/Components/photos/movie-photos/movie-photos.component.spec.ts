import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviePhotosComponent } from './movie-photos.component';

describe('MoviePhotosComponent', () => {
  let component: MoviePhotosComponent;
  let fixture: ComponentFixture<MoviePhotosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoviePhotosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviePhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
