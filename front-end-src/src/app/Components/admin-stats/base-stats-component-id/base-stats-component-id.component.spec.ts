import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseStatsComponentIDComponent } from './base-stats-component-id.component';

describe('BaseStatsComponentIDComponent', () => {
  let component: BaseStatsComponentIDComponent;
  let fixture: ComponentFixture<BaseStatsComponentIDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaseStatsComponentIDComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseStatsComponentIDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
