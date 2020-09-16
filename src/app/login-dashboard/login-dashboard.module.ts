import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginDashboardRoutingModule } from './login-dashboard-routing.module';
import { LoginDashboardComponent } from './login-dashboard.component';

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        LoginDashboardRoutingModule
    ],
    declarations: [LoginDashboardComponent]
})
export class LoginDashboardModule { }
