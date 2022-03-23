import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProducentLoopComponentComponent } from './producent-loop-component.component';

describe('ProducentLoopComponentComponent', () => {
  let component: ProducentLoopComponentComponent;
  let fixture: ComponentFixture<ProducentLoopComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProducentLoopComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProducentLoopComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
