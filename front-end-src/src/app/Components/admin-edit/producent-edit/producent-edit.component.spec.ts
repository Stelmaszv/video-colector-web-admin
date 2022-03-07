import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProducentEditComponent } from './producent-edit.component';

describe('ProducentEditComponent', () => {
  let component: ProducentEditComponent;
  let fixture: ComponentFixture<ProducentEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProducentEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProducentEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
