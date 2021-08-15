import { Component, OnInit } from '@angular/core';
import { Training } from './user/training';
import { slideInAnimation, slideOutAnimation } from 'ydr-ng-common';
import { RouterOutlet } from '@angular/router';
import { trigger, transition } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('routeAnimations', [
      transition('home => *', slideInAnimation),
      transition('login => trainings', slideInAnimation),
      transition('login => home', slideOutAnimation),
      transition('trainings => *', slideOutAnimation),
    ])
  ]
})
export class AppComponent implements OnInit {
  ngOnInit() {}
  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }
}
