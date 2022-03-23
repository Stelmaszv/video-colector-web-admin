import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SerieEditComponent } from './serie-edit.component';

describe('SerieEditComponent', () => {
  let component: SerieEditComponent;
  let fixture: ComponentFixture<SerieEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SerieEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SerieEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
