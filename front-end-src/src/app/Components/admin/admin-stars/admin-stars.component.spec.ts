import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminStarsComponent } from './admin-stars.component';

describe('AdminStarsComponent', () => {
  let component: AdminStarsComponent;
  let fixture: ComponentFixture<AdminStarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminStarsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminStarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
