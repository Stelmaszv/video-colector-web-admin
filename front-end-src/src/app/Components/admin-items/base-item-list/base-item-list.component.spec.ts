import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseItemListComponent } from './base-item-list.component';

describe('BaseItemListComponent', () => {
  let component: BaseItemListComponent;
  let fixture: ComponentFixture<BaseItemListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaseItemListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
