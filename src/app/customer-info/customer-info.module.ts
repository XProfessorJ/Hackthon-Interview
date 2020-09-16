import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CustomerInfoRoutingModule } from './customer-info-routing.module';
import { CustomerInfoComponent } from './customer-info.component';

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        CustomerInfoRoutingModule
    ],
    declarations: [CustomerInfoComponent]
})
export class CustomerInfoModule { }
