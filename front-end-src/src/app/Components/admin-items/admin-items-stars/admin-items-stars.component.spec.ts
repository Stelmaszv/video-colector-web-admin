import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminItemsStarsComponent } from './admin-items-stars.component';

describe('AdminItemsStarsComponent', () => {
  let component: AdminItemsStarsComponent;
  let fixture: ComponentFixture<AdminItemsStarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminItemsStarsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminItemsStarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
