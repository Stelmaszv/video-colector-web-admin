import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProducentPhotsComponent } from './producent-phots.component';

describe('ProducentPhotsComponent', () => {
  let component: ProducentPhotsComponent;
  let fixture: ComponentFixture<ProducentPhotsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProducentPhotsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProducentPhotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
