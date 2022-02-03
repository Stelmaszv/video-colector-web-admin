import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MianMoviesComponent } from './mian-movies.component';

describe('MianMoviesComponent', () => {
  let component: MianMoviesComponent;
  let fixture: ComponentFixture<MianMoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MianMoviesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MianMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
