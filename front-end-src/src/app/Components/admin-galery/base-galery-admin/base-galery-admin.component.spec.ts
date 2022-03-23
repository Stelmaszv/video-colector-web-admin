import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseGaleryAdminComponent } from './base-galery-admin.component';

describe('BaseGaleryAdminComponent', () => {
  let component: BaseGaleryAdminComponent;
  let fixture: ComponentFixture<BaseGaleryAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaseGaleryAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseGaleryAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
