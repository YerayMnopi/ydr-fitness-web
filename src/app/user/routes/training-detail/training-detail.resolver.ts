import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { first } from 'rxjs/operators';
import { Training } from '../../services/training/training';
import { TrainingsFacade } from '../../services/training/trainings.facade';
import { TrainingsService } from '../../services/training/trainings.service';


@Injectable()
export class TrainingDetailResolver implements Resolve<Training> {
  constructor(
    private readonly trainingsService: TrainingsService,
    private readonly trainingsFacade: TrainingsFacade
  ) {}
  
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Training> {
    const trainingId = route.params.id;
    this.trainingsFacade.select(trainingId);
    return this.trainingsService.get(trainingId).pipe(first());
  }
}
