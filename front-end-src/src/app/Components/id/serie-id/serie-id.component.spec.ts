import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SerieIdComponent } from './serie-id.component';

describe('SerieIdComponent', () => {
  let component: SerieIdComponent;
  let fixture: ComponentFixture<SerieIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SerieIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SerieIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
