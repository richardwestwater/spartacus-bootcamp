import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutletExerciseComponent } from './outlet-exercise.component';

describe('OutletExerciseComponent', () => {
  let component: OutletExerciseComponent;
  let fixture: ComponentFixture<OutletExerciseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutletExerciseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutletExerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
