import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { ExercisesEffects } from './exercises.effects';
import { StoreModule } from '@ngrx/store';
import * as fromExercises from './exercises.reducer';
import { ExercisesService } from './exercises.service';
import { ExercisesFacade } from './exercises.facade';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromExercises.exercisesFeatureKey, fromExercises.reducer),
    EffectsModule.forFeature([ExercisesEffects])
  ],
  providers: [
    ExercisesService,
    ExercisesFacade
  ]
})
export class ExercisesModule { }
