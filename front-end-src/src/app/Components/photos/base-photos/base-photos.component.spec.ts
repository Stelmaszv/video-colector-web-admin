import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasePhotosComponent } from './base-photos.component';

describe('BasePhotosComponent', () => {
  let component: BasePhotosComponent;
  let fixture: ComponentFixture<BasePhotosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasePhotosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasePhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
