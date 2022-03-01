import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbstractEditComponent } from './abstract-edit.component';

describe('AbstractEditComponent', () => {
  let component: AbstractEditComponent;
  let fixture: ComponentFixture<AbstractEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbstractEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbstractEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
