import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrainingsRoutingModule } from './trainings-routing.module';
import { TrainingComponent } from './training/training.component';
import { TrainingsComponent } from './trainings.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TrainingsService } from './trainings.service';
import { ExercisesService } from './exercises.service';
import { ExecutionsService } from './executions.service';
import { SetsService } from './sets.service';


@NgModule({
  declarations: [
    TrainingComponent,
    TrainingsComponent
  ],
  imports: [
    CommonModule,
    TrainingsRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [
    TrainingsService,
    ExercisesService,
    ExecutionsService,
    SetsService
  ]
})
export class TrainingsModule { }
