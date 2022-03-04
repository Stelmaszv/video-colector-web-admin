import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminStarsItemsComponent } from './admin-stars-items.component';

describe('AdminStarsItemsComponent', () => {
  let component: AdminStarsItemsComponent;
  let fixture: ComponentFixture<AdminStarsItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminStarsItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminStarsItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
