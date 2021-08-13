import { Component, OnInit, Input, Output, EventEmitter, HostListener, Renderer2, ElementRef } from '@angular/core';
import { Training } from './training';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { Exercise } from './exercise';
import { i18nMetaToJSDoc } from '@angular/compiler/src/render3/view/i18n/meta';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.scss']
})
export class TrainingComponent implements OnInit {

  @Input()
  exercises: Exercise[] = [];

  @Input()
  training!: Training;

  @Output()
  newExecution = new EventEmitter();

  @Output()
  newSet = new EventEmitter();

  @Output()
  delete = new EventEmitter();

  form!: FormGroup;
  setForm!: FormGroup;

  showForm = false;
  expanded = false;

  selectedExecution: string | null = null;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly renderer: Renderer2,
    private readonly elementRef: ElementRef
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({exercise: null});
    this.setForm = this.formBuilder.group({
      repetitions: 8,
      restSeconds: 90,
      weight: null,
      timeUnderTension: null
    });
  }

  expand() {
    this.expanded = !this.expanded;
    if (this.expanded) {
      this.renderer.addClass(this.elementRef.nativeElement, 'expanded');
    } else {
      this.renderer.removeClass(this.elementRef.nativeElement, 'expanded');
    }
  }

  createExecution() {
    this.newExecution.emit({
      ...this.form.value,
      ...{
        trainingId: this.training.id,
        exerciseName: this.form.value['exercise']
      }
    });
  }

  createSet() {
    this.newSet.emit({
      ...this.setForm.value,
      ...{
        trainingId: this.training.id,
        executionId: this.selectedExecution
      }
    });
  }

  selectExecution(executionId: string) {
    this.selectedExecution = executionId;
  }

  deleteTraining() {
    this.delete.emit(this.training.id)
  }
}
