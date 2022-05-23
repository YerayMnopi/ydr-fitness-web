import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserFacade } from 'ydr-ng-common/user';
import { UserResponse } from 'ydr-ng-common/user/user-create.payload';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'wp_route'
  }
})
export class ProfileComponent implements OnInit {

  user$: Observable<UserResponse>;

  constructor(
    private readonly userFacade: UserFacade
  ) {
    this.user$ = this.userFacade.user;
  }

  ngOnInit(): void {
  }

}
