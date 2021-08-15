import { Injectable } from '@angular/core';
import { ApiService } from 'ydr-ng-common';
import { SetCreatePayload } from './set';
import { Observable } from 'rxjs';

@Injectable()
export class SetsService {

  endpoint = 'sets';

  constructor(
    private readonly apiService: ApiService
  ) { }

  load() {
    return this.apiService.get(this.endpoint);
  }

  create(payload: SetCreatePayload): Observable<any> {
    return this.apiService.post(this.endpoint, payload);
  }

}
