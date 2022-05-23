import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ExecutionFacade } from '../../services/execution/execution.facade';
import { Training } from '../../services/training/training';
import { TrainingsFacade } from '../../services/training/trainings.facade';

@Component({
  selector: 'app-training-detail',
  templateUrl: './training-detail.component.html',
  styleUrls: ['./training-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'wp_route'
  }
})
export class TrainingDetailComponent implements OnInit {

  training$: Observable<Training | null>;

  constructor(
    private readonly changeDetector: ChangeDetectorRef,
    private readonly trainingsFacade: TrainingsFacade,
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute,
    private readonly executionFacade: ExecutionFacade
  ) {
    this.training$ = this.trainingsFacade.currentTraining;
  }

  ngOnInit(): void {
    this.getTraining();
  }

  private getTraining() {
    this.changeDetector.detectChanges();
  }

  goToExecution(executionId: string) {
    this.executionFacade.select(executionId)
    this.router.navigate(['executions', executionId], {relativeTo: this.activatedRoute});
  }

  createExecution(event: {trainingId: string, exerciseName: string}) {
    /*
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
        const training = this.trainings.find((trai: Training) => trai.id === event.trainingId);

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
    */
  }

}
