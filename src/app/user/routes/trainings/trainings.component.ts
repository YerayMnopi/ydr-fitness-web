import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { TrainingsFacade } from '../../services/training/trainings.facade';
import { Training } from '../../services/training/training';
import { Exercise } from '../../services/exercises/exercise';
import { ofType } from '@ngrx/effects';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trainings',
  templateUrl: './trainings.component.html',
  styleUrls: ['./trainings.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'wp_route'
  }
})
export class TrainingsComponent implements OnInit {
  $trainings: Observable<Training[]>;
  exercises: Exercise[] = [];
  currentTrainingId: string | undefined = undefined;  

  constructor(
    private readonly trainingsFacade: TrainingsFacade,
    private readonly router: Router
  ) {
    this.$trainings = this.trainingsFacade.trainings;
  }

  ngOnInit() {
    this.trainingsFacade.onCreated().subscribe(
      training => this.router.navigateByUrl(`user/trainings/${training.id}`)
    );
  }

  createTraining() {
    this.trainingsFacade.create();
  }

  deleteTraining(trainingId: string) {
    this.trainingsFacade.delete(trainingId);
  }
}
