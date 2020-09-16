import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        LoginRoutingModule
    ],
    declarations: [LoginComponent]
})
export class LoginModule { }
