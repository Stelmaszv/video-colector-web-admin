import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminItemsProducentComponent } from './admin-items-producent.component';

describe('AdminItemsProducentComponent', () => {
  let component: AdminItemsProducentComponent;
  let fixture: ComponentFixture<AdminItemsProducentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminItemsProducentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminItemsProducentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
