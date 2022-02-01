import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProducentIdComponent } from './producent-id.component';

describe('ProducentIdComponent', () => {
  let component: ProducentIdComponent;
  let fixture: ComponentFixture<ProducentIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProducentIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProducentIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
