import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'ydr-ng-common/auth';


const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./login.module').then(m => m.LoginModule),
    data: {
      animation: 'login',
      redirectTo: 'user'
    }
  },
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then(m => m.UserModule),
    canLoad: [
      AuthGuard
    ],
    data: {animation: 'trainings'}
  },
  {
    path: '',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
    data: {animation: 'home'}
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
