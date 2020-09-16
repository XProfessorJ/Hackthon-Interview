import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./login-dashboard/login-dashboard.module').then(m => m.LoginDashboardModule)
  },
  {
    path: '',
    loadChildren: () => import('./homepage/homepage.module').then(m => m.HomePageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
