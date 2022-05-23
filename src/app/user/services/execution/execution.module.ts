import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { ExecutionEffects } from './execution.effects';
import { ExecutionsService } from './executions.service';
import { ExecutionFacade } from './execution.facade';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    EffectsModule.forFeature([ExecutionEffects])
  ],
  providers: [
    ExecutionsService,
    ExecutionFacade
  ]
})
export class ExecutionModule { }
