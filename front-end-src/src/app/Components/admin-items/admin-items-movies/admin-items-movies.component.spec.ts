import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminItemsMoviesComponent } from './admin-items-movies.component';

describe('AdminItemsMoviesComponent', () => {
  let component: AdminItemsMoviesComponent;
  let fixture: ComponentFixture<AdminItemsMoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminItemsMoviesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminItemsMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
