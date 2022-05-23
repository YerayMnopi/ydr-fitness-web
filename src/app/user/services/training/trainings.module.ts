import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { TrainingEffects } from './training.effects';
import { TrainingsService } from './trainings.service';
import { TrainingsFacade } from './trainings.facade';
import * as fromTraining from './training.reducer';
import { ExecutionModule } from '../execution/execution.module';
import { SetModule } from '../set/set.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromTraining.trainingFeatureKey, fromTraining.reducer, ),
    EffectsModule.forFeature([TrainingEffects]),
    ExecutionModule,
    SetModule
  ],
  providers: [
    TrainingsService,
    TrainingsFacade
  ]
})
export class TrainingsModule { }
