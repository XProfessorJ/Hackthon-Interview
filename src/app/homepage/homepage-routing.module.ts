import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerInfoComponent } from '../customer-info/customer-info.component';
import { HomepageComponent } from '../homepage/homepage.component';

const routes: Routes = [
    {
        path: 'homepage',
        component: HomepageComponent,
        children: [
            {
                path: 'instruction',
                loadChildren: () => import('../instruction/instruction.module').then(m => m.InstructionModule)
            },
            {
                path: 'customerInfo',
                loadChildren: () => import('../customer-info/customer-info.module').then(m => m.CustomerInfoModule)
            },
            {
                path: '',
                redirectTo: '/homepage/instruction',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/homepage',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomePageRoutingModule { }
