import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExercisesComponent } from './exercises.component';
import { ExercisesRoutingModule } from './exercises-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from 'src/libs/core/core.module';



@NgModule({
  declarations: [
    ExercisesComponent
  ],
  imports: [
    CommonModule,
    ExercisesRoutingModule,
    ReactiveFormsModule,
    CoreModule
  ]
})
export class ExercisesModule { }
