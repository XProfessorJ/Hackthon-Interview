import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerInfoComponent } from '../customer-info/customer-info.component';
import { HomepageComponent } from '../homepage/homepage.component';
import { LoginDashboardComponent } from './login-dashboard.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: LoginDashboardComponent,
  },
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginDashboardRoutingModule { }
