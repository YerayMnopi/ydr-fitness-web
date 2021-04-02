import { Injectable } from '@angular/core';
import { ApiService } from 'ydr-ng-common';
import { Execution } from './training/execution';
import { Observable } from 'rxjs';

@Injectable()
export class ExecutionsService {

  endpoint = 'executions';

  constructor(
    private readonly apiService: ApiService
  ) { }

  load() {
    return this.apiService.get(this.endpoint);
  }

  create(trainingId: string, exerciseId: string): Observable<Execution> {
    return this.apiService.post(this.endpoint, {trainingId, exerciseId});
  }

}
