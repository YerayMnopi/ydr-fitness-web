import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'ydr-ng-common/auth';


const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./login.module').then(m => m.LoginModule),
    pathMatch: 'full',
    data: {animation: 'login'}
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./trainings/trainings.module').then(m => m.TrainingsModule),
    pathMatch: 'full',
    canLoad: [
      AuthGuard
    ],
    data: {animation: 'trainings'}
  },
  {
    path: '',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
    pathMatch: 'full',
    data: {animation: 'home'}
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
