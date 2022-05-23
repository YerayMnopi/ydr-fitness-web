import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockComponent, MockService, MockProvider } from 'ng-mocks';
import { TrainingsComponent } from './trainings.component';
import { TrainingComponent } from './training/training.component';
import { TrainingsService } from '../trainings.service';
import { By } from '@angular/platform-browser';
import { Spied } from 'ydr-ng-common';
import { Training } from '../training';
import { of } from 'rxjs';
import { ExercisesService } from '../exercises.service';
import { ExecutionsService } from '../executions.service';
import { SetsService } from '../sets.service';

describe('TrainingsComponent', () => {
  let component: TrainingsComponent;
  let fixture: ComponentFixture<TrainingsComponent>;
  let trainingsService: Spied<TrainingsService>;
  let exercisesService: Spied<ExercisesService>;
  let executionsService: Spied<ExecutionsService>;
  let setsService: Spied<SetsService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainingsComponent,
        MockComponent(TrainingComponent)
      ],
      providers: [
        {
          provide: TrainingsService,
          useValue: jasmine.createSpyObj('',
            {
              load: jasmine.createSpy(),
              create: jasmine.createSpy()
            }
          )
        },
        {
          provide: ExercisesService,
          useValue: jasmine.createSpyObj('',
            {
              load: jasmine.createSpy(),
              create: jasmine.createSpy()
            }
          )
        },
        {
          provide: ExecutionsService,
          useValue: jasmine.createSpyObj('',
            {
              load: jasmine.createSpy(),
              create: jasmine.createSpy()
            }
          )
        },
        {
          provide: SetsService,
          useValue: jasmine.createSpyObj('',
            {
              load: jasmine.createSpy(),
              create: jasmine.createSpy()
            }
          )
        }
      ]
    })
    .compileComponents();

    trainingsService = TestBed.get(TrainingsService);
    exercisesService = TestBed.get(ExercisesService);
    executionsService = TestBed.get(ExecutionsService);
    setsService = TestBed.get(SetsService);
    trainingsService.load.and.returnValue(of(new Training()));
    exercisesService.load.and.returnValue(of(new Training()));
    executionsService.load.and.returnValue(of(new Training()));
    setsService.load.and.returnValue(of(new Training()));

  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load trainings', () => {
    expect(trainingsService.load).toHaveBeenCalled();
  });


  it('should load exercises', () => {
    expect(exercisesService.load).toHaveBeenCalled();
  });

  it('should create a training', () => {
    fixture.debugElement.query(By.css('.trainings__create')).triggerEventHandler('click', {});

    expect(trainingsService.create).toHaveBeenCalled();
  });
});
