import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrainingDetailRoutingModule } from './training-detail-routing.module';
import { TrainingDetailComponent } from './training-detail.component';


@NgModule({
  declarations: [TrainingDetailComponent],
  imports: [
    CommonModule,
    TrainingDetailRoutingModule
  ]
})
export class TrainingDetailModule { }
