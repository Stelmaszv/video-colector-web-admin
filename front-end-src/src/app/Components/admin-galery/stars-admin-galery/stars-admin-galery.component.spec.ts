import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarsAdminGaleryComponent } from './stars-admin-galery.component';

describe('StarsAdminGaleryComponent', () => {
  let component: StarsAdminGaleryComponent;
  let fixture: ComponentFixture<StarsAdminGaleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StarsAdminGaleryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StarsAdminGaleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
