import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrainingsRoutingModule } from './trainings-routing.module';
import { TrainingComponent } from './training/training.component';
import { TrainingsComponent } from './trainings.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from 'src/libs/core/core.module';


@NgModule({
  declarations: [
    TrainingComponent,
    TrainingsComponent
  ],
  imports: [
    CommonModule,
    TrainingsRoutingModule,
    ReactiveFormsModule,
    CoreModule
  ]
})
export class TrainingsModule { }
