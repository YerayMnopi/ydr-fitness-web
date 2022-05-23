import { Injectable } from '@angular/core';
import { ApiService } from 'ydr-ng-common';

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {

  endpoint = 'analytics';

  constructor(
    private readonly apiService: ApiService
  ) { }

  getAverageWeightByExercise() {
    return this.apiService.get(`${this.endpoint}/average-weight-by-exercise`);
  }

}
