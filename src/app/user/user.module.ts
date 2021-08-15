import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainingsService } from './trainings.service';
import { ExercisesService } from './exercises.service';
import { ExecutionsService } from './executions.service';
import { SetsService } from './sets.service';
import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';


@NgModule({
  declarations: [UserComponent],
  imports: [
    CommonModule,
    UserRoutingModule
  ],
  providers: [
    TrainingsService,
    ExercisesService,
    ExecutionsService,
    SetsService
  ]
})
export class UserModule { }
