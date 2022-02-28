import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProducentComponent } from './admin-producent.component';

describe('AdminProducentComponent', () => {
  let component: AdminProducentComponent;
  let fixture: ComponentFixture<AdminProducentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminProducentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminProducentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
