import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TrainingComponent } from './training.component';
import { By } from '@angular/platform-browser';
import { Training } from './training';
import { DatePipe } from '@angular/common';
import { FormBuilder } from '@angular/forms';

describe('TrainingComponent', () => {
  let component: TrainingComponent;
  let fixture: ComponentFixture<TrainingComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainingComponent ],
      providers: [FormBuilder]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingComponent);
    component = fixture.componentInstance;
    component.training = new Training();
    component.training.executions = [
      {
        excerciseId: '234n3',
        volume: 0,
        sets: [
          {
            repetitions: 8,
            weight: 0
          },
          {
            repetitions: 8,
            weight: 0
          },
          {
            repetitions: 5,
            weight: 0
          }
        ],
      }
    ]
    component.exercises = [
      {
        id: 'test1',
        name: 'test 1'
      },
      {
        id: 'test2',
        name: 'test 2'
      }
    ]

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display training date', () => {    
    const training_date = fixture.debugElement.query(By.css('.training__date')).nativeElement.innerText;

    expect(training_date).toBe(new DatePipe('en').transform(component.training.createdAt, 'medium'));
  });

  it('should have an exercise selector', () => {
    const options = fixture.debugElement.queryAll(By.css('.training__exercise-select-option'));

    expect(options.length).toBe(component.exercises.length);
  });

});
