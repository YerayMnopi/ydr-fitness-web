import { Component, OnInit, ChangeDetectorRef, ChangeDetectionStrategy, HostListener } from '@angular/core';
import { Training } from './training/training';
import { TrainingsService } from './trainings.service';
import { Exercise } from './training/exercise';
import { of, Observable } from 'rxjs';
import { switchMap, expand } from 'rxjs/operators';
import { ExercisesService } from './exercises.service';
import { ExecutionsService } from './executions.service';
import { SetsService } from './sets.service';
import { SetCreatePayload } from './training/set';

@Component({
  selector: 'app-trainings',
  templateUrl: './trainings.component.html',
  styleUrls: ['./trainings.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TrainingsComponent implements OnInit {
  trainings: Training[] = [];
  exercises: Exercise[] = [];
  currentTrainingId: string | undefined = undefined;  

  constructor(
    private readonly changeDetector: ChangeDetectorRef,
    private readonly trainingsService: TrainingsService,
    private readonly exercisesService: ExercisesService,
    private readonly executionsService: ExecutionsService,
    private readonly setsService: SetsService
  ) {}

  ngOnInit() {
    this.loadTrainings();
    this.loadExercises();
  }

  createTraining() {
    this.trainingsService.create().subscribe(
      training => {
        this.trainings = [training].concat(this.trainings);
        this.changeDetector.detectChanges();
      }
    );
  }

  createExecution(event: {trainingId: string, exerciseName: string}) {
    const exercise = this.exercises.find(exer => exer.name === event.exerciseName)
    let exerciseObservable: Observable<Exercise>;

    if (exercise) {
      exerciseObservable = of(exercise);
    } else {
      exerciseObservable = this.exercisesService.create(event.exerciseName);
    }

    exerciseObservable.pipe(
      switchMap(
        (exer: Exercise) => this.executionsService.create(event.trainingId, exer.id)    
      )
    ).subscribe(
      execution => {
        const training = this.trainings.find(trai => trai.id === event.trainingId);

        if (!training) {
          return;
        }

        if (!training.executions) {
          training.executions = []
        }

        training.executions = training.executions.concat([execution]);
        this.changeDetector.detectChanges();
      }
    )
    
  }

  createSet(event: SetCreatePayload & {trainingId: string}) {
    const {trainingId, ...payload} = event;
    this.setsService.create(payload).subscribe(
      set => {
        const training = this.trainings.find(trai => trai.id === trainingId);

        if (!training) {
          return;
        }
        const execution = training.executions.find(exe => exe.id === set.execution.id);

        if (!execution) {
          return;
        }

        if (!execution.sets) {
          execution.sets = []
        }

        execution.sets = execution.sets.concat([set]);
        this.changeDetector.detectChanges();

      }
    )
  }

  deleteTraining(trainingId: string) {
    this.trainingsService.delete(trainingId).subscribe(
      (deleteResult: {}) => {
        this.trainings = this.trainings.filter(trai => trai.id !== trainingId);
        this.changeDetector.detectChanges();
      }
    );
  }

  private loadTrainings() {
    this.trainingsService.load().subscribe(
      trainings => {
        this.trainings = this.trainings.concat(trainings);
        this.changeDetector.detectChanges();
      }
    )
  }

  private loadExercises() {
    this.exercisesService.load().subscribe(
      exercises => {
        this.exercises = this.exercises.concat(exercises);
        this.changeDetector.detectChanges();
      }
    )
  }
}
