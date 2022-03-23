import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseItemsSectionsComponent } from './base-items-sections.component';

describe('BaseItemsSectionsComponent', () => {
  let component: BaseItemsSectionsComponent;
  let fixture: ComponentFixture<BaseItemsSectionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaseItemsSectionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseItemsSectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
