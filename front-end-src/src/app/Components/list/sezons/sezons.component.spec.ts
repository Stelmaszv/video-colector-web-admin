import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SezonsComponent } from './sezons.component';

describe('SezonsComponent', () => {
  let component: SezonsComponent;
  let fixture: ComponentFixture<SezonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SezonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SezonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
