import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTagsItemsComponent } from './admin-tags-items.component';

describe('AdminTagsItemsComponent', () => {
  let component: AdminTagsItemsComponent;
  let fixture: ComponentFixture<AdminTagsItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminTagsItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminTagsItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
