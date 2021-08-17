import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Training } from '../training';

@Component({
  selector: 'app-training-detail',
  templateUrl: './training-detail.component.html',
  styleUrls: ['./training-detail.component.scss']
})
export class TrainingDetailComponent implements OnInit {

  training: Training | null = null;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly changeDetector: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.getTraining();
  }

  private getTraining() {
    this.training = this.activatedRoute.snapshot.data.training;
    this.changeDetector.detectChanges();
  }

}
