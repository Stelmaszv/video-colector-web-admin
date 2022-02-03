import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainProducentComponent } from './main-producent.component';

describe('MainProducentComponent', () => {
  let component: MainProducentComponent;
  let fixture: ComponentFixture<MainProducentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainProducentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainProducentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
