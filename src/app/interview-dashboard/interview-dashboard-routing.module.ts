import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InterviewDashboardComponent } from './interview-dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: InterviewDashboardComponent,
    children: [
      {
        path: 'review',
        loadChildren: () => import('../review/review.module').then(m => m.ReviewModule)
      },
      {
        path: 'upload',
        loadChildren: () => import('../upload/upload.module').then(m => m.UploadModule)
      },
      {
        path: 'analysis',
        loadChildren: () => import('../analysis/analysis.module').then(m => m.AnalysisModule)
      },
      {
        path: 'link-generation',
        loadChildren: () => import('../link-generation/link-generation.module').then(m => m.LinkGenerationModule)
      },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InterviewDashboardRoutingModule { }
