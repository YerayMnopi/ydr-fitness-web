import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrainingDetailComponent } from './training-detail.component';
import { TrainingDetailResolver } from './training-detail.resolver';

const routes: Routes = [
  {
    path: '',
    component: TrainingDetailComponent,
    resolve: {
      training: TrainingDetailResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrainingDetailRoutingModule { }
