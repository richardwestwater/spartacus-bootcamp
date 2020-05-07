import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactExerciseComponent } from './contact-exercise.component';

describe('ContactExerciseComponent', () => {
  let component: ContactExerciseComponent;
  let fixture: ComponentFixture<ContactExerciseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactExerciseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactExerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
