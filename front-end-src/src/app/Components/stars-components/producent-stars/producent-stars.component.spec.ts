import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProducentStarsComponent } from './producent-stars.component';

describe('ProducentStarsComponent', () => {
  let component: ProducentStarsComponent;
  let fixture: ComponentFixture<ProducentStarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProducentStarsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProducentStarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
