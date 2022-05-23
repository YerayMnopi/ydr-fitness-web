import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExecutionRoutingModule } from './execution-routing.module';
import { ExecutionComponent } from './execution.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from 'src/libs/core/core.module';
import { ExecutionFormComponent } from './execution-form/execution-form.component';


@NgModule({
  declarations: [
    ExecutionComponent,
    ExecutionFormComponent
  ],
  imports: [
    CommonModule,
    ExecutionRoutingModule,
    ReactiveFormsModule,
    CoreModule
  ]
})
export class ExecutionModule { }
