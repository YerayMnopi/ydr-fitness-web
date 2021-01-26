import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingComponent } from './training.component';
import { By } from '@angular/platform-browser';
import { Training } from './training';
import { DatePipe } from '@angular/common';
import { FormBuilder } from '@angular/forms';

describe('TrainingComponent', () => {
  let component: TrainingComponent;
  let fixture: ComponentFixture<TrainingComponent>;

  beforeEach(async(() => {
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
            repetitions: 8
          },
          {
            repetitions: 8
          },
          {
            repetitions: 5
          }
        ],
      }
    ]

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display training date', () => {    
    const training_date = fixture.debugElement.query(By.css('.training__date')).nativeElement.innerText;

    expect(training_date).toBe(new DatePipe('en').transform(component.training.date, 'medium'));
  });

  it('should ')
});
