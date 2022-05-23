import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { forkJoin, Observable } from 'rxjs';
import { first, map, switchMap } from 'rxjs/operators';
import { Execution } from '../../services/execution/execution';
import { ExecutionFacade } from '../../services/execution/execution.facade';
import { SetFacade } from '../../services/set/set.facade';
import { TrainingsFacade } from '../../services/training/trainings.facade';

@Component({
  selector: 'app-execution',
  templateUrl: './execution.component.html',
  styleUrls: ['./execution.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default,
  host: {
    class: 'wp_route'
  }
})
export class ExecutionComponent {

  setForm!: FormGroup;
  execution$: Observable<Execution | undefined>;

  constructor(
    private readonly setFacade: SetFacade,
    private readonly changeDetector: ChangeDetectorRef,
    private readonly formBuilder: FormBuilder,
    private readonly executionFacade: ExecutionFacade,
    private readonly trainingsFacade: TrainingsFacade
  ) {
    this.execution$ = this.executionFacade.currentExecution;
  }

  createSet() {
    forkJoin({
      currentTraining: this.trainingsFacade.currentTraining.pipe(first()), 
      currentExecution: this.executionFacade.currentExecution.pipe(first())
    }).pipe(
      first(),
      map(
        ({currentTraining, currentExecution}) => {
          const payload = {
            ...this.setForm.value,
            ...{
              trainingId: currentTraining?.id,
              executionId: currentExecution?.id
            }
          };
  
          return this.setFacade.create(payload);
        } 
      )
    ).subscribe(
      () => console.log('done')
    );
  }

}
