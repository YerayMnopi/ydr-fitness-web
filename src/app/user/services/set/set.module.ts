import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { SetEffects } from './set.effects';
import { SetsService } from './sets.service';
import { SetFacade } from './set.facade';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    EffectsModule.forFeature([SetEffects]),

  ],
  providers: [
    SetsService,
    SetFacade
  ]
})
export class SetModule { }
