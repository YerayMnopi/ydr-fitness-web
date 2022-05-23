import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserFacade } from 'ydr-ng-common/user';
import { UserResponse } from 'ydr-ng-common/user/user-create.payload';
import { AnalyticsService } from '../../services/analytics/analytics.service';
import { Training } from '../../services/training/training';
import { TrainingsFacade } from '../../services/training/trainings.facade';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'wp_route'
  }
})
export class DashboardComponent implements OnInit {
  user$: Observable<UserResponse>;
  $trainings: Observable<Training[]>;
  avgWeightByExercise: {
    exercise: string;
    average_weight: number;
    max_weight: number;
  }[] | null = null;

  constructor(
    private readonly userFacade: UserFacade,
    private readonly analyticsService: AnalyticsService,
    private readonly changeDetector: ChangeDetectorRef,
    private readonly trainingsFacade: TrainingsFacade,
  ) {
    this.user$ = this.userFacade.user;
    this.$trainings = this.trainingsFacade.trainings;
  }

  ngOnInit(): void {
    this.analyticsService.getAverageWeightByExercise().subscribe(
      avg => {
        this.avgWeightByExercise = avg;
        this.changeDetector.detectChanges();
      }
    );
  }

}
