import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrainingDetailRoutingModule } from './training-detail-routing.module';
import { TrainingDetailComponent } from './training-detail.component';
import { TrainingDetailResolver } from './training-detail.resolver';
import { CoreModule } from 'src/libs/core/core.module';


@NgModule({
  declarations: [TrainingDetailComponent],
  imports: [
    CommonModule,
    TrainingDetailRoutingModule,
    CoreModule
  ],
  providers: [
    TrainingDetailResolver
  ]
})
export class TrainingDetailModule { }
