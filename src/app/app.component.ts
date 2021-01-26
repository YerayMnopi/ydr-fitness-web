import { Component, OnInit } from '@angular/core';
import { Training } from './training/training';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  training = new Training();

  ngOnInit() {
    this.training.executions = [
      {
        excerciseId: '234n3',
        volume: 0,
        sets: [
          {
            repetitions: 8,
            weight: 0
          },
          {
            repetitions: 8,
            weight: 0
          },
          {
            repetitions: 5,
            weight: 0
          }
        ],
      }
    ];
  }
}
