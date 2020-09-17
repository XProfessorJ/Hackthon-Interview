import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerInfoComponent } from '../customer-info/customer-info.component';
import { HomepageComponent } from '../homepage/homepage.component';

const routes: Routes = [
    {
        path: '',
        component: HomepageComponent,
        children: [
            {
                path: 'customerInfo',
                loadChildren: () => import('../customer-info/customer-info.module').then(m => m.CustomerInfoModule)
            },
            {
                path: 'interview',
                loadChildren: () => import('../interview-dashboard/interview-dashboard.module').then(m => m.InterviewDashboardModule)
            },
            {
                path: 'exam',
                loadChildren: () => import('../questions/questions.module').then(m => m.QuestionsPageModule)
            },
            {
                path: 'exam/:token',
                loadChildren: () => import('../instruction/instruction.module').then(m => m.InstructionModule)
            },
            {
                path: '',
                redirectTo: '/homepage/interview/review',
                pathMatch: 'full'
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomePageRoutingModule { }
