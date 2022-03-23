import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApstractAdminComponent } from './apstract-admin.component';

describe('ApstractAdminComponent', () => {
  let component: ApstractAdminComponent;
  let fixture: ComponentFixture<ApstractAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApstractAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApstractAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
