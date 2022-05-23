import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { NotificationsFacade, Notification } from 'ydr-ng-common/notifications';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'wp_route'
  }
})
export class NotificationsComponent {

  notifications$: Observable<Notification[]>;

  constructor(
    private readonly notificationsFacade: NotificationsFacade
  ) {
    this.notifications$ = this.notificationsFacade.notifications;
  }

}
