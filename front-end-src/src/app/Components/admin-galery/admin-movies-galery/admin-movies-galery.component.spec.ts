import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMoviesGaleryComponent } from './admin-movies-galery.component';

describe('AdminMoviesGaleryComponent', () => {
  let component: AdminMoviesGaleryComponent;
  let fixture: ComponentFixture<AdminMoviesGaleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminMoviesGaleryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminMoviesGaleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
