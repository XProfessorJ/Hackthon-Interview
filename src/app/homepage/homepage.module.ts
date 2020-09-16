import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomePageRoutingModule } from './homepage-routing.module';
import { HomepageComponent } from './homepage.component';

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        HomePageRoutingModule
    ],
    declarations: [HomepageComponent]
})
export class HomePageModule { }
