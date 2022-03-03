import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesAdminNavbarComponent } from './movies-admin-navbar.component';

describe('MoviesAdminNavbarComponent', () => {
  let component: MoviesAdminNavbarComponent;
  let fixture: ComponentFixture<MoviesAdminNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoviesAdminNavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesAdminNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
