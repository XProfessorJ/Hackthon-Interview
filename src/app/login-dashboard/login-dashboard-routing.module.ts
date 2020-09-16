import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginDashboardComponent } from './login-dashboard.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: LoginDashboardComponent,
    children: [
      {
        path: 'login',
        loadChildren: () => import('../login/login.modules').then(m => m.LoginModule)
      },
      {
        path: 'regist',
        loadChildren: () => import('../regist/regist.module').then(m => m.RegistModule)
      },
      {
        path: '',
        redirectTo: '/dashboard/login',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/dashboard/login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginDashboardRoutingModule { }
