import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProducentComponent } from './producent.component';

describe('ProducentComponent', () => {
  let component: ProducentComponent;
  let fixture: ComponentFixture<ProducentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProducentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProducentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
