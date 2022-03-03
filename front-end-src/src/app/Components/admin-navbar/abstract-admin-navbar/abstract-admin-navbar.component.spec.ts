import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbstractAdminNavbarComponent } from './abstract-admin-navbar.component';

describe('AbstractAdminNavbarComponent', () => {
  let component: AbstractAdminNavbarComponent;
  let fixture: ComponentFixture<AbstractAdminNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbstractAdminNavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbstractAdminNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
