import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProducentAdminGaleryComponent } from './producent-admin-galery.component';

describe('ProducentAdminGaleryComponent', () => {
  let component: ProducentAdminGaleryComponent;
  let fixture: ComponentFixture<ProducentAdminGaleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProducentAdminGaleryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProducentAdminGaleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
