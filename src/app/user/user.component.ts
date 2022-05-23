import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NotificationsFacade } from 'ydr-ng-common/notifications';
import { ExercisesFacade } from './services/exercises/exercises.facade';
import { trigger, transition } from '@angular/animations';
import { slideInAnimation, slideOutAnimation, fallInAnimation, fallOutAnimation } from 'ydr-ng-common';
import { TrainingsFacade } from './services/training/trainings.facade';
import { UserFacade } from 'ydr-ng-common/user';
import { first, map } from 'rxjs/operators';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  animations: [
    trigger('routeAnimations', [
      transition('execution => training-detail', slideOutAnimation),
      transition('training-detail => trainings', slideOutAnimation),
      transition('* <=> *', slideInAnimation),
    ])
  ]
})
export class UserComponent implements OnInit {

  navigation_items = [
    {
      text: 'Dashboard',
      url: 'dashboard'
    },
    {
      text: 'Trainings',
      url: 'trainings'
    },
    {
      text: 'Exercises',
      url: 'exercises'
    },
    {
      text: 'Profile',
      url: 'profile'
    },
    {
      text: 'Notifications',
      url: 'notifications'
    },
  ];

  constructor(
    private readonly notificationsFacade: NotificationsFacade,
    private readonly userFacade: UserFacade,
    private readonly trainingsFacade: TrainingsFacade,
    private readonly exercisesFacade: ExercisesFacade
  ) { }

  ngOnInit(): void {
    this.notificationsFacade.load();
    this.userFacade.user.pipe(
      first(),
      map(user => this.notificationsFacade.receive(user.id))
    ).subscribe();
    this.exercisesFacade.load();
    this.trainingsFacade.load();
  }
  
  prepareRoute(outlet: RouterOutlet) {
    //return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }
}
