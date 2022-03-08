import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminStarsStatasComponent } from './admin-stars-statas.component';

describe('AdminStarsStatasComponent', () => {
  let component: AdminStarsStatasComponent;
  let fixture: ComponentFixture<AdminStarsStatasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminStarsStatasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminStarsStatasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
