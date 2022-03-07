import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarsEditComponent } from './stars-edit.component';

describe('StarsEditComponent', () => {
  let component: StarsEditComponent;
  let fixture: ComponentFixture<StarsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StarsEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StarsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
