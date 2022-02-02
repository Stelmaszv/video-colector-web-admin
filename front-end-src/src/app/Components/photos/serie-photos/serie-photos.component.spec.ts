import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeriePhotosComponent } from './serie-photos.component';

describe('SeriePhotosComponent', () => {
  let component: SeriePhotosComponent;
  let fixture: ComponentFixture<SeriePhotosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeriePhotosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeriePhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
