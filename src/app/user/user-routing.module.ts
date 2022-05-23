import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserResolver } from 'ydr-ng-common/user';
import { UserComponent } from './user.component';

const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    resolve: {
      user: UserResolver
    },
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'trainings',
        loadChildren: () => import('./routes/trainings/trainings.module').then(m => m.TrainingsModule),
        data: {animation: 'trainings'}
      },
      {
        path: 'trainings/:id',
        loadChildren: () => import('./routes/training-detail/training-detail.module').then(m => m.TrainingDetailModule),
        data: {animation: 'training-detail'}
      },
      {
        path: 'trainings/:id/executions/:id',
        loadChildren: () => import('./routes/execution/execution.module').then(m => m.ExecutionModule),
        data: {animation: 'execution'}
      },
      {
        path: 'profile',
        loadChildren: () => import('./routes/profile/profile.module').then(m => m.ProfileModule),
        data: {animation: 'profile'}
      },
      {
        path: 'notifications',
        loadChildren: () => import('./routes/notifications/notifications.module').then(m => m.NotificationsModule),
        data: {animation: 'notifications'}
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./routes/dashboard/dashboard.module').then(m => m.DashboardModule),
        data: {animation: 'dashboard'},
      },
      {
        path: 'exercises',
        loadChildren: () => import('./routes/exercises/exercises.module').then(m => m.ExercisesModule),
        data: {animation: 'exercises'},
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
