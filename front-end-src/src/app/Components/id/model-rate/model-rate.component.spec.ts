import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelRateComponent } from './model-rate.component';

describe('ModelRateComponent', () => {
  let component: ModelRateComponent;
  let fixture: ComponentFixture<ModelRateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModelRateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
