import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { first } from 'rxjs/operators';
import { Training } from '../training';
import { TrainingsService } from '../trainings.service';

@Injectable()
export class TrainingDetailResolver implements Resolve<Training> {
  constructor(
    private readonly trainingsService: TrainingsService
  ) {}
  
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Training> {
    const trainingId = route.params.id;
    return this.trainingsService.get(trainingId).pipe(first());
  }
}
