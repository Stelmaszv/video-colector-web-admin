import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarPhotoComponent } from './star-photo.component';

describe('StarPhotoComponent', () => {
  let component: StarPhotoComponent;
  let fixture: ComponentFixture<StarPhotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StarPhotoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StarPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
