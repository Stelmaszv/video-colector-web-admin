import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesSerchFormComponent } from './movies-serch-form.component';

describe('MoviesSerchFormComponent', () => {
  let component: MoviesSerchFormComponent;
  let fixture: ComponentFixture<MoviesSerchFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoviesSerchFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesSerchFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
