import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainStarsComponent } from './main-stars.component';

describe('MainStarsComponent', () => {
  let component: MainStarsComponent;
  let fixture: ComponentFixture<MainStarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainStarsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainStarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
