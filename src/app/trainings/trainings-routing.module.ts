import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrainingsComponent } from './trainings.component';
import { UserResolver } from 'ydr-ng-common/user';

const routes: Routes = [
  {
    path: '',
    component: TrainingsComponent,
    resolve: [
      UserResolver
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrainingsRoutingModule { }
