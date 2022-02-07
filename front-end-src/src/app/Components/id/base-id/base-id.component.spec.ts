import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseIDComponent } from './base-id.component';

describe('BaseIDComponent', () => {
  let component: BaseIDComponent;
  let fixture: ComponentFixture<BaseIDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaseIDComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseIDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
