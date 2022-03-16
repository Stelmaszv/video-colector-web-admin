import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarLoopContetComponent } from './star-loop-contet.component';

describe('StarLoopContetComponent', () => {
  let component: StarLoopContetComponent;
  let fixture: ComponentFixture<StarLoopContetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StarLoopContetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StarLoopContetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
