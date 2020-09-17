import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReviewRoutingModule } from './review-routing.module';
import { ReviewComponent } from './review.component';

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        ReviewRoutingModule
    ],
    declarations: [ReviewComponent]
})
export class ReviewModule { }
