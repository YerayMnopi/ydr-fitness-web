import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { forkJoin, Observable } from 'rxjs';
import { first, map } from 'rxjs/operators';
import { Exercise } from '../../services/exercises/exercise';
import { TrainingsFacade } from '../../services/training/trainings.facade';
import { ExecutionFacade } from '../../services/execution/execution.facade';
import { ExercisesFacade } from '../../services/exercises/exercises.facade';
import { Training } from '../../services/training/training';

@Component({
  selector: 'app-exercises',
  templateUrl: './exercises.component.html',
  styleUrls: ['./exercises.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'wp_route'
  }
})
export class ExercisesComponent implements OnInit {

  currentTraining!: Training;
  exercises$: Observable<Exercise[]>;
  form!: FormGroup;

  constructor(
    private readonly exercisesFacade: ExercisesFacade,
    private readonly router: Router,
    private readonly formBuilder: FormBuilder,
    private readonly executionFacade: ExecutionFacade,
    private readonly trainingsFacade: TrainingsFacade,
    private readonly exerciseFacade: ExercisesFacade,
  ) { 
    this.exercises$ = this.exercisesFacade.exercises;
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({exercise: null});
    this.executionFacade.onCreated().subscribe(
      (execution) => {
        if (execution) {
          this.executionFacade.select(execution.id);
          this.router.navigateByUrl(`/user/trainings/${this.currentTraining.id}/executions/${execution.id}`);
        }
      }
    )
  }

  createExecution(id: string) {
    this.exercisesFacade.select(id);
    forkJoin({
      currentTraining: this.trainingsFacade.currentTraining.pipe(first()), 
      currentExercise: this.exerciseFacade.currentExercise.pipe(first())
    }).pipe(
      map(
        ({currentTraining, currentExercise}) => {
          if (currentTraining && currentExercise) {
            this.currentTraining = currentTraining;
            return this.executionFacade.create({
              trainingId: currentTraining?.id,
              exerciseId: currentExercise.id
            });
          }
      })
    ).subscribe();
  }
}
