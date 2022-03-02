import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseGaleryComponent } from './base-galery.component';

describe('BaseGaleryComponent', () => {
  let component: BaseGaleryComponent;
  let fixture: ComponentFixture<BaseGaleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaseGaleryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseGaleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
