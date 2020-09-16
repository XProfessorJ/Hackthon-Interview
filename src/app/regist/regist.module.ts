import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RegistRoutingModule } from './regist-routing.module';
import { RegistComponent } from './regist.component';

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        RegistRoutingModule
    ],
    declarations: [RegistComponent]
})
export class RegistModule { }
