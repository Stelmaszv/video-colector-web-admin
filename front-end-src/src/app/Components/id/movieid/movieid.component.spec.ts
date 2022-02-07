import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieidComponent } from './movieid.component';

describe('MovieidComponent', () => {
  let component: MovieidComponent;
  let fixture: ComponentFixture<MovieidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
