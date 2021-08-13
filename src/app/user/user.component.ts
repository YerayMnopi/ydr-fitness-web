import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
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
      text: 'Profile',
      url: 'profile'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
