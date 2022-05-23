import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { BaseFormComponent } from 'ydr-ng-common';
import { ExecutionFormService } from './execution-form.service';

@Component({
  selector: 'app-execution-form',
  templateUrl: './execution-form.component.html',
  styleUrls: ['./execution-form.component.scss'],
  providers: [
    ExecutionFormService
  ]
})
export class ExecutionFormComponent extends BaseFormComponent implements OnInit, OnDestroy {
  group = {
    repetitions: 8,
    restSeconds: 90,
    weight: 0,
    timeUnderTension: 40
  }

  remainingTime: string | null = null;

  constructor(
    protected readonly changeDetector: ChangeDetectorRef, 
    protected readonly formBuilder: FormBuilder,
    private readonly executionFormService: ExecutionFormService
  ) {
    super(changeDetector, formBuilder);
  }

  ngOnInit() {
    super.ngOnInit();
  }

  logSet() {
    this.formSubmitted.emit();
    this.executionFormService.countDown(this.form.value['restSeconds']).subscribe(
      (remainingTime) => this.remainingTime = remainingTime
    );
  }

  ngOnDestroy() {
    this.executionFormService.clearTimer();
  }
}
