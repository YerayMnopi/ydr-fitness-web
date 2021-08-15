import { Injectable } from '@angular/core';
import { ApiService } from 'ydr-ng-common';
import { Observable } from 'rxjs';
import { Exercise } from './exercise';

@Injectable()
export class ExercisesService {

  endpoint = 'exercises';

  constructor(
    private readonly apiService: ApiService
  ) { }

  load() {
    return this.apiService.get(this.endpoint);
  }

  create(name: string): Observable<Exercise> {
    return this.apiService.post(this.endpoint, {name});
  }

}
