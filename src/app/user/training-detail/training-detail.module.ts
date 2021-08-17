import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrainingDetailRoutingModule } from './training-detail-routing.module';
import { TrainingDetailComponent } from './training-detail.component';
import { TrainingDetailResolver } from './training-detail.resolver';


@NgModule({
  declarations: [TrainingDetailComponent],
  imports: [
    CommonModule,
    TrainingDetailRoutingModule
  ],
  providers: [
    TrainingDetailResolver
  ]
})
export class TrainingDetailModule { }
