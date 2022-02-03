import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProducentMoviesComponent } from './producent-movies.component';

describe('ProducentMoviesComponent', () => {
  let component: ProducentMoviesComponent;
  let fixture: ComponentFixture<ProducentMoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProducentMoviesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProducentMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
