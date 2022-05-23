import { Component, OnInit, Input, Output, EventEmitter, Renderer2, ElementRef } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Training } from 'src/app/user/services/training/training';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.scss']
})
export class TrainingComponent implements OnInit {

  @Input()
  training!: Training;

  @Output()
  delete = new EventEmitter();

  constructor() { }

  ngOnInit(): void {

  }

  deleteTraining() {
    this.delete.emit(this.training.id)
  }
}
