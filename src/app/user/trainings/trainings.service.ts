import { Injectable } from '@angular/core';
import { ApiService } from 'ydr-ng-common';
import { Training } from './training/training';
import { Observable } from 'rxjs';
import { Exercise } from './training/exercise';

@Injectable()
export class TrainingsService {

  endpoint = 'trainings';

  constructor(
    private readonly apiService: ApiService
  ) { }

  load() {
    return this.apiService.get(this.endpoint);
  }

  create(): Observable<Training> {
    return this.apiService.post(this.endpoint, {});
  }

  delete(id: string): Observable<Training> {
    return this.apiService.delete(`${this.endpoint}/${id}`);
  }

}
