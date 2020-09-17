import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
  {
    path: 'login-dashboard',
    loadChildren: () => import('./login-dashboard/login-dashboard.module').then(m => m.LoginDashboardModule)
  },
  {
    path: 'homepage',
    loadChildren: () => import('./homepage/homepage.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: '/login-dashboard',
    pathMatch: 'full'
  },
  {
    path: 'error',
    component: ErrorComponent
  },{
    path: 'question',
    loadChildren: () => import('./questions/questions.module').then(m => m.QuestionsPageModule)
  }
  ,{
    path: 'ay',
    loadChildren: () => import('./analysis/analysis.module').then(m => m.AnalysisModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
