import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { TrainingsModule } from './services/training/trainings.module';
import { ExercisesModule } from './services/exercises/exercises.module';
import { ExecutionModule } from './services/execution/execution.module';
import { CoreModule } from 'src/libs/core/core.module';


@NgModule({
  declarations: [UserComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    TrainingsModule,
    ExercisesModule,
    ExecutionModule,
    CoreModule
  ],
  providers: []
})
export class UserModule { }
