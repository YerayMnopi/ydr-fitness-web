import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TrainingComponent } from './training.component';
import { By } from '@angular/platform-browser';
import { Training } from '../../training';
import { DatePipe } from '@angular/common';
import { FormBuilder } from '@angular/forms';
import { Exercise } from '../../exercise';

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
    const userId = 'user';
    const executionId = 'execution';
    component.training.executions = [
      {
        id: 'id',
        createdAt: 'date',
        userId,
        trainingId: 'training',
        exercise: {} as Exercise,
        volume: 0,
        sets: [
          {
            repetitions: 8,
            weight: 0,
            userId,
            executionId
          },
          {
            repetitions: 8,
            weight: 0,
            userId,
            executionId
          },
          {
            repetitions: 5,
            weight: 0,
            userId,
            executionId
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

});
