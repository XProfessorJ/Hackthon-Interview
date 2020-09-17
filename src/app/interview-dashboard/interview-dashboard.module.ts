import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InterviewDashboardComponent } from './interview-dashboard.component';
import { InterviewDashboardRoutingModule } from './interview-dashboard-routing.module';

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        InterviewDashboardRoutingModule
    ],
    declarations: [InterviewDashboardComponent]
})
export class InterviewDashboardModule { }
