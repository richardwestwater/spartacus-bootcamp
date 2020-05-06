import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigExerciseComponent } from './config-exercise.component';

describe('ConfigExerciseComponent', () => {
  let component: ConfigExerciseComponent;
  let fixture: ComponentFixture<ConfigExerciseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigExerciseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigExerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
